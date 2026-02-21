import { useParams } from 'react-router-dom';
import { blogs } from '../utils/mockData';

export default function BlogDetailsPage() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id) || blogs[0];
  return <article><h1 className="text-3xl font-bold">{blog.title}</h1><p className="mt-4">{blog.content}</p></article>;
}
