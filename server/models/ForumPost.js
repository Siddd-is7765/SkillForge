import mongoose from 'mongoose';

const forumPostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('ForumPost', forumPostSchema);
