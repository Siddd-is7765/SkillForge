import Course from '../models/Course.js';

export const getCourses = async (req, res) => {
  const { search = '', category } = req.query;
  const query = {
    title: { $regex: search, $options: 'i' },
    ...(category ? { category } : {}),
  };
  const courses = await Course.find(query).sort({ createdAt: -1 });
  res.json(courses);
};

export const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id).populate('lessons');
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};

export const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};

export const deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json({ message: 'Course deleted' });
};
