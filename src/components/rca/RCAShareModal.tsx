'use client';

import React, { useState } from 'react';
import { RCAEntry } from '@/types/rca';
import { useToast } from '@/components/ui/Toast';

interface RCAShareModalProps {
  entry: RCAEntry;
  isOpen: boolean;
  onClose: () => void;
}

export const RCAShareModal: React.FC<RCAShareModalProps> = ({ entry, isOpen, onClose }) => {
  const [includeClaim, setIncludeClaim] = useState(true);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/rca/${entry.id}` 
    : `https://rootcauseapologetics.com/rca/${entry.id}`;

  const generateShareText = () => {
    let text = `🔍 Root Cause Apologetics Breakdown\n\n`;
    if (includeClaim) {
      text += `📌 Claim: "${entry.claim}"\n\n`;
    }
    text += `⚡ Root Cause: ${entry.root_issue}\n\n`;
    text += `📖 Biblical Response: ${entry.biblical_response}\n\n`;
    text += `Read full investigation & 5-Whys analysis: ${shareUrl}`;
    return text;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      showToast('Analysis copied to clipboard!');
      onClose();
    } catch {
      showToast('Failed to copy');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast('Link copied to clipboard!');
      onClose();
    } catch {
      showToast('Failed to copy link');
    }
  };

  const handleShareX = () => {
    const text = encodeURIComponent(
      includeClaim 
        ? `"${entry.claim.slice(0, 100)}..."\n\nRoot Cause: ${entry.root_issue}\n\nAnalysis & Biblical Foundation: ` 
        : `Root Cause: ${entry.root_issue}\n\nBiblical Foundation: `
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Share RCA Analysis
            </h3>
            <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
              Choose your format & control claim visibility
            </p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
            ✕
          </button>
        </div>

        {/* Content & Toggle */}
        <div className="p-5 space-y-4">
          {/* Smart Claim Toggle */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                Include Original Claim in Share
              </span>
              <span className="text-[11px] text-muted dark:text-slate-400">
                Turn off to share the Truth & Biblical Response only (prevents amplifying toxic claims)
              </span>
            </div>
            <button
              onClick={() => setIncludeClaim(!includeClaim)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                includeClaim ? 'bg-primary dark:bg-cyan-500 justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          {/* Live Preview Box */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 max-h-40 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
            {generateShareText()}
          </div>

          {/* Share Action Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            <button
              onClick={handleShareWhatsApp}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 hover:scale-[1.02] transition-transform text-xs font-bold"
            >
              <span className="text-base mb-1">💬</span>
              WhatsApp
            </button>

            <button
              onClick={handleShareX}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:scale-[1.02] transition-transform text-xs font-bold"
            >
              <span className="text-base mb-1">𝕏</span>
              X (Twitter)
            </button>

            <button
              onClick={handleCopyText}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-primary dark:text-cyan-400 hover:scale-[1.02] transition-transform text-xs font-bold"
            >
              <span className="text-base mb-1">📋</span>
              Copy Text
            </button>

            <button
              onClick={handleCopyLink}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:scale-[1.02] transition-transform text-xs font-bold"
            >
              <span className="text-base mb-1">🔗</span>
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
