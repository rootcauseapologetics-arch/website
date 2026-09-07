'use client';

import React from 'react';
import ListingPageTemplate from '@/components/templates/ListingPageTemplate';
import { RCA_DATA } from '@/lib/unified-mock-data';
import { CardData } from '@/components/templates/UniversalCard';
import { FilterGroup } from '@/components/templates/FilterSidebar';

export default function RCALibraryPage() {
  const cards: CardData[] = RCA_DATA.map((item) => ({
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
    actionText: 'View RCA',
  }));

  const categoryPills = [
    { id: 'all', label: 'All RCA' },
    { id: 'apologetics', label: 'Apologetics' },
    { id: 'science & faith', label: 'Science & Faith' },
    { id: 'culture & society', label: 'Culture & Society' },
    { id: 'faith & doctrine', label: 'Faith & Doctrine' },
  ];

  const filterGroups: FilterGroup[] = [
    {
      id: 'topic',
      title: 'Topic',
      type: 'checkbox',
      options: [
        { id: 'Apologetics', label: 'Apologetics', count: 12 },
        { id: 'Science & Faith', label: 'Science & Faith', count: 8 },
        { id: 'Culture & Society', label: 'Culture & Society', count: 10 },
        { id: 'Faith & Doctrine', label: 'Faith & Doctrine', count: 9 },
        { id: 'Other', label: 'Other', count: 3 },
      ],
    },
    {
      id: 'author',
      title: 'Author',
      type: 'checkbox',
      options: [
        { id: 'RCA Team', label: 'RCA Team', count: 21 },
        { id: 'Dr. James Whitfield', label: 'Dr. James Whitfield', count: 8 },
        { id: 'Dr. Sarah Collins', label: 'Dr. Sarah Collins', count: 6 },
        { id: 'Dr. Michael Reeves', label: 'Dr. Michael Reeves', count: 4 },
      ],
    },
    {
      id: 'dateRange',
      title: 'Date Range',
      type: 'radio',
      options: [
        { id: '7d', label: 'Last 7 days', count: 4 },
        { id: '30d', label: 'Last 30 days', count: 15 },
        { id: '3m', label: 'Last 3 months', count: 26 },
        { id: '6m', label: 'Last 6 months', count: 34 },
      ],
    },
  ];

  return (
    <ListingPageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'RCA Library' }]}
      title="RCA Library"
      subtitle="In-depth analysis of key worldview issues, with biblical responses."
      items={cards}
      categoryPills={categoryPills}
      filterGroups={filterGroups}
      showSidebar={true}
    />
  );
}
