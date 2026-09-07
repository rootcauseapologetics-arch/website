'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';

interface SubmitIncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitIncidentModal: React.FC<SubmitIncidentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    region: '',
    district: '',
    date: new Date().toISOString().split('T')[0],
    topic: 'Church Disruption',
    summary: '',
    details: '',
    sources: '',
    reporterContact: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.region || !formData.summary) {
      showToast('Please fill in the state/region and incident summary', 'info');
      return;
    }
    setSubmitted(true);
    showToast('Incident submitted for verification!');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-red-50/50 dark:bg-red-950/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base">🚨</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Submit a Persecution Incident
              </h3>
            </div>
            <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
              Secure intake for legal aid, intercession, and 5-Whys root cause analysis
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
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 text-2xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Incident Report Received
              </h4>
              <p className="text-xs text-muted dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Our verification team and legal cell will review the submission. Once cross-referenced with local contacts, the root cause analysis will be published to the live repository.
              </p>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-left text-xs font-mono">
                <p><strong>State:</strong> {formData.region}</p>
                <p><strong>Topic:</strong> {formData.topic}</p>
                <p><strong>Summary:</strong> {formData.summary}</p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-primary/90"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    State / Region *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Uttar Pradesh, Chhattisgarh"
                    value={formData.region}
                    onChange={e => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    District / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bastar, Indore, Azamgarh"
                    value={formData.district}
                    onChange={e => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Date of Incident
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Category Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={e => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Church Disruption">Church Disruption</option>
                    <option value="Anti-Conversion Allegations">Anti-Conversion Allegations</option>
                    <option value="Mob Violence">Mob Violence</option>
                    <option value="Social Boycott">Social Boycott</option>
                    <option value="Illegal Detention">Illegal Detention</option>
                    <option value="Vandalism">Vandalism</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Incident Summary (1-2 sentences) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Brief headline of what occurred..."
                  value={formData.summary}
                  onChange={e => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Detailed Narrative
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the sequence of events, persons involved, police response, and current urgent needs..."
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Evidence / News / Social Media Links
                </label>
                <input
                  type="text"
                  placeholder="Paste video links, news article URLs, or cloud drive evidence..."
                  value={formData.sources}
                  onChange={e => setFormData({ ...formData, sources: e.target.value })}
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
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 shadow-md"
                >
                  Submit Incident
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
