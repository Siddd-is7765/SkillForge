import { useParams } from 'react-router-dom';
import { featuredCourses } from '../utils/mockData';

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = featuredCourses.find((item) => item.id === id) || featuredCourses[0];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <iframe className="w-full max-w-xl aspect-video rounded" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Course Intro" allowFullScreen></iframe>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded">Enroll</button>
      <section>
        <h2 className="font-semibold">Reviews</h2>
        <ul className="list-disc pl-5"><li>Very practical and clear explanations.</li></ul>
      </section>
    </div>
  );
}
