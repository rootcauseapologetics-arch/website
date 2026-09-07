'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#051520] border-t border-[#143B5C] text-white pt-12 pb-16 md:pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#082A44] to-[#0A3D63] border border-[#00B4FF]/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,180,255,0.25)]">
                <span className="text-lg font-black tracking-tighter text-white">
                  R<span className="text-[#00B4FF]">+</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-white leading-tight">
                  Root Cause
                </span>
                <span className="text-[10px] font-semibold text-[#88CCD9] tracking-wider uppercase">
                  Apologetics
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#88CCD9] max-w-sm leading-relaxed">
              Investigating the foundational presuppositions behind modern skepticism, documenting global persecution incidents, and defending the historic Christian faith through rigorous biblical analysis.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#88CCD9]">
              <span className="font-semibold text-white">Social:</span>
              <a href="https://twitter.com/WorldviewRCA" target="_blank" rel="noreferrer" className="hover:text-[#00B4FF] transition-colors">
                @WorldviewRCA
              </a>
              <span>•</span>
              <a href="https://youtube.com/@RootCauseApologetics" target="_blank" rel="noreferrer" className="hover:text-[#00B4FF] transition-colors">
                @RootCauseApologetics
              </a>
            </div>
          </div>

          {/* Col 3: RCA Library */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              RCA Library
            </h4>
            <ul className="space-y-2 text-xs text-[#88CCD9]">
              <li>
                <Link href="/rca" className="hover:text-white transition-colors">
                  All Analyses
                </Link>
              </li>
              <li>
                <Link href="/rca?topic=Apologetics" className="hover:text-white transition-colors">
                  Historical Apologetics
                </Link>
              </li>
              <li>
                <Link href="/rca?topic=Science%20%26%20Faith" className="hover:text-white transition-colors">
                  Science & Faith
                </Link>
              </li>
              <li>
                <Link href="/rca?topic=Culture%20%26%20Society" className="hover:text-white transition-colors">
                  Culture & Society
                </Link>
              </li>
              <li>
                <Link href="/rca?topic=Faith%20%26%20Doctrine" className="hover:text-white transition-colors">
                  Faith & Doctrine
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Intelligence & Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Watch & Community
            </h4>
            <ul className="space-y-2 text-xs text-[#88CCD9]">
              <li>
                <Link href="/incidents" className="hover:text-white transition-colors">
                  Persecution Incidents
                </Link>
              </li>
              <li>
                <Link href="/incidents?severity=High" className="hover:text-white transition-colors">
                  High Severity Alerts
                </Link>
              </li>
              <li>
                <Link href="/churches" className="hover:text-white transition-colors">
                  Church Zone Directory
                </Link>
              </li>
              <li>
                <Link href="/more" className="hover:text-white transition-colors">
                  Presuppositional Method
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Resources & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources & More
            </h4>
            <ul className="space-y-2 text-xs text-[#88CCD9]">
              <li>
                <Link href="/more" className="hover:text-white transition-colors">
                  About RCA
                </Link>
              </li>
              <li>
                <Link href="/more?action=submit-rca" className="hover:text-white transition-colors">
                  Submit RCA Proposal
                </Link>
              </li>
              <li>
                <Link href="/more?action=report-incident" className="hover:text-white transition-colors">
                  Report Persecution Incident
                </Link>
              </li>
              <li>
                <a href="mailto:contact@rootcauseapologetics.com" className="hover:text-[#00B4FF] transition-colors">
                  contact@rootcauseapologetics.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-[#143B5C]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#88CCD9]/60">
          <p>© {new Date().getFullYear()} Root Cause Apologetics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#88CCD9] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#88CCD9] cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-[#88CCD9] cursor-pointer">Editorial Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
