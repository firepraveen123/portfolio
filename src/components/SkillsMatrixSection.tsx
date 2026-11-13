'use client';

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    num: 'Category 01',
    title: 'Programming Languages',
    frontClass: 'bg-verm text-white',
    pills: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Kotlin', 'SQL'],
    desc: 'Deep mastery of JS event loops, micro-tasks, type coercion, and strict compile-time invariants.',
    delay: '0s',
  },
  {
    num: 'Category 02',
    title: 'Frameworks & Libraries',
    frontClass: 'bg-teal text-white',
    pills: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Zustand',
      'Tailwind CSS',
      'TanStack Query',
      'Material UI',
    ],
    desc: 'Optimized lifecycles, shallow state diffing, and zero re-render cascades.',
    delay: '.1s',
  },
  {
    num: 'Category 03',
    title: 'Mobile Development',
    frontClass: 'bg-sand text-ink border border-line',
    pills: [
      'Android SDK',
      'Jetpack Compose',
      'XML Layouts',
      'SQLite',
      'Coroutines',
      'Flow API',
    ],
    desc: 'Native hardware lifecycles, memory-constraint awareness, and touch latency tuning.',
    delay: '.2s',
  },
  {
    num: 'Category 04',
    title: 'Architecture & Tools',
    frontClass: 'bg-ink text-paper border border-line',
    pills: [
      'Git / GitHub Actions',
      'AWS S3 / CloudFront',
      'Docker',
      'Webpack / Vite',
      'DevTools',
      'Lighthouse',
      'Figma to Code',
    ],
    desc: 'Disciplined branching, automated test gates, and pixel-exact design handoffs.',
    delay: '.3s',
  },
];

export default function SkillsMatrixSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="skills-matrix" className="py-24 band-dark">
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">06 // Skills &amp; Proficiencies</span>
          <span className="mono text-graphite">Hover or tap to flip</span>
        </div>

        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl mb-14 rv in">
          Core technical skills &amp; competencies.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat, index) => {
            const isFlipped = !!flippedCards[index];
            return (
              <div
                key={cat.num}
                onClick={() => toggleFlip(index)}
                className={`flip rv in ${isFlipped ? 'on' : ''}`}
                style={{ '--d': cat.delay } as React.CSSProperties}
              >
                <div>
                  {/* Front Face */}
                  <div className={`f ${cat.frontClass}`}>
                    <span className="mono">{cat.num}</span>
                    <h3 className="fd text-3xl leading-tight">{cat.title}</h3>
                    <RefreshCw className="w-4 h-4 opacity-70" />
                  </div>

                  {/* Back Face */}
                  <div className="b bg-cream border border-line">
                    <div className="flex flex-wrap gap-2">
                      {cat.pills.map((pill) => (
                        <span key={pill} className="pill">
                          {pill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-graphite">{cat.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

