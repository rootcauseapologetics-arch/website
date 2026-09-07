'use client';

import React from 'react';

interface ChurchGateBannerProps {
  isVerified: boolean;
  onToggleSimulate: () => void;
}

export const ChurchGateBanner: React.FC<ChurchGateBannerProps> = ({ isVerified, onToggleSimulate }) => {
  return (
    <div className={`p-6 rounded-2xl border mb-8 transition-all ${
      isVerified
        ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
        : 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800'
    }`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <span className="text-2xl">{isVerified ? '🛡️' : '🔒'}</span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {isVerified ? 'Church Zone Verified Access (Active)' : 'Gated Security Layer Active'}
              </h3>
              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                isVerified 
                  ? 'bg-green-600 text-white' 
                  : 'bg-amber-600 text-white'
              }`}>
                {isVerified ? 'Admin Approved' : 'Requires Sign-in & Admin Review'}
              </span>
            </div>
            <p className="text-xs text-muted dark:text-slate-400 mt-1 max-w-2xl">
              {isVerified
                ? 'You are viewing verified church congregation and security network details. Sensitive contact data is securely protected.'
                : 'To protect pastors and congregations in sensitive districts, the Church Directory is gated. New members must be manually verified by the administrative review board.'}
            </p>
          </div>
        </div>

        {/* Development / Testing Simulator Toggle */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            onClick={onToggleSimulate}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              isVerified
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                : 'bg-primary dark:bg-cyan-500 text-white hover:opacity-90'
            }`}
          >
            {isVerified ? 'Simulate Unverified User' : '⚡ Simulate Approved Member'}
          </button>
        </div>
      </div>
    </div>
  );
};
