'use client';

import React, { useState, useEffect } from 'react';
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
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
      const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      setScroll(percent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-24 bg-white dark:bg-transparent transition-all duration-700">
      {/* 0. Reading Progress Bar */}
      <div className="progress-bar" style={{ width: `${scroll}%` }}></div>

      {/* Report Header: Action link */}
      <div className="mb-20 flex justify-between items-center opacity-40">
        <Link href="/feed" className="text-[10px] font-bold text-primary dark:text-cyan-400 uppercase tracking-[0.4em] hover:opacity-100 transition-opacity flex items-center gap-2">
          ← Repository Index
        </Link>
        <span className="text-[9px] font-bold text-muted uppercase tracking-[0.3em] italic">
          Doc: RCA-{Math.random().toString(36).substring(7).toUpperCase()}
        </span>
      </div>

      {/* 1. The Claim: Large, bold, top focus */}
      <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-gray-100 leading-[1.05] tracking-tighter mb-20 text-center lg:text-left transition-main">
        "{claim}"
      </h1>

      {/* 2. Diagnostic Block: Root Issue */}
      <div className="mb-24 bg-primary text-white p-12 rounded-[12px] border-l-[16px] border-highlight flex flex-col items-center md:items-start text-center md:text-left shadow-authority transition-main hover:scale-[1.01]">
        <span className="text-[10px] font-medium uppercase tracking-[0.5em] mb-6 opacity-40">Core Diagnostic</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          Root Issue: <span className="text-highlight italic underline decoration-secondary/30 decoration-4 underline-offset-8 decoration-wavy">{root_issue}</span>
        </h2>
      </div>

      {/* 3. The Analysis: Clean readable paragraphs */}
      <section className="mb-32 space-y-12 border-b border-gray-100 dark:border-white/5 pb-24">
        <div className="flex items-center gap-8 mb-16">
          <span className="text-[10px] font-medium text-muted uppercase tracking-[0.5em] whitespace-nowrap opacity-60">Analysis Data</span>
          <div className="h-px bg-gray-100 dark:bg-white/5 w-full"></div>
        </div>
        <div className="prose prose-base dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-[1.75] font-normal space-y-10">
          <p className="whitespace-pre-wrap">{analysis}</p>
        </div>
      </section>

      {/* 4. Biblical Response: Gold-accent highlight section */}
      <section className="p-12 md:p-20 bg-white dark:bg-gray-900 border border-highlight/20 relative mb-32 rounded-[12px] shadow-authority group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-8 py-3 border border-highlight shadow-sm">
          <span className="text-[10px] font-medium text-highlight uppercase tracking-[0.6em]">Biblical Foundation</span>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 italic leading-snug text-center group-hover:scale-[1.02] transition-transform duration-500">
          {biblical_response}
        </p>
      </section>

      {/* 5. Citation & Action Bar: Bottom focus */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 pt-12 border-t border-gray-100 dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity">
        <div className="space-y-8">
          <h4 className="text-[10px] font-medium text-muted uppercase tracking-[0.4em]">Reference Citation</h4>
          <div className="flex flex-col gap-4">
            <span className="pill-tag self-start">{tag}</span>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-medium text-muted uppercase tracking-widest opacity-40">{source_type} Source Mapping</span>
              <a href={source_url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary dark:text-cyan-400 font-bold tracking-tight hover:underline transition-main overflow-hidden text-ellipsis whitespace-nowrap max-w-md">
                {source_url} ↗
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <ShareButton />
          <button className="text-[10px] font-bold text-primary dark:text-cyan-400 uppercase tracking-[0.3em] border-b border-primary/10 dark:border-cyan-400/10 hover:border-primary dark:hover:border-cyan-400 transition-all duration-300 pb-1">
            Copy Report
          </button>
        </div>
      </section>
    </div>
  );
};

export default Detail;
