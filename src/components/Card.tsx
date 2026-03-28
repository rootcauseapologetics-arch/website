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
    <div className="card-system group">
      <div className="flex justify-between items-start mb-6">
        <span className="badge-system">{tag}</span>
        <span className="source-system">{source_type}</span>
      </div>
      <div className="flex-grow">
        <p className="claim-system">"{truncatedClaim}"</p>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
        <div className="flex flex-col gap-1 mb-6">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Root Analysis</span>
          <p className="root-system">{root_issue}</p>
        </div>
        <Link href={`/rca/${id}`} className="cta-system">
          <span>Explore Analysis</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
