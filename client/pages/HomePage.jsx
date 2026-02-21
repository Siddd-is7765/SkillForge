import { Link } from 'react-router-dom';
import { featuredCourses } from '../utils/mockData';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="p-8 rounded-xl bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Forge skills with AI-powered learning</h1>
        <p className="mt-3">SkillForge helps you learn faster with personalized paths.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/courses" className="bg-white text-indigo-600 px-4 py-2 rounded">Explore Courses</Link>
          <Link to="/dashboard" className="border px-4 py-2 rounded">Open Dashboard</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {featuredCourses.map((course) => (
            <article key={course.id} className="p-4 border dark:border-slate-700 rounded">
              <h3 className="font-semibold">{course.title}</h3>
              <p>{course.description}</p>
              <Link className="text-indigo-600" to={`/courses/${course.id}`}>View Details</Link>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <blockquote className="p-4 rounded bg-slate-100 dark:bg-slate-800">“I doubled my learning speed.” — Sarah</blockquote>
          <blockquote className="p-4 rounded bg-slate-100 dark:bg-slate-800">“The quizzes and leaderboard keep me motivated.” — Alex</blockquote>
        </div>
      </section>
    </div>
  );
}
