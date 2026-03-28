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
    <div className="max-w-4xl mx-auto p-6 md:p-16 bg-white dark:bg-transparent">
      {/* Report Header: Action link */}
      <div className="mb-16 flex justify-between items-center">
        <Link href="/feed" className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] hover:text-secondary flex items-center gap-2">
          ← Repository Index
        </Link>
        <span className="text-[10px] font-bold text-muted uppercase tracking-[0.3em] opacity-30 italic">
          Doc: RCA-{Math.random().toString(36).substring(7).toUpperCase()}
        </span>
      </div>

      {/* 1. The Claim: Large, bold, top focus */}
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-[1.1] tracking-tighter mb-16 text-center lg:text-left">
        "{claim}"
      </h1>

      {/* 2. Diagnostic Block: Root Issue */}
      <div className="mb-20 bg-primary text-white p-10 rounded-[12px] border-l-[12px] border-highlight flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-50">Core Diagnostic</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
          Root Issue: <span className="text-highlight italic underline decoration-secondary decoration-4 underline-offset-8 decoration-wavy">{root_issue}</span>
        </h2>
      </div>

      {/* 3. The Analysis: Clean readable paragraphs */}
      <section className="mb-24 space-y-10">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-[10px] font-bold text-muted uppercase tracking-[0.4em] whitespace-nowrap">Explanatory Notes</span>
          <div className="h-px bg-gray-100 dark:bg-gray-800 w-full"></div>
        </div>
        <div className="prose prose-xl dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-[1.8] font-medium space-y-8">
          <p className="whitespace-pre-wrap">{analysis}</p>
        </div>
      </section>

      {/* 4. Biblical Response: Gold-accent highlight section */}
      <section className="p-10 md:p-14 bg-white dark:bg-gray-900 border-[1px] border-highlight relative mb-24 rounded-[12px] shadow-[12px_12px_0px_0px_rgba(242,201,76,0.1)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-6 py-2 border border-highlight">
          <span className="text-[10px] font-bold text-highlight uppercase tracking-[0.5em]">Biblical Foundation</span>
        </div>
        <p className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100 italic leading-snug text-center">
          {biblical_response}
        </p>
      </section>

      {/* 5. Citation & Action Bar: Bottom focus */}
      <section className="pt-16 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold text-muted uppercase tracking-[0.3em]">Citation & Reference</h4>
          <div className="flex flex-col gap-2">
            <span className="pill-tag self-start">{tag}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase">{source_type} Original: </span>
              <a href={source_url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary dark:text-cyan-400 font-bold hover:underline tracking-tight">
                {source_url} ↗
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ShareButton />
          <button className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary hover:text-secondary hover:border-secondary transition-colors">
            Copy Analysis Text
          </button>
        </div>
      </section>
    </div>
  );
};

export default Detail;
