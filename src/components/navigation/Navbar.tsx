'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'RCA', href: '/' },
    { name: 'Persecution Incidents', href: '/incidents' },
    { name: 'Church Zone', href: '/churches' },
    { name: 'Others', href: '/others' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && (pathname === '/' || pathname.startsWith('/rca'))) return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#071E2D] border-b border-[#143B5C]">
      {/* Top Tagline Strip (Desktop) */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-[#051520] border-b border-[#0E2C44] text-[11px] text-[#88CCD9]/80 uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#00B4FF]">Real Issues</span>
          <span>/</span>
          <span className="font-semibold text-white">Deeper Truths</span>
          <span>/</span>
          <span className="font-semibold text-[#00B4FF]">Biblical Answers</span>
        </div>
        <div>Exploring the root causes of faith, persecution, and culture — with truth, reason and Scripture.</div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#082A44] to-[#0A3D63] border border-[#00B4FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,180,255,0.25)] group-hover:border-[#00B4FF] transition-all">
              <span className="text-xl font-black tracking-tighter text-white">
                R<span className="text-[#00B4FF]">+</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white leading-tight">
                Root Cause
              </span>
              <span className="text-xs font-semibold text-[#88CCD9] tracking-wider uppercase">
                Apologetics
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-[#082A44] text-[#00B4FF] font-semibold border border-[#00B4FF]/30 shadow-[0_0_10px_rgba(0,180,255,0.15)]'
                      : 'text-[#88CCD9] hover:text-white hover:bg-[#0A243A]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar & User Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Input (Desktop) */}
            <div className="hidden sm:flex items-center relative w-56 lg:w-72">
              <svg className="w-4 h-4 text-[#88CCD9] absolute left-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search RCA, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-14 py-1.5 bg-[#0A243A] border border-[#143B5C] rounded-lg text-xs text-white placeholder-[#88CCD9]/60 focus:outline-none focus:border-[#00B4FF] focus:ring-1 focus:ring-[#00B4FF] transition-all"
              />
              <span className="absolute right-2 px-1.5 py-0.5 text-[10px] bg-[#071E2D] border border-[#143B5C] rounded text-[#88CCD9] pointer-events-none">
                Ctrl K
              </span>
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 text-[#88CCD9] hover:text-white hover:bg-[#0A243A] rounded-lg border border-transparent hover:border-[#143B5C] transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#00B4FF] rounded-full ring-2 ring-[#071E2D]" />
            </button>

            {/* User Avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00B4FF] to-[#0A3D63] p-0.5 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="User Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#88CCD9] hover:text-white hover:bg-[#0A243A] rounded-lg border border-[#143B5C]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-[#143B5C] flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(link.href)
                    ? 'bg-[#082A44] text-[#00B4FF] font-semibold'
                    : 'text-[#88CCD9] hover:bg-[#0A243A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
