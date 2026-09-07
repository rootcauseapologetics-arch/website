import { FiveWhysStep } from './rca';

export type IncidentCategory = 
  | 'Mob Violence'
  | 'Anti-Conversion Allegations'
  | 'Church Disruption'
  | 'Social Boycott'
  | 'Illegal Detention'
  | 'Vandalism';

export type IndianRegion = 
  | 'Uttar Pradesh'
  | 'Chhattisgarh'
  | 'Madhya Pradesh'
  | 'Karnataka'
  | 'Odisha'
  | 'Jharkhand'
  | 'Haryana'
  | 'Punjab'
  | 'Rajasthan'
  | 'Tamil Nadu'
  | 'Maharashtra'
  | 'All Regions';

export interface IncidentEntry {
  id: string;
  date: string;
  author: string; // Reporter or verifying body
  topic: IncidentCategory;
  region_state: string; // e.g. "Uttar Pradesh"
  district?: string; // e.g. "Azamgarh"
  incident_detail: string; // Verified incident narrative
  summary: string;
  root_cause: string; // Primary root cause
  root_cause_5whys: FiveWhysStep[]; // 5-Whys root cause analysis of the incident
  source_type: 'news' | 'first-hand' | 'police-fir' | 'social-video' | 'legal-doc';
  source_url: string;
  source_attachments?: {
    type: 'screenshot' | 'video' | 'image' | 'fir';
    url: string;
    caption: string;
  }[];
  our_response: string; // Strategic guidance & how to solve/handle similar situations
  prayer_points: string[]; // Specific prayer requests
  pray_link?: string; // Link to prayer network or intercession room
  help_link?: string; // Link to legal defense, relief aid, or support fund
  verified: boolean;
  severity: 'high' | 'medium' | 'critical';
  created_at: string;
}
