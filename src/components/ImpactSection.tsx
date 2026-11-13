'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration = 1800, startAnimation = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, startAnimation]);

  return count;
}

export default function ImpactSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yearsCount = useCountUp(4, 1400, isVisible);
  const stateOptCount = useCountUp(30, 1800, isVisible);
  const bundleRedCount = useCountUp(20, 1800, isVisible);

  return (
    <section id="impact" className="band-dark py-24">
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">01 // Production Ledger</span>
          <span className="mono text-graphite">Measured · Verified</span>
        </div>

        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl max-w-3xl mb-16 rv in">
          Real engineering impact, measured in the browser.
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="py-8 lg:px-6 lg:first:pl-0 lg:border-r border-line rv in">
            <span className="mono text-graphite">Production tenure</span>
            <div className="fd text-verm font-medium leading-none tracking-tighter text-[88px] md:text-[104px] my-3">
              <span>{yearsCount}</span>+
              <span className="text-2xl text-ink font-light">YRS</span>
            </div>
            <h3 className="fd text-xl mb-2">Deep Web Crafting</h3>
            <p className="text-sm text-graphite">
              Obsessive focus on DOM performance, custom WebGL frames, and high-fidelity UI systems.
            </p>
          </div>

          <div className="py-8 lg:px-6 lg:border-r border-line rv in">
            <span className="mono text-graphite">State optimization</span>
            <div className="fd text-verm font-medium leading-none tracking-tighter text-[88px] md:text-[104px] my-3">
              +<span>{stateOptCount}</span>
              <span className="text-2xl text-ink font-light">%</span>
            </div>
            <h3 className="fd text-xl mb-2">Data Cache Tuning</h3>
            <p className="text-sm text-graphite">
              Throughput boost via optimistic reconciliation, TanStack cache warming and normalized entities.
            </p>
          </div>

          <div className="py-8 lg:px-6 lg:border-r border-line rv in">
            <span className="mono text-graphite">Payload reduction</span>
            <div className="fd text-verm font-medium leading-none tracking-tighter text-[88px] md:text-[104px] my-3">
              −<span>{bundleRedCount}</span>
              <span className="text-2xl text-ink font-light">%</span>
            </div>
            <h3 className="fd text-xl mb-2">Bundle Budgeting</h3>
            <p className="text-sm text-graphite">
              Tree-shaking and dynamic imports shrinking time-to-interactive across core flows.
            </p>
          </div>

          <div className="py-8 lg:px-6 lg:last:pr-0 rv in">
            <span className="mono text-graphite">Distributed systems</span>
            <div className="fd font-medium leading-none tracking-tighter text-[88px] md:text-[104px] my-3">
              AWS
            </div>
            <h3 className="fd text-xl mb-2">Certified Practitioner</h3>
            <p className="text-sm text-graphite">
              Deployment across S3, CloudFront edge caching, API Gateways and zero-trust auth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

