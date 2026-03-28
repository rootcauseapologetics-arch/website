import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';

interface DetailProps {
  id: string;
  source_type: string;
  source_url: string;
  tag: string;
  claim: string;
  root_issue: string;
  analysis: string;
  biblical_response: string;
}

const Detail = ({ claim, root_issue, analysis, biblical_response, tag, source_type }: DetailProps) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 my-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/feed" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
          ← Back to Feed
        </Link>
        <div className="flex gap-2">
          <span className="tag">{tag}</span>
          <span className="source uppercase tracking-wider">{source_type}</span>
        </div>
      </div>

      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          "{claim}"
        </h1>
      </section>

      <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-primary">
        <p className="text-xs font-bold text-primary dark:text-cyan-400 uppercase tracking-widest mb-1">Root Issue</p>
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{root_issue}</p>
      </div>

      <section className="mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Analysis</h2>
        <p className="whitespace-pre-wrap">{analysis}</p>
      </section>

      <section className="mb-10 p-6 rounded-xl border border-highlight/30" style={{ backgroundColor: 'rgba(242, 201, 76, 0.05)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-highlight)' }}>Biblical Response</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed italic border-l-2 border-highlight pl-4">
          {biblical_response}
        </p>
      </section>

      <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-4 items-center justify-between">
        <ShareButton />
        <div className="flex gap-4">
           {/* Future: Copy Link / Open Full placeholders */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
