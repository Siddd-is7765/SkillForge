import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  prompt: String,
  options: [String],
  correctAnswer: Number,
});

const quizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  title: String,
  questions: [questionSchema],
}, { timestamps: true });

export default mongoose.model('Quiz', quizSchema);
