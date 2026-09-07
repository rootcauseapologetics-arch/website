'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { getRCAEntries } from '@/lib/rca-data';
import { getIncidentStats } from '@/lib/incident-data';
import { RCACard } from '@/components/rca/RCACard';
import { SubmitRCAModal } from '@/components/community/SubmitRCAModal';

export default function Home() {
  const allEntries = getRCAEntries();
  const incidentStats = getIncidentStats();
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  const tags = [
    { id: 'all', label: 'All Domains' },
    { id: 'hinduism', label: 'Hinduism & Vedas' },
    { id: 'atheism', label: 'Atheism & Morality' },
    { id: 'cultural', label: 'Cultural Pluralism' },
    { id: 'secularism', label: 'Secular Thought' }
  ];

  const filteredEntries = useMemo(() => {
    return allEntries.filter(entry => {
      const matchesTag = selectedTag === 'all' || entry.tag === selectedTag;
      const matchesSearch = searchQuery === '' || 
        entry.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.root_issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.topic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [allEntries, selectedTag, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section: Deep Blue Authority */}
      <section className="bg-authority-gradient relative overflow-hidden py-16 md:py-28 px-4 sm:px-6 border-b border-primary/20">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-secondary dark:text-cyan-300 text-[10px] font-black uppercase tracking-[0.25em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Presuppositional Intelligence Engine</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
              Tracing the Truth to the <span className="text-cyan-200 italic font-normal underline decoration-highlight decoration-4 underline-offset-8">Root Cause</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-cyan-50/80 leading-relaxed mb-8 font-normal max-w-2xl">
              We investigate public claims, decompose worldview assumptions through 5-Whys root cause analysis, and provide grounded biblical responses for the Indian intellectual context.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/incidents"
                className="px-6 py-3 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all active:scale-95"
              >
                <span>🚨</span>
                <span>Persecution Alerts ({incidentStats.totalReports})</span>
              </Link>

              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                💡 Submit RCA Breakdown
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Platform Intelligence Bar (Live Metrics) */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-6 px-4 sm:px-6 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8 items-center">
            <div>
              <span className="text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-widest block">
                Total RCA Case Studies
              </span>
              <span className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                {allEntries.length}
              </span>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <div>
              <span className="text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-widest block">
                Verified Incidents Tracked
              </span>
              <span className="text-2xl font-black text-red-600 dark:text-red-400 tabular-nums">
                {incidentStats.totalReports}
              </span>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <div>
              <span className="text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-widest block">
                Intercessory Prayers Joined
              </span>
              <span className="text-2xl font-black text-highlight tabular-nums">
                {incidentStats.activePrayers.toLocaleString()}+
              </span>
            </div>
          </div>

          <div className="text-xs text-muted dark:text-slate-400 max-w-xs font-medium leading-relaxed">
            All analysis verified through 3-tier peer review & biblical cross-referencing.
          </div>
        </div>
      </section>

      {/* 3. Main Discovery Feed & Search */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Header Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                RCA Case Study Repository
              </h2>
              <p className="text-xs text-muted dark:text-slate-400 mt-1">
                Decomposing modern religious polemics into fundamental presuppositions
              </p>
            </div>

            {/* Instant Search Bar */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Search claims, topics, root causes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
              <span className="absolute left-3 top-3 text-slate-400 text-xs">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {tags.map(tag => {
              const active = selectedTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          {filteredEntries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntries.map(entry => (
                <RCACard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
              <span className="text-3xl mb-3 block">🔍</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                No matching RCA case studies found
              </h3>
              <p className="text-xs text-muted dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Try searching with different keywords or reset your category filter.
              </p>
              <button
                onClick={() => { setSelectedTag('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-primary dark:text-cyan-400"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* 4. Methodology Breakdown Callout */}
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary via-slate-900 to-[#041A28] text-white border-l-[12px] border-highlight shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary block mb-2">
                Our Investigative Engine
              </span>
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                How Root Cause Analysis Works
              </h3>
              <p className="text-sm text-cyan-50/80 leading-relaxed font-normal">
                Surface arguments are merely symptoms of underlying worldview commitments. By performing 5-Whys presuppositional testing, we demonstrate where autonomous human philosophy breaks down and why the Gospel alone offers coherent truth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/others"
                className="px-6 py-3.5 rounded-xl bg-highlight text-slate-950 text-xs font-black uppercase tracking-wider hover:bg-white text-center shadow-md transition-colors"
              >
                Explore Methodology
              </Link>
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Propose a Claim
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase">
              ROOT CAUSE APOLOGETICS
            </span>
            <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
              Tracing the Truth to the Foundation • contact@rootcauseapologetics.com
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-muted dark:text-slate-400">
            <Link href="/feed" className="hover:text-primary dark:hover:text-cyan-400">RCA Hub</Link>
            <Link href="/incidents" className="hover:text-primary dark:hover:text-cyan-400">Incidents</Link>
            <Link href="/churches" className="hover:text-primary dark:hover:text-cyan-400">Church Zone</Link>
            <Link href="/others" className="hover:text-primary dark:hover:text-cyan-400">Community</Link>
          </div>
        </div>
      </footer>

      <SubmitRCAModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
