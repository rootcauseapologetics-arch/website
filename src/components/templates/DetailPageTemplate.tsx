'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';
import MobileBottomNav from '@/components/navigation/MobileBottomNav';
import Footer from '@/components/navigation/Footer';

export interface TocItem {
  id: string;
  label: string;
}

export interface DetailAction {
  label: string;
  icon?: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface RelatedItem {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

interface DetailPageTemplateProps {
  breadcrumbs: { label: string; href?: string }[];
  badge: {
    text: string;
    type?: 'default' | 'high' | 'medium' | 'low';
  };
  title: string;
  leadSummary: string;
  authorOrMeta?: {
    name?: string;
    avatar?: string;
    date?: string;
    location?: string;
    status?: string;
  };
  tags?: string[];
  image: string;
  actions?: DetailAction[];
  tocItems?: TocItem[];
  relatedItem?: RelatedItem;
  children: React.ReactNode;
}

export default function DetailPageTemplate({
  breadcrumbs,
  badge,
  title,
  leadSummary,
  authorOrMeta,
  tags = [],
  image,
  actions = [],
  tocItems = [],
  relatedItem,
  children,
}: DetailPageTemplateProps) {
  const [activeToc, setActiveToc] = useState<string>(tocItems[0]?.id || '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const getBadgeClass = (type?: string) => {
    switch (type) {
      case 'high':
        return 'bg-[#E74C3C]/20 text-[#E74C3C] border-[#E74C3C]/40';
      case 'medium':
        return 'bg-[#F39C12]/20 text-[#F39C12] border-[#F39C12]/40';
      case 'low':
        return 'bg-[#2ECC71]/20 text-[#2ECC71] border-[#2ECC71]/40';
      default:
        return 'bg-[#00B4FF]/15 text-[#00B4FF] border-[#00B4FF]/30';
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#071E2D] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-20 md:pb-16">
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs text-[#88CCD9]/70 pt-2">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <span className="text-[#143B5C]">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#00B4FF] transition-colors truncate max-w-[140px] sm:max-w-none">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Hero Header Banner */}
        <div className="bg-[#082A44] border border-[#143B5C] rounded-2xl overflow-hidden p-6 sm:p-8 relative shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Image Thumbnail */}
            <div className="md:col-span-4 h-48 sm:h-56 rounded-xl overflow-hidden border border-[#143B5C] bg-[#071E2D] relative shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082A44]/80 via-transparent to-transparent" />
            </div>

            {/* Center Content */}
            <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-md uppercase tracking-wider border ${getBadgeClass(badge.type)}`}>
                    {badge.text}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSaved(!saved)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
                        saved
                          ? 'bg-[#00B4FF]/20 text-[#00B4FF] border-[#00B4FF]'
                          : 'bg-[#0A243A] hover:bg-[#0E304C] text-[#88CCD9] hover:text-white border-[#143B5C]'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span>{saved ? 'Saved' : 'Save'}</span>
                    </button>

                    <button
                      onClick={handleShare}
                      className="px-3 py-1.5 bg-[#0A243A] hover:bg-[#0E304C] text-[#88CCD9] hover:text-white text-xs font-semibold rounded-lg border border-[#143B5C] transition-all flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>{copied ? 'Copied!' : 'Share'}</span>
                    </button>

                    {actions.map((act) =>
                      act.href ? (
                        <a
                          key={act.label}
                          href={act.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                            act.primary
                              ? 'bg-[#00B4FF] text-[#071E2D] hover:bg-[#33C3FF] shadow-[0_0_12px_rgba(0,180,255,0.3)]'
                              : 'bg-[#0A243A] text-[#88CCD9] hover:text-white border border-[#143B5C]'
                          }`}
                        >
                          {act.icon}
                          <span>{act.label}</span>
                        </a>
                      ) : (
                        <button
                          key={act.label}
                          onClick={act.onClick}
                          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                            act.primary
                              ? 'bg-[#00B4FF] text-[#071E2D] hover:bg-[#33C3FF] shadow-[0_0_12px_rgba(0,180,255,0.3)]'
                              : 'bg-[#0A243A] text-[#88CCD9] hover:text-white border border-[#143B5C]'
                          }`}
                        >
                          {act.icon}
                          <span>{act.label}</span>
                        </button>
                      )
                    )}
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {title}
                </h1>

                <p className="text-xs sm:text-sm text-[#88CCD9] leading-relaxed">
                  {leadSummary}
                </p>
              </div>

              {/* Meta & Tags */}
              <div className="pt-3 border-t border-[#143B5C]/60 flex flex-wrap items-center justify-between gap-3 text-xs text-[#88CCD9]">
                {authorOrMeta && (
                  <div className="flex items-center gap-2">
                    {authorOrMeta.avatar && (
                      <img
                        src={authorOrMeta.avatar}
                        alt={authorOrMeta.name || ''}
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-[#00B4FF]/40"
                      />
                    )}
                    <span className="font-semibold text-white">
                      {authorOrMeta.name || authorOrMeta.location}
                    </span>
                    {authorOrMeta.date && (
                      <span className="text-[#88CCD9]/60">• {authorOrMeta.date}</span>
                    )}
                    {authorOrMeta.status && (
                      <span className="text-[#00B4FF] font-medium">• {authorOrMeta.status}</span>
                    )}
                  </div>
                )}

                {tags.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-[#0A243A] text-[#88CCD9] px-2.5 py-0.5 rounded-full border border-[#143B5C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Jump Menu: On this page ▾ */}
        {tocItems.length > 0 && (
          <div className="lg:hidden bg-[#0A243A] border border-[#143B5C] rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00B4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span>On This Page</span>
              </div>
              <svg className={`w-4 h-4 text-[#88CCD9] transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileTocOpen && (
              <div className="p-3 border-t border-[#143B5C] grid grid-cols-2 gap-2 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileTocOpen(false)}
                    className="p-2 rounded-lg bg-[#071E2D] border border-[#143B5C] text-[#88CCD9] hover:text-[#00B4FF] hover:border-[#00B4FF] transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {children}
          </div>

          {/* Right Sticky Table of Contents & Related (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#143B5C] pb-2">
                  Table of Contents
                </h3>
                <nav className="space-y-1.5 text-xs">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveToc(item.id)}
                      className={`block px-3 py-2 rounded-lg transition-all ${
                        activeToc === item.id
                          ? 'bg-[#082A44] text-[#00B4FF] font-semibold border-l-2 border-[#00B4FF] shadow-sm'
                          : 'text-[#88CCD9] hover:text-white hover:bg-[#0E304C]'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Related Item Widget */}
            {relatedItem && (
              <div className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-5 space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Related RCA
                  </h4>
                  <Link href="/rca" className="text-[11px] text-[#00B4FF] hover:underline font-semibold">
                    View All &rarr;
                  </Link>
                </div>
                <Link
                  href={relatedItem.href}
                  className="flex gap-3 items-center p-2 rounded-lg hover:bg-[#0E304C] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 border border-[#143B5C]">
                    <img
                      src={relatedItem.image}
                      alt={relatedItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover:text-[#00B4FF] line-clamp-2 leading-snug">
                      {relatedItem.title}
                    </span>
                    <span className="text-[10px] text-[#88CCD9]/60 mt-1">
                      {relatedItem.date}
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
