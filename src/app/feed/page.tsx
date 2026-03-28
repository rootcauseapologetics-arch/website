import { getRCAEntries } from '@/lib/data';
import Card from '@/components/Card';

export default function FeedPage() {
  const entries = getRCAEntries();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        RCA Feed
      </h1>
      <div className="grid-feed">
        {entries.map((entry) => (
          <Card key={entry.id} {...entry} />
        ))}
      </div>
    </div>
  );
}
