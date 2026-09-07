'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';
import MobileBottomNav from '@/components/navigation/MobileBottomNav';
import Footer from '@/components/navigation/Footer';
import UniversalCard, { CardData } from '@/components/templates/UniversalCard';
import { RCA_DATA, INCIDENT_DATA, CHURCH_DATA } from '@/lib/unified-mock-data';

export default function HomePage() {
  const featuredRca = RCA_DATA[0];
  const rcaHighlights = RCA_DATA.slice(1, 4);
  const incidentHighlights = INCIDENT_DATA.slice(0, 3);
  const churchHighlights = CHURCH_DATA.slice(0, 3);

  const rcaCards: CardData[] = rcaHighlights.map((item) => ({
    id: item.id,
    href: `/rca/${item.id}`,
    badgeText: item.category,
    badgeType: 'default',
    title: item.title,
    subtitleOrClaim: item.claim,
    authorOrMeta: {
      name: item.author.name,
      avatar: item.author.avatar,
      date: item.publishedAt,
    },
    tags: item.tags,
    image: item.image,
    actionText: 'Read Analysis',
  }));

  const incidentCards: CardData[] = incidentHighlights.map((inc) => ({
    id: inc.id,
    href: `/incidents/${inc.id}`,
    badgeText: inc.severity,
    badgeType: inc.severity.toLowerCase() as 'high' | 'medium' | 'low',
    title: inc.title,
    subtitleOrClaim: inc.description,
    authorOrMeta: {
      location: inc.location,
      date: inc.publishedAt,
      status: inc.status,
    },
    image: inc.image,
    actionText: 'View Incident',
  }));

  const churchCards: CardData[] = churchHighlights.map((ch) => ({
    id: ch.id,
    href: `/churches/${ch.id}`,
    badgeText: ch.denomination,
    badgeType: 'default',
    title: ch.name,
    subtitleOrClaim: `${ch.description} | Service: ${ch.serviceTimes}`,
    authorOrMeta: {
      location: ch.location,
    },
    tags: ch.tags,
    image: ch.image,
    actionText: 'View Church',
  }));

  const frameworkSteps = [
    {
      num: '01',
      title: 'Analyze Skeptical Claim',
      desc: 'Deconstruct cultural and academic assertions down to their foundational presuppositions.',
      badge: 'Deconstruction',
    },
    {
      num: '02',
      title: 'Trace The 5 Whys',
      desc: 'Probe successive causal layers to uncover latent worldview assumptions and hidden biases.',
      badge: 'Root Cause',
    },
    {
      num: '03',
      title: 'Internal Critique',
      desc: 'Demonstrate the internal incoherence and moral bankruptcy of autonomous human philosophy.',
      badge: 'Critique',
    },
    {
      num: '04',
      title: 'Biblical Revelation & Gospel',
      desc: 'Exalt Christ and God’s revealed truth as the only necessary precondition for reason, morality, and hope.',
      badge: 'Gospel Climax',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071E2D] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 pb-20 md:pb-16">
        
        {/* 1. HERO SECTION (Front-Door Entry) */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#082A44] via-[#0A2E4C] to-[#071E2D] border border-[#143B5C] p-6 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial-at-c from-[#00B4FF]/15 via-transparent to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 text-[#00B4FF] text-xs font-bold uppercase tracking-wider">
                <span>Presuppositional Intelligence & Persecution Intelligence</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Root Cause <br />
                <span className="text-[#00B4FF]">Apologetics</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#88CCD9]">
                Investigate. Understand. Respond.
              </p>
              <p className="text-sm sm:text-base text-[#88CCD9]/90 max-w-2xl leading-relaxed">
                In-depth research, biblical analysis, and real-world intelligence for the issues that challenge Christian faith today. We drill beneath surface rhetoric to expose foundational worldview presuppositions.
              </p>

              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <Link
                  href="/rca"
                  className="px-6 py-3 bg-[#00B4FF] hover:bg-[#33C3FF] text-[#071E2D] font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(0,180,255,0.35)] transition-all flex items-center gap-2"
                >
                  <span>Explore RCA Library</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/incidents"
                  className="px-6 py-3 bg-[#082A44] hover:bg-[#0E304C] text-white font-bold text-sm rounded-xl border border-[#143B5C] hover:border-[#00B4FF]/50 transition-all flex items-center gap-2"
                >
                  <span>Persecution Watch</span>
                  <span className="w-2 h-2 rounded-full bg-[#E74C3C] animate-pulse" />
                </Link>
              </div>
            </div>

            {/* Glowing Shield & Book Graphic */}
            <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
              <div className="relative w-56 h-56 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#00B4FF]/25 blur-3xl animate-pulse" />
                <div className="w-44 h-44 rounded-2xl bg-[#0A243A] border-2 border-[#00B4FF] shadow-[0_0_40px_rgba(0,180,255,0.45)] flex flex-col items-center justify-center p-5 text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-5xl font-black text-white">
                    R<span className="text-[#00B4FF]">+</span>
                  </span>
                  <span className="text-xs font-bold text-[#88CCD9] uppercase tracking-widest mt-1.5">
                    Apologetics
                  </span>
                  <div className="w-10 h-0.5 bg-[#00B4FF] my-2.5" />
                  <span className="text-[10px] text-[#88CCD9]/80 font-mono">5-Whys Engine</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED INVESTIGATION SPOTLIGHT */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF]" />
              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                Featured Investigation
              </h2>
            </div>
            <span className="text-xs text-[#00B4FF] font-semibold">Spotlight Breakdown</span>
          </div>

          <div className="bg-[#082A44] border border-[#143B5C] rounded-2xl p-6 sm:p-8 hover:border-[#00B4FF]/60 transition-all shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 h-60 rounded-xl overflow-hidden border border-[#143B5C] relative">
                <img
                  src={featuredRca.image}
                  alt={featuredRca.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-[#00B4FF]/20 text-[#00B4FF] border border-[#00B4FF]/40 uppercase tracking-wider backdrop-blur-md">
                    {featuredRca.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {featuredRca.title}
                </h3>
                
                <div className="p-3.5 bg-[#071E2D] rounded-xl border border-[#143B5C] space-y-1.5">
                  <span className="text-[11px] font-bold text-[#E74C3C] uppercase tracking-wider">
                    The Skeptical Claim:
                  </span>
                  <p className="text-xs sm:text-sm text-[#88CCD9] italic">
                    &ldquo;{featuredRca.claim.replace('The claim: ', '').split('. The root cause')[0]}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[#88CCD9] pt-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredRca.author.avatar}
                      alt={featuredRca.author.name}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-[#00B4FF]/40"
                    />
                    <span className="font-semibold text-white">{featuredRca.author.name}</span>
                    <span>•</span>
                    <span>{featuredRca.publishedAt}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {featuredRca.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#071E2D] text-[#88CCD9] text-[10px] border border-[#143B5C]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/rca/${featuredRca.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00B4FF] hover:bg-[#33C3FF] text-[#071E2D] font-bold text-xs rounded-xl transition-all shadow-md"
                >
                  <span>Read 5-Whys Analysis</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. RCA WORLDVIEW LIBRARY HIGHLIGHTS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                RCA Worldview Library
              </h2>
              <p className="text-xs text-[#88CCD9] mt-0.5">
                Investigating science, culture, doctrine, and secular philosophies.
              </p>
            </div>
            <Link
              href="/rca"
              className="text-xs font-bold text-[#00B4FF] hover:underline flex items-center gap-1"
            >
              <span>View All ({RCA_DATA.length})</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rcaCards.map((card) => (
              <UniversalCard key={card.id} data={card} layout="grid" />
            ))}
          </div>
        </section>

        {/* 4. PERSECUTION WATCH FEED */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E74C3C] animate-ping" />
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Persecution Watch
                </h2>
                <p className="text-xs text-[#88CCD9] mt-0.5">
                  Verified incident intelligence, legal timelines, and active prayer alerts.
                </p>
              </div>
            </div>
            <Link
              href="/incidents"
              className="text-xs font-bold text-[#00B4FF] hover:underline flex items-center gap-1"
            >
              <span>All Incident Reports &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incidentCards.map((card) => (
              <UniversalCard key={card.id} data={card} layout="grid" />
            ))}
          </div>
        </section>

        {/* 5. CHURCH ZONE DIRECTORY SHOWCASE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#143B5C] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Church Zone Directory
              </h2>
              <p className="text-xs text-[#88CCD9] mt-0.5">
                Faithful local churches committed to expository preaching and sound doctrine.
              </p>
            </div>
            <Link
              href="/churches"
              className="text-xs font-bold text-[#00B4FF] hover:underline flex items-center gap-1"
            >
              <span>Explore Directory &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {churchCards.map((card) => (
              <UniversalCard key={card.id} data={card} layout="grid" />
            ))}
          </div>
        </section>

        {/* 6. WHY RCA? / THE 4-STAGE METHODOLOGY */}
        <section className="bg-[#082A44] border border-[#143B5C] rounded-2xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 bg-[#00B4FF]/10 text-[#00B4FF] border border-[#00B4FF]/30 text-xs font-bold rounded-full uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The 4-Stage Presuppositional Method
            </h2>
            <p className="text-xs sm:text-sm text-[#88CCD9]">
              Every RCA analysis employs a disciplined investigative framework to dismantle autonomous secular reasoning and exalt the coherence of biblical truth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {frameworkSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0A243A] border border-[#143B5C] hover:border-[#00B4FF]/60 rounded-xl p-5 space-y-3 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#00B4FF] font-mono">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold bg-[#071E2D] px-2 py-0.5 rounded border border-[#143B5C] text-[#88CCD9] uppercase">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#88CCD9] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
