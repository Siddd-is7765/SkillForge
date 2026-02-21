import { Router } from 'express';
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from '../controllers/courseController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', protect, authorize('admin'), createCourse);
router.put('/:id', protect, authorize('admin'), updateCourse);
router.delete('/:id', protect, authorize('admin'), deleteCourse);

export default router;
