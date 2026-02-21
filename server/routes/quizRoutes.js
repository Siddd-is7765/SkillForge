import { Router } from 'express';
import { getQuiz, leaderboard, submitQuiz } from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/leaderboard', leaderboard);
router.get('/:id', getQuiz);
router.post('/:id/submit', protect, submitQuiz);

export default router;
