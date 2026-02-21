import Course from '../models/Course.js';
import Score from '../models/Score.js';

export const recommendForUser = async (user) => {
  const scores = await Score.find({ userId: user._id });
  const strongPerformer = scores.some((item) => item.score >= 80);

  const query = {
    ...(user.interests?.length ? { category: { $in: user.interests } } : {}),
  };

  const courses = await Course.find(query).limit(strongPerformer ? 5 : 3);
  return courses;
};
