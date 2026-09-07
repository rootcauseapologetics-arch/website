'use client';

import React, { useState } from 'react';
import { NavItem, DEFAULT_NAV_ITEMS, saveNavOrder } from '@/lib/nav-config';

interface NavCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  currentItems: NavItem[];
  onSave: (newItems: NavItem[]) => void;
}

export const NavCustomizerModal: React.FC<NavCustomizerProps> = ({
  isOpen,
  onClose,
  currentItems,
  onSave
}) => {
  const [items, setItems] = useState<NavItem[]>(currentItems);

  if (!isOpen) return null;

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setItems(newItems);
  };

  const handleReset = () => {
    setItems(DEFAULT_NAV_ITEMS);
  };

  const handleApply = () => {
    saveNavOrder(items);
    onSave(items);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Customize Navigation Order
            </h3>
            <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
              Reorder bottom bar items to match your workflow
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 text-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-2">
          {items.map((item, idx) => (
            <div 
              key={item.id}
              className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-primary/10 dark:bg-cyan-500/20 text-primary dark:text-cyan-400 text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-primary/10 dark:bg-cyan-900/40 text-primary dark:text-cyan-400">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <button
                  disabled={idx === 0}
                  onClick={() => moveItem(idx, 'up')}
                  className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  ▲
                </button>
                <button
                  disabled={idx === items.length - 1}
                  onClick={() => moveItem(idx, 'down')}
                  className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  ▼
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <button
            onClick={handleReset}
            className="text-xs font-bold text-muted hover:text-slate-900 dark:hover:text-slate-200 uppercase tracking-wider"
          >
            Reset Default
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-5 py-2 rounded-lg text-xs font-bold bg-primary text-white hover:bg-primary/90 shadow-md"
            >
              Save Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
