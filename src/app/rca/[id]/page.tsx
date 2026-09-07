import React from 'react';
import { notFound } from 'next/navigation';
import { getRCAEntryById, getRelatedRCAEntries } from '@/lib/rca-data';
import { RCADetailView } from '@/components/rca/RCADetailView';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RCADetailPage({ params }: PageProps) {
  const { id } = await params;
  const entry = getRCAEntryById(id);

  if (!entry) {
    notFound();
  }

  const related = getRelatedRCAEntries(entry.id);

  return <RCADetailView entry={entry} relatedEntries={related} />;
}
