'use client';

import React, { useState, useMemo } from 'react';
import { getChurchProfiles } from '@/lib/church-data';
import { ChurchCard } from '@/components/churches/ChurchCard';
import { ChurchGateBanner } from '@/components/churches/ChurchGateBanner';

export default function ChurchesPage() {
  const churches = getChurchProfiles();
  const [isVerifiedMember, setIsVerifiedMember] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedDenom, setSelectedDenom] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'Karnataka', label: 'Karnataka' },
    { id: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { id: 'Jharkhand', label: 'Jharkhand' },
    { id: 'Odisha', label: 'Odisha' },
    { id: 'Maharashtra', label: 'Maharashtra' }
  ];

  const denominations = [
    { id: 'all', label: 'All Denominations' },
    { id: 'Reformed / Presbyterian', label: 'Reformed' },
    { id: 'Evangelical', label: 'Evangelical' },
    { id: 'Pentecostal', label: 'Pentecostal' },
    { id: 'Baptist', label: 'Baptist' },
    { id: 'Independent / Non-Denominational', label: 'Independent' }
  ];

  const sizes = [
    { id: 'all', label: 'All Sizes' },
    { id: '< 50', label: '< 50' },
    { id: '50 - 200', label: '50 - 200' },
    { id: '200 - 1000', label: '200 - 1000' }
  ];

  const filteredChurches = useMemo(() => {
    return churches.filter(church => {
      const matchesRegion = selectedRegion === 'all' || church.region_state === selectedRegion;
      const matchesDenom = selectedDenom === 'all' || church.denomination === selectedDenom;
      const matchesSize = selectedSize === 'all' || church.size_range === selectedSize;
      const matchesSearch = searchQuery === '' ||
        church.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        church.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (church.pastor_name && church.pastor_name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesRegion && matchesDenom && matchesSize && matchesSearch;
    });
  }, [churches, selectedRegion, selectedDenom, selectedSize, searchQuery]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-3">
          <span>🛡️ Verified Congregation Network</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
          Church Zone Directory
        </h1>
        <p className="text-xs sm:text-sm text-muted dark:text-slate-300 max-w-2xl leading-relaxed">
          A secure, verified network of Christian congregations across Indian states for mutual prayer, safety protocols, and doctrinal fellowship.
        </p>
      </div>

      {/* Gated Security Banner */}
      <ChurchGateBanner
        isVerified={isVerifiedMember}
        onToggleSimulate={() => setIsVerifiedMember(!isVerifiedMember)}
      />

      {/* Filters & Search */}
      <div className="space-y-4 mb-8">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search church by name, city, pastor..."
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

        {/* Region Chips */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted dark:text-slate-400 block mb-1.5">
            Region / State:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {regions.map(r => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedRegion === r.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Denomination Chips */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted dark:text-slate-400 block mb-1.5">
            Denomination:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {denominations.map(d => (
              <button
                key={d.id}
                onClick={() => setSelectedDenom(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedDenom === d.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Size Chips */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted dark:text-slate-400 block mb-1.5">
            Congregation Size:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {sizes.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSize(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedSize === s.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Church Directory Grid */}
      {filteredChurches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChurches.map(church => (
            <ChurchCard 
              key={church.id} 
              church={church} 
              isVerifiedMember={isVerifiedMember} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <span className="text-3xl mb-3 block">⛪</span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No churches found matching your filters
          </h3>
          <p className="text-xs text-muted dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try broadening your denomination or region criteria.
          </p>
          <button
            onClick={() => { setSelectedRegion('all'); setSelectedDenom('all'); setSelectedSize('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-primary dark:text-cyan-400"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
