export interface FiveWhysStep {
  level: number;
  question: string; // e.g. "Why is this claim asserted?"
  insight: string;   // e.g. "Surface-level scientific concordism seeking ancient scripture validation."
}

export interface RCAEntry {
  id: string;
  date: string;
  author: string;
  topic: string;
  tag: 'hinduism' | 'atheism' | 'cultural' | 'secularism' | 'islam' | 'general';
  claim: string;
  root_issue: string; // Core diagnosis summary
  root_cause_5whys: FiveWhysStep[]; // Deep 5-Whys / 5-What breakdown
  source_type: 'x' | 'facebook' | 'article' | 'youtube' | 'book' | 'discussion';
  source_url: string;
  source_screenshot_url?: string;
  response: string; // Full structured response
  biblical_response: string; // Core Scripture / Biblical takeaway
  references: {
    title: string;
    url: string;
  }[];
  created_at: string;
}
