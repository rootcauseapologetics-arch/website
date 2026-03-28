import Link from 'next/link';
import { getRCAEntries } from '@/lib/data';
import Card from '@/components/Card';

export default function Home() {
  const featured = getRCAEntries().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Root Cause Apologetics</h1>
          <p className="text-xl mb-10 opacity-90">
            Analyzing religious polemics at their source. 
            Structured analysis for a deeper understanding of cultural narratives 
            and biblical responses.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/feed" 
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Explore Feed
            </Link>
            <Link 
              href="/about" 
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Featured RCA Cards
          </h2>
          <div className="grid-feed">
            {featured.map((entry) => (
              <Card key={entry.id} {...entry} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/feed" className="text-primary font-semibold hover:underline">
              View all RCA cards →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Root Cause Apologetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
