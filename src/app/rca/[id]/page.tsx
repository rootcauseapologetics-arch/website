'use client';

import React, { use } from 'react';
import DetailPageTemplate, { TocItem, RelatedItem } from '@/components/templates/DetailPageTemplate';
import FiveWhysVisualizer from '@/components/rca/FiveWhysVisualizer';
import { RCA_DATA } from '@/lib/unified-mock-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function RCADetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const item = RCA_DATA.find((r) => r.id === resolvedParams.id) || RCA_DATA[0];
  const related = RCA_DATA.find((r) => r.id === item.relatedId) || RCA_DATA[1];

  const tocItems: TocItem[] = [
    { id: 'claim', label: 'The Claim' },
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
        { label: 'RCA Library', href: '/rca' },
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
      {/* 1. The Claim */}
      <section id="claim" className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E74C3C]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            The Skeptical Claim
          </h2>
        </div>
        <div className="p-5 bg-[#071E2D] rounded-xl border border-[#143B5C] space-y-2">
          <p className="text-sm sm:text-base text-white/90 italic font-serif leading-relaxed">
            &ldquo;{item.claim.replace('The claim: ', '').split('. The root cause')[0]}&rdquo;
          </p>
          <div className="text-xs text-[#88CCD9] font-sans">
            <strong className="text-[#00B4FF]">Context: </strong>
            Popular objection in academic and cultural discourse seeking to undermine biblical authority.
          </div>
        </div>
      </section>

      {/* 2. Signature 5-Whys Causal Visualizer */}
      <section id="five-whys">
        <FiveWhysVisualizer steps={item.fiveWhys} />
      </section>

      {/* 3. Evidence & Sources */}
      <section id="evidence-sources" className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Evidence & Primary Sources
          </h2>
        </div>
        <ul className="space-y-3 pt-1">
          {item.evidenceSources.map((source, idx) => (
            <li key={idx} className="flex items-start gap-3 p-3 bg-[#071E2D] rounded-xl border border-[#143B5C] text-xs sm:text-sm text-[#88CCD9]">
              <span className="text-[#00B4FF] font-bold mt-0.5">&rarr;</span>
              <div>
                <span className="text-white font-semibold">{source.title}</span>
                <span className="text-[#88CCD9]/70 ml-2 font-mono text-xs">({source.authorOrSource})</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. RCA Response */}
      <section id="rca-response" className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Biblical & Philosophical Response
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#88CCD9] leading-relaxed pt-1 bg-[#071E2D] p-5 rounded-xl border border-[#143B5C]">
          {item.rcaResponse}
        </p>
      </section>

      {/* 5. Scripture / References */}
      <section id="scripture-references" className="bg-[#0A243A] border border-[#143B5C] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center gap-2 border-b border-[#143B5C] pb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F39C12]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Scripture & Biblical Cross-References
          </h2>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap pt-1">
          {item.scriptureReferences.map((ref) => (
            <span
              key={ref}
              className="px-4 py-2 rounded-xl bg-[#071E2D] border border-[#143B5C] text-[#00B4FF] text-xs font-bold hover:border-[#00B4FF] transition-all shadow-sm"
            >
              {ref}
            </span>
          ))}
        </div>
      </section>
    </DetailPageTemplate>
  );
}
