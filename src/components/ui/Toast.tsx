'use client';

import React, { createContext, useContext, useState } from 'react';

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-[200] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="px-5 py-3 rounded-full bg-slate-900/95 dark:bg-white text-white dark:text-slate-900 text-xs font-bold tracking-wide shadow-2xl backdrop-blur-md flex items-center gap-2.5 border border-white/10 dark:border-slate-800">
            <span className="text-secondary dark:text-cyan-600">●</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    return { showToast: (msg: string) => alert(msg) };
  }
  return context;
};
