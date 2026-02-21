import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const data = {
    labels: ['AI Fundamentals', 'Node.js Mastery', 'React in Production'],
    datasets: [{ label: 'Progress %', data: [70, 40, 85], backgroundColor: '#4f46e5' }],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <section><h2 className="font-semibold">Enrolled Courses</h2><p>AI Fundamentals, Node.js Mastery</p></section>
      <section><h2 className="font-semibold">Progress Tracking</h2><div className="max-w-xl"><Bar data={data} /></div></section>
      <section><h2 className="font-semibold">Leaderboard Position</h2><p>#12 this week</p></section>
      <section><h2 className="font-semibold">Recent Activity</h2><ul className="list-disc pl-5"><li>Completed quiz: JavaScript Basics</li></ul></section>
    </div>
  );
}
