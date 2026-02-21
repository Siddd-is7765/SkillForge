import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredCourses } from '../utils/mockData';

const PAGE_SIZE = 2;

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const categories = ['All', ...new Set(featuredCourses.map((course) => course.category))];
  const filtered = useMemo(() => featuredCourses.filter((course) => {
    const hitSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const hitCategory = category === 'All' || course.category === category;
    return hitSearch && hitCategory;
  }), [search, category]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <div className="flex gap-3 mb-4">
        <input className="border p-2 rounded" placeholder="Search courses" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="border p-2 rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {rows.map((course) => (
          <article key={course.id} className="p-4 border rounded dark:border-slate-700">
            <h2 className="font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <Link className="text-indigo-600" to={`/courses/${course.id}`}>Open</Link>
          </article>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
        <span>{page}/{pageCount}</span>
        <button disabled={page === pageCount} onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
