import Image from 'next/image';
import Link from 'next/link';
import '@/styles/card.css';

interface RCAProps {
  id: string;
  source_type: string;
  source_url: string;
  tag: string;
  claim: string;
  root_issue: string;
}

const Card = ({ id, source_type, source_url, tag, claim, root_issue }: RCAProps) => {
  const truncatedClaim = claim.length > 120 ? claim.slice(0, 117) + '...' : claim;
  return (
    <div className="card-beautiful group">
      <div className="flex justify-between items-start mb-4">
        <span className="pill-tag font-medium tracking-wide">{tag}</span>
        <span className="source-beautiful font-medium uppercase tracking-widest opacity-60">{source_type}</span>
      </div>
      <div className="flex-grow">
        <h3 className="claim-beautiful font-bold tracking-tight leading-snug">
          {truncatedClaim}
        </h3>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium text-muted uppercase tracking-[0.2em] opacity-40">Root Diagnosis</span>
          <p className="root-beautiful font-bold italic text-primary dark:text-cyan-400">{root_issue}</p>
        </div>
        <Link href={`/rca/${id}`} className="cta-beautiful">
          → View RCA
        </Link>
      </div>
    </div>
  );
};

export default Card;
