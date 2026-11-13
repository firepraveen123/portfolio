'use client';

import { useEffect, useRef, useState } from 'react';

const MANIFESTO_TEXT =
  '“I care less about how a page looks when everything works, and more about how it behaves when things go wrong: a slow network, a late-loading font, or someone navigating solely with a keyboard.”';

const CARDS = [
  {
    num: '01',
    bg: 'bg-verm text-white',
    title: 'Polished, but lightweight',
    desc: 'Minimal CSS weight, zero unnecessary runtime abstractions, native browser layout primitives, and hardware-accelerated 60fps animations that never drop a frame.',
    label: 'Metric',
    stat: '0ms jank target',
    i: 0,
  },
  {
    num: '02',
    bg: 'bg-teal text-white',
    title: 'Clear, predictable state',
    desc: 'Deterministic finite state patterns. Async data flows decoupled from presentation components, making bugs reproducible and client state predictable under jitter.',
    label: 'Axiom',
    stat: 'Immutable store',
    i: 1,
  },
  {
    num: '03',
    bg: 'bg-ink text-paper',
    title: 'Built for everyone, everywhere',
    desc: 'WCAG AA accessibility from day zero. Logical focus rings, semantic landmarks, high-contrast resilience, and screen-reader navigable telemetry feeds.',
    label: 'Standard',
    stat: 'WCAG 2.1 AA',
    i: 2,
  },
];

export default function CraftPhilosophySection() {
  const manifestoRef = useRef<HTMLParagraphElement>(null);
  const words = MANIFESTO_TEXT.split(' ');
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!manifestoRef.current) return;
      const rect = manifestoRef.current.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.85 - rect.top) / (rect.height + window.innerHeight * 0.3))
      );
      const n = Math.floor(p * words.length * 1.15);
      setLitCount(n);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section id="craft-and-philosophy" className="py-24">
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">03 // How I Work</span>
          <span className="mono text-graphite">Foundational ethos</span>
        </div>

        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl mb-10 rv in">
          How I think about building for the web.
        </h2>

        {/* Word-by-word illuminated manifesto */}
        <p
          id="manifesto"
          ref={manifestoRef}
          className="fd italic text-3xl md:text-5xl leading-[1.25] max-w-5xl mb-6 select-none"
        >
          {words.map((w, i) => (
            <span
              key={i}
              className={`word transition-opacity duration-200 ${
                i < litCount ? 'lit opacity-100' : 'opacity-15'
              }`}
            >
              {w}{' '}
            </span>
          ))}
        </p>

        <div className="mono text-graphite mb-24">
          Craft Manifesto · Praveen Kumar S.
        </div>

        {/* Sticky stacking cards */}
        <div className="space-y-6 pb-10">
          {CARDS.map((card) => (
            <div
              key={card.num}
              className="stack"
              style={{ '--i': card.i } as React.CSSProperties}
            >
              <div
                className={`rounded-3xl p-8 md:p-12 grid md:grid-cols-12 gap-6 items-center shadow-2xl ${card.bg}`}
              >
                <span className="fd md:col-span-2 text-8xl font-bold opacity-40">
                  {card.num}
                </span>
                <div className="md:col-span-7">
                  <h3 className="fd text-3xl md:text-4xl mb-3">{card.title}</h3>
                  <p className="opacity-90 leading-relaxed">{card.desc}</p>
                </div>
                <div className="md:col-span-3 mono md:text-right">
                  {card.label}
                  <br />
                  <b className="text-2xl fd normal-case">{card.stat}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

