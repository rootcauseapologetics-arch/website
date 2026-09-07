'use client';

import React, { use } from 'react';
import DetailPageTemplate, { TocItem, RelatedItem } from '@/components/templates/DetailPageTemplate';
import { CHURCH_DATA } from '@/lib/unified-mock-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ChurchDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const church = CHURCH_DATA.find((c) => c.id === resolvedParams.id) || CHURCH_DATA[0];

  const tocItems: TocItem[] = [
    { id: 'about', label: 'About' },
    { id: 'faith-declaration', label: 'Faith Declaration' },
    { id: 'service-times', label: 'Service Times' },
    { id: 'location-contact', label: 'Location & Contact' },
  ];

  const otherChurch = CHURCH_DATA.find((c) => c.id !== church.id) || CHURCH_DATA[1];
  const relatedItem: RelatedItem = {
    id: otherChurch.id,
    title: otherChurch.name,
    date: otherChurch.location,
    image: otherChurch.image,
    href: `/churches/${otherChurch.id}`,
  };

  return (
    <DetailPageTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Church Zone', href: '/churches' },
        { label: church.name },
      ]}
      badge={{
        text: church.denomination,
        type: 'default',
      }}
      title={church.name}
      leadSummary={church.description}
      authorOrMeta={{
        location: church.location,
      }}
      tags={church.tags}
      image={church.image}
      actions={[
        {
          label: 'Visit Website',
          primary: true,
          href: church.website,
          icon: (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          ),
        },
      ]}
      tocItems={tocItems}
      relatedItem={relatedItem}
    >
      {/* 1. About */}
      <section id="about" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            About the Church
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#88CCD9] leading-relaxed pt-1">
          {church.description}
        </p>
      </section>

      {/* 2. Faith Declaration */}
      <section id="faith-declaration" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Faith Declaration
          </h2>
        </div>
        <ul className="space-y-3 pt-1">
          {church.faithDeclaration.map((stmt, idx) => (
            <li key={idx} className="flex items-start gap-3 p-3 bg-[#071E2D] rounded-lg border border-[#143B5C] text-xs text-[#88CCD9]">
              <span className="w-5 h-5 rounded-full bg-[#082A44] border border-[#00B4FF]/40 text-[#00B4FF] flex items-center justify-center font-bold shrink-0 text-[10px]">
                {idx + 1}
              </span>
              <span className="pt-0.5">{stmt}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Service Times */}
      <section id="service-times" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F39C12]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Service Times & Schedule
          </h2>
        </div>
        <div className="p-4 bg-[#071E2D] rounded-lg border border-[#143B5C] text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#88CCD9]">Sunday Gatherings:</span>
            <span className="font-bold text-white">9:00 AM • 11:00 AM • 6:00 PM</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#143B5C]/60">
            <span className="text-[#88CCD9]">Midweek Prayer & Study:</span>
            <span className="font-bold text-white">Wednesday 7:00 PM</span>
          </div>
        </div>
      </section>

      {/* 4. Location & Contact */}
      <section id="location-contact" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Location & Contact
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Address:</span>
            <span className="font-semibold text-white">{church.address}</span>
          </div>
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Phone:</span>
            <span className="font-semibold text-white">{church.phone}</span>
          </div>
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Email:</span>
            <span className="font-semibold text-white">{church.email}</span>
          </div>
          <div className="p-3.5 bg-[#071E2D] rounded-lg border border-[#143B5C]">
            <span className="text-[#88CCD9] block mb-1">Official Website:</span>
            <span className="font-semibold text-[#00B4FF]">{church.website}</span>
          </div>
        </div>
      </section>
    </DetailPageTemplate>
  );
}
