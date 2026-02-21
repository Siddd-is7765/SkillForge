export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <ul className="list-disc pl-5">
        <li>Create / edit / delete courses</li>
        <li>Manage users and roles</li>
        <li>Upload video links</li>
        <li>Create quizzes</li>
      </ul>
    </div>
  );
}
