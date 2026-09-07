'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem, getStoredNavOrder } from '@/lib/nav-config';
import { NavCustomizerModal } from './NavCustomizerModal';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    setNavItems(getStoredNavOrder());
  }, []);

  const getIcon = (id: string, active: boolean) => {
    switch (id) {
      case 'rca':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'incidents':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'churches':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'others':
      default:
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const isActive = (href: string) => {
    if (href === '/' && (pathname === '/' || pathname === '/feed' || pathname.startsWith('/rca'))) return true;
    if (href === '/incidents' && pathname.startsWith('/incidents')) return true;
    if (href === '/churches' && pathname.startsWith('/churches')) return true;
    if (href === '/others' && (pathname.startsWith('/others') || pathname.startsWith('/about') || pathname.startsWith('/contact'))) return true;
    return false;
  };

  if (navItems.length === 0) return null;

  return (
    <>
      <nav 
        aria-label="Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      >
        <div className="max-w-md mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                  active
                    ? 'text-primary dark:text-cyan-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {/* Active Pill Glow */}
                {active && (
                  <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-primary dark:bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                )}

                <div className="relative">
                  {getIcon(item.id, active)}
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-highlight" />
                  )}
                </div>

                <span className="text-[10px] tracking-tight mt-1">
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Quick Customizer Trigger */}
          <button
            onClick={() => setIsCustomizerOpen(true)}
            aria-label="Reorder navigation tabs"
            className="flex flex-col items-center justify-center py-1 px-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-[8px] uppercase tracking-widest mt-1 text-slate-400">Order</span>
          </button>
        </div>
      </nav>

      <NavCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentItems={navItems}
        onSave={(updated) => setNavItems(updated)}
      />
    </>
  );
};
