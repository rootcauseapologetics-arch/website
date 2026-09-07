'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-4">
        <span>About Our Organization</span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
        Root Cause Apologetics
      </h1>

      <div className="prose prose-slate dark:prose-invert max-w-none text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-6">
        <p>
          Root Cause Apologetics (RCA) is a structured intelligence and research platform dedicated to the deep presuppositional analysis of religious polemics and persecution events in India.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white pt-4">
          The Presuppositional Engine
        </h2>
        <p>
          Most cultural disputes and hostile assertions are outward symptoms of unstated philosophical foundations. Rather than trading superficial retorts, RCA utilizes the <strong>5-Whys Root Cause Methodology</strong> to drill into the underlying presuppositions, demonstrating why humanistic and non-biblical worldviews collapse into internal contradiction, and presenting the transcendent truth of Jesus Christ.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white pt-4">
          Our Dual Mandate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-2xl mb-2 block">🔍</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Worldview Apologetics Hub
            </h3>
            <p className="text-xs text-muted dark:text-slate-400 leading-relaxed">
              Equipping Indian believers, scholars, and seekers with verified, logical answers to ancient and modern claims.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-2xl mb-2 block">🚨</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Persecution & Legal Cell
            </h3>
            <p className="text-xs text-muted dark:text-slate-400 leading-relaxed">
              Documenting religious freedom incidents across Indian states, connecting victims with legal aid and prayer networks.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
          <Link
            href="/others"
            className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-primary/90"
          >
            Explore Community & Submissions →
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-200"
          >
            Return to RCA Feed
          </Link>
        </div>
      </div>
    </div>
  );
}
