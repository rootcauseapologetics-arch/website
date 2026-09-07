'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/navigation/Navbar';
import MobileBottomNav from '@/components/navigation/MobileBottomNav';
import UniversalCard, { CardData } from '@/components/templates/UniversalCard';
import FilterSidebar, { FilterGroup } from '@/components/templates/FilterSidebar';

interface CategoryPill {
  id: string;
  label: string;
}

interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

interface ListingPageTemplateProps {
  hero?: HeroConfig;
  breadcrumbs?: { label: string; href?: string }[];
  title: string;
  subtitle: string;
  items: CardData[];
  categoryPills: CategoryPill[];
  filterGroups?: FilterGroup[];
  showSidebar?: boolean;
}

export default function ListingPageTemplate({
  hero,
  breadcrumbs,
  title,
  subtitle,
  items,
  categoryPills,
  filterGroups = [],
  showSidebar = true,
}: ListingPageTemplateProps) {
  const [selectedPill, setSelectedPill] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleFilterChange = (groupId: string, optionId: string, checked: boolean, isRadio = false) => {
    setSelectedFilters((prev) => {
      if (isRadio) {
        return { ...prev, [groupId]: checked ? [optionId] : [] };
      }
      const current = prev[groupId] || [];
      if (checked) {
        return { ...prev, [groupId]: [...current, optionId] };
      } else {
        return { ...prev, [groupId]: current.filter((id) => id !== optionId) };
      }
    });
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    setSelectedPill('all');
    setSearchQuery('');
  };

  // Filter items based on search, category pill, and sidebar filters
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchClaim = item.subtitleOrClaim?.toLowerCase().includes(q);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchClaim && !matchTags) return false;
      }

      // Category pill filter
      if (selectedPill !== 'all') {
        const itemBadge = item.badgeText.toLowerCase();
        const pillMatch =
          itemBadge.includes(selectedPill.toLowerCase()) ||
          item.tags?.some((t) => t.toLowerCase().includes(selectedPill.toLowerCase()));
        if (!pillMatch) return false;
      }

      // Sidebar topic filter
      const topicFilters = selectedFilters['topic'] || [];
      if (topicFilters.length > 0) {
        const match = topicFilters.some((tf) =>
          item.badgeText.toLowerCase().includes(tf.toLowerCase())
        );
        if (!match) return false;
      }

      // Sidebar author/country filter
      const authorFilters = selectedFilters['author'] || selectedFilters['country'] || [];
      if (authorFilters.length > 0) {
        const authorName = item.authorOrMeta?.name || item.authorOrMeta?.location || '';
        const match = authorFilters.some((af) =>
          authorName.toLowerCase().includes(af.toLowerCase())
        );
        if (!match) return false;
      }

      // Sidebar severity filter
      const severityFilters = selectedFilters['severity'] || [];
      if (severityFilters.length > 0) {
        const match = severityFilters.some(
          (sf) => item.badgeType?.toLowerCase() === sf.toLowerCase()
        );
        if (!match) return false;
      }

      return true;
    });
  }, [items, searchQuery, selectedPill, selectedFilters]);

  return (
    <div className="min-h-screen bg-[#071E2D] text-white flex flex-col pb-20 md:pb-12">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Optional Hero Banner */}
        {hero ? (
          <div className="relative rounded-2xl bg-gradient-to-r from-[#082A44] via-[#0A2E4C] to-[#071E2D] border border-[#143B5C] p-6 sm:p-10 overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-at-c from-[#00B4FF]/15 via-transparent to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 text-[#00B4FF] text-xs font-bold uppercase tracking-wider">
                  <span>Presuppositional Intelligence</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {hero.title}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#00B4FF]">
                  {hero.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#88CCD9] max-w-2xl leading-relaxed">
                  {hero.description}
                </p>
              </div>

              {/* Glowing Shield & Book Graphic */}
              <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#00B4FF]/20 blur-2xl animate-pulse" />
                  <div className="w-36 h-36 rounded-2xl bg-[#0A243A] border-2 border-[#00B4FF] shadow-[0_0_35px_rgba(0,180,255,0.4)] flex flex-col items-center justify-center p-4 text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-4xl font-black text-white">
                      R<span className="text-[#00B4FF]">+</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#88CCD9] uppercase tracking-widest mt-1">
                      Apologetics
                    </span>
                    <div className="w-8 h-0.5 bg-[#00B4FF] my-2" />
                    <span className="text-[9px] text-[#88CCD9]/80 font-mono">5-Whys Root Cause</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Breadcrumbs Bar */
          breadcrumbs && (
            <div className="flex items-center gap-2 text-xs text-[#88CCD9]/70 pt-2">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  {idx > 0 && <span className="text-[#143B5C]">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-[#00B4FF] transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )
        )}

        {/* Header Title + Stats & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#143B5C] pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#88CCD9] mt-1">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#88CCD9] bg-[#0A243A] px-3 py-1.5 rounded-lg border border-[#143B5C]">
              Total Results: <strong className="text-white">{filteredItems.length}</strong>
            </span>
          </div>
        </div>

        {/* Category Pills & Controls Bar */}
        <div className="space-y-4">
          {/* Mobile Search */}
          <div className="sm:hidden relative w-full">
            <svg className="w-4 h-4 text-[#88CCD9] absolute left-3.5 top-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={`Search ${title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0A243A] border border-[#143B5C] rounded-lg text-xs text-white placeholder-[#88CCD9]/60 focus:outline-none focus:border-[#00B4FF]"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Pills (Horizontal Scroll) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categoryPills.map((pill) => {
                const active = selectedPill === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedPill(pill.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      active
                        ? 'bg-[#00B4FF] text-[#071E2D] shadow-[0_0_12px_rgba(0,180,255,0.3)]'
                        : 'bg-[#0A243A] text-[#88CCD9] hover:text-white hover:bg-[#0E304C] border border-[#143B5C]'
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>

            {/* Sort & Layout Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs text-[#88CCD9]">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#0A243A] border border-[#143B5C] text-white text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#00B4FF]"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center bg-[#0A243A] border border-[#143B5C] rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#082A44] text-[#00B4FF]' : 'text-[#88CCD9] hover:text-white'}`}
                  title="Grid View"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-[#082A44] text-[#00B4FF]' : 'text-[#88CCD9] hover:text-white'}`}
                  title="List View"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              {showSidebar && filterGroups.length > 0 && (
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden p-1.5 bg-[#0A243A] border border-[#143B5C] rounded-lg text-[#88CCD9] hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && showSidebar && filterGroups.length > 0 && (
            <div className="lg:hidden">
              <FilterSidebar
                groups={filterGroups}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </div>
          )}
        </div>

        {/* Main Content Layout (Sidebar + Card Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Filter Sidebar (Desktop) */}
          {showSidebar && filterGroups.length > 0 && (
            <div className="hidden lg:block lg:col-span-3">
              <FilterSidebar
                groups={filterGroups}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </div>
          )}

          {/* Right Cards Area */}
          <div className={showSidebar && filterGroups.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}>
            {filteredItems.length === 0 ? (
              <div className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-12 text-center space-y-3">
                <p className="text-base text-white font-semibold">No results match your criteria.</p>
                <p className="text-xs text-[#88CCD9]">Try clearing filters or search terms.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-[#00B4FF] text-[#071E2D] text-xs font-bold rounded-lg hover:bg-[#33C3FF]"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <UniversalCard key={item.id} data={item} layout="grid" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <UniversalCard key={item.id} data={item} layout="list" />
                ))}
              </div>
            )}

            {/* Pagination & Load More */}
            <div className="mt-10 pt-6 border-t border-[#143B5C] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#0A243A] border border-[#143B5C] text-xs text-[#88CCD9] hover:text-white disabled:opacity-40"
                >
                  &lt;
                </button>
                {[1, 2, 3, 4, 5].map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#00B4FF] text-[#071E2D]'
                        : 'bg-[#0A243A] border border-[#143B5C] text-[#88CCD9] hover:text-white'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                <span className="text-xs text-[#88CCD9] px-1">...</span>
                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1.5 rounded-lg bg-[#0A243A] border border-[#143B5C] text-xs text-[#88CCD9] hover:text-white"
                >
                  &gt;
                </button>
              </div>

              <button className="px-5 py-2 bg-[#082A44] hover:bg-[#00B4FF] text-[#00B4FF] hover:text-[#071E2D] text-xs font-bold rounded-lg border border-[#00B4FF]/40 hover:border-[#00B4FF] transition-all">
                Load More
              </button>
            </div>
          </div>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
