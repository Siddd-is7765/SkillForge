import { useState } from 'react';

const questions = [
  { id: 1, text: 'What does MERN stand for?', options: ['Mongo, Express, React, Node', 'MySQL, Express, React, Node'], answer: 0 },
  { id: 2, text: 'JWT is used for?', options: ['Styling', 'Authentication'], answer: 1 },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const score = questions.reduce((sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0), 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-4 p-4 border rounded dark:border-slate-700">
          <p className="font-semibold">{q.text}</p>
          {q.options.map((opt, idx) => (
            <label key={opt} className="block"><input type="radio" name={q.id} onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: idx }))} /> {opt}</label>
          ))}
        </div>
      ))}
      <p className="font-semibold">Score: {score}/{questions.length}</p>
      <p>Result: {score === questions.length ? 'Excellent!' : 'Keep practicing.'}</p>
    </div>
  );
}
