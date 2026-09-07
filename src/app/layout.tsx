import './globals.css';
import '@/styles/design.css';
import '@/styles/card.css';
import '@/styles/responsive.css';
import '@/styles/native-ui.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Root Cause Apologetics (RCA) — Real Issues. Deeper Truths. Biblical Answers.',
  description: 'Exploring the root causes of faith, persecution, and culture with truth, reason and Scripture.',
  icons: {
    icon: '/rca-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#071E2D] text-white min-h-screen flex flex-col antialiased selection:bg-[#00B4FF] selection:text-[#071E2D]">
        {children}
      </body>
    </html>
  );
}
