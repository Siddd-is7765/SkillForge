import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
}, { timestamps: true });

export default mongoose.model('BlogPost', blogPostSchema);
