'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDark(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-1.5 rounded-[2px]">
            <Image src="/logo.png" alt="RCA Logo" width={28} height={28} priority />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 uppercase">
            Root Cause <span className="text-secondary">Apologetics</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/feed" className="text-sm font-medium uppercase tracking-[0.1em] text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Feed</Link>
          <Link href="/meme" className="text-sm font-medium uppercase tracking-[0.1em] text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Archive</Link>
          <Link href="/about" className="text-sm font-medium uppercase tracking-[0.1em] text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Mission</Link>
          <Link href="/contact" className="text-sm font-medium uppercase tracking-[0.1em] text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-cyan-400 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
