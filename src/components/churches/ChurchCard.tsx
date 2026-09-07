'use client';

import React from 'react';
import { ChurchProfile } from '@/types/church';

interface ChurchCardProps {
  church: ChurchProfile;
  isVerifiedMember: boolean;
}

export const ChurchCard: React.FC<ChurchCardProps> = ({ church, isVerifiedMember }) => {
  return (
    <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 hover:border-primary/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between h-full">
      <div>
        {/* Header: Region & Verified Badge */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
            📍 {church.city}, {church.region_state}
          </span>
          <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 flex items-center gap-1">
            ✓ Verified
          </span>
        </div>

        {/* Church Name */}
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
          {church.name}
        </h3>

        {/* Pastor Name */}
        <p className="text-xs text-muted dark:text-slate-400 mb-3">
          Lead: <span className="font-semibold text-slate-700 dark:text-slate-300">{church.pastor_name || 'Verified Pastor'}</span>
          {church.established_year && ` • Est. ${church.established_year}`}
        </p>

        {/* Badges: Denomination & Size */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary dark:text-cyan-400">
            {church.denomination}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            👥 {church.size_range} members
          </span>
        </div>

        {/* Languages */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
          Services in: <span className="font-medium text-slate-800 dark:text-slate-200">{church.languages.join(', ')}</span>
        </div>
      </div>

      {/* Footer / Contact Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <div className="text-[10px] text-muted">
          <span>Active Prayer Needs: </span>
          <span className="font-bold text-highlight">{church.prayer_requests_count}</span>
        </div>

        {isVerifiedMember ? (
          <a
            href={`mailto:${church.contact_email_masked || 'contact@rootcauseapologetics.com'}`}
            className="text-xs font-bold text-primary dark:text-cyan-400 hover:underline"
          >
            Connect ↗
          </a>
        ) : (
          <span className="text-[10px] text-slate-400 italic">
            🔒 Contact Protected
          </span>
        )}
      </div>
    </div>
  );
};
