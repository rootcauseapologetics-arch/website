'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const AppHeader: React.FC = () => {
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { label: 'RCA Hub', href: '/' },
    { label: 'Incidents', href: '/incidents', badge: 'LIVE' },
    { label: 'Church Zone', href: '/churches', badge: 'GATED' },
    { label: 'Community', href: '/others' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/' && (pathname === '/' || pathname === '/feed' || pathname.startsWith('/rca'))) return true;
    if (href === '/incidents' && pathname.startsWith('/incidents')) return true;
    if (href === '/churches' && pathname.startsWith('/churches')) return true;
    if (href === '/others' && (pathname.startsWith('/others') || pathname.startsWith('/about') || pathname.startsWith('/contact'))) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
          <div className="bg-primary p-1.5 sm:p-2 rounded-lg shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            <Image src="/logo.png" alt="RCA Logo" width={20} height={20} priority className="brightness-125 sm:w-[22px] sm:h-[22px]" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none truncate">
                ROOT CAUSE <span className="text-secondary dark:text-cyan-400">APOLOGETICS</span>
              </span>
            </div>
            <span className="hidden sm:block text-[8px] sm:text-[9px] font-bold text-muted dark:text-slate-400 uppercase tracking-[0.15em] mt-0.5 truncate">
              Presuppositional Intelligence & Incident Repository
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/70 dark:bg-slate-900/70 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'bg-white dark:bg-slate-800 text-primary dark:text-cyan-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[8px] font-black px-1.5 py-0.2 rounded ${
                    link.badge === 'LIVE'
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                      : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Search jump & Dark mode */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/feed"
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Search Repository"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center border border-slate-200/80 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all text-xs"
            aria-label="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};
