'use client';

import { useState } from 'react';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

const SUMMARY_STATS = [
  { label: 'Platform Scalability', value: '+30%', detail: 'Improved handling capacity' },
  { label: 'Client Load Time', value: '-20%', detail: 'Optimized API response consumption' },
  { label: 'Delivery Velocity', value: '-15%', detail: 'Cross-functional delivery speed' },
  { label: 'Production Tenure', value: '4+ Yrs', detail: 'Nextbrain Technologies Pvt Ltd' },
];

const EXPERIENCES = [
  {
    id: 'exp-01',
    period: '2022 – Present',
    duration: 'Current Role',
    isCurrent: true,
    title: 'Software Engineer',
    company: 'Nextbrain Technologies Pvt Ltd',
    location: 'Bengaluru, India',
    roleTag: 'FULL-STACK & FRONTEND ENGINEERING',
    leadHighlight:
      'Developing and maintaining static and dynamic web applications using Next.js, Node.js, and Strapi, improving platform scalability and handling capacity by 30%.',
    keyMetrics: [
      { num: '+30%', label: 'Platform Scalability & Capacity', color: 'text-verm' },
      { num: '-20%', label: 'Client-Side Loading Time', color: 'text-teal' },
      { num: '-15%', label: 'Project Delivery Turnaround', color: 'text-ink' },
    ],
    bullets: [
      'Developing and maintaining static and dynamic web applications using Next.js, Node.js, and Strapi, improving platform scalability and handling capacity by 30%.',
      'Building responsive, user-centric interfaces with HTML, CSS, JavaScript, and React.js to deliver high-fidelity designs.',
      'Collaborating with UI/UX designers and backend teams to deliver full-stack applications, reducing project delivery times by 15%.',
      'Integrating REST APIs for seamless data handling, optimizing API response consumption, and ensuring a 20% decrease in client-side loading times.',
      'Continuously optimizing production code and implementing frontend best practices to boost core web vitals and long-term application scalability.',
    ],
    skills: [
      'Next.js',
      'React.js',
      'Node.js',
      'Strapi',
      'JavaScript',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Core Web Vitals',
    ],
    icon: <Cpu className="w-5 h-5 text-verm" />,
    badgeColor: 'border-verm/25 bg-verm/10 text-verm',
    dotColor: 'bg-verm',
  },
  {
    id: 'exp-02',
    period: '2021 – 2022',
    duration: '1 Year Completed',
    isCurrent: false,
    title: 'Android Developer',
    company: 'Nextbrain Technologies Pvt Ltd',
    location: 'Bengaluru, India',
    roleTag: 'NATIVE ANDROID DEVELOPMENT',
    leadHighlight:
      'Designed, developed, and maintained Android applications using Kotlin and Java, prioritizing user experience and functionality.',
    keyMetrics: [
      { num: 'Kotlin & Java', label: 'Native Architecture', color: 'text-emerald-600 dark:text-emerald-400' },
      { num: 'Multi-Device', label: 'Cross-Device Performance Tuning', color: 'text-verm' },
      { num: 'Global', label: 'High-Quality Global User Reach', color: 'text-ink' },
    ],
    bullets: [
      'Designed, developed, and maintained Android applications using Kotlin and Java, prioritizing user experience and functionality.',
      'Collaborated with cross-functional teams to define, implement, and ship new features that enhanced app usability.',
      'Optimized app performance to ensure seamless operation across diverse devices, resolving critical performance issues.',
      'Contributed to delivering engaging, high-quality mobile applications that reached global users.',
    ],
    skills: [
      'Kotlin',
      'Java',
      'Android SDK',
      'App Performance Tuning',
      'Cross-Functional Collaboration',
      'REST APIs',
    ],
    icon: <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    badgeColor: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    dotColor: 'bg-emerald-600',
  },
];

export default function EngineeringJourneySection() {
  const [activeExp, setActiveExp] = useState<string>('exp-01');

  return (
    <section id="engineering-journey" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="wrap">
        {/* Section Kicker */}
        <div className="kicker">
          <span className="mono text-verm font-semibold">05 // Work Experience</span>
          <span className="mono text-graphite">Nextbrain Technologies Pvt Ltd · 2021 — Present</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl text-ink">
              Engineering journey &amp; career trajectory.
            </h2>
            <p className="text-graphite text-base sm:text-lg max-w-2xl mt-4">
              Proven track record across full-stack web platforms and native mobile applications, delivering measurable business impact and high-performance user experiences.
            </p>
          </div>

          <div className="flex items-center gap-2 mono text-xs text-graphite bg-paper/80 dark:bg-ink/60 border border-line px-4 py-2 rounded-full self-start lg:self-auto backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ACTIVE IN BENGALURU, INDIA</span>
          </div>
        </div>

        {/* Career Summary Telemetry Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {SUMMARY_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-paper/80 dark:bg-ink/70 border border-line backdrop-blur-sm shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]"
            >
              <span className="block mono text-[10px] uppercase font-semibold text-graphite tracking-wider">
                {stat.label}
              </span>
              <b className="fd text-2xl sm:text-3xl text-ink block mt-1">
                {stat.value}
              </b>
              <span className="text-xs text-graphite/80 block mt-1">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Sequential Dossier Timeline */}
        <div className="relative">
          {/* Continuous Vertical Telemetry Rail on Left */}
          <div className="absolute left-3.5 sm:left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-verm via-emerald-500/60 to-line pointer-events-none" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp) => {
              const isSelected = activeExp === exp.id;
              return (
                <div
                  key={exp.id}
                  className="relative pl-10 sm:pl-16 group"
                  onMouseEnter={() => setActiveExp(exp.id)}
                >
                  {/* Timeline Rail Node Marker */}
                  <div
                    className={`absolute left-1 sm:left-3.5 top-8 w-5 h-5 rounded-full border-2 bg-paper dark:bg-ink flex items-center justify-center transition-all duration-300 ${
                      exp.isCurrent
                        ? 'border-verm shadow-[0_0_12px_rgba(228,71,43,0.4)] scale-110'
                        : isSelected
                        ? 'border-ink dark:border-paper scale-110'
                        : 'border-line group-hover:border-graphite'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        exp.isCurrent ? 'bg-verm animate-pulse' : exp.dotColor
                      }`}
                    />
                  </div>

                  {/* Tactile Experience Dossier Card */}
                  <div
                    className={`rounded-3xl border transition-all duration-300 p-6 sm:p-8 md:p-10 ${
                      exp.isCurrent
                        ? 'border-verm/40 bg-paper/95 dark:bg-ink/80 shadow-[0_12px_40px_-12px_rgba(228,71,43,0.12)]'
                        : isSelected
                        ? 'border-ink/30 dark:border-paper/30 bg-paper/90 dark:bg-ink/70 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.1)]'
                        : 'border-line bg-paper/70 dark:bg-ink/50 shadow-sm hover:border-ink/20'
                    } backdrop-blur-xl relative overflow-hidden`}
                  >
                    {/* Top Status Accent Bar for Current Role */}
                    {exp.isCurrent && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-verm via-verm/60 to-transparent" />
                    )}

                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line/70">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] mono font-semibold border ${exp.badgeColor}`}
                          >
                            {exp.icon}
                            {exp.roleTag}
                          </span>
                          {exp.isCurrent && (
                            <span className="mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-verm text-white tracking-wider">
                              ACTIVE TENURE
                            </span>
                          )}
                        </div>

                        <h3 className="fd text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight">
                          {exp.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base text-graphite mt-2">
                          <span className="font-semibold text-ink flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-graphite" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-graphite" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="self-start md:self-auto text-left md:text-right">
                        <div
                          className={`mono text-sm sm:text-base font-bold ${
                            exp.isCurrent ? 'text-verm' : 'text-ink'
                          }`}
                        >
                          {exp.period}
                        </div>
                        <div className="mono text-xs text-graphite mt-0.5">
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Quantitative Key Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                      {exp.keyMetrics.map((km, kmi) => (
                        <div
                          key={kmi}
                          className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line"
                        >
                          <b className={`fd text-2xl sm:text-3xl block ${km.color}`}>
                            {km.num}
                          </b>
                          <span className="mono text-[10px] uppercase font-semibold text-graphite mt-1 block">
                            {km.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Responsibilities & Achievements (Exact Content from Resume) */}
                    <div className="space-y-3 pt-2">
                      <div className="mono text-[11px] uppercase tracking-wider text-graphite font-semibold flex items-center gap-2 mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-verm" />
                        <span>Core Responsibilities &amp; Key Achievements</span>
                      </div>

                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-3 text-sm sm:text-base text-ink dark:text-paper/90 leading-relaxed p-3 rounded-2xl bg-paper dark:bg-black/20 border border-line/60 hover:border-ink/20 transition-colors"
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Tech Stack Tags */}
                    <div className="pt-6 mt-6 border-t border-line/70 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="mono text-[11px] text-graphite mr-1">
                          Stack &amp; Practices:
                        </span>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="mono text-xs px-2.5 py-1 rounded-lg bg-ink/5 dark:bg-paper/5 border border-line text-ink font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <span className="mono text-xs text-graphite/70 flex items-center gap-1">
                        Verified Work Experience
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
