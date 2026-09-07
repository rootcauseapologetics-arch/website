'use client';

import React, { useState } from 'react';
import { IncidentEntry } from '@/types/incident';
import { useToast } from '@/components/ui/Toast';

interface IncidentShareModalProps {
  incident: IncidentEntry;
  isOpen: boolean;
  onClose: () => void;
}

export const IncidentShareModal: React.FC<IncidentShareModalProps> = ({ incident, isOpen, onClose }) => {
  const [includeSolution, setIncludeSolution] = useState(true);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/incidents/${incident.id}` 
    : `https://rootcauseapologetics.com/incidents/${incident.id}`;

  const generateShareText = () => {
    let text = `🚨 Persecution Incident Report [${incident.region_state}]\n\n`;
    text += `📅 Date: ${incident.date}\n`;
    text += `📍 Location: ${incident.district ? `${incident.district}, ` : ''}${incident.region_state}\n`;
    text += `⚠️ Topic: ${incident.topic}\n\n`;
    text += `📝 Incident: ${incident.summary}\n\n`;
    text += `⚡ Root Cause: ${incident.root_cause}\n\n`;
    if (includeSolution) {
      text += `🛡️ Strategic Guidance & Action: ${incident.our_response}\n\n`;
    }
    text += `🕊️ Pray & Support: ${shareUrl}`;
    return text;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      showToast('Incident report copied to clipboard!');
      onClose();
    } catch {
      showToast('Failed to copy');
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareX = () => {
    const text = encodeURIComponent(`🚨 Persecution Report: ${incident.summary.slice(0, 100)}...\n\nLocation: ${incident.region_state}\n\nRoot Cause & Legal Guidance: `);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Share Incident Alert
            </h3>
            <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
              Verified intelligence from field networks
            </p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
            ✕
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Solution Toggle */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                Include Strategic Guidance & Action Steps
              </span>
              <span className="text-[11px] text-muted dark:text-slate-400">
                Turn off if you want to share a fast prayer bulletin without the full legal response
              </span>
            </div>
            <button
              onClick={() => setIncludeSolution(!includeSolution)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors flex-shrink-0 ${
                includeSolution ? 'bg-primary dark:bg-cyan-500 justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          {/* Preview */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 max-h-40 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
            {generateShareText()}
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <button
              onClick={handleShareWhatsApp}
              className="p-3 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 font-bold text-xs flex flex-col items-center justify-center"
            >
              <span className="text-base mb-1">💬</span>
              WhatsApp
            </button>
            <button
              onClick={handleShareX}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-xs flex flex-col items-center justify-center"
            >
              <span className="text-base mb-1">𝕏</span>
              X (Twitter)
            </button>
            <button
              onClick={handleCopyText}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-primary dark:text-cyan-400 font-bold text-xs flex flex-col items-center justify-center"
            >
              <span className="text-base mb-1">📋</span>
              Copy Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
