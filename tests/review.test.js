const api = require('../src/utils/api');

const testUser = {
  email: "test@example.com",
  username: "testuser",
  badges: [],
  approvedReviews: 0,
  level: "BRONZE"
};

const testPurchase = {
  productId: "123",
  verificationCode: "TEST123",
  hasReviewed: false,
  productDetails: {
    name: "Test Product",
    category: "Electronics"
  }
};

describe('Review System Tests', () => {
  let userId, reviewId;

  beforeAll(async () => {
    // Create test user
    const user = await api.createUser(testUser);
    userId = user.id;
    
    // Create test purchase
    await api.createPurchase({
      ...testPurchase,
      userId
    });
  });

  test('Submit Review', async () => {
    const review = await api.submitReview({
      userId,
      productId: testPurchase.productId,
      verificationCode: testPurchase.verificationCode,
      content: "Test review content"
    });
    
    reviewId = review.id;
    expect(review.status).toBe('PENDING');
  });

  test('Submit Peer Review', async () => {
    const peerReview = await api.submitPeerReview(reviewId, {
      reviewerId: "another-user-id",
      approved: true
    });
    
    expect(peerReview.peerReviews).toHaveLength(1);
  });
}); 