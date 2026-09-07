'use client';

import React, { useState, useMemo } from 'react';
import { getRCAEntries } from '@/lib/rca-data';
import { RCACard } from '@/components/rca/RCACard';
import { SubmitRCAModal } from '@/components/community/SubmitRCAModal';

export default function FeedPage() {
  const entries = getRCAEntries();
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'topic'>('latest');
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  const tags = [
    { id: 'all', label: 'All Domains' },
    { id: 'hinduism', label: 'Hinduism & Vedas' },
    { id: 'atheism', label: 'Atheism & Morality' },
    { id: 'cultural', label: 'Cultural Pluralism' },
    { id: 'secularism', label: 'Secular Thought' }
  ];

  const filteredEntries = useMemo(() => {
    let list = entries.filter(entry => {
      const matchesTag = selectedTag === 'all' || entry.tag === selectedTag;
      const matchesSearch = searchQuery === '' || 
        entry.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.root_issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.topic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });

    if (sortBy === 'topic') {
      list = [...list].sort((a, b) => a.topic.localeCompare(b.topic));
    } else {
      list = [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return list;
  }, [entries, selectedTag, searchQuery, sortBy]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-2">
            <span>RCA Case Study Index</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Full Apologetics Feed
          </h1>
          <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
            Showing {filteredEntries.length} verified truth analysis reports
          </p>
        </div>

        <button
          onClick={() => setIsSubmitOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-primary/90 flex items-center gap-2 self-start md:self-auto"
        >
          <span>💡</span>
          <span>Submit RCA</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search claims, topics, root causes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
            <span className="absolute left-3.5 top-3 text-slate-400 text-xs">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted dark:text-slate-400 whitespace-nowrap">Sort:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'latest' | 'topic')}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="latest">Latest First</option>
              <option value="topic">By Topic</option>
            </select>
          </div>
        </div>

        {/* Tag Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {tags.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedTag === t.id
                  ? 'bg-[#0B3C5D] dark:bg-cyan-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of RCA Cards */}
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
            No RCA entries found
          </h3>
          <p className="text-xs text-muted dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try resetting your search query or choosing another domain.
          </p>
          <button
            onClick={() => { setSelectedTag('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-primary dark:text-cyan-400"
          >
            Reset Filters
          </button>
        </div>
      )}

      <SubmitRCAModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
      />
    </div>
  );
}
