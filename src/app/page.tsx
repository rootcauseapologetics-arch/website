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
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      {/* Dashboard Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-3xl">
              <h1 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">
                Research Archive
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
                Structured Analysis for <br />
                <span className="text-primary italic">Religious Polemics</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl leading-relaxed">
                A professional repository dedicated to decomposing surface-level claims 
                into their philosophical roots and biblical foundations.
              </p>
            </div>
            <div className="flex gap-6 border-l border-gray-200 dark:border-gray-800 pl-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                </div>
              ))}
            </div>
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
