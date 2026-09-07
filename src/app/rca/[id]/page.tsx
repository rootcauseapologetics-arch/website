'use client';

import React, { use } from 'react';
import Link from 'next/link';
import DetailPageTemplate, { TocItem, RelatedItem } from '@/components/templates/DetailPageTemplate';
import { RCA_DATA } from '@/lib/unified-mock-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function RCADetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const item = RCA_DATA.find((r) => r.id === resolvedParams.id) || RCA_DATA[0];
  const related = RCA_DATA.find((r) => r.id === item.relatedId) || RCA_DATA[1];

  const tocItems: TocItem[] = [
    { id: 'claim', label: 'Claim' },
    { id: 'five-whys', label: 'The 5 Whys' },
    { id: 'evidence-sources', label: 'Evidence & Sources' },
    { id: 'rca-response', label: 'RCA Response' },
    { id: 'scripture-references', label: 'Scripture / References' },
  ];

  const relatedItem: RelatedItem = {
    id: related.id,
    title: related.title,
    date: related.publishedAt,
    image: related.image,
    href: `/rca/${related.id}`,
  };

  return (
    <DetailPageTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RCA', href: '/' },
        { label: item.title },
      ]}
      badge={{
        text: item.category,
        type: 'default',
      }}
      title={item.title}
      leadSummary={item.claim}
      authorOrMeta={{
        name: item.author.name,
        avatar: item.author.avatar,
        date: item.publishedAt,
      }}
      tags={item.tags}
      image={item.image}
      tocItems={tocItems}
      relatedItem={relatedItem}
    >
      {/* 1. Claim Box */}
      <section id="claim" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E74C3C]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Claim
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#88CCD9] leading-relaxed italic bg-[#071E2D] p-4 rounded-lg border border-[#143B5C]">
          &ldquo;{item.claim.replace('The claim: ', '').split('. The root cause')[0]}&rdquo;
        </p>
      </section>

      {/* 2. Root Cause / The 5 Whys */}
      <section id="five-whys" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Root Cause / The 5 Whys
            </h2>
          </div>
          <span className="text-xs text-[#88CCD9] font-mono">5 Steps Analysis</span>
        </div>

        <div className="space-y-3 pt-2">
          {item.fiveWhys.map((step) => {
            const isRoot = step.level === 5;
            return (
              <div
                key={step.level}
                className={`p-4 rounded-xl border transition-all ${
                  isRoot
                    ? 'bg-[#0E304C] border-[#00B4FF] shadow-[0_0_15px_rgba(0,180,255,0.15)]'
                    : 'bg-[#071E2D] border-[#143B5C]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                      isRoot ? 'bg-[#00B4FF] text-[#071E2D]' : 'bg-[#082A44] text-[#88CCD9] border border-[#143B5C]'
                    }`}
                  >
                    {step.level}
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-white">
                      {step.question}
                    </p>
                    <p className={`text-xs ${isRoot ? 'text-[#00B4FF] font-medium' : 'text-[#88CCD9]'}`}>
                      &rarr; {step.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Evidence & Sources */}
      <section id="evidence-sources" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Evidence & Sources
          </h2>
        </div>
        <ul className="space-y-2.5 pt-1">
          {item.evidenceSources.map((source, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#88CCD9]">
              <span className="text-[#00B4FF] mt-1">•</span>
              <div>
                <span className="text-white font-medium">{source.title}</span>
                <span className="text-[#88CCD9]/70 ml-1.5 font-mono text-xs">({source.authorOrSource})</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. RCA Response */}
      <section id="rca-response" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            RCA Response
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#88CCD9] leading-relaxed pt-1">
          {item.rcaResponse}
        </p>
      </section>

      {/* 5. Scripture / References */}
      <section id="scripture-references" className="bg-[#0A243A] border border-[#143B5C] rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F39C12]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Scripture / References
          </h2>
        </div>
        <div className="flex items-center gap-2 flex-wrap pt-1">
          {item.scriptureReferences.map((ref) => (
            <span
              key={ref}
              className="px-3 py-1.5 rounded-lg bg-[#071E2D] border border-[#143B5C] text-[#00B4FF] text-xs font-semibold hover:border-[#00B4FF] transition-all"
            >
              {ref}
            </span>
          ))}
        </div>
      </section>
    </DetailPageTemplate>
  );
}
