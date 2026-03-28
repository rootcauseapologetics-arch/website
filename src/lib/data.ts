import rcaData from '../../mock/rca_data.json';

export interface RCAEntry {
  id: string;
  source_type: 'x' | 'facebook' | 'article';
  source_url: string;
  tag: string;
  claim: string;
  root_issue: string;
  analysis: string;
  biblical_response: string;
  created_at: string;
}

export const getRCAEntries = (): RCAEntry[] => {
  return rcaData as RCAEntry[];
};

export const getRCAEntryById = (id: string): RCAEntry | undefined => {
  return (rcaData as RCAEntry[]).find(entry => entry.id === id);
};
