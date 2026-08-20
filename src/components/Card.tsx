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
    <div className="card-beautiful group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-cyan-400/30 transition-main hover:shadow-authority">
      <div className="flex justify-between items-start mb-6">
        <span className="pill-tag font-medium tracking-wide">{tag}</span>
        <span className="source-beautiful font-medium uppercase tracking-widest opacity-40">{source_type}</span>
      </div>
      <div className="flex-grow">
        <h3 className="claim-beautiful font-bold tracking-tight leading-snug group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors">
          {truncatedClaim}
        </h3>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 flex justify-between items-end">
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] font-bold text-muted uppercase tracking-[0.25em] opacity-30">Root Diagnosis</span>
          <p className="root-beautiful font-bold italic text-primary dark:text-cyan-400">{root_issue}</p>
        </div>
        <Link href={`/rca/${id}`} className="cta-beautiful group-hover:translate-x-1 transition-transform">
          → View RCA
        </Link>
      </div>
    </div>
  );
};

export default Card;
