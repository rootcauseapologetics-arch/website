import { getRCAEntryById } from '@/lib/data';
import Detail from '@/components/Detail';
import { notFound } from 'next/navigation';

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default async function RCADetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const entry = getRCAEntryById(id);

  if (!entry) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-8">
      <Detail {...entry} />
    </div>
  );
}
