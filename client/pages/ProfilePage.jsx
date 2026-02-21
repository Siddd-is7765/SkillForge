export default function ProfilePage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p><strong>Name:</strong> Demo User</p>
      <p><strong>Email:</strong> demo@skillforge.dev</p>
      <button className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-700">Edit Profile</button>
      <h2 className="font-semibold">Progress Stats</h2>
      <p>Courses completed: 4 | Average quiz score: 88%</p>
    </div>
  );
}
