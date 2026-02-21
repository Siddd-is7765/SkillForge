import Course from '../models/Course.js';
import User from '../models/User.js';

export const markLessonWatched = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, { $addToSet: { watchedLessons: req.body.lessonId } }, { new: true });
  res.json(user.watchedLessons);
};

export const getProgress = async (req, res) => {
  const user = await User.findById(req.user.id).populate('watchedLessons');
  const course = await Course.findById(req.params.courseId).populate('lessons');
  if (!course) return res.status(404).json({ message: 'Course not found' });

  const watchedIds = new Set(user.watchedLessons.map((l) => l._id.toString()));
  const watchedCount = course.lessons.filter((l) => watchedIds.has(l._id.toString())).length;
  const percent = course.lessons.length ? Math.round((watchedCount / course.lessons.length) * 100) : 0;
  res.json({ watchedCount, totalLessons: course.lessons.length, percent });
};
