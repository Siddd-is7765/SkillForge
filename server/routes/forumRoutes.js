import { Router } from 'express';
import { addComment, createPost, getForumFeed } from '../controllers/forumController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/', getForumFeed);
router.post('/posts', protect, createPost);
router.post('/posts/:postId/comments', protect, addComment);

export default router;
