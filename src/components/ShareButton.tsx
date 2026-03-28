'use client';

import { useEffect } from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    } catch (e) {
      alert('Failed to copy link');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
    >
      Share this RCA
    </button>
  );
};

export default ShareButton;
