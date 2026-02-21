import ForumPost from '../models/ForumPost.js';
import Comment from '../models/Comment.js';

export const createPost = async (req, res) => {
  const post = await ForumPost.create({ content: req.body.content, userId: req.user.id });
  req.io.emit('forum:new', post);
  res.status(201).json(post);
};

export const addComment = async (req, res) => {
  const comment = await Comment.create({
    postId: req.params.postId,
    content: req.body.content,
    userId: req.user.id,
    parentCommentId: req.body.parentCommentId || null,
  });
  req.io.emit('forum:comment', comment);
  res.status(201).json(comment);
};

export const getForumFeed = async (req, res) => {
  const posts = await ForumPost.find().sort({ createdAt: -1 });
  const comments = await Comment.find({}).sort({ createdAt: 1 });
  res.json({ posts, comments });
};
