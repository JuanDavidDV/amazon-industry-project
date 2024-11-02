const express = require('express');
const router = express.Router();
const db = require('../utils/db');

// Submit a review
router.post('/', async (req, res) => {
  try {
    const { userId, productId, verificationCode, content } = req.body;

    // Verify purchase
    const purchase = await db.findOne('purchases', { 
      userId, 
      productId, 
      verificationCode,
      hasReviewed: false 
    });

    if (!purchase) {
      return res.status(400).json({ message: 'Invalid verification code or already reviewed' });
    }

    // Create review
    const review = await db.create('reviews', {
      userId,
      productId,
      verificationCode,
      content,
      status: 'PENDING',
      peerReviews: []
    });

    // Update purchase
    await db.update('purchases', purchase.id, { hasReviewed: true });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit peer review
router.post('/:reviewId/peer-review', async (req, res) => {
  try {
    const { reviewerId, approved } = req.body;
    const review = await db.findById('reviews', req.params.reviewId);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Prevent self-review
    if (review.userId === reviewerId) {
      return res.status(400).json({ message: 'Cannot review your own review' });
    }

    // Verify reviewer bought the same product
    const reviewerPurchase = await db.findOne('purchases', {
      userId: reviewerId,
      productId: review.productId
    });

    if (!reviewerPurchase) {
      return res.status(400).json({ message: 'Only buyers of this product can peer review' });
    }

    // Add peer review
    review.peerReviews.push({ reviewerId, approved });

    // Check for approval status
    if (review.peerReviews.filter(pr => pr.approved).length >= 2) {
      review.status = 'APPROVED';
      
      // Update reviewer achievements
      const reviewer = await db.findById('users', review.userId);
      const updatedReviewer = {
        ...reviewer,
        approvedReviews: (reviewer.approvedReviews || 0) + 1
      };

      // Update achievement level
      if (updatedReviewer.approvedReviews >= 50) {
        updatedReviewer.level = 'DIAMOND';
        await db.create('badges', {
          name: 'TRUSTED_VOICE',
          userId: review.userId
        });
      } else if (updatedReviewer.approvedReviews >= 30) {
        updatedReviewer.level = 'PLATINUM';
      }

      await db.update('users', reviewer.id, updatedReviewer);

      // Award badge to peer reviewer
      await db.create('badges', {
        name: 'HELPFUL_PEER_REVIEWER',
        userId: reviewerId
      });
    }

    await db.update('reviews', review.id, review);
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 