import { ChurchProfile } from '@/types/church';

export const MOCK_CHURCH_PROFILES: ChurchProfile[] = [
  {
    id: 'ch-1',
    name: 'Grace Covenant Fellowship',
    pastor_name: 'Rev. P. Abraham',
    region_state: 'Karnataka',
    city: 'Bengaluru (Koramangala)',
    denomination: 'Reformed / Presbyterian',
    size_range: '200 - 1000',
    languages: ['English', 'Kannada', 'Tamil'],
    verified_status: 'approved',
    safety_protocol_status: 'active',
    prayer_requests_count: 8,
    contact_email_masked: 'p***@gracecovenant.in',
    established_year: 2012
  },
  {
    id: 'ch-2',
    name: 'Bethesda Evangelical Church',
    pastor_name: 'Pastor D. Sharma',
    region_state: 'Uttar Pradesh',
    city: 'Varanasi',
    denomination: 'Evangelical',
    size_range: '50 - 200',
    languages: ['Hindi', 'Bhojpuri'],
    verified_status: 'approved',
    safety_protocol_status: 'active',
    prayer_requests_count: 15,
    contact_email_masked: 'v***@bethesda-up.org',
    established_year: 2018
  },
  {
    id: 'ch-3',
    name: 'New Life Christian Fellowship',
    pastor_name: 'Pastor M. Marandi',
    region_state: 'Jharkhand',
    city: 'Ranchi',
    denomination: 'Pentecostal',
    size_range: '200 - 1000',
    languages: ['Hindi', 'Santali', 'Nagpuri'],
    verified_status: 'approved',
    safety_protocol_status: 'active',
    prayer_requests_count: 12,
    contact_email_masked: 'r***@newlife-jh.org',
    established_year: 2008
  },
  {
    id: 'ch-4',
    name: 'Calvary Baptist Church',
    pastor_name: 'Elder K. Rao',
    region_state: 'Odisha',
    city: 'Bhubaneswar',
    denomination: 'Baptist',
    size_range: '50 - 200',
    languages: ['Odia', 'English', 'Telugu'],
    verified_status: 'approved',
    safety_protocol_status: 'active',
    prayer_requests_count: 6,
    contact_email_masked: 'b***@calvary-odisha.in',
    established_year: 2015
  },
  {
    id: 'ch-5',
    name: 'Living Waters Fellowship',
    pastor_name: 'Pastor J. Thomas',
    region_state: 'Maharashtra',
    city: 'Pune',
    denomination: 'Independent / Non-Denominational',
    size_range: '< 50',
    languages: ['Marathi', 'Hindi', 'English'],
    verified_status: 'approved',
    safety_protocol_status: 'active',
    prayer_requests_count: 4,
    contact_email_masked: 'p***@livingwaters.org',
    established_year: 2021
  }
];

export const getChurchProfiles = (): ChurchProfile[] => {
  return MOCK_CHURCH_PROFILES;
};

export const getChurchById = (id: string): ChurchProfile | undefined => {
  return MOCK_CHURCH_PROFILES.find(c => c.id === id);
};
