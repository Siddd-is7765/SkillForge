import User from '../models/User.js';
import { recommendForUser } from '../services/recommendationService.js';

export const recommendCourses = async (req, res) => {
  const user = await User.findById(req.user.id);
  const courses = await recommendForUser(user);
  res.json(courses);
};
