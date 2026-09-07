import { IncidentEntry } from '@/types/incident';

export const MOCK_INCIDENT_ENTRIES: IncidentEntry[] = [
  {
    id: 'inc-1',
    date: '2026-03-25',
    author: 'Legal & Field Verification Cell',
    topic: 'Anti-Conversion Allegations',
    region_state: 'Uttar Pradesh',
    district: 'Azamgarh',
    summary: 'Sunday worship service raided by local vigilante mob alleging forced conversions; pastor detained without preliminary enquiry.',
    incident_detail: 'On Sunday morning at approximately 10:30 AM, a peaceful gathering of 45 believers in a registered prayer hall was interrupted by an unauthorized group of 20 individuals. Local police arrived and detained Pastor Samuel and two elders under the UP Freedom of Religion Act without examining witness statements or establishing financial allurement.',
    root_cause: 'Misuse of Broad Anti-Conversion Statutes & Communal Polarization',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why did the disruption occur during regular prayer?',
        insight: 'Local non-state groups mobilized misinformation asserting that charity and prayer constitute unlawful conversion.'
      },
      {
        level: 2,
        question: 'Why did law enforcement detain the leadership without preliminary investigation?',
        insight: 'Local administrative pressure and fear of communal escalation lead officers to detain first and investigate later.'
      },
      {
        level: 3,
        question: 'Why are voluntary conversions portrayed as coercion or bribery?',
        insight: 'Majoritarian cultural anxiety views religious demographic shift as an existential threat to community identity.'
      },
      {
        level: 4,
        question: 'Why does the existing legal framework fail to protect peaceful worshippers?',
        insight: 'Vague statutory definitions of "allurement" enable bad-faith complaints by third parties with no direct standing.'
      },
      {
        level: 5,
        question: 'What is the root spiritual and structural reality?',
        insight: 'Fear of the liberating Gospel message that breaks caste hierarchies and grants equal dignity in Christ.'
      }
    ],
    source_type: 'police-fir',
    source_url: 'https://example.com/reports/up-azamgarh-incident-2026',
    source_attachments: [
      { type: 'fir', url: 'https://example.com/docs/fir_copy_redacted.pdf', caption: 'Certified FIR Copy (Bail Granted)' },
      { type: 'screenshot', url: 'https://example.com/docs/incident_video_frame.jpg', caption: 'Verified Hall CCTV Footage' }
    ],
    our_response: 'Churches in sensitive districts must maintain proper visitor logs, document volunteer testimonies of voluntary faith in writing, maintain local legal advocate contacts on speed dial, and strictly adhere to Section 41A CrPC guidelines during unauthorized police summons.',
    prayer_points: [
      'Pray for Pastor Samuel and his family for emotional peace and safety.',
      'Pray for the legal team filing the quashing petition in the Allahabad High Court.',
      'Pray that local law enforcement acts with constitutional impartiality.'
    ],
    pray_link: 'https://rootcauseapologetics.com/pray/inc-1',
    help_link: 'https://rootcauseapologetics.com/legal-aid/support-fund',
    verified: true,
    severity: 'high',
    created_at: '2026-03-25T11:00:00Z'
  },
  {
    id: 'inc-2',
    date: '2026-03-21',
    author: 'Tribal Advocacy Desk',
    topic: 'Social Boycott',
    region_state: 'Chhattisgarh',
    district: 'Bastar',
    summary: '14 Christian families denied drinking water from village borewells and banned from farming communal land following voluntary faith decision.',
    incident_detail: 'In a remote village in Bastar district, a local council resolution imposed a social and economic boycott on 14 tribal families who embraced Christianity over the past three years. The families were prohibited from purchasing groceries from local shops, drawing water, and burying their deceased on ancestral land.',
    root_cause: 'Traditional Gram Sabha Cultural Exclusivism & Tribal Hegemony',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why did the village council ban Christian families from water sources?',
        insight: 'To enforce cultural conformity and coerce families into renouncing their faith through economic starvation.'
      },
      {
        level: 2,
        question: 'Why is tribal identity viewed as incompatible with Christian faith?',
        insight: 'Outside political entities conflate tribal customs with non-Christian ritual participation.'
      },
      {
        level: 3,
        question: 'Why do local district authorities delay intervention?',
        insight: 'Remoteness of Bastar region and sensitivity surrounding PESA Act customary authority vs Fundamental Constitutional Rights.'
      },
      {
        level: 4,
        question: 'What is the constitutional conflict at play?',
        insight: 'Article 21 (Right to Water & Livelihood) and Article 25 (Freedom of Conscience) are overridden by unlawful vigilante resolutions.'
      },
      {
        level: 5,
        question: 'What is the root worldview reality?',
        insight: 'Spiritual animism and ancestor worship view departure from traditional rites as bringing village curses.'
      }
    ],
    source_type: 'first-hand',
    source_url: 'https://example.com/reports/chhattisgarh-bastar-boycott',
    source_attachments: [
      { type: 'image', url: 'https://example.com/docs/bastar_water_well.jpg', caption: 'Blocked community well with warning sign' }
    ],
    our_response: 'Coordinate immediate civil rights writ petition before the Bilaspur High Court; supply interim emergency water filtration units; engage local district magistrate through constitutional human rights memoranda.',
    prayer_points: [
      'Pray for endurance and provision of food/water for the 14 isolated families.',
      'Pray that the village headmen experience the love and forgiveness of Christ.',
      'Pray for safe burial land resolution.'
    ],
    pray_link: 'https://rootcauseapologetics.com/pray/inc-2',
    help_link: 'https://rootcauseapologetics.com/relief/chhattisgarh-tribal',
    verified: true,
    severity: 'critical',
    created_at: '2026-03-21T08:00:00Z'
  },
  {
    id: 'inc-3',
    date: '2026-03-18',
    author: 'Central India Legal Watch',
    topic: 'Church Disruption',
    region_state: 'Madhya Pradesh',
    district: 'Indore',
    summary: 'Rented hall prayer meeting disrupted by aggressive crowd chanting slogans; sound equipment damaged.',
    incident_detail: 'During an evening prayer fellowship at a rented private community hall in Indore, an unregistered mob entered without permission, disconnected power lines, and damaged audio equipment. Police arrived and peacefully dispersed the crowd, taking the pastor under protective custody.',
    root_cause: 'Misinformation regarding public property use for private worship',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why was the meeting targeted despite being inside a private hall?',
        insight: 'Loudspeakers and external sound carry outside, triggering neighborhood agitation.'
      },
      {
        level: 2,
        question: 'Why is permission demanded for private indoor meetings?',
        insight: 'Administrative circulars are misunderstood as requiring police NOC for ordinary prayer gatherings.'
      },
      {
        level: 3,
        question: 'What legal principle applies?',
        insight: 'Private prayer gatherings in rented spaces require no prior police permission unless public order or traffic is impeded.'
      },
      {
        level: 4,
        question: 'How can future meetings be safeguarded?',
        insight: 'Strict acoustic soundproofing, prior landlord written consent, and CC cameras installed at entry gates.'
      },
      {
        level: 5,
        question: 'What is the ultimate root resolution?',
        insight: 'Building proactive, friendly relations with immediate neighborhood residents through social service and quiet witness.'
      }
    ],
    source_type: 'news',
    source_url: 'https://example.com/news/mp-indore-disruption-march',
    our_response: 'Install interior acoustic sound dampening; ensure valid written rental lease agreements specify prayer usage; maintain CCTV coverage; avoid external loudspeakers.',
    prayer_points: [
      'Pray for the fellowship to find a stable, permanent worship venue.',
      'Pray for peace and reconciliation with neighboring shop owners.'
    ],
    pray_link: 'https://rootcauseapologetics.com/pray/inc-3',
    help_link: 'https://rootcauseapologetics.com/legal-aid/mp-cell',
    verified: true,
    severity: 'medium',
    created_at: '2026-03-18T18:00:00Z'
  }
];

export const getIncidentEntries = (): IncidentEntry[] => {
  return MOCK_INCIDENT_ENTRIES;
};

export const getIncidentById = (id: string): IncidentEntry | undefined => {
  return MOCK_INCIDENT_ENTRIES.find(inc => inc.id === id);
};

export const getIncidentStats = () => {
  return {
    totalReports: MOCK_INCIDENT_ENTRIES.length,
    verifiedCount: MOCK_INCIDENT_ENTRIES.filter(i => i.verified).length,
    statesCount: [...new Set(MOCK_INCIDENT_ENTRIES.map(i => i.region_state))].length,
    activePrayers: 1420
  };
};
