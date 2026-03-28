import Link from 'next/link';
import { getRCAEntries } from '@/lib/data';
import Card from '@/components/Card';

export default function Home() {
  const allEntries = getRCAEntries();
  const featured = allEntries.slice(0, 3);
  const stats = [
    { label: 'Total Analyses', value: allEntries.length },
    { label: 'Active Domains', value: [...new Set(allEntries.map(e => e.tag))].length },
    { label: 'Platform Status', value: 'Live' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* 1. Powerful Authority Hero */}
      <section className="bg-authority-gradient relative overflow-hidden py-32 md:py-48 px-6 border-b border-primary/20">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto relative z-10 text-center lg:text-left">
          <div className="max-w-4xl">
            <h1 className="text-[10px] md:text-xs font-black tracking-[0.5em] text-secondary uppercase mb-8 ml-1">
              Analytical Repository
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-10">
              Decoding the Roots of <br />
              <span className="italic font-normal text-cyan-200">Cultural Narratives</span>
            </h2>
            <p className="text-xl md:text-2xl text-cyan-50/60 max-w-2xl leading-relaxed mb-12 font-medium">
              We decompose surface-level claims into their philosophical roots 
              and biblical foundations using structured Root Cause Analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
              <Link 
                href="/feed" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-[0.2em] hover:bg-cyan-400 hover:text-primary transition-all duration-300"
              >
                Explore RCA Index
              </Link>
              <div className="flex items-center gap-2 text-[10px] font-bold text-cyan-200/40 uppercase tracking-widest">
                <span className="w-8 h-px bg-cyan-200/20"></span>
                <span>Structured Apologetics Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Repository Stats (Moved Below) */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-10 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-10">
            <div className="flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-black text-gray-900 dark:text-gray-100 tabular-nums">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block h-12 w-px bg-gray-100 dark:bg-gray-800"></div>
            <p className="max-w-xs text-xs font-bold text-muted/60 leading-relaxed uppercase tracking-wide">
              All entries are verified through 3-stage peer analysis and biblical cross-referencing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Analysis Grid */}
      <main className="flex-grow py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Latest Case Studies
            </h3>
            <Link href="/feed" className="text-sm font-bold text-primary uppercase tracking-widest hover:underline">
              View All Entries →
            </Link>
          </div>
          
          <div className="grid-feed">
            {featured.map((entry) => (
              <Card key={entry.id} {...entry} />
            ))}
          </div>

          {/* Mission Callout */}
          <div className="mt-24 bg-primary text-white p-12 rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-8 border-l-[12px] border-highlight">
            <div className="max-w-2xl">
              <h4 className="text-2xl font-bold mb-4">Our Methodology</h4>
              <p className="text-lg opacity-80 leading-relaxed">
                We don't just answer arguments; we map them. Our Root Cause Analysis 
                identifies the core assumptions behind cultural narratives, providing 
                a structured biblical framework for response.
              </p>
            </div>
            <Link 
              href="/about" 
              className="bg-highlight text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm font-medium">
            © {new Date().getFullYear()} ROOT CAUSE APOLOGETICS. ANALYTICAL REPOSITORY.
          </p>
          <div className="flex gap-8">
            <Link href="/legal" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
