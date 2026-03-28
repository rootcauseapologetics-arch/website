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
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="RCA Logo" width={40} height={40} priority />
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">RCA</span>
      </Link>
      <nav className="flex gap-4">
        <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
        <Link href="/feed" className="text-gray-700 dark:text-gray-200 hover:underline">Feed</Link>
        <Link href="/meme" className="text-gray-700 dark:text-gray-200 hover:underline">Memes</Link>
        <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:underline">About</Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:underline">Contact</Link>
      </nav>
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {dark ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default NavBar;
