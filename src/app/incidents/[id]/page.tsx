'use client';

import React, { use, useState } from 'react';
import DetailPageTemplate, { TocItem, RelatedItem } from '@/components/templates/DetailPageTemplate';
import { INCIDENT_DATA, RCA_DATA } from '@/lib/unified-mock-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function IncidentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const incident = INCIDENT_DATA.find((i) => i.id === resolvedParams.id) || INCIDENT_DATA[0];
  const [prayed, setPrayed] = useState(false);
  const [prayerCount, setPrayerCount] = useState(incident.prayerCount);

  const handlePray = () => {
    if (!prayed) {
      setPrayerCount((c) => c + 1);
      setPrayed(true);
    } else {
      setPrayerCount((c) => c - 1);
      setPrayed(false);
    }
  };

  const relatedRca = RCA_DATA.find((r) => r.id === incident.relatedRcaId) || RCA_DATA[8];

  const tocItems: TocItem[] = [
    { id: 'facts', label: 'Incident Facts' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'sources', label: 'Sources & Proof' },
    { id: 'rca-analysis', label: 'RCA Analysis' },
    { id: 'prayer', label: 'Prayer & Action' },
  ];

  const relatedItem: RelatedItem = {
    id: relatedRca.id,
    title: relatedRca.title,
    date: relatedRca.publishedAt,
    image: relatedRca.image,
    href: `/rca/${relatedRca.id}`,
  };

  return (
    <DetailPageTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Persecution Incidents', href: '/incidents' },
        { label: incident.title },
      ]}
      badge={{
        text: incident.severity,
        type: incident.severity.toLowerCase() as 'high' | 'medium' | 'low',
      }}
      title={incident.title}
      leadSummary={incident.description}
      authorOrMeta={{
        location: incident.location,
        date: incident.publishedAt,
        status: incident.status,
      }}
      image={incident.image}
      actions={[
        {
          label: prayed ? `Praying (${prayerCount})` : `Pray / Take Action (${prayerCount})`,
          primary: true,
          onClick: handlePray,
          icon: (
            <svg className="w-3.5 h-3.5" fill={prayed ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          ),
        },
      ]}
      tocItems={tocItems}
      relatedItem={relatedItem}
    >
      {/* 1. Incident Facts */}
      <section id="facts" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Incident Facts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Location:</span>
            <span className="font-semibold text-white">{incident.location}</span>
          </div>
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Perpetrators:</span>
            <span className="font-semibold text-white">{incident.perpetrators}</span>
          </div>
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Victims:</span>
            <span className="font-semibold text-white">{incident.victims}</span>
          </div>
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Status:</span>
            <span className="font-semibold text-[#00B4FF]">{incident.status}</span>
          </div>
        </div>
      </section>

      {/* 2. Timeline */}
      <section id="timeline" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E74C3C]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Timeline
          </h2>
        </div>

        <div className="space-y-3 pt-1">
          {incident.timeline.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-[#071E2D] rounded-lg border border-[#143B5C]">
              <span className="px-2 py-0.5 bg-[#082A44] border border-[#00B4FF]/30 text-[#00B4FF] font-mono text-[11px] rounded shrink-0">
                {item.date}
              </span>
              <p className="text-xs text-[#88CCD9] font-medium pt-0.5">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RCA Analysis */}
      <section id="rca-analysis" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            RCA Analysis
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#88CCD9] leading-relaxed pt-1">
          {incident.rcaAnalysis}
        </p>
      </section>

      {/* 4. Sources & Proof */}
      <section id="sources" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Sources & Verified Reports
          </h2>
        </div>
        <ul className="space-y-2 pt-1 text-xs text-[#88CCD9]">
          {incident.sources.map((src, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-[#00B4FF]">&rarr;</span>
              <span className="text-white hover:text-[#00B4FF] cursor-pointer transition-colors font-medium">
                {src}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Prayer Points */}
      <section id="prayer" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F39C12]" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Prayer Points
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#00B4FF]">{prayerCount} Believers Praying</span>
        </div>
        <ul className="space-y-2.5 pt-1">
          {incident.prayerPoints.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[#88CCD9]">
              <span className="text-[#F39C12] mt-0.5">&#10022;</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </section>
    </DetailPageTemplate>
  );
}
