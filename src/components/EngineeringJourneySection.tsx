'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Smartphone,
  Globe,
  ArrowUpRight,
  Award,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const SUMMARY_STATS = [
  { label: 'Production Tenure', value: '4+ Yrs', detail: 'Continuous Frontend & Mobile Craft' },
  { label: 'Platforms Architected', value: '05', detail: 'Full-Cycle Production Deployments' },
  { label: 'Fleet Concurrency', value: '1,000+', detail: 'Live WebSocket Telemetry Nodes' },
  { label: 'Cloud Accreditation', value: 'AWS Certified', detail: 'Cloud Practitioner (Sep 2024)' },
];

const EXPERIENCES = [
  {
    id: 'exp-01',
    period: 'Oct 2022 — Present',
    duration: '2+ Years · Current Role',
    isCurrent: true,
    title: 'Software Engineer — Frontend & System Architecture',
    company: 'Nextbrain Technologies',
    location: 'Bengaluru, Karnataka',
    roleTag: 'LEAD FRONTEND ARCHITECTURE',
    desc: 'Driving browser runtime performance, component library standardization, and scalable front-end systems across 5 flagship client platforms. Specialized in React 19 / Next.js streaming architectures, WebSocket fleet telemetry, and low-latency client rendering.',
    keyMetrics: [
      { num: '1,000+', label: 'Concurrent Telemetry Drivers', color: 'text-verm' },
      { num: '-20%', label: 'JS Bundle Reduction', color: 'text-teal' },
      { num: '12', label: 'Engineers on Unified Design System', color: 'text-ink' },
    ],
    deliverables: [
      {
        title: 'Silicon Drive Dispatch Engine',
        desc: 'Architected cab booking web console handling real-time driver coordinates and bi-directional WebSocket dispatch with zero UI micro-stutters.',
      },
      {
        title: 'Bundle Budgeting & Edge Streaming',
        desc: 'Cut JavaScript bundle size by 20% across multi-tenant applications using Rollup route-splitting, dynamic imports, and aggressive tree-shaking.',
      },
      {
        title: 'Accessible Design System',
        desc: 'Standardized design tokens into an accessible, WCAG-compliant React component library adopted across 12 frontend engineers.',
      },
    ],
    skills: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'WebSockets',
      'Rollup',
      'TanStack Query',
      'Redux Toolkit',
    ],
    icon: <Cpu className="w-5 h-5 text-verm" />,
    badgeColor: 'border-verm/25 bg-verm/10 text-verm',
    dotColor: 'bg-verm',
  },
  {
    id: 'exp-02',
    period: 'Oct 2021 — Oct 2022',
    duration: '1 Year Completed',
    isCurrent: false,
    title: 'Android Developer — Native Mobile Applications',
    company: 'Nextbrain Technologies',
    location: 'Bengaluru, Karnataka',
    roleTag: 'NATIVE MOBILE & REAL-TIME PROTOCOLS',
    desc: 'Engineered high-durability native Android applications using modern Kotlin, Android Jetpack, and Coroutines. Built offline-first persistence architectures and real-time telehealth consultation channels.',
    keyMetrics: [
      { num: '100%', label: 'Offline Data Durability', color: 'text-emerald-600 dark:text-emerald-400' },
      { num: 'P2P', label: 'WebRTC Video Consultations', color: 'text-verm' },
      { num: '0ms', label: 'Data Drop on Network Loss', color: 'text-ink' },
    ],
    deliverables: [
      {
        title: 'AtMed Healthcare Telehealth App',
        desc: 'Delivered peer-to-peer doctor-patient consultation suite with encrypted WebRTC real-time audio/video streaming and live session signals.',
      },
      {
        title: 'Offline-First SQLite Cache',
        desc: 'Engineered local SQLite/Room database persistence layer with background sync routines ensuring 100% data durability during rural network dropouts.',
      },
      {
        title: 'Jetpack Compose Reactive UI',
        desc: 'Transitioned XML layout hierarchies to declarative Jetpack Compose with unidirectional data flow and Kotlin Flow/Coroutines.',
      },
    ],
    skills: [
      'Kotlin',
      'Android Jetpack',
      'Coroutines & Flow',
      'WebRTC',
      'SQLite / Room',
      'REST APIs',
    ],
    icon: <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    badgeColor: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    dotColor: 'bg-emerald-600',
  },
  {
    id: 'exp-03',
    period: 'May 2021 — Sep 2021',
    duration: '5 Months Internship',
    isCurrent: false,
    title: 'Web Development Intern — UI & Cross-Browser Engine',
    company: 'Infomats Technologies',
    location: 'Coimbatore, Tamil Nadu',
    roleTag: 'WEB STANDARDS & BROWSER INTERNALS',
    desc: 'Authored semantic responsive web interfaces, executed systematic cross-browser compatibility verification across Chromium, Gecko, and WebKit, and developed lightweight vanilla JavaScript interactive modules.',
    keyMetrics: [
      { num: '3+', label: 'Rendering Engines Tested', color: 'text-ink' },
      { num: '100%', label: 'Responsive Viewport Pass', color: 'text-verm' },
      { num: '0', label: 'External Runtime Dependencies', color: 'text-teal' },
    ],
    deliverables: [
      {
        title: 'Cross-Browser Verification',
        desc: 'Ran rigorous regression tests across mobile Safari, Chrome, and Firefox to identify and resolve vendor-specific CSS flexbox/grid layout anomalies.',
      },
      {
        title: 'Vanilla JS Interactive Widgets',
        desc: 'Constructed touch-friendly carousels, modals, and client-side form validation scripts with zero reliance on heavy third-party libraries.',
      },
      {
        title: 'Semantic HTML5 Standards',
        desc: 'Built semantic, search-engine friendly markup structures with strict landmark definitions and sub-50KB CSS footprints.',
      },
    ],
    skills: [
      'JavaScript ES6+',
      'HTML5 Semantics',
      'CSS3 Flexbox/Grid',
      'Browser DevTools',
      'Cross-Browser QA',
    ],
    icon: <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    badgeColor: 'border-indigo-500/25 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    dotColor: 'bg-indigo-600',
  },
];

export default function EngineeringJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeExp, setActiveExp] = useState<string>('exp-01');

  return (
    <section id="engineering-journey" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="wrap">
        {/* Section Kicker */}
        <div className="kicker">
          <span className="mono text-verm font-semibold">05 // Work Experience</span>
          <span className="mono text-graphite">2021 — Present · Verified Tenure</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl text-ink">
              Engineering journey &amp; career trajectory.
            </h2>
            <p className="text-graphite text-base sm:text-lg max-w-2xl mt-4">
              Over 4 years of shipping production code — starting from deep browser runtime foundations and native mobile engineering to lead front-end architecture.
            </p>
          </div>

          <div className="flex items-center gap-2 mono text-xs text-graphite bg-paper/80 dark:bg-ink/60 border border-line px-4 py-2 rounded-full self-start lg:self-auto backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR SENIOR FRONTEND ROLES</span>
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

        {/* Sequential Architectural Dossier Timeline */}
        <div className="relative">
          {/* Continuous Vertical Telemetry Rail on Left */}
          <div className="absolute left-3.5 sm:left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-verm via-emerald-500/60 to-line pointer-events-none" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
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
                        exp.isCurrent
                          ? 'bg-verm animate-pulse'
                          : exp.dotColor
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
                    {/* Top Status Accent Bar */}
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

                        <h3 className="fd text-2xl sm:text-3xl md:text-4xl text-ink font-semibold tracking-tight">
                          {exp.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-graphite mt-2">
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
                          className={`mono text-xs sm:text-sm font-bold ${
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

                    {/* Role Narrative Lead */}
                    <p className="text-graphite text-base sm:text-lg leading-relaxed mt-6 max-w-4xl">
                      {exp.desc}
                    </p>

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

                    {/* Production Deliverables Grid */}
                    <div className="space-y-3 pt-2">
                      <div className="mono text-[11px] uppercase tracking-wider text-graphite font-semibold flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-verm" />
                        <span>Key Production Deliverables &amp; Architectural Impact</span>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3.5">
                        {exp.deliverables.map((del, deli) => (
                          <div
                            key={deli}
                            className="p-4 rounded-2xl bg-paper dark:bg-black/20 border border-line/80 hover:border-ink/20 transition-colors"
                          >
                            <div className="flex items-center gap-1.5 font-semibold text-sm text-ink mb-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span className="line-clamp-1">{del.title}</span>
                            </div>
                            <p className="text-xs text-graphite leading-relaxed">
                              {del.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Tech Stack Tags */}
                    <div className="pt-6 mt-6 border-t border-line/70 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="mono text-[11px] text-graphite mr-1">
                          Stack Deployed:
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
                        Verified Production History
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
