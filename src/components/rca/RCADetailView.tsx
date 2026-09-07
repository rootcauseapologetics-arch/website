'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RCAEntry } from '@/types/rca';
import { FiveWhysAccordion } from '@/components/ui/FiveWhysAccordion';
import { RCAShareModal } from './RCAShareModal';
import { RCACard } from './RCACard';
import { useToast } from '@/components/ui/Toast';

interface RCADetailViewProps {
  entry: RCAEntry;
  relatedEntries: RCAEntry[];
}

export const RCADetailView: React.FC<RCADetailViewProps> = ({ entry, relatedEntries }) => {
  const [scroll, setScroll] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      const percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
      setScroll(percent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyAnalysis = async () => {
    try {
      const fullText = `RCA Investigation: ${entry.topic}\n\nClaim: "${entry.claim}"\n\nRoot Issue: ${entry.root_issue}\n\nResponse:\n${entry.response}\n\nBiblical Foundation:\n${entry.biblical_response}`;
      await navigator.clipboard.writeText(fullText);
      showToast('Complete investigation report copied to clipboard!');
    } catch {
      showToast('Failed to copy');
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      {/* 0. Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-400 z-[110] transition-all duration-100"
        style={{ width: `${scroll}%` }}
      />

      {/* Header & Breadcrumb */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <Link 
          href="/" 
          className="text-xs font-bold text-primary dark:text-cyan-400 uppercase tracking-widest hover:underline flex items-center gap-1.5"
        >
          ← Return to RCA Index
        </Link>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted dark:text-slate-400">
          <span>{entry.date}</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span>By {entry.author}</span>
        </div>
      </div>

      {/* 1. The Claim: Large, bold, top focus */}
      <div className="mb-8 sm:mb-10">
        <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 dark:bg-cyan-900/30 text-primary dark:text-cyan-400 mb-3 border border-primary/20 dark:border-cyan-500/20">
          Topic: {entry.topic}
        </div>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.25] tracking-tight break-words">
          "{entry.claim}"
        </h1>
      </div>

      {/* 2. Core Diagnostic Block: Root Issue */}
      <div className="mb-8 sm:mb-10 p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-primary to-slate-900 text-white shadow-xl border-l-[8px] sm:border-l-[10px] border-highlight overflow-hidden">
        <div className="flex items-center justify-between mb-2 gap-2">
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-300">
            ★ Core Presuppositional Diagnostic
          </span>
          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-highlight text-slate-950 flex-shrink-0">
            Root Cause
          </span>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white leading-snug break-words">
          {entry.root_issue}
        </h2>
      </div>

      {/* 3. The 5-Whys Diagnostic Breakdown (Interactive) */}
      <div className="mb-12">
        <FiveWhysAccordion steps={entry.root_cause_5whys} />
      </div>

      {/* 4. Structured Technical Analysis */}
      <section className="mb-14 space-y-6 border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted dark:text-slate-400">
            Logical & Worldview Analysis
          </h3>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>
        <div className="prose prose-slate dark:prose-invert max-w-none text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
          <p className="whitespace-pre-wrap">{entry.response}</p>
        </div>
      </section>

      {/* 5. Biblical Foundation: Gold Accent Climax */}
      <section className="mb-14 p-8 md:p-10 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border-2 border-highlight relative shadow-lg">
        <div className="absolute -top-3.5 left-6 px-4 py-1 rounded-full bg-highlight text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-sm">
          Biblical Foundation & Resolution
        </div>
        <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-amber-100 italic leading-relaxed pt-2">
          {entry.biblical_response}
        </p>
      </section>

      {/* 6. Action Bar & Share Options */}
      <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 mb-16">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span>↗</span>
            <span>Share Response</span>
          </button>

          <button
            onClick={handleCopyAnalysis}
            className="px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            📋 Copy Report
          </button>
        </div>

        {/* Source citation */}
        <div className="flex items-center gap-2 text-xs text-muted dark:text-slate-400">
          <span className="font-semibold uppercase text-[10px]">Source:</span>
          <a
            href={entry.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-cyan-400 font-bold hover:underline truncate max-w-[200px]"
          >
            {entry.source_type.toUpperCase()} Link ↗
          </a>
        </div>
      </div>

      {/* 7. References & Footnotes */}
      {entry.references.length > 0 && (
        <section className="mb-16 border-t border-slate-200 dark:border-slate-800 pt-8">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted dark:text-slate-400 mb-4">
            Further Scholarly & Apologetic References
          </h4>
          <ul className="space-y-2">
            {entry.references.map((ref, idx) => (
              <li key={idx} className="text-xs flex items-center gap-2">
                <span className="text-primary dark:text-cyan-400 font-bold">[{idx + 1}]</span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-cyan-400 hover:underline"
                >
                  {ref.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 8. Related Investigations */}
      {relatedEntries.length > 0 && (
        <section className="border-t border-slate-200 dark:border-slate-800 pt-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Related Case Studies
            </h3>
            <Link href="/" className="text-xs font-bold text-primary dark:text-cyan-400 hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedEntries.map(related => (
              <RCACard key={related.id} entry={related} />
            ))}
          </div>
        </section>
      )}

      <RCAShareModal
        entry={entry}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </article>
  );
};
