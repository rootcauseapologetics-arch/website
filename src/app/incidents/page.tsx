'use client';

import React, { useState, useMemo } from 'react';
import { getIncidentEntries, getIncidentStats } from '@/lib/incident-data';
import { IncidentCard } from '@/components/incidents/IncidentCard';
import { SubmitIncidentModal } from '@/components/community/SubmitIncidentModal';

export default function IncidentsPage() {
  const incidents = getIncidentEntries();
  const stats = getIncidentStats();

  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { id: 'Chhattisgarh', label: 'Chhattisgarh' },
    { id: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { id: 'Karnataka', label: 'Karnataka' },
    { id: 'Odisha', label: 'Odisha' },
    { id: 'Jharkhand', label: 'Jharkhand' }
  ];

  const topics = [
    { id: 'all', label: 'All Topics' },
    { id: 'Anti-Conversion Allegations', label: 'Anti-Conversion' },
    { id: 'Church Disruption', label: 'Church Disruption' },
    { id: 'Social Boycott', label: 'Social Boycott' },
    { id: 'Mob Violence', label: 'Mob Violence' }
  ];

  const filteredIncidents = useMemo(() => {
    return incidents.filter(inc => {
      const matchesRegion = selectedRegion === 'all' || inc.region_state === selectedRegion;
      const matchesTopic = selectedTopic === 'all' || inc.topic === selectedTopic;
      const matchesSearch = searchQuery === '' || 
        inc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.incident_detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.region_state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (inc.district && inc.district.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesRegion && matchesTopic && matchesSearch;
    });
  }, [incidents, selectedRegion, selectedTopic, searchQuery]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Top Banner: Alert Header */}
      <div className="mb-6 sm:mb-8 p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950/90 via-slate-900 to-slate-950 border border-red-500/30 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 overflow-hidden">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-black uppercase tracking-widest mb-2.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Field Intelligence Cell</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-2 break-words">
            Persecution Incidents & Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
            Documenting, verifying, and root-cause analyzing religious freedom violations across India, paired with strategic legal guidance and intercession networks.
          </p>
        </div>

        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 flex-shrink-0 active:scale-95 transition-all self-start md:self-auto"
        >
          <span>🚨</span>
          <span>Submit Incident</span>
        </button>
      </div>

      {/* Intelligence Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 sm:mb-8">
        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[9px] sm:text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-wider block mb-1">
            Verified Reports
          </span>
          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
            {stats.verifiedCount}
          </span>
        </div>
        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[9px] sm:text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-wider block mb-1">
            States Impacted
          </span>
          <span className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400 tabular-nums">
            {stats.statesCount}
          </span>
        </div>
        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[9px] sm:text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-wider block mb-1">
            Intercessors
          </span>
          <span className="text-xl sm:text-2xl font-black text-highlight tabular-nums">
            {stats.activePrayers.toLocaleString()}
          </span>
        </div>
        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[9px] sm:text-[10px] font-bold text-muted dark:text-slate-400 uppercase tracking-wider block mb-1">
            Legal Aid Cell
          </span>
          <span className="text-xl sm:text-2xl font-black text-green-600 dark:text-green-400 tabular-nums">
            Active
          </span>
        </div>
      </div>

      {/* Controls: Search & Filters */}
      <div className="space-y-4 mb-8">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search incident reports, states, districts, root causes..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
          />
          <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">🔍</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Region Filter Chips */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted dark:text-slate-400 block mb-2">
            Filter by Region / State:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {regions.map(r => {
              const active = selectedRegion === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Filter Chips */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted dark:text-slate-400 block mb-2">
            Filter by Topic Category:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {topics.map(t => {
              const active = selectedTopic === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Incident Cards Grid */}
      {filteredIncidents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIncidents.map(incident => (
            <IncidentCard key={incident.id} incident={incident} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <span className="text-3xl mb-3 block">🛡️</span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No incident reports found for this filter
          </h3>
          <p className="text-xs text-muted dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try adjusting your region or topic filters to view documented incidents.
          </p>
          <button
            onClick={() => { setSelectedRegion('all'); setSelectedTopic('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-red-600 dark:text-red-400"
          >
            Reset Filters
          </button>
        </div>
      )}

      <SubmitIncidentModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
