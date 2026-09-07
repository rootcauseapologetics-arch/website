'use client';

import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: 'checkbox' | 'radio';
  options: FilterOption[];
}

interface FilterSidebarProps {
  groups: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string, checked: boolean, isRadio?: boolean) => void;
  onReset: () => void;
  className?: string;
}

export default function FilterSidebar({
  groups,
  selectedFilters,
  onFilterChange,
  onReset,
  className = '',
}: FilterSidebarProps) {
  return (
    <aside className={`bg-[#0A243A] border border-[#143B5C] rounded-xl p-5 space-y-6 ${className}`}>
      <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
        <h3 className="text-sm font-bold tracking-tight text-white uppercase">
          Filter Results
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-[#00B4FF] hover:underline font-medium"
        >
          Reset
        </button>
      </div>

      {groups.map((group) => (
        <div key={group.id} className="space-y-3">
          <h4 className="text-xs font-semibold text-[#88CCD9] uppercase tracking-wider">
            {group.title}
          </h4>
          <div className="space-y-2">
            {group.options.map((opt) => {
              const isChecked = selectedFilters[group.id]?.includes(opt.id) || false;
              return (
                <label
                  key={opt.id}
                  className="flex items-center justify-between text-xs text-white/90 hover:text-[#00B4FF] cursor-pointer group select-none py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type={group.type === 'radio' ? 'radio' : 'checkbox'}
                      name={group.id}
                      checked={isChecked}
                      onChange={(e) =>
                        onFilterChange(group.id, opt.id, e.target.checked, group.type === 'radio')
                      }
                      className="w-3.5 h-3.5 rounded bg-[#071E2D] border-[#143B5C] text-[#00B4FF] focus:ring-0 focus:ring-offset-0 accent-[#00B4FF] cursor-pointer"
                    />
                    <span className="group-hover:text-white transition-colors">
                      {opt.label}
                    </span>
                  </div>
                  {opt.count !== undefined && (
                    <span className="text-[11px] text-[#88CCD9]/60 font-mono">
                      ({opt.count})
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </div>
      ))}

      <div className="pt-2">
        <button
          onClick={onReset}
          className="w-full py-2 bg-[#071E2D] hover:bg-[#082A44] text-[#88CCD9] hover:text-[#00B4FF] text-xs font-semibold rounded-lg border border-[#143B5C] transition-all"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
}
