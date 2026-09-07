'use client';

import React from 'react';
import { FiveWhysStep } from '@/lib/unified-mock-data';

interface FiveWhysVisualizerProps {
  steps: FiveWhysStep[];
}

export default function FiveWhysVisualizer({ steps }: FiveWhysVisualizerProps) {
  return (
    <div className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#143B5C] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#082A44] border border-[#00B4FF]/40 flex items-center justify-center text-[#00B4FF]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Root Cause Analysis
            </h3>
            <p className="text-xs text-[#88CCD9]">
              5-Step Presuppositional Causal Progression
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 text-[#00B4FF] text-[11px] font-mono font-bold">
          5 Whys Protocol
        </span>
      </div>

      {/* Visual Causal Flow */}
      <div className="space-y-4 pt-2">
        {steps.map((step, idx) => {
          const isRoot = step.level === 5 || idx === steps.length - 1;
          const isLast = idx === steps.length - 1;

          return (
            <div key={step.level} className="relative flex flex-col items-center">
              {/* Step Card */}
              <div
                className={`w-full rounded-xl border p-4 sm:p-5 transition-all ${
                  isRoot
                    ? 'bg-gradient-to-r from-[#0E304C] to-[#0A2E4C] border-[#00B4FF] shadow-[0_0_20px_rgba(0,180,255,0.2)] ring-1 ring-[#00B4FF]/50'
                    : 'bg-[#071E2D] border-[#143B5C] hover:border-[#00B4FF]/40'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Step Badge */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 tracking-tighter ${
                      isRoot
                        ? 'bg-[#00B4FF] text-[#071E2D] shadow-[0_0_12px_#00B4FF]'
                        : 'bg-[#082A44] text-[#88CCD9] border border-[#143B5C]'
                    }`}
                  >
                    {isRoot ? 'ROOT' : `W${step.level}`}
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isRoot ? 'text-[#00B4FF]' : 'text-[#88CCD9]/80'
                        }`}
                      >
                        {isRoot ? 'Level 5: The Foundational Root Cause' : `Why #${step.level}`}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">
                      {step.question}
                    </h4>

                    <div className="pt-1 text-xs sm:text-sm leading-relaxed">
                      <p className={isRoot ? 'text-white font-medium bg-[#071E2D]/80 p-3 rounded-lg border border-[#00B4FF]/30' : 'text-[#88CCD9]'}>
                        <span className={isRoot ? 'text-[#00B4FF] font-bold mr-1.5' : 'text-white/90 font-medium mr-1.5'}>
                          Answer:
                        </span>
                        {step.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Downward Connector Arrow */}
              {!isLast && (
                <div className="py-1.5 flex flex-col items-center text-[#00B4FF]/60">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-[#00B4FF]/40 to-[#00B4FF]" />
                  <svg className="w-3.5 h-3.5 text-[#00B4FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
