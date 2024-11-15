//This is a prototype project, modifying this file will enable app functionality 
import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: String, required: true },
  verificationCode: { type: String, required: true, unique: true },
  purchaseDate: { type: Date, default: Date.now },
  hasReviewed: { type: Boolean, default: false },
  productDetails: {
    name: String,
    category: String
  }
});

export default mongoose.model('Purchase', purchaseSchema);
