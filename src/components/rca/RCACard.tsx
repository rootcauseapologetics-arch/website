'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RCAEntry } from '@/types/rca';
import { RCAShareModal } from './RCAShareModal';

interface RCACardProps {
  entry: RCAEntry;
}

export const RCACard: React.FC<RCACardProps> = ({ entry }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const getTopicPillColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'hinduism':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20';
      case 'atheism':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';
      case 'cultural':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20';
      case 'secularism':
      default:
        return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20';
    }
  };

  return (
    <>
      <div className="group relative bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 hover:border-primary/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between h-full">
        {/* Card Header: Tag & Source */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getTopicPillColor(entry.tag)}`}>
              {entry.topic || entry.tag}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                {entry.source_type}
              </span>
              <button
                onClick={() => setIsShareOpen(true)}
                className="p-1 rounded text-slate-400 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                title="Quick Share"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Claim: Main focus, bold, max 3 lines */}
          <Link href={`/rca/${entry.id}`} className="block">
            <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-3 group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors">
              "{entry.claim}"
            </h3>
          </Link>
        </div>

        {/* Card Footer: Root Cause Diagnostic & CTA */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex flex-col pr-2">
            <span className="text-[9px] font-bold text-muted dark:text-slate-400 uppercase tracking-wider">
              Root Cause
            </span>
            <span className="text-xs font-semibold text-primary dark:text-cyan-400 italic line-clamp-1">
              {entry.root_issue}
            </span>
          </div>

          <Link
            href={`/rca/${entry.id}`}
            className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-cyan-400 whitespace-nowrap flex items-center gap-1 group/link"
          >
            <span>→ View RCA</span>
          </Link>
        </div>
      </div>

      <RCAShareModal
        entry={entry}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </>
  );
};
