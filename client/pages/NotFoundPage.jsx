import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-indigo-600">Go back home</Link>
    </div>
  );
}
