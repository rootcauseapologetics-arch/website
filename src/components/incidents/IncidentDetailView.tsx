'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IncidentEntry } from '@/types/incident';
import { FiveWhysAccordion } from '@/components/ui/FiveWhysAccordion';
import { IncidentShareModal } from './IncidentShareModal';
import { useToast } from '@/components/ui/Toast';

interface IncidentDetailViewProps {
  incident: IncidentEntry;
}

export const IncidentDetailView: React.FC<IncidentDetailViewProps> = ({ incident }) => {
  const [prayedCount, setPrayedCount] = useState(142);
  const [hasPrayed, setHasPrayed] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { showToast } = useToast();

  const handlePrayClick = () => {
    if (!hasPrayed) {
      setPrayedCount(prev => prev + 1);
      setHasPrayed(true);
      showToast('Thank you for praying! Your prayer has been recorded.');
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      {/* Back button & verified badge */}
      <div className="mb-8 flex items-center justify-between">
        <Link 
          href="/incidents" 
          className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest hover:underline flex items-center gap-1.5"
        >
          ← Return to Incidents Map & Feed
        </Link>
        <div className="flex items-center gap-2">
          {incident.verified && (
            <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-700 dark:text-green-300 border border-green-500/20 text-[10px] font-bold flex items-center gap-1">
              ✓ Verified by Legal Watch
            </span>
          )}
        </div>
      </div>

      {/* Incident Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-xs">
            📍 {incident.district ? `${incident.district}, ` : ''}{incident.region_state}
          </span>
          <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-700 dark:text-red-400 font-bold text-xs border border-red-500/20">
            {incident.topic}
          </span>
          <span className="text-xs text-muted dark:text-slate-400 font-medium ml-1">
            Date: {incident.date}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.2] tracking-tight">
          {incident.summary}
        </h1>
      </div>

      {/* Core Diagnostic Block: Root Cause */}
      <div className="mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-950/90 to-slate-900 text-white shadow-xl border-l-[10px] border-red-500">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-300 block mb-2">
          ★ Socio-Political & Cultural Root Cause
        </span>
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white leading-snug">
          {incident.root_cause}
        </h2>
      </div>

      {/* 5-Whys Incident Decomposition */}
      <div className="mb-12">
        <FiveWhysAccordion 
          steps={incident.root_cause_5whys}
          title="5-Whys Root Cause Analysis of this Incident"
        />
      </div>

      {/* Detailed Narrative */}
      <section className="mb-12 space-y-4 border-b border-slate-200 dark:border-slate-800 pb-10">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted dark:text-slate-400">
          Verified Incident Narrative
        </h3>
        <div className="prose prose-slate dark:prose-invert max-w-none text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p className="whitespace-pre-wrap">{incident.incident_detail}</p>
        </div>
      </section>

      {/* Attachments / Evidence Proof */}
      {incident.source_attachments && incident.source_attachments.length > 0 && (
        <section className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-10">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted dark:text-slate-400 mb-4">
            Source Attachments & Evidence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {incident.source_attachments.map((att, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{att.type === 'fir' ? '📄' : '📷'}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{att.caption}</p>
                    <span className="text-[10px] text-muted uppercase tracking-wider">{att.type.toUpperCase()} Attachment</span>
                  </div>
                </div>
                <a
                  href={att.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary dark:text-cyan-400 hover:underline"
                >
                  View ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Our Strategic Response & Guidance */}
      <section className="mb-12 p-8 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border border-blue-200 dark:border-blue-900/50">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">🛡️</span>
          <h3 className="text-sm font-black uppercase tracking-wider text-primary dark:text-cyan-400">
            Strategic Response & How to Solve Similar Issues
          </h3>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
          {incident.our_response}
        </p>
      </section>

      {/* Prayer Points & Action Climax */}
      <section className="mb-12 p-8 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border-2 border-highlight">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300 mb-4">
          🕊️ Urgent Intercession & Prayer Points
        </h3>
        <ul className="space-y-3 mb-8">
          {incident.prayer_points.map((point, idx) => (
            <li key={idx} className="text-sm text-slate-800 dark:text-amber-100 flex items-start gap-2.5">
              <span className="text-highlight font-bold">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons: Pray & Help */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-200/60 dark:border-amber-900/40">
          <button
            onClick={handlePrayClick}
            className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all active:scale-95 ${
              hasPrayed 
                ? 'bg-green-600 text-white' 
                : 'bg-highlight text-slate-950 hover:bg-highlight/90'
            }`}
          >
            <span>{hasPrayed ? '✓' : '🙏'}</span>
            <span>{hasPrayed ? 'You Prayed For This' : `Join In Prayer (${prayedCount})`}</span>
          </button>

          {incident.help_link && (
            <a
              href={incident.help_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 flex items-center gap-2 shadow-md"
            >
              <span>🤝</span>
              <span>Help the Persecuted</span>
            </a>
          )}

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100"
          >
            ↗ Share Alert
          </button>
        </div>
      </section>

      <IncidentShareModal
        incident={incident}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </article>
  );
};
