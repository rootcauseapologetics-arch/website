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
        <span className="pill-tag">{tag}</span>
        <span className="source-beautiful">{source_type}</span>
      </div>
      <div className="flex-grow">
        <h3 className="claim-beautiful">
          {truncatedClaim}
        </h3>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest opacity-50">Root Cause</span>
          <p className="root-beautiful">{root_issue}</p>
        </div>
        <Link href={`/rca/${id}`} className="cta-beautiful">
          → View RCA
        </Link>
      </div>
    </div>
  );
};

export default Card;
