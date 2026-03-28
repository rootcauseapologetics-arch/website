import './globals.css';
import '@/styles/design.css';
import '@/styles/card.css';
import '@/styles/responsive.css';
import NavBar from '@/components/NavBar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Root Cause Apologetics',
  description: 'Structured apologetics platform',
  icons: {
    icon: '/rca-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white dark:bg-gray-900 transition-colors">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
