'use client';

import React, { useState } from 'react';
import { FiveWhysStep } from '@/types/rca';

interface FiveWhysProps {
  steps: FiveWhysStep[];
  title?: string;
  initialExpanded?: boolean;
}

export const FiveWhysAccordion: React.FC<FiveWhysProps> = ({ 
  steps, 
  title = "5-Whys Root Cause Decomposition",
  initialExpanded = true
}) => {
  const [isOpen, setIsOpen] = useState(initialExpanded);
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors gap-2"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 dark:bg-cyan-500/20 text-primary dark:text-cyan-400 text-[10px] sm:text-xs font-black flex items-center justify-center flex-shrink-0">
            5W
          </span>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight truncate">
              {title}
            </h4>
            <p className="text-[10px] sm:text-[11px] text-muted dark:text-slate-400 truncate">
              Drilling from surface observation to core presupposition
            </p>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs font-black text-primary dark:text-cyan-400 tracking-wider uppercase whitespace-nowrap flex-shrink-0">
          {isOpen ? 'Collapse ▲' : 'Inspect ▼'}
        </span>
      </button>

      {isOpen && (
        <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-1 space-y-2.5 sm:space-y-3">
          {steps.map((step, idx) => {
            const isRoot = idx === steps.length - 1;
            const isHovered = activeLevel === step.level;

            return (
              <div 
                key={step.level}
                onMouseEnter={() => setActiveLevel(step.level)}
                onMouseLeave={() => setActiveLevel(null)}
                className={`relative pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-200 ${
                  isRoot 
                    ? 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-300 dark:border-amber-600/40 shadow-sm'
                    : isHovered
                    ? 'bg-white dark:bg-slate-800 border-primary/40 dark:border-cyan-500/40'
                    : 'bg-white/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {/* Step Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-[-12px] w-0.5 bg-slate-300 dark:bg-slate-700 pointer-events-none" />
                )}

                {/* Level Badge */}
                <div className={`absolute left-2 top-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full text-[8px] sm:text-[9px] font-black flex items-center justify-center ${
                  isRoot 
                    ? 'bg-highlight text-slate-950'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  {step.level}
                </div>

                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted dark:text-slate-400">
                      {isRoot ? '★ Core Root Presupposition' : `Level ${step.level}`}
                    </span>
                    {isRoot && (
                      <span className="text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-highlight text-slate-900">
                        Final
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-slate-100">
                    Q: "{step.question}"
                  </p>
                  <p className={`text-[11px] sm:text-xs leading-relaxed ${
                    isRoot 
                      ? 'text-slate-950 dark:text-amber-100 font-medium'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}>
                    <span className="font-semibold text-primary dark:text-cyan-400">Finding: </span>
                    {step.insight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
