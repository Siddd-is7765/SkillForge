export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form className="max-w-lg space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <textarea className="w-full border p-2 rounded" rows="4" placeholder="Message"></textarea>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded" type="button">Send</button>
      </form>
    </div>
  );
}
