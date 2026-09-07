'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';

interface SubmitRCAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitRCAModal: React.FC<SubmitRCAModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    topic: 'Vedas & Science',
    targetClaim: '',
    proposedRootCause: '',
    proposedResponse: '',
    scriptureReference: '',
    sourceUrl: '',
    contributorName: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.targetClaim || !formData.proposedRootCause) {
      showToast('Please provide both the Claim and Proposed Root Cause', 'info');
      return;
    }
    setSubmitted(true);
    showToast('RCA breakdown submitted to research board!');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-primary/5 dark:bg-cyan-950/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base">💡</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Submit a Better RCA Breakdown
              </h3>
            </div>
            <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
              Peer review, suggest a deeper 5-Whys diagnosis, or submit a new polemic
            </p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-grow">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary dark:text-cyan-400 text-2xl flex items-center justify-center mx-auto font-bold">
                ✓
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                RCA Proposal Submitted
              </h4>
              <p className="text-xs text-muted dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for contributing to the repository. Our research scholars will review your 5-Whys root cause formulation and biblical references.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-primary/90"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Topic / Domain *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Caste & Karma, Historical Resurrection, Moral Relativism"
                  value={formData.topic}
                  onChange={e => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Public Claim / Argument *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="State the exact claim or objection asserted in public discourse..."
                  value={formData.targetClaim}
                  onChange={e => setFormData({ ...formData, targetClaim: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Core Root Cause Presupposition *
                </label>
                <input
                  type="text"
                  required
                  placeholder="The deeper worldview foundation driving this claim..."
                  value={formData.proposedRootCause}
                  onChange={e => setFormData({ ...formData, proposedRootCause: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Proposed Response & Biblical Foundation
                </label>
                <textarea
                  rows={3}
                  placeholder="Logical resolution and scripture verses (e.g. John 14:6, Col 2:8)..."
                  value={formData.proposedResponse}
                  onChange={e => setFormData({ ...formData, proposedResponse: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Source Link (X, YouTube, Article)
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.sourceUrl}
                  onChange={e => setFormData({ ...formData, sourceUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary/90 shadow-md"
                >
                  Submit for Peer Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
