'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import MobileBottomNav from '@/components/navigation/MobileBottomNav';
import Footer from '@/components/navigation/Footer';

export default function MorePage() {
  const [activeModal, setActiveModal] = useState<'rca' | 'incident' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const frameworkSteps = [
    {
      num: '01',
      title: 'Analyze Skeptical Claim',
      desc: 'Deconstruct cultural and philosophical assertions down to their fundamental presuppositions.',
      tag: 'Deconstruction',
    },
    {
      num: '02',
      title: 'Trace The 5 Whys',
      desc: 'Probe successive causal layers to uncover latent worldview assumptions and hidden biases.',
      tag: 'Root Cause',
    },
    {
      num: '03',
      title: 'Internal Critique',
      desc: 'Expose the internal incoherence, arbitrariness, and moral bankruptcy of autonomous secular frameworks.',
      tag: 'Critique',
    },
    {
      num: '04',
      title: 'Biblical Revelation & Gospel',
      desc: 'Establish God’s revealed truth in Christ as the only necessary ground for reason, morality, and hope.',
      tag: 'Gospel Climax',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071E2D] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-20 md:pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#88CCD9]/70 pt-2">
          <a href="/" className="hover:text-[#00B4FF]">Home</a>
          <span className="text-[#143B5C]">/</span>
          <span className="text-white font-medium">More & Resources</span>
        </div>

        {/* Hero Section: About RCA */}
        <section className="bg-[#082A44] border border-[#143B5C] rounded-3xl p-6 sm:p-12 space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-at-c from-[#00B4FF]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="space-y-4 max-w-3xl">
            <span className="px-3 py-1 bg-[#00B4FF]/10 text-[#00B4FF] border border-[#00B4FF]/30 text-xs font-bold rounded-full uppercase tracking-wider">
              About RCA
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Investigate the Foundation. <br />
              <span className="text-[#00B4FF]">Proclaim the Truth.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#88CCD9] leading-relaxed">
              Root Cause Apologetics (RCA) is an intellectual research and worldview intelligence platform. We look beneath superficial cultural arguments to expose the hidden presuppositions that drive modern skepticism.
            </p>

            <div className="flex items-center gap-3 pt-3 flex-wrap">
              <button
                onClick={() => { setActiveModal('rca'); setSubmitted(false); }}
                className="px-5 py-2.5 bg-[#00B4FF] text-[#071E2D] hover:bg-[#33C3FF] text-xs font-extrabold rounded-xl shadow-[0_0_15px_rgba(0,180,255,0.3)] transition-all"
              >
                Submit RCA Proposal
              </button>
              <button
                onClick={() => { setActiveModal('incident'); setSubmitted(false); }}
                className="px-5 py-2.5 bg-[#0A243A] hover:bg-[#0E304C] text-[#88CCD9] hover:text-white border border-[#143B5C] text-xs font-bold rounded-xl transition-all"
              >
                Report Persecution Incident
              </button>
            </div>
          </div>
        </section>

        {/* The 4-Stage Methodology */}
        <section className="space-y-6">
          <div className="border-b border-[#143B5C] pb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              The 4-Stage Presuppositional Method
            </h2>
            <p className="text-xs text-[#88CCD9] mt-0.5">
              The core intellectual framework applied to every RCA breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0A243A] border border-[#143B5C] hover:border-[#00B4FF]/60 rounded-2xl p-6 space-y-3 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#00B4FF] font-mono">
                      {step.num}
                    </span>
                    <span className="text-[10px] uppercase font-bold bg-[#071E2D] px-2.5 py-0.5 rounded-full border border-[#143B5C] text-[#88CCD9]">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#88CCD9] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Standards & Contact Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Editorial & Research Standards
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-[#88CCD9]">
              <li className="flex items-start gap-2">
                <span className="text-[#00B4FF]">•</span>
                <span>All RCA analyses undergo peer-review for theological soundness and philosophical rigor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4FF]">•</span>
                <span>Persecution reports must be corroborated by local witnesses, legal counsel, or recognized NGOs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4FF]">•</span>
                <span>Church Zone listings require affirmation of historical biblical orthodoxy.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Contact & Contributions
              </h3>
            </div>
            <p className="text-xs text-[#88CCD9] leading-relaxed">
              Have an apologetics topic for analysis, a verified persecution report, or questions about the platform? Reach out directly to our editorial team:
            </p>
            <div className="p-4 bg-[#071E2D] rounded-xl border border-[#143B5C] text-xs space-y-1">
              <div className="text-[#88CCD9]">Official Inquiries:</div>
              <a href="mailto:contact@rootcauseapologetics.com" className="text-[#00B4FF] font-mono font-bold hover:underline">
                contact@rootcauseapologetics.com
              </a>
            </div>
          </div>
        </section>

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
                  <p className="text-xs text-[#88CCD9]">Thank you for contributing to the RCA platform. Our team will review your report.</p>
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

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
