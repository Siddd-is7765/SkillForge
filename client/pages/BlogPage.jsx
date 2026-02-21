import { Link } from 'react-router-dom';
import { blogs } from '../utils/mockData';

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-3">
        {blogs.map((blog) => (
          <article key={blog.id} className="p-4 border rounded dark:border-slate-700">
            <h2 className="font-semibold">{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <Link className="text-indigo-600" to={`/blog/${blog.id}`}>Read more</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
