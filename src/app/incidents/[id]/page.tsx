import React from 'react';
import { notFound } from 'next/navigation';
import { getIncidentById } from '@/lib/incident-data';
import { IncidentDetailView } from '@/components/incidents/IncidentDetailView';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function IncidentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const incident = getIncidentById(id);

  if (!incident) {
    notFound();
  }

  return <IncidentDetailView incident={incident} />;
}
