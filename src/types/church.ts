export type ChurchDenomination = 
  | 'Evangelical'
  | 'Pentecostal'
  | 'Reformed / Presbyterian'
  | 'Baptist'
  | 'Methodist'
  | 'Anglican / CSI / CNI'
  | 'Independent / Non-Denominational';

export type CongregationSize = '< 50' | '50 - 200' | '200 - 1000' | '1000+';

export interface ChurchProfile {
  id: string;
  name: string;
  pastor_name?: string;
  region_state: string; // e.g. "Karnataka"
  city: string; // e.g. "Bengaluru"
  denomination: ChurchDenomination;
  size_range: CongregationSize;
  languages: string[]; // e.g. ["Hindi", "English", "Kannada"]
  verified_status: 'approved' | 'pending_verification' | 'restricted';
  safety_protocol_status: 'active' | 'in_review';
  prayer_requests_count: number;
  contact_email_masked?: string; // e.g. "p***@gracefellowship.in"
  established_year?: number;
}
