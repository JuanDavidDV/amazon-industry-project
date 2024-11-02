const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: String, required: true },
  verificationCode: { type: String, required: true },
  content: { type: String, required: true },
  status: {
    type: String,
    enum: ['PENDING', 'APPROVED', 'REJECTED'],
    default: 'PENDING'
  },
  peerReviews: [{
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approved: Boolean
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema); 