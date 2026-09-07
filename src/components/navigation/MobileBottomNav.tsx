'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const tabs = [
    {
      name: 'RCA',
      href: '/rca',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-[#00B4FF]' : 'text-[#88CCD9]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Incidents',
      href: '/incidents',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-[#00B4FF]' : 'text-[#88CCD9]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      name: 'Churches',
      href: '/churches',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-[#00B4FF]' : 'text-[#88CCD9]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'More',
      href: '/more',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-[#00B4FF]' : 'text-[#88CCD9]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      )
    }
  ];

  const isTabActive = (href: string) => {
    if (href === '/rca' && (pathname === '/' || pathname.startsWith('/rca'))) return true;
    if (href !== '/rca' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#071E2D]/95 backdrop-blur-md border-t border-[#143B5C] safe-bottom shadow-2xl">
      <div className="grid grid-cols-4 h-14 items-center">
        {tabs.map((tab) => {
          const active = isTabActive(tab.href);
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center justify-center h-full transition-all ${
                active ? 'text-[#00B4FF]' : 'text-[#88CCD9]/70 hover:text-white'
              }`}
            >
              <div className="relative">
                {tab.icon(active)}
                {active && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00B4FF] rounded-full shadow-[0_0_8px_#00B4FF]" />
                )}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${active ? 'text-[#00B4FF] font-semibold' : ''}`}>
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
