'use client';

import React from 'react';
import ListingPageTemplate from '@/components/templates/ListingPageTemplate';
import { INCIDENT_DATA } from '@/lib/unified-mock-data';
import { CardData } from '@/components/templates/UniversalCard';
import { FilterGroup } from '@/components/templates/FilterSidebar';

export default function IncidentsPage() {
  const cards: CardData[] = INCIDENT_DATA.map((inc) => ({
    id: inc.id,
    href: `/incidents/${inc.id}`,
    badgeText: inc.severity,
    badgeType: inc.severity.toLowerCase() as 'high' | 'medium' | 'low',
    title: inc.title,
    subtitleOrClaim: inc.description,
    authorOrMeta: {
      location: inc.country,
      date: inc.publishedAt,
      status: inc.status,
    },
    image: inc.image,
    actionText: 'View Details',
  }));

  const categoryPills = [
    { id: 'all', label: 'All' },
    { id: 'china', label: 'China' },
    { id: 'nigeria', label: 'Nigeria' },
    { id: 'pakistan', label: 'Pakistan' },
    { id: 'india', label: 'India' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'high', label: 'High Severity' },
  ];

  const filterGroups: FilterGroup[] = [
    {
      id: 'country',
      title: 'Country',
      type: 'checkbox',
      options: [
        { id: 'India', label: 'India', count: 12 },
        { id: 'Nigeria', label: 'Nigeria', count: 8 },
        { id: 'China', label: 'China', count: 6 },
        { id: 'Pakistan', label: 'Pakistan', count: 4 },
        { id: 'Other', label: 'Other', count: 6 },
      ],
    },
    {
      id: 'status',
      title: 'Status',
      type: 'checkbox',
      options: [
        { id: 'Ongoing', label: 'Ongoing', count: 14 },
        { id: 'Resolved', label: 'Resolved', count: 22 },
      ],
    },
    {
      id: 'severity',
      title: 'Severity',
      type: 'checkbox',
      options: [
        { id: 'High', label: 'High', count: 12 },
        { id: 'Medium', label: 'Medium', count: 16 },
        { id: 'Low', label: 'Low', count: 8 },
      ],
    },
    {
      id: 'dateRange',
      title: 'Date Range',
      type: 'radio',
      options: [
        { id: '7d', label: 'Last 7 days', count: 3 },
        { id: '30d', label: 'Last 30 days', count: 11 },
        { id: '3m', label: 'Last 3 months', count: 18 },
      ],
    },
  ];

  return (
    <ListingPageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Persecution Incidents' }]}
      title="Persecution Incidents"
      subtitle="Real people. Real risk. Real faith."
      items={cards}
      categoryPills={categoryPills}
      filterGroups={filterGroups}
      showSidebar={true}
    />
  );
}
