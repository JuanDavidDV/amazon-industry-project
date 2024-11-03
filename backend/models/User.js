import mongoose from 'mongoose';

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

export default mongoose.model('User', userSchema);
