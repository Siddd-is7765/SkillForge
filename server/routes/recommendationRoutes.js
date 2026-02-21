import { Router } from 'express';
import { recommendCourses } from '../controllers/recommendationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/', protect, recommendCourses);

export default router;
