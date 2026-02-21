import { faqItems } from '../utils/mockData';

export default function FAQPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      <div className="space-y-3">{faqItems.map((f) => <details key={f.q} className="border rounded p-3 dark:border-slate-700"><summary>{f.q}</summary><p className="mt-2">{f.a}</p></details>)}</div>
    </div>
  );
}
