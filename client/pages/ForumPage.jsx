import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_ROOT || 'http://localhost:5000', { autoConnect: false });

export default function ForumPage() {
  const [post, setPost] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();
    socket.on('forum:new', (payload) => setMessages((prev) => [...prev, payload]));
    return () => {
      socket.off('forum:new');
      socket.disconnect();
    };
  }, []);

  const createPost = () => {
    if (!post.trim()) return;
    const payload = { id: Date.now(), text: post.trim(), comments: [] };
    socket.emit('forum:create', payload);
    setPost('');
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Community Forum</h1>
      <div className="flex gap-2"><input className="border rounded p-2 flex-1" value={post} onChange={(e) => setPost(e.target.value)} placeholder="Create a post" /><button onClick={createPost}>Post</button></div>
      {messages.map((msg) => <article key={msg.id} className="p-3 border rounded dark:border-slate-700"><p>{msg.text}</p><p className="text-sm text-slate-500">Real-time update</p></article>)}
    </div>
  );
}
