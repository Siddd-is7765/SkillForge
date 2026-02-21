import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const links = [
  ['/', 'Home'],
  ['/courses', 'Courses'],
  ['/blog', 'Blog'],
  ['/forum', 'Forum'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export default function Navbar() {
  const { user, logout, login } = useAuth();
  const { darkMode, setDarkMode } = useTheme();

  const quickLogin = () => {
    login({ name: 'Demo User', role: 'admin' });
    localStorage.setItem('skillforge_token', 'demo-token');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur border-b dark:border-slate-700">
      <div className="max-w-6xl mx-auto p-4 flex gap-4 justify-between items-center">
        <Link className="font-bold text-xl text-indigo-600" to="/">SkillForge</Link>
        <div className="flex flex-wrap gap-3 items-center text-sm">
          {links.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin">Admin</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700">{darkMode ? 'Light' : 'Dark'}</button>
          {user ? <button onClick={logout}>Logout</button> : <button onClick={quickLogin}>Demo Login</button>}
        </div>
      </div>
    </nav>
  );
}
