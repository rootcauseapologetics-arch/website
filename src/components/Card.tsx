import Image from 'next/image';
import Link from 'next/link';
import './card.css';

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
    <div className="card">
      <div className="flex justify-between items-center">
        <span className="tag">{tag}</span>
        <span className="source">{source_type}</span>
      </div>
      <p className="claim">{truncatedClaim}</p>
      <p className="root">Root: {root_issue}</p>
      <Link href={`/rca/${id}`} className="cta">→ View RCA</Link>
    </div>
  );
};

export default Card;
