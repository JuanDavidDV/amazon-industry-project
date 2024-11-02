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