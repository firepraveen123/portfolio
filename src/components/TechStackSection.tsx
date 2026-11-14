'use client';

import { useState } from 'react';
import {
  Terminal,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Code2,
  Layers,
  Cloud,
  Radio,
  Workflow,
  Sparkles,
  Palette,
  Network,
} from 'lucide-react';

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

interface SubsystemItem {
  node: string;
  title: string;
  role: string;
  tag: string;
  accent: string;
  desc: string;
  chips: string[];
  metric: string;
  verified: string;
  icon: React.ReactNode;
}

interface SubsystemTab {
  id: number;
  label: string;
  code: string;
  subtitle: string;
  count: string;
  items: SubsystemItem[];
}

const TABS: SubsystemTab[] = [
  {
    id: 0,
    label: 'Client Systems',
    code: 'SYS:CLIENT',
    subtitle: 'Core Client & Reactive UI Engines',
    count: '04 NODES',
    items: [
      {
        node: 'NODE // 01',
        title: 'React 19 / 18',
        role: 'Concurrent Server Actions & Suspense',
        tag: 'CONCURRENT',
        accent: '#00d8ff',
        desc: 'Suspense boundaries, React Server Components (RSC), action transitions, micro-task coordination, and optimistic mutations.',
        chips: ['Suspense', 'Server Actions', 'RSC Architecture', 'useOptimistic'],
        metric: '60 FPS Transitions',
        verified: 'Production Verified',
        icon: <Layers className="w-4 h-4 text-[#00d8ff]" />,
      },
      {
        node: 'NODE // 02',
        title: 'Next.js (App & Pages)',
        role: 'Hybrid SSR & Edge Streaming',
        tag: 'HYBRID_SSR',
        accent: '#e4472b',
        desc: 'Streaming SSR, ISR incremental regeneration, route handlers, middleware cookie auth, and edge rendering pipelines.',
        chips: ['Streaming SSR', 'Route Handlers', 'Edge Middleware', 'ISR Cache'],
        metric: 'Sub-1.2s TTFB',
        verified: 'Production Verified',
        icon: <Zap className="w-4 h-4 text-[#e4472b]" />,
      },
      {
        node: 'NODE // 03',
        title: 'TypeScript (Strict)',
        role: 'Zero-Any & Contract Parity',
        tag: 'ZERO_ANY',
        accent: '#3178c6',
        desc: 'Generics, discriminated unions, zero-any policy, schema-driven validation with Zod, and full API contract parity.',
        chips: ['Strict Mode', 'Discriminated Unions', 'Zod Schemas', 'Contract Typing'],
        metric: '100% Type Safe',
        verified: 'Production Verified',
        icon: <Code2 className="w-4 h-4 text-[#3178c6]" />,
      },
      {
        node: 'NODE // 04',
        title: 'Modern JavaScript (ESNext)',
        role: 'Web Standards & Worker Threads',
        tag: 'STANDARDS',
        accent: '#f7df1e',
        desc: 'Async iterators, event loops, Web Workers, Proxy wrappers, DOM observer APIs, and broadcast channel synchronization.',
        chips: ['Web Workers', 'Event Loop', 'Proxy Wrappers', 'BroadcastChannel'],
        metric: 'Zero Main-Thread Jitter',
        verified: 'Production Verified',
        icon: <Sparkles className="w-4 h-4 text-[#f7df1e]" />,
      },
    ],
  },
  {
    id: 1,
    label: 'Systems & Infra',
    code: 'SYS:INFRA',
    subtitle: 'Cloud Deployment, APIs & Network Transport',
    count: '04 NODES',
    items: [
      {
        node: 'NODE // 05',
        title: 'AWS Cloud Practitioner',
        role: 'Cloud Assets & Edge Distributions',
        tag: 'CERTIFIED',
        accent: '#ff9900',
        desc: 'S3 static asset pipelines, CloudFront edge caching distributions, Route 53 DNS routing, and IAM security policies.',
        chips: ['AWS Certified', 'S3 & CloudFront', 'Route 53 DNS', 'IAM Policies'],
        metric: 'Global CDN Delivery',
        verified: 'AWS Accredited',
        icon: <Cloud className="w-4 h-4 text-[#ff9900]" />,
      },
      {
        node: 'NODE // 06',
        title: 'REST & GraphQL Architecture',
        role: 'Normalized State & Query Resolvers',
        tag: 'APIS',
        accent: '#e535ab',
        desc: 'Normalized client schemas, optimistic cache mutations, batch query resolution, and zero-redundancy network waterfalls.',
        chips: ['Normalized Cache', 'Optimistic UI', 'Batch Resolvers', 'MSW Mocking'],
        metric: '-40% Waterfall Delay',
        verified: 'Production Verified',
        icon: <Network className="w-4 h-4 text-[#e535ab]" />,
      },
      {
        node: 'NODE // 07',
        title: 'WebSockets & Real-Time SSE',
        role: 'Duplex Event Dispatch & Telemetry',
        tag: 'REAL_TIME',
        accent: '#10b981',
        desc: 'Bi-directional dispatch protocols, automated heartbeat ping/pong, reconnect backoff queues, and Server-Sent Events.',
        chips: ['Bi-directional', 'Heartbeat Ping', 'Backoff Reconnect', 'SSE Streams'],
        metric: '< 30ms Event Latency',
        verified: 'Production Verified',
        icon: <Radio className="w-4 h-4 text-[#10b981]" />,
      },
      {
        node: 'NODE // 08',
        title: 'CI/CD & Release Automation',
        role: 'Automated Test & Edge Deployments',
        tag: 'DEPLOY',
        accent: '#6366f1',
        desc: 'GitHub Actions automated workflows, Vercel edge deployment hooks, bundle size regression alerts, and lint gating.',
        chips: ['GitHub Actions', 'Vercel Edge', 'Bundle Gate', 'Automated E2E'],
        metric: '100% Automated Deploys',
        verified: 'Production Verified',
        icon: <Workflow className="w-4 h-4 text-[#6366f1]" />,
      },
    ],
  },
  {
    id: 2,
    label: 'Code Rigor & Vitals',
    code: 'SYS:RIGOR',
    subtitle: 'Performance Benchmarks & Quality Assurance',
    count: '04 NODES',
    items: [
      {
        node: 'NODE // 09',
        title: 'Bundle Budgeting & Tree-Shaking',
        role: 'Zero-Dependency & Code Splitting',
        tag: 'METRICS',
        accent: '#10b981',
        desc: 'Zero-dependency audits, dead-code elimination, Rollup manual chunking, and lazy module dynamic imports.',
        chips: ['Tree Shaking', 'Manual Chunking', 'Dynamic Imports', '< 80KB Initial'],
        metric: '-20% JS Payload Size',
        verified: 'Production Verified',
        icon: <Cpu className="w-4 h-4 text-[#10b981]" />,
      },
      {
        node: 'NODE // 10',
        title: 'Jest & React Testing Library',
        role: 'Behavioral Tests & MSW Network Mocking',
        tag: 'TESTING',
        accent: '#c21325',
        desc: 'Behavior-driven integration tests, MSW network mocking, 85%+ coverage gates, and regression test suites.',
        chips: ['Integration Tests', 'MSW Server', '85%+ Coverage', 'A11y Tests'],
        metric: 'Zero Regressions',
        verified: 'Production Verified',
        icon: <ShieldCheck className="w-4 h-4 text-[#c21325]" />,
      },
      {
        node: 'NODE // 11',
        title: 'Web Vitals & INP Profiling',
        role: 'Chrome DevTools & Flamegraph Audits',
        tag: 'VITALS',
        accent: '#06b6d4',
        desc: 'Targeting INP < 150ms, LCP < 2.0s, CLS < 0.05 verified on throttled 4x CPU and low-tier mobile networks.',
        chips: ['INP < 150ms', 'LCP < 2.0s', 'CLS < 0.05', 'Flamegraph Audit'],
        metric: 'Grade A Lighthouse',
        verified: 'Production Verified',
        icon: <Activity className="w-4 h-4 text-[#06b6d4]" />,
      },
      {
        node: 'NODE // 12',
        title: 'Tailwind CSS & Token Systems',
        role: 'Zero-Runtime Responsive Styling',
        tag: 'STYLING',
        accent: '#38bdf8',
        desc: 'Sub-50KB production CSS payloads, custom responsive design systems, CSS grid subgrid, and dark/light token scales.',
        chips: ['Token Scalability', 'Sub-50KB CSS', 'Container Queries', 'Subgrid Layouts'],
        metric: 'Sub-50KB CSS Footprint',
        verified: 'Production Verified',
        icon: <Palette className="w-4 h-4 text-[#38bdf8]" />,
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
      <div className="relative my-14 sm:my-20 mb-24 sm:mb-32 overflow-hidden">
        {/* Subtle Vignettes for smooth edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 z-10 bg-gradient-to-r from-[rgb(var(--sand))] via-[rgb(var(--sand))]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 z-10 bg-gradient-to-l from-[rgb(var(--sand))] via-[rgb(var(--sand))]/80 to-transparent" />

        {/* Rail 01 Header Telemetry */}
        <div className="wrap mb-6 sm:mb-8 flex items-center justify-between text-xs mono text-graphite/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-verm animate-pulse" />
            <span className="font-semibold text-ink uppercase tracking-wider text-[11px] sm:text-xs">
              Track 01 // Client Systems &amp; Component Runtimes
            </span>
          </div>
        </div>

        {/* Track 1: Client Runtimes (Leftwards) */}
        <div className="marq-wrap py-4 mb-14 sm:mb-20">
          <div className="marq" style={{ '--t': '38s' } as React.CSSProperties}>
            <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0">
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
            <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0" aria-hidden="true">
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
        <div className="wrap mb-6 sm:mb-8 flex items-center justify-between text-xs mono text-graphite/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-ink uppercase tracking-wider text-[11px] sm:text-xs">
              Track 02 // Cloud Infrastructure, Protocols &amp; Native Mobile
            </span>
          </div>
        </div>

        {/* Track 2: Infra & Systems (Rightwards / Reverse direction, Dark Obsidian Cards) */}
        <div className="marq-wrap py-4">
          <div className="marq rev" style={{ '--t': '42s' } as React.CSSProperties}>
            <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0">
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
            <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0" aria-hidden="true">
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

      {/* Redesigned Architecture Terminal Box */}
      <div className="wrap">
        <div className="rounded-2xl border border-line/80 bg-ink text-paper overflow-hidden shadow-2xl rv in">
          {/* Console Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-paper/10 bg-paper/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-verm/90 border border-verm/40" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-400/40" />
                <span className="w-3 h-3 rounded-full bg-ok/90 border border-ok/40" />
              </div>
              <div className="h-4 w-px bg-paper/15 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-verm" />
                <span className="mono text-xs text-paper/85 font-medium tracking-wide">
                  ~/praveen/toolkit/subsystem-matrix
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] mono bg-paper/10 text-paper/60 border border-paper/10">
                  v4.2-STABLE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ok/10 text-ok border border-ok/20 text-[10px] mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
                ALL ENGINES LIVE
              </span>
              <span className="mono text-[11px] text-paper/50">
                NODE 01-12
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-7 md:p-9">
            {/* Subsystem Switcher Bar */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-1.5 rounded-xl bg-paper/[0.04] border border-paper/10 mb-8">
              {TABS.map((tab) => {
                const isOn = selectedTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex-1 flex items-center justify-between sm:justify-center gap-2.5 px-4 py-3 rounded-lg text-xs mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isOn
                        ? 'bg-paper/15 text-paper font-semibold border border-paper/25 shadow-md shadow-black/30'
                        : 'text-paper/55 hover:text-paper/90 hover:bg-paper/[0.06] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isOn ? 'bg-verm animate-pulse' : 'bg-paper/30'
                        }`}
                      />
                      <span className="font-semibold">{tab.label}</span>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        isOn
                          ? 'bg-verm/20 text-verm border border-verm/30 font-bold'
                          : 'bg-paper/5 text-paper/40'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Subsystem Grid */}
            {TABS.map((tab) => {
              if (tab.id !== selectedTab) return null;
              return (
                <div
                  key={tab.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                >
                  {tab.items.map((item, index) => (
                    <div
                      key={item.title}
                      style={{ '--k': index } as React.CSSProperties}
                      className="group relative p-5 sm:p-6 rounded-xl border border-paper/10 bg-paper/[0.03] hover:bg-paper/[0.06] hover:border-paper/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
                    >
                      {/* Ambient background glow */}
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 w-28 h-28 rounded-full opacity-10 group-hover:opacity-25 blur-2xl transition-opacity duration-300"
                        style={{ backgroundColor: item.accent }}
                      />

                      <div>
                        {/* Top Node & Tag Header */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="px-2 py-0.5 rounded text-[10px] mono font-bold bg-paper/5 text-paper/60 border border-paper/10">
                            {item.node}
                          </span>
                          <span
                            className="mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border tracking-wide flex items-center gap-1.5"
                            style={{
                              borderColor: `${item.accent}40`,
                              color: item.accent,
                              backgroundColor: `${item.accent}12`,
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full"
                              style={{ backgroundColor: item.accent }}
                            />
                            {item.tag}
                          </span>
                        </div>

                        {/* Title and Icon */}
                        <div className="flex items-start gap-3.5 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-paper/5 border border-paper/10 flex items-center justify-center shrink-0 group-hover:border-paper/30 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-base sm:text-lg text-paper tracking-tight group-hover:text-verm transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-paper/60 font-medium">
                              {item.role}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-paper/75 leading-relaxed mb-4">
                          {item.desc}
                        </p>

                        {/* Architecture Capability Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.chips.map((chip) => (
                            <span
                              key={chip}
                              className="px-2 py-0.5 rounded text-[10px] mono bg-paper/[0.04] text-paper/70 border border-paper/[0.08] group-hover:border-paper/20 group-hover:text-paper/90 transition-colors"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Rail */}
                      <div className="pt-3 border-t border-paper/10 flex items-center justify-between text-[11px] mono">
                        <span className="flex items-center gap-1.5 text-paper/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ok" />
                          <span>{item.verified}</span>
                        </span>
                        <span
                          className="font-semibold px-2 py-0.5 rounded"
                          style={{
                            color: item.accent,
                            backgroundColor: `${item.accent}15`,
                          }}
                        >
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Bottom Console Command Bar */}
            <div className="mt-8 pt-5 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mono">
              <div className="flex items-center gap-2 text-paper/80">
                <span className="text-verm font-bold">$</span>
                <span className="text-paper/90">praveen --audit --architecture --strict</span>
                <span className="w-2 h-4 bg-verm inline-block animate-pulse" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-paper/5 border border-paper/10 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-ok" />
                <span className="text-paper/70 font-medium">AUDIT:</span>
                <span className="text-ok font-bold">12/12 ENGINES COMPLIANT (0 WARNINGS)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

