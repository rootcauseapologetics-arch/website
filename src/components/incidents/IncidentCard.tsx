'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IncidentEntry } from '@/types/incident';
import { IncidentShareModal } from './IncidentShareModal';

interface IncidentCardProps {
  incident: IncidentEntry;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30';
      case 'high':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30';
      default:
        return 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30';
    }
  };

  return (
    <>
      <div className="group relative bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 hover:border-red-500/40 dark:hover:border-red-400/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between h-full">
        <div>
          {/* Header: Region & Topic */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                📍 {incident.region_state}
              </span>
              <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${getSeverityBadge(incident.severity)}`}>
                {incident.severity}
              </span>
            </div>

            <button
              onClick={() => setIsShareOpen(true)}
              className="p-1 rounded text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              title="Share Incident"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>

          <div className="text-[11px] font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
            {incident.topic}
          </div>

          <Link href={`/incidents/${incident.id}`} className="block">
            <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2">
              {incident.summary}
            </h3>
          </Link>
        </div>

        {/* Footer: Root Cause & Action Link */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex flex-col pr-2">
            <span className="text-[9px] font-bold text-muted dark:text-slate-400 uppercase tracking-wider">
              Root Cause
            </span>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 italic line-clamp-1">
              {incident.root_cause}
            </span>
          </div>

          <Link
            href={`/incidents/${incident.id}`}
            className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline whitespace-nowrap flex items-center gap-1"
          >
            <span>→ Report & Pray</span>
          </Link>
        </div>
      </div>

      <IncidentShareModal
        incident={incident}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </>
  );
};
