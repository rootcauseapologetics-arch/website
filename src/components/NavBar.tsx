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
    <header className="sticky top-0 z-[100] w-full border-b border-gray-200/50 dark:border-white/5 bg-white/60 dark:bg-gray-950/60 backdrop-blur-xl px-6 py-4">
      <div className="max-w-[var(--max-width)] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group transition-opacity hover:opacity-90">
          <div className="bg-primary p-2 rounded-[4px] shadow-sm">
            <Image src="/logo.png" alt="RCA Logo" width={24} height={24} priority />
          </div>
          <span className="text-xl font-black tracking-[-0.02em] text-gray-900 dark:text-gray-100 uppercase">
            ROOT CAUSE <span className="text-secondary opacity-80">APOLOGETICS</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-10">
          <Link href="/feed" className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-primary dark:hover:text-cyan-400">Feed</Link>
          <Link href="/meme" className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-primary dark:hover:text-cyan-400">Archive</Link>
          <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-primary dark:hover:text-cyan-400">Mission</Link>
          <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-primary dark:hover:text-cyan-400">Contact</Link>
        </nav>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 flex items-center justify-center border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 rounded-[4px]"
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
