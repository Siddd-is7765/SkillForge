import Quiz from '../models/Quiz.js';
import Score from '../models/Score.js';

export const getQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
  res.json(quiz);
};

export const submitQuiz = async (req, res) => {
  const { answers } = req.body;
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

  const score = quiz.questions.reduce((sum, question, index) => sum + (answers[index] === question.correctAnswer ? 1 : 0), 0);
  await Score.create({ userId: req.user.id, quizId: quiz._id, score });
  res.json({ score, total: quiz.questions.length });
};

export const leaderboard = async (req, res) => {
  const rows = await Score.aggregate([
    { $group: { _id: '$userId', totalScore: { $sum: '$score' } } },
    { $sort: { totalScore: -1 } },
    { $limit: 20 },
  ]);
  res.json(rows);
};
