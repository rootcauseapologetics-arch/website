'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SubmitIncidentModal } from '@/components/community/SubmitIncidentModal';
import { SubmitRCAModal } from '@/components/community/SubmitRCAModal';

export default function OthersPage() {
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [isRCAModalOpen, setIsRCAModalOpen] = useState(false);

  const frameworkSteps = [
    {
      num: '01',
      title: 'The Incident / Claim',
      desc: 'Observing a specific worldview polemic, viral debate, or persecution incident in public square discourse.',
      tag: 'Observation'
    },
    {
      num: '02',
      title: 'Surface Logic & Symptoms',
      desc: 'Mapping the rhetoric, emotional triggers, and outward assertions without getting distracted by superficial noise.',
      tag: 'Deconstruction'
    },
    {
      num: '03',
      title: 'The 5-Whys Root Cause',
      desc: 'Drilling down 5 levels into the fundamental philosophical, spiritual, and socio-political presuppositions.',
      tag: 'Core Diagnosis'
    },
    {
      num: '04',
      title: 'The Biblical Resolution',
      desc: 'Presenting the coherent Christian worldview, legal defense, and gospel truth as the unshakeable foundation.',
      tag: 'Grounded Truth'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 md:py-14">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-3">
          <span>Community & Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          About RCA & Public Ingestion
        </h1>
        <p className="text-sm sm:text-base text-muted dark:text-slate-300 leading-relaxed">
          Root Cause Apologetics is an active investigative platform testing the foundations of modern thought in India. We equip the church with rigorous truth analysis and provide rapid response for persecuted communities.
        </p>
      </div>

      {/* Dual Intake Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Submit Incident Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/40 dark:from-red-950/40 dark:to-slate-900 border border-red-200 dark:border-red-900/60 shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white text-xl flex items-center justify-center mb-4 shadow-md">
              🚨
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
              Submit a Persecution Incident
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Witnessed or experienced a church disruption, anti-conversion harassment, or community boycott? Submit verified details for legal coordination, intercession, and 5-Whys analysis.
            </p>
          </div>
          <button
            onClick={() => setIsIncidentModalOpen(true)}
            className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            Open Incident Submission Form →
          </button>
        </div>

        {/* Submit Better RCA Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50/40 dark:from-slate-900 dark:to-cyan-950/30 border border-primary/20 dark:border-cyan-800/40 shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary text-white text-xl flex items-center justify-center mb-4 shadow-md">
              💡
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
              Submit a Better RCA Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Have a deeper 5-Whys diagnosis for an existing claim, or want to submit a new viral polemic for investigation? Contribute your scholarly analysis to our peer review queue.
            </p>
          </div>
          <button
            onClick={() => setIsRCAModalOpen(true)}
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            Submit RCA Proposal →
          </button>
        </div>
      </div>

      {/* The 4-Step Investigative Engine Infographic */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary dark:text-cyan-400 block mb-2">
            The Analytical Engine
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Our 4-Stage Presuppositional Framework
          </h2>
          <p className="text-xs text-muted dark:text-slate-400 mt-1">
            How we systematically unpack worldviews and persecution events
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkSteps.map(step => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-3xl font-black text-slate-100 dark:text-slate-800/80 pointer-events-none">
                {step.num}
              </div>

              <div>
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-primary/10 dark:bg-cyan-900/40 text-primary dark:text-cyan-400 inline-block mb-3">
                  {step.tag}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-primary dark:text-cyan-400 uppercase tracking-widest">
                Stage {step.num}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & FAQs */}
      <section className="p-8 md:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
        <div className="max-w-3xl space-y-8">
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
              Who Can Participate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Christian scholars, field researchers, legal advocates, pastors, and intellectual seekers are welcome to submit claims, report local incidents, and participate in peer-reviewing RCA case studies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
              Direct Contact & Verification Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              For security, legal emergencies, or confidential church onboarding queries, email us directly:
            </p>
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-primary dark:text-cyan-400">
              <span>✉️</span>
              <span>contact@rootcauseapologetics.com</span>
            </div>
          </div>
        </div>
      </section>

      <SubmitIncidentModal
        isOpen={isIncidentModalOpen}
        onClose={() => setIsIncidentModalOpen(false)}
      />

      <SubmitRCAModal
        isOpen={isRCAModalOpen}
        onClose={() => setIsRCAModalOpen(false)}
      />
    </div>
  );
}
