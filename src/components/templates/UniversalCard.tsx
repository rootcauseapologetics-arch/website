'use client';

import React from 'react';
import Link from 'next/link';

export interface CardData {
  id: string;
  href: string;
  badgeText: string;
  badgeType?: 'default' | 'high' | 'medium' | 'low';
  title: string;
  subtitleOrClaim?: string;
  authorOrMeta?: {
    name?: string;
    avatar?: string;
    date?: string;
    location?: string;
    status?: string;
  };
  tags?: string[];
  image: string;
  actionText?: string;
  layout?: 'grid' | 'list';
}

interface UniversalCardProps {
  data: CardData;
  layout?: 'grid' | 'list';
}

export default function UniversalCard({ data, layout = 'grid' }: UniversalCardProps) {
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

  if (layout === 'list') {
    return (
      <div className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-4 sm:p-5 hover:border-[#00B4FF]/60 hover:shadow-[0_4px_20px_rgba(0,180,255,0.1)] transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between group">
        <div className="flex gap-4 items-start sm:items-center flex-1">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-[#143B5C] relative">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border ${getBadgeClass(data.badgeType)}`}>
                {data.badgeText}
              </span>
              {data.authorOrMeta?.location && (
                <span className="text-xs text-[#88CCD9]">
                  {data.authorOrMeta.location}
                </span>
              )}
              {data.authorOrMeta?.date && (
                <span className="text-xs text-[#88CCD9]/60">
                  • {data.authorOrMeta.date}
                </span>
              )}
              {data.authorOrMeta?.status && (
                <span className="text-xs font-medium text-[#00B4FF]">
                  • {data.authorOrMeta.status}
                </span>
              )}
            </div>

            <Link href={data.href}>
              <h3 className="text-base font-bold text-white group-hover:text-[#00B4FF] transition-colors leading-snug">
                {data.title}
              </h3>
            </Link>

            {data.subtitleOrClaim && (
              <p className="text-xs text-[#88CCD9] line-clamp-2 leading-relaxed">
                {data.subtitleOrClaim}
              </p>
            )}

            {data.tags && data.tags.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap mt-1">
                {data.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-[#071E2D] text-[#88CCD9] px-2 py-0.5 rounded border border-[#143B5C]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="sm:shrink-0 w-full sm:w-auto flex justify-end">
          <Link
            href={data.href}
            className="w-full sm:w-auto px-4 py-2 bg-[#082A44] hover:bg-[#00B4FF] text-[#00B4FF] hover:text-[#071E2D] font-semibold text-xs rounded-lg border border-[#00B4FF]/30 hover:border-[#00B4FF] transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>{data.actionText || 'View Details'}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // Grid Layout (Default)
  return (
    <div className="bg-[#0A243A] border border-[#143B5C] rounded-xl overflow-hidden hover:border-[#00B4FF]/60 hover:shadow-[0_8px_24px_rgba(0,180,255,0.12)] transition-all flex flex-col group h-full">
      {/* Thumbnail Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-[#071E2D] shrink-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A243A] via-transparent to-black/30" />
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 text-[11px] font-bold rounded-md uppercase tracking-wider border backdrop-blur-md shadow-sm ${getBadgeClass(data.badgeType)}`}>
            {data.badgeText}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2.5">
          <Link href={data.href} className="block group-hover:text-[#00B4FF] transition-colors">
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {data.title}
            </h3>
          </Link>

          {data.subtitleOrClaim && (
            <p className="text-xs sm:text-sm text-[#88CCD9] line-clamp-3 leading-relaxed">
              {data.subtitleOrClaim}
            </p>
          )}
        </div>

        <div className="space-y-3.5 pt-2 border-t border-[#143B5C]/60">
          {/* Author or Meta Row */}
          {data.authorOrMeta && (
            <div className="flex items-center justify-between text-xs text-[#88CCD9]">
              <div className="flex items-center gap-2">
                {data.authorOrMeta.avatar && (
                  <img
                    src={data.authorOrMeta.avatar}
                    alt={data.authorOrMeta.name || ''}
                    className="w-5 h-5 rounded-full object-cover ring-1 ring-[#00B4FF]/30"
                  />
                )}
                <span className="font-medium text-white/90">
                  {data.authorOrMeta.name || data.authorOrMeta.location}
                </span>
              </div>
              {data.authorOrMeta.date && (
                <span className="text-[#88CCD9]/70 text-[11px]">
                  {data.authorOrMeta.date}
                </span>
              )}
            </div>
          )}

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-[#071E2D] text-[#88CCD9] px-2 py-0.5 rounded-full border border-[#143B5C]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Button */}
          <Link
            href={data.href}
            className="w-full py-2 bg-[#082A44] hover:bg-[#00B4FF] text-[#00B4FF] hover:text-[#071E2D] font-bold text-xs rounded-lg border border-[#00B4FF]/30 hover:border-[#00B4FF] transition-all flex items-center justify-center gap-1.5"
          >
            <span>{data.actionText || 'View RCA'}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
