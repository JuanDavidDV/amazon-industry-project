const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    enum: [
      'VERIFIED_REVIEWER',
      'HELPFUL_PEER_REVIEWER',
      'EXPERT_REVIEWER',
      'CATEGORY_SPECIALIST',
      'TRUSTED_VOICE'
    ]
  },
  description: String,
  criteria: {
    type: String,
    enum: [
      'APPROVED_REVIEW',
      'PEER_REVIEW',
      'CATEGORY_MASTERY',
      'CONSECUTIVE_APPROVALS'
    ]
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dateAwarded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Badge', badgeSchema); 