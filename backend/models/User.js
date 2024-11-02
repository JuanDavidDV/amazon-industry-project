const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  badges: [{
    type: String,
    enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND']
  }],
  approvedReviews: { type: Number, default: 0 },
  level: { type: String, default: 'BRONZE' }
});

module.exports = mongoose.model('User', userSchema); 