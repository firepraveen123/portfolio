'use client';

import { useEffect, useRef, useState } from 'react';

const EXPERIENCES = [
  {
    period: 'Oct 2022 — Present · Current',
    periodColor: 'text-verm',
    title: 'Software Engineer — Frontend & System Architecture',
    company: 'Nextbrain Technologies · Bengaluru',
    companyColor: 'text-teal',
    desc: 'Lead frontend engineer across 5 flagship client platforms. Responsible for browser runtime performance, component library standardization, and delivery of complex data-visualization dashboards.',
    bullets: [
      'Architected the Silicon Drive cab booking web interface, scaling dispatch monitoring to 1,000+ drivers simultaneously.',
      'Cut production JavaScript bundles by 20% across multi-tenant apps with Rollup route-splitting and dynamic hydration.',
      'Standardized design tokens into an accessible design system adopted by 12 frontend engineers.',
    ],
    dotColor: 'bg-verm',
    align: 'left', // on desktop
  },
  {
    period: 'Oct 2021 — Oct 2022 · 1 year',
    periodColor: 'text-graphite',
    title: 'Android Developer — Native Applications',
    company: 'Nextbrain Technologies · Bengaluru',
    companyColor: 'text-teal',
    desc: 'Engineered native Android apps using Kotlin, Android Jetpack and Coroutines. Built background sync routines and offline database architectures.',
    bullets: [
      'Delivered the AtMed Healthcare Android consultation app with real-time WebRTC audio/video.',
      'Built SQLite persistence layers ensuring 100% data durability during network dropouts.',
    ],
    dotColor: 'bg-ink',
    align: 'right', // on desktop
  },
];

export default function EngineeringJourneySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.6 - rect.top) / rect.height)
      );
      setFillProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="engineering-journey" className="py-24">
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">05 // Work Experience</span>
          <span className="mono text-graphite">2021 — Present</span>
        </div>

        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl mb-20 rv in">
          Engineering journey &amp; career trajectory.
        </h2>

        <div className="relative" id="tl" ref={timelineRef}>
          {/* Static Center Line */}
          <div className="absolute top-0 bottom-0 left-[7px] md:left-1/2 w-px bg-line" />
          {/* Dynamic Fill Line */}
          <div
            id="tl-fill"
            className="absolute top-0 bottom-0 left-[7px] md:left-1/2 w-0.5 -ml-px bg-verm transition-transform duration-100 ease-out origin-top"
            style={{ transform: `scaleY(${fillProgress})` }}
          />

          <div className="space-y-20">
            {EXPERIENCES.map((exp, index) => {
              const isLeft = exp.align === 'left';
              return (
                <div
                  key={index}
                  className={`relative pl-10 md:pl-0 md:w-1/2 ${
                    isLeft
                      ? 'md:pr-14 md:text-right'
                      : 'md:pl-14 md:ml-auto md:text-left'
                  } rv in`}
                >
                  <span
                    className={`absolute ${
                      isLeft
                        ? 'left-0 md:left-auto md:-right-[7px]'
                        : 'left-0 md:-left-[7px]'
                    } top-2 w-3.5 h-3.5 ${exp.dotColor} rotate-45 ring-4 ring-paper`}
                  />

                  <div className={`mono ${exp.periodColor} font-semibold`}>
                    {exp.period}
                  </div>

                  <h3 className="fd text-3xl font-semibold mt-1">{exp.title}</h3>

                  <div className={`${exp.companyColor} font-medium mb-3`}>
                    {exp.company}
                  </div>

                  <p className="text-graphite mb-3">{exp.desc}</p>

                  {exp.bullets.length > 0 && (
                    <ul
                      className={`text-sm space-y-1.5 text-ink ${
                        isLeft ? 'md:inline-block md:text-right' : ''
                      }`}
                    >
                      {exp.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

