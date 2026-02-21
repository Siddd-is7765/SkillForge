import { Router } from 'express';
import { getProgress, markLessonWatched } from '../controllers/progressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.post('/watched', protect, markLessonWatched);
router.get('/:courseId', protect, getProgress);

export default router;
