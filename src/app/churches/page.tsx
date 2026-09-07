'use client';

import React from 'react';
import ListingPageTemplate from '@/components/templates/ListingPageTemplate';
import { CHURCH_DATA } from '@/lib/unified-mock-data';
import { CardData } from '@/components/templates/UniversalCard';
import { FilterGroup } from '@/components/templates/FilterSidebar';

export default function ChurchesPage() {
  const cards: CardData[] = CHURCH_DATA.map((ch) => ({
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
    actionText: 'View Details',
  }));

  const categoryPills = [
    { id: 'all', label: 'All' },
    { id: 'non-denominational', label: 'Non-Denominational' },
    { id: 'baptist', label: 'Baptist' },
    { id: 'pentecostal', label: 'Pentecostal' },
    { id: 'presbyterian', label: 'Presbyterian' },
  ];

  const filterGroups: FilterGroup[] = [
    {
      id: 'topic',
      title: 'Denomination',
      type: 'checkbox',
      options: [
        { id: 'Non-Denominational', label: 'Non-Denominational', count: 18 },
        { id: 'Baptist', label: 'Baptist', count: 14 },
        { id: 'Pentecostal', label: 'Pentecostal', count: 10 },
        { id: 'Presbyterian', label: 'Presbyterian', count: 8 },
        { id: 'Other', label: 'Other', count: 7 },
      ],
    },
    {
      id: 'country',
      title: 'Region',
      type: 'checkbox',
      options: [
        { id: 'USA', label: 'North America', count: 24 },
        { id: 'Kenya', label: 'Africa', count: 8 },
        { id: 'Asia', label: 'Asia', count: 12 },
        { id: 'Europe', label: 'Europe', count: 4 },
      ],
    },
    {
      id: 'dateRange',
      title: 'Church Size',
      type: 'radio',
      options: [
        { id: 'all', label: 'Any Size' },
        { id: 'small', label: '1 - 100 members' },
        { id: 'medium', label: '100 - 500 members' },
        { id: 'large', label: '500+ members' },
      ],
    },
  ];

  return (
    <ListingPageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Church Zone' }]}
      title="Churches"
      subtitle="Faithful churches. Stronger communities."
      items={cards}
      categoryPills={categoryPills}
      filterGroups={filterGroups}
      showSidebar={true}
    />
  );
}
