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

const Detail = ({ claim, root_issue, analysis, biblical_response, tag, source_type, source_url }: DetailProps) => {
  return (
    <div className="max-w-[1440px] mx-auto p-6 md:p-12">
      <div className="mb-12">
        <Link href="/feed" className="text-xs font-bold text-primary uppercase tracking-[0.2em] hover:underline flex items-center gap-2">
          ← Return to Archive
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-[1.2] tracking-tight">
              "{claim}"
            </h1>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
              <h2 className="text-xs font-bold text-muted uppercase tracking-[0.3em] whitespace-nowrap">Technical Analysis</h2>
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p className="whitespace-pre-wrap">{analysis}</p>
            </div>
          </section>

          <section className="p-8 md:p-12 bg-white dark:bg-gray-900 border-[1px] border-highlight shadow-[8px_8px_0px_0px_rgba(242,201,76,1)] dark:shadow-[8px_8px_0px_0px_rgba(242,201,76,0.5)]">
            <h2 className="text-xs font-extrabold mb-6 uppercase tracking-[0.4em]" style={{ color: 'var(--color-highlight)' }}>
              Biblical Foundation
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 italic leading-relaxed">
              {biblical_response}
            </p>
          </section>
        </div>

        {/* Sidebar Metadata */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="p-8 bg-primary text-white rounded-[12px]">
            <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2">Primary Diagnosis</p>
            <h3 className="text-2xl font-bold leading-tight">{root_issue}</h3>
          </div>

          <div className="space-y-8 border-l border-gray-100 dark:border-gray-800 pl-8">
            <div>
              <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Domain</p>
              <span className="pill-tag">{tag}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Original Source</p>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">{source_type}</span>
                <a href={source_url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary dark:text-cyan-400 hover:underline break-all uppercase">
                  View Source Connection ↗
                </a>
              </div>
            </div>
            <div className="pt-8">
              <ShareButton />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Detail;
