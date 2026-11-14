'use client';

import { useState } from 'react';

const TRACK_CLIENT = [
  {
    name: 'React 19',
    spec: 'Concurrent',
    role: 'Server Actions & Suspense',
    project: 'Silicon Drive',
    accent: '#00d8ff',
    icon: (
      <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#00d8ff" strokeWidth="1.3">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: 'Next.js 15',
    spec: 'App Router',
    role: 'Streaming SSR & Edge Caching',
    project: 'Nextbrain Tech',
    accent: '#e4472b',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 180 180">
        <path fillRule="evenodd" clipRule="evenodd" d="M125.688 152.012L63.5042 72.039V152.012H44.0042V27.9883H64.0882L126.272 107.962V27.9883H145.772V152.012H125.688Z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    spec: 'Strict Mode',
    role: 'Discriminated Unions & Generics',
    project: 'Machfox Console',
    accent: '#3178c6',
    icon: (
      <svg className="w-5 h-5 fill-[#3178c6]" viewBox="0 0 24 24">
        <path d="M1.5 0h21l1.5 1.5v21l-1.5 1.5h-21l-1.5-1.5v-21l1.5-1.5zm9.76 11.83h-3.32v7.87H5.66v-7.87H2.34V9.6h8.92v2.23zm10.4 3.73c0 1.25-.43 2.27-1.3 3.06-.86.79-2.03 1.18-3.5 1.18-1.56 0-2.82-.4-3.79-1.2l1.17-1.89c.72.58 1.6 1.02 2.62 1.02.77 0 1.34-.17 1.72-.51.38-.34.57-.8.57-1.37 0-.48-.15-.87-.46-1.18-.3-.31-.8-.6-1.5-.87l-.98-.37c-1.12-.42-1.95-.98-2.5-1.68-.54-.7-.81-1.57-.81-2.6 0-1.2.42-2.18 1.25-2.95.84-.77 1.94-1.15 3.3-1.15 1.37 0 2.47.33 3.3.98l-1.07 1.9c-.68-.48-1.48-.72-2.39-.72-.64 0-1.14.15-1.5.46-.35.3-.53.72-.53 1.25 0 .42.14.77.42 1.04.28.27.75.54 1.4.8l.96.38c1.23.48 2.12 1.07 2.68 1.77.56.7.84 1.59.84 2.66z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    spec: 'Subgrid / JIT',
    role: 'Zero-Runtime Design Tokens',
    project: 'Edubotix Platform',
    accent: '#38bdf8',
    icon: (
      <svg className="w-5 h-5 fill-[#38bdf8]" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'TanStack Query',
    spec: 'Cache v5',
    role: 'Optimistic Hydration & Stale-While',
    project: 'Intra 3.0',
    accent: '#ff4154',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ff4154" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'Redux Toolkit',
    spec: 'RTK Query',
    role: 'Decoupled AST Evaluation Tree',
    project: 'Intra 3.0 HROS',
    accent: '#764abc',
    icon: (
      <svg className="w-5 h-5 fill-[#764abc]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: 'HTML5 Canvas',
    spec: 'Offscreen GPU',
    role: '60 FPS CCTV Video Telemetry',
    project: 'Shell Oman',
    accent: '#e4472b',
    icon: (
      <svg className="w-5 h-5 text-[#e4472b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const TRACK_INFRA = [
  {
    name: 'AWS Cloud',
    spec: 'Certified',
    role: 'S3, CloudFront & Edge CDN',
    project: 'Accredited Sep 2024',
    accent: '#ff9900',
    icon: (
      <svg className="w-5 h-5 fill-[#ff9900]" viewBox="0 0 24 24">
        <path d="M18.77 12.58c-.14-.06-.3-.1-.47-.1h-1.63c-.45 0-.82.35-.85.8-.18 2.15-1.95 3.84-4.13 3.84-2.1 0-3.83-1.59-4.11-3.66-.04-.32-.29-.58-.61-.58H5.32c-.37 0-.67.3-.67.67 0 3.73 2.91 6.8 6.64 7.02 3.8.22 7.02-2.73 7.48-6.49.03-.27-.12-.52-.37-.62l.37.12zM12 3C7.03 3 3 7.03 3 12c0 .91.14 1.79.4 2.61.12.37.5.58.88.47.38-.11.6-.49.49-.87-.21-.68-.32-1.4-.32-2.21 0-4.18 3.4-7.58 7.55-7.58 4.18 0 7.58 3.4 7.58 7.58 0 .82-.12 1.54-.34 2.23-.11.38.1.77.49.88.38.11.77-.1.88-.49.27-.84.42-1.74.42-2.62 0-4.97-4.03-9-9-9z"/>
      </svg>
    ),
  },
  {
    name: 'WebSockets & SSE',
    spec: 'Real-Time',
    role: 'Bi-Directional Fleet Telemetry',
    project: 'Silicon Drive & Shell',
    accent: '#10b981',
    icon: (
      <svg className="w-5 h-5 text-[#10b981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
      </svg>
    ),
  },
  {
    name: 'Docker Containers',
    spec: 'DevOps',
    role: 'Multi-Stage Industrial Sandboxes',
    project: 'Shell Oman CCTV',
    accent: '#2496ed',
    icon: (
      <svg className="w-5 h-5 fill-[#2496ed]" viewBox="0 0 24 24">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .103.084.186.186.186" />
      </svg>
    ),
  },
  {
    name: 'Node.js & Strapi',
    spec: 'Headless',
    role: 'Multi-Tenant REST Middleware',
    project: 'Nextbrain Cloud',
    accent: '#22c55e',
    icon: (
      <svg className="w-5 h-5 fill-[#22c55e]" viewBox="0 0 24 24">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8v7.9L12 19.8 5.2 15.9V8L12 4.2z" />
      </svg>
    ),
  },
  {
    name: 'GraphQL & REST',
    spec: 'Schemas',
    role: 'Normalized Contract Typing',
    project: 'AtMed Healthcare',
    accent: '#e535ab',
    icon: (
      <svg className="w-5 h-5 text-[#e535ab]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Kotlin & Android',
    spec: 'Native Mobile',
    role: 'Jetpack Compose & Coroutines',
    project: 'AtMed & Mobile Apps',
    accent: '#a855f7',
    icon: (
      <svg className="w-5 h-5 fill-[#a855f7]" viewBox="0 0 24 24">
        <path d="M24 24H0V0h24L12 12Z" />
      </svg>
    ),
  },
  {
    name: 'IndexedDB (Dexie)',
    spec: 'Offline-First',
    role: 'AES-GCM Encrypted Local Journal',
    project: 'Edubotix Platform',
    accent: '#06b6d4',
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
];

const TABS = [
  {
    id: 0,
    label: 'A · Core Client',
    items: [
      {
        title: 'React 19 / 18',
        tag: 'concurrent',
        tagColor: 'text-teal',
        desc: 'Suspense, Server Components, action transitions, micro-task coordination.',
      },
      {
        title: 'Next.js (App & Pages)',
        tag: 'hybrid SSR',
        tagColor: 'text-teal',
        desc: 'Streaming SSR, ISR regeneration, route handlers, middleware cookies.',
      },
      {
        title: 'TypeScript (Strict)',
        tag: 'type safety',
        tagColor: 'text-teal',
        desc: 'Generics, discriminated unions, zero-any policy, schema verification.',
      },
      {
        title: 'Modern JavaScript',
        tag: 'standards',
        tagColor: 'text-teal',
        desc: 'Async iterators, event loops, Web Workers, Proxy wrappers, DOM APIs.',
      },
    ],
  },
  {
    id: 1,
    label: 'B · Systems & Infra',
    items: [
      {
        title: 'AWS Cloud Practitioner',
        tag: 'accredited',
        tagColor: 'text-verm',
        desc: 'S3 static hosting, CloudFront distributions, Route 53, IAM policy security.',
      },
      {
        title: 'REST & GraphQL',
        tag: 'apis',
        tagColor: 'text-verm',
        desc: 'Normalized client schemas, optimistic mutations, batch query resolution.',
      },
      {
        title: 'WebSockets & SSE',
        tag: 'real-time',
        tagColor: 'text-verm',
        desc: 'Bi-directional dispatch, heartbeats, reconnection backoffs.',
      },
      {
        title: 'CI/CD Automation',
        tag: 'deploy',
        tagColor: 'text-verm',
        desc: 'GitHub Actions, Vercel edge deployment, bundle regression checks.',
      },
    ],
  },
  {
    id: 2,
    label: 'C · Code Rigor',
    items: [
      {
        title: 'Bundle Budgeting',
        tag: 'metrics',
        tagColor: 'text-ok',
        desc: 'Zero-dependency audits, tree-shaking, Rollup manual chunking.',
      },
      {
        title: 'Jest & RTL',
        tag: 'testing',
        tagColor: 'text-ok',
        desc: 'Behavior-driven integration tests, MSW network mocking, 85%+ coverage.',
      },
      {
        title: 'Web Vitals Profiling',
        tag: 'vitals',
        tagColor: 'text-ok',
        desc: 'INP < 200ms, LCP < 2.5s, CLS < 0.1 verified on throttled 3G devices.',
      },
      {
        title: 'Tailwind & CSS Modules',
        tag: 'styling',
        tagColor: 'text-ok',
        desc: 'Sub-50KB CSS payloads, custom design systems, token scale.',
      },
    ],
  },
];

export default function TechStackSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section id="tech-and-stack" className="py-24 bg-sand/70 border-y border-line overflow-hidden">
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">04 // Toolkit &amp; Proficiencies</span>
          <span className="mono text-graphite">Stack revision 4.2</span>
        </div>
        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl mb-4 max-w-3xl rv in">
          Instruments honed over hundreds of production commits.
        </h2>
        <p className="text-graphite max-w-2xl mb-14 rv in">
          Technical tooling that favors durability, runtime stability and web standards over fleeting industry hype.
        </p>
      </div>

      {/* Unique Tactile Architecture Rails */}
      <div className="relative my-10 mb-20 overflow-hidden">
        {/* Subtle Vignettes for smooth edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 z-10 bg-gradient-to-r from-[rgb(var(--sand))] via-[rgb(var(--sand))]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 z-10 bg-gradient-to-l from-[rgb(var(--sand))] via-[rgb(var(--sand))]/80 to-transparent" />

        {/* Rail 01 Header Telemetry */}
        <div className="wrap mb-3.5 flex items-center justify-between text-xs mono text-graphite/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-verm animate-pulse" />
            <span className="font-semibold text-ink uppercase tracking-wider text-[11px] sm:text-xs">
              Track 01 // Client Systems &amp; Component Runtimes
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-ink/5 border border-line text-ink font-medium">CONCURRENCY · 60 FPS</span>
            <span>07 ENGINE NODES</span>
          </div>
        </div>

        {/* Track 1: Client Runtimes (Leftwards) */}
        <div className="marq-wrap mb-7">
          <div className="marq" style={{ '--t': '38s' } as React.CSSProperties}>
            <div className="flex gap-4 pr-4 shrink-0">
              {TRACK_CLIENT.map((tech, idx) => (
                <div
                  key={`client-a-${idx}`}
                  className="group relative min-w-[280px] sm:min-w-[320px] max-w-[340px] p-4 sm:p-5 rounded-2xl bg-paper/90 backdrop-blur-md border border-line hover:border-ink/30 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center border border-line/60 group-hover:border-ink/20 transition-colors">
                      {tech.icon}
                    </div>
                    <span
                      className="mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border tracking-wide transition-colors"
                      style={{
                        borderColor: `${tech.accent}33`,
                        color: tech.accent,
                        backgroundColor: `${tech.accent}0d`,
                      }}
                    >
                      {tech.spec}
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-base sm:text-lg text-ink tracking-tight group-hover:text-verm transition-colors">
                        {tech.name}
                      </h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <p className="text-xs text-graphite/90 line-clamp-1 mt-0.5">
                      {tech.role}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-line/60 flex items-center justify-between text-[11px] mono text-graphite/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.accent }} />
                      <span className="truncate max-w-[170px]">{tech.project}</span>
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-ink font-semibold flex items-center gap-0.5">
                      ACTIVE <span className="text-[10px]">↗</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Seamless duplicate loop for track 1 */}
            <div className="flex gap-4 pr-4 shrink-0" aria-hidden="true">
              {TRACK_CLIENT.map((tech, idx) => (
                <div
                  key={`client-b-${idx}`}
                  className="group relative min-w-[280px] sm:min-w-[320px] max-w-[340px] p-4 sm:p-5 rounded-2xl bg-paper/90 backdrop-blur-md border border-line hover:border-ink/30 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center border border-line/60 group-hover:border-ink/20 transition-colors">
                      {tech.icon}
                    </div>
                    <span
                      className="mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border tracking-wide transition-colors"
                      style={{
                        borderColor: `${tech.accent}33`,
                        color: tech.accent,
                        backgroundColor: `${tech.accent}0d`,
                      }}
                    >
                      {tech.spec}
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-base sm:text-lg text-ink tracking-tight group-hover:text-verm transition-colors">
                        {tech.name}
                      </h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <p className="text-xs text-graphite/90 line-clamp-1 mt-0.5">
                      {tech.role}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-line/60 flex items-center justify-between text-[11px] mono text-graphite/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.accent }} />
                      <span className="truncate max-w-[170px]">{tech.project}</span>
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-ink font-semibold flex items-center gap-0.5">
                      ACTIVE <span className="text-[10px]">↗</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rail 02 Header Telemetry */}
        <div className="wrap mb-3.5 flex items-center justify-between text-xs mono text-graphite/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-ink uppercase tracking-wider text-[11px] sm:text-xs">
              Track 02 // Cloud Infrastructure, Protocols &amp; Native Mobile
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-ink/5 border border-line text-ink font-medium">AES-GCM · DISTRIBUTED</span>
            <span>HIGH RESILIENCE</span>
          </div>
        </div>

        {/* Track 2: Infra & Systems (Rightwards / Reverse direction, Dark Obsidian Cards) */}
        <div className="marq-wrap">
          <div className="marq rev" style={{ '--t': '42s' } as React.CSSProperties}>
            <div className="flex gap-4 pr-4 shrink-0">
              {TRACK_INFRA.map((tech, idx) => (
                <div
                  key={`infra-a-${idx}`}
                  className="group relative min-w-[280px] sm:min-w-[320px] max-w-[340px] p-4 sm:p-5 rounded-2xl bg-ink text-paper border border-paper/15 hover:border-paper/40 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-paper/10 flex items-center justify-center border border-paper/15 group-hover:border-paper/30 transition-colors">
                      {tech.icon}
                    </div>
                    <span
                      className="mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border tracking-wide transition-colors"
                      style={{
                        borderColor: `${tech.accent}4d`,
                        color: tech.accent,
                        backgroundColor: `${tech.accent}1a`,
                      }}
                    >
                      {tech.spec}
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-base sm:text-lg text-paper tracking-tight group-hover:text-verm transition-colors">
                        {tech.name}
                      </h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-ok" />
                    </div>
                    <p className="text-xs text-paper/70 line-clamp-1 mt-0.5">
                      {tech.role}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-paper/10 flex items-center justify-between text-[11px] mono text-paper/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.accent }} />
                      <span className="truncate max-w-[170px]">{tech.project}</span>
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-verm font-semibold flex items-center gap-0.5">
                      DEPLOYED <span className="text-[10px]">✓</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Seamless duplicate loop for track 2 */}
            <div className="flex gap-4 pr-4 shrink-0" aria-hidden="true">
              {TRACK_INFRA.map((tech, idx) => (
                <div
                  key={`infra-b-${idx}`}
                  className="group relative min-w-[280px] sm:min-w-[320px] max-w-[340px] p-4 sm:p-5 rounded-2xl bg-ink text-paper border border-paper/15 hover:border-paper/40 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-paper/10 flex items-center justify-center border border-paper/15 group-hover:border-paper/30 transition-colors">
                      {tech.icon}
                    </div>
                    <span
                      className="mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border tracking-wide transition-colors"
                      style={{
                        borderColor: `${tech.accent}4d`,
                        color: tech.accent,
                        backgroundColor: `${tech.accent}1a`,
                      }}
                    >
                      {tech.spec}
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-base sm:text-lg text-paper tracking-tight group-hover:text-verm transition-colors">
                        {tech.name}
                      </h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-ok" />
                    </div>
                    <p className="text-xs text-paper/70 line-clamp-1 mt-0.5">
                      {tech.role}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-paper/10 flex items-center justify-between text-[11px] mono text-paper/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.accent }} />
                      <span className="truncate max-w-[170px]">{tech.project}</span>
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-verm font-semibold flex items-center gap-0.5">
                      DEPLOYED <span className="text-[10px]">✓</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Box */}
      <div className="wrap">
        <div className="rounded-2xl border border-line bg-ink text-paper overflow-hidden shadow-2xl rv in">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-paper/15">
            <i className="w-3 h-3 rounded-full bg-verm" />
            <i className="w-3 h-3 rounded-full bg-yellow-400" />
            <i className="w-3 h-3 rounded-full bg-ok" />
            <span className="mono opacity-60 mx-auto">~/toolkit — zsh</span>
          </div>

          <div className="p-4 sm:p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-8" id="tt">
              {TABS.map((tab) => {
                const isOn = selectedTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`tt ${isOn ? 'on' : ''} !text-paper cursor-pointer`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {TABS.map((tab) => {
              if (tab.id !== selectedTab) return null;
              return (
                <ul
                  key={tab.id}
                  className="tp on grid md:grid-cols-2 gap-x-10 gap-y-5"
                >
                  {tab.items.map((item, index) => (
                    <li
                      key={item.title}
                      style={{ '--k': index } as React.CSSProperties}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <b>{item.title}</b>
                        <span className={`mono ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <p className="text-sm opacity-60">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

