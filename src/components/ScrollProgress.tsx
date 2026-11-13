'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const current = (window.scrollY / total) * 100;
      setProgress(Math.min(100, Math.max(0, current)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

