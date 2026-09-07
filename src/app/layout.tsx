import './globals.css';
import '@/styles/design.css';
import '@/styles/card.css';
import '@/styles/responsive.css';
import '@/styles/native-ui.css';
import { Inter } from 'next/font/google';
import { AppHeader } from '@/components/navigation/AppHeader';
import { BottomNav } from '@/components/navigation/BottomNav';
import { ToastProvider } from '@/components/ui/Toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Root Cause Apologetics (RCA) — Presuppositional Analysis & Incident Intelligence',
  description: 'A structured intelligence repository investigating worldview claims and documenting persecution incidents in India through 5-Whys root cause analysis.',
  icons: {
    icon: '/rca-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-50 dark:bg-[#041A28] text-slate-900 dark:text-slate-100 transition-colors min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
        <ToastProvider>
          <AppHeader />
          <main className="flex-grow pb-20 md:pb-8">
            {children}
          </main>
          <BottomNav />
        </ToastProvider>
      </body>
    </html>
  );
}
