'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import MobileBottomNav from '@/components/navigation/MobileBottomNav';

export default function OthersPage() {
  const [activeModal, setActiveModal] = useState<'rca' | 'incident' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const frameworkSteps = [
    {
      num: '01',
      title: 'Analyze Skeptical Claim',
      desc: 'Deconstruct cultural and philosophical assertions down to their fundamental assumptions.',
      tag: 'Deconstruction',
    },
    {
      num: '02',
      title: 'Trace The 5 Whys',
      desc: 'Probe successive causal layers to uncover the latent presuppositions and worldviews.',
      tag: 'Root Cause',
    },
    {
      num: '03',
      title: 'Presuppositional Critique',
      desc: 'Expose the internal incoherence and moral bankruptcy of autonomous secular frameworks.',
      tag: 'Internal Critique',
    },
    {
      num: '04',
      title: 'Biblical Revelation & Gospel',
      desc: 'Establish God’s revealed truth in Christ as the only necessary ground for reason, morality, and hope.',
      tag: 'Gospel Climax',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071E2D] text-white flex flex-col pb-20 md:pb-12">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#88CCD9]/70 pt-2">
          <a href="/" className="hover:text-[#00B4FF]">Home</a>
          <span className="text-[#143B5C]">/</span>
          <span className="text-white font-medium">Community & Framework</span>
        </div>

        {/* Hero Section */}
        <div className="bg-[#082A44] border border-[#143B5C] rounded-2xl p-6 sm:p-10 space-y-4">
          <span className="px-3 py-1 bg-[#00B4FF]/10 text-[#00B4FF] border border-[#00B4FF]/30 text-xs font-bold rounded-full uppercase tracking-wider">
            Methodology & Community
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The 4-Stage Presuppositional Framework
          </h1>
          <p className="text-xs sm:text-sm text-[#88CCD9] max-w-2xl leading-relaxed">
            Every RCA analysis follows a disciplined 4-stage presuppositional apologetic methodology designed to dismantle autonomous human reasoning and exalt the preeminence of Christ.
          </p>

          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <button
              onClick={() => { setActiveModal('rca'); setSubmitted(false); }}
              className="px-4 py-2 bg-[#00B4FF] text-[#071E2D] hover:bg-[#33C3FF] text-xs font-bold rounded-lg shadow-[0_0_15px_rgba(0,180,255,0.3)] transition-all"
            >
              Propose RCA Breakdown
            </button>
            <button
              onClick={() => { setActiveModal('incident'); setSubmitted(false); }}
              className="px-4 py-2 bg-[#0A243A] hover:bg-[#0E304C] text-[#88CCD9] hover:text-white border border-[#143B5C] text-xs font-bold rounded-lg transition-all"
            >
              Report Incident
            </button>
          </div>
        </div>

        {/* 4-Stage Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkSteps.map((step) => (
            <div
              key={step.num}
              className="bg-[#0A243A] border border-[#143B5C] hover:border-[#00B4FF]/60 rounded-xl p-5 space-y-3 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#00B4FF] font-mono">
                  {step.num}
                </span>
                <span className="text-[10px] uppercase font-bold bg-[#071E2D] px-2 py-0.5 rounded border border-[#143B5C] text-[#88CCD9]">
                  {step.tag}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-[#88CCD9] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Modal for Submission */}
        {activeModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0A243A] border border-[#143B5C] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-[#88CCD9] hover:text-white p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-lg font-bold text-white">
                {activeModal === 'rca' ? 'Propose RCA Topic' : 'Submit Persecution Incident'}
              </h2>

              {submitted ? (
                <div className="p-6 bg-[#071E2D] rounded-xl border border-[#2ECC71]/40 text-center space-y-2">
                  <span className="text-2xl">&#10004;</span>
                  <h3 className="text-sm font-bold text-white">Submission Received</h3>
                  <p className="text-xs text-[#88CCD9]">Thank you for contributing to the RCA network. Our editorial team will review your report.</p>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="mt-3 px-4 py-1.5 bg-[#00B4FF] text-[#071E2D] text-xs font-bold rounded-lg"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block text-[#88CCD9] mb-1 font-semibold">Title / Subject</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Analysis of Moral Relativism in Higher Education"
                      className="w-full px-3 py-2 bg-[#071E2D] border border-[#143B5C] rounded-lg text-white placeholder-[#88CCD9]/50 focus:outline-none focus:border-[#00B4FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#88CCD9] mb-1 font-semibold">Details & Sources</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide background context, skeptical claim, or incident details..."
                      className="w-full px-3 py-2 bg-[#071E2D] border border-[#143B5C] rounded-lg text-white placeholder-[#88CCD9]/50 focus:outline-none focus:border-[#00B4FF]"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="px-4 py-2 bg-[#071E2D] text-[#88CCD9] rounded-lg border border-[#143B5C]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#00B4FF] text-[#071E2D] font-bold rounded-lg hover:bg-[#33C3FF]"
                    >
                      Submit for Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <MobileBottomNav />
    </div>
  );
}
