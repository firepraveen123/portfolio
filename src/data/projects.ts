export interface ProjectStat {
  label: string;
  value: string;
  sub: string;
}

export interface TelemetryRow {
  metric: string;
  baseline: string;
  optimized: string;
  impact: string;
}

export interface FrictionPoint {
  title: string;
  desc: string;
}

export interface ArchitecturalImplementation {
  title: string;
  desc: string;
}

export interface TechStackItem {
  label: string;
  value: string;
}

export interface ProjectDetail {
  slug: string;
  num: string;
  caseTag: string;
  category: string;
  regionOrScopeTag: string;
  status: string;
  statusColor?: string;
  title: string;
  tagline: string;
  summary?: string;
  metadata: {
    label: string;
    value: string;
  }[];
  highlightBox: {
    kicker: string;
    metric: string;
    desc: string;
  };
  tags: string[];
  bannerHeader: string;
  bannerSub: string;
  bannerType: 'silicon-drive' | 'digipod' | 'machfox' | 'intra' | 'shell-oman' | 'edubotix' | 'atmed';
  extraBannerCards?: {
    kicker: string;
    title: string;
    desc: string;
  }[];
  threeStatsRow?: {
    kicker: string;
    stat: string;
    desc: string;
  }[];
  friction: {
    kicker: string;
    title: string;
    desc: string;
  };
  frictionPoints?: FrictionPoint[];
  solution: {
    kicker: string;
    title: string;
    desc: string;
  };
  architecturalImplementations?: ArchitecturalImplementation[];
  deliverables?: string[];
  telemetryTable?: TelemetryRow[];
  techStackDetailed?: TechStackItem[];
  stats?: ProjectStat[];
}

export const PROJECTS_DATA: Record<string, ProjectDetail> = {
  'silicon-drive': {
    slug: 'silicon-drive',
    num: '01',
    caseTag: 'CASE 01',
    category: 'TRANSIT LOGISTICS',
    regionOrScopeTag: 'ACTIVE ENGAGEMENT',
    status: 'ACTIVE PRODUCTION ENGAGEMENT',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    title: 'Silicon Drive',
    tagline: 'Corporate Cab Booking & Fleet Transportation Management Platform',
    summary: 'Silicon Drive is a corporate cab booking and transportation management platform designed to provide safe, reliable, and cost-efficient employee travel solutions for businesses. Engineered dynamic dispatch route queues, multi-tenant fleet status boards, and live driver routing across high-density urban corridors with zero latency spikes.',
    metadata: [
      { label: 'Role:', value: 'Frontend Software Architect' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Status:', value: 'Active Production Engagement' },
      { label: 'Sector:', value: 'Corporate Commuter Transit & Urban Logistics' },
      { label: 'Platform:', value: 'Real-time Dispatch Cockpit & Console' },
      { label: 'Timeline:', value: 'Feb 2026 — Present' },
    ],
    highlightBox: {
      kicker: 'DISPATCH OPTIMIZATION',
      metric: '640ms → 420ms',
      desc: 'Transit dispatch latency slashed by 34% through optimistic UI updates, normalized client-side fleet state, and WebSocket batching across 128 active cabs.',
    },
    tags: [
      'React 18',
      'TypeScript',
      'Google Maps API',
      'WebSockets',
      'Optimistic UI',
      'Tailwind CSS',
    ],
    bannerHeader: 'CORPORATE CAB & FLEET OPERATIONS PLATFORM',
    bannerSub: 'Moving People Moving Business',
    bannerType: 'silicon-drive',
    friction: {
      kicker: 'THE ENGINEERING FRICTION & CHALLENGE',
      title: 'The High-Density Urban Routing & Latency Dilemma',
      desc: "Silicon Drive handles high-frequency corporate commuter routes across Bengaluru's busy corridors. When hundreds of cab location vectors and passenger trip requests stream concurrently, typical React architectures choke under frequent state mutations, causing lock contention during driver dispatches and UI freezes on driver allocation boards.",
    },
    frictionPoints: [
      {
        title: 'High Concurrency Vector Streams',
        desc: 'Hundreds of drivers emitting continuous GPS latitude/longitude updates over WebSockets caused constant component re-renders.',
      },
      {
        title: 'Lock Contention During Peak Commute',
        desc: 'When office shifts ended simultaneously, concurrent dispatch requests resulted in race conditions and duplicate driver allocation attempts.',
      },
      {
        title: 'Map Rendering Bottlenecks',
        desc: 'Naive DOM marker updates in Google Maps caused garbage collection thrashing and dropped frame rates below 20 FPS.',
      },
    ],
    solution: {
      kicker: 'THE ARCHITECTURAL SOLUTION',
      title: 'Optimistic Dispatch Routing with Normalized GeoJSON Buffers',
      desc: 'I decoupled the transit coordinates pipeline from standard React component re-renders. By batching WebSocket location updates into direct Google Maps overlay data sources and managing cab state through a normalized state machine with optimistic UI updates, dispatch latency dropped by 34% with zero lock contention.',
    },
    architecturalImplementations: [
      {
        title: 'Normalized Client Fleet Store',
        desc: 'Normalized cab and trip entities by ID to eliminate nested array searches and tree-wide re-renders.',
      },
      {
        title: 'Optimistic Dispatch Dispatcher',
        desc: 'Instantly committed UI assignments upon driver tap, resolving server reconciliation in the background.',
      },
      {
        title: 'Direct GeoJSON Overlay Rendering',
        desc: 'Bypassed React virtual DOM reconciliation for moving vehicle markers by binding WebSocket coordinate streams directly to Google Maps Data Layer instances.',
      },
      {
        title: 'Dynamic Route Queuing',
        desc: 'Algorithmic queuing interface to match commuters with available vehicles in sub-second turnaround times.',
      },
    ],
    deliverables: [
      'Engineered low-latency dynamic route queues and driver allocation interfaces with Google Maps and real-time WebSockets.',
      'Reduced transit dispatch latency by 34% (640ms down to 420ms) through optimistic UI updates and normalized client-side fleet state.',
      'Constructed multi-tenant fleet status telemetry boards supporting thousands of daily commuter rides with zero lock contention.',
      'Maintained a clean zero-wait queue during peak Bengaluru office rush hours.',
    ],
    telemetryTable: [
      {
        metric: 'Dispatch Latency',
        baseline: '640ms',
        optimized: '420ms',
        impact: '-34% latency reduction',
      },
      {
        metric: 'Active Fleet Capacity',
        baseline: '—',
        optimized: '128 Cabs Live',
        impact: 'Real-time tracking with 0 wait queue',
      },
      {
        metric: 'Concurrency Contention',
        baseline: 'Multiple race conditions',
        optimized: '0 Lock Contentions',
        impact: 'Strict idempotent state mutation',
      },
      {
        metric: 'Client Bundle Budget',
        baseline: '85 kB',
        optimized: '<42 kB',
        impact: 'Clean CSS layouts & zero bloat',
      },
    ],
    techStackDetailed: [
      { label: 'Frontend Framework', value: 'React 18' },
      { label: 'Language', value: 'TypeScript (Strict Mode)' },
      { label: 'Mapping & Geolocation', value: 'Google Maps JavaScript API' },
      { label: 'Real-Time Transport', value: 'WebSockets (Binary JSON batching)' },
      { label: 'State Management', value: 'Custom Normalized State Machine with Optimistic UI Mutators' },
      { label: 'Styling', value: 'Tailwind CSS with CSS Grid layouts' },
    ],
    stats: [
      {
        label: 'DISPATCH RESPONSE',
        value: '420ms Flat',
        sub: 'Down from 640ms legacy bottlenecks.',
      },
      {
        label: 'LOCK CONTENTION',
        value: '0 Race Conditions',
        sub: 'Seamless multi-tenant driver queue.',
      },
    ],
  },

  digipod: {
    slug: 'digipod',
    num: '02',
    caseTag: 'CASE 02',
    category: 'HYPERLOCAL DISCOVERY',
    regionOrScopeTag: 'MYSURU REGION',
    status: 'PRODUCTION LIVE',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    title: 'DigiPod',
    tagline: 'Local Discovery & Learning Platform (Mysuru Hub)',
    summary: 'DigiPod is a digital platform designed to connect users with local vendors, creators, professionals, and service providers, especially in and around Mysuru. It helps users discover nearby businesses, creative talents, educational institutions, courses, training programs, and services in one place. The platform bridges the gap between local service providers and people looking for their products, skills, and services while also providing opportunities for creators and vendors to showcase their offerings and grow their reach.',
    metadata: [
      { label: 'Role:', value: 'Front-End Developer & UI Architect' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Sector:', value: 'Hyperlocal Discovery, Creator Economy & EdTech' },
      { label: 'Target Geography:', value: 'Mysuru & Surrounding Tier-2 Hubs' },
      { label: 'Platform:', value: 'Web Directory Portal & Discovery Engine' },
      { label: 'Timeline:', value: '2024 — 2025' },
    ],
    highlightBox: {
      kicker: 'SEARCH VELOCITY',
      metric: '1,200ms → 18ms',
      desc: 'In-memory client-side directory indexing connects users to local businesses, courses, and creators with sub-20ms multi-tag filtering.',
    },
    tags: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Geolocation API',
      'In-Memory Index',
      'REST APIs',
    ],
    bannerHeader: 'DIGIPOD OPERATIONS DASHBOARD · USER & VENDOR NETWORK',
    bannerSub: 'Mysuru Regional Hub',
    bannerType: 'digipod',
    friction: {
      kicker: 'THE ENGINEERING FRICTION & CHALLENGE',
      title: 'Fragmented Local Markets & Database Roundtrip Bottlenecks',
      desc: 'Hyperlocal discovery engines in Tier-2 Indian hubs encounter severe performance bottlenecks when every search keystroke and category filter hits the backend SQL database. On 3G/4G networks, repeated round-trips introduced 1,200ms+ search latency, leading to high drop-off rates for users seeking nearby tutors, creators, and local service providers.',
    },
    frictionPoints: [
      {
        title: 'Network Latency Overhead',
        desc: 'Mobile users on fluctuating 3G/4G connections experienced noticeable delays waiting for server-side search results.',
      },
      {
        title: 'Compound Filtering Overhead',
        desc: 'Filtering simultaneously across categories, physical distance radius, price, and ratings caused expensive server queries.',
      },
      {
        title: 'Payload Bloat',
        desc: 'Serving comprehensive vendor profiles burdened mobile data plans and depleted battery life.',
      },
    ],
    solution: {
      kicker: 'THE ARCHITECTURAL SOLUTION',
      title: 'In-Memory Inverted Indexing & Client-Side Geolocation',
      desc: "To solve search lag, I built an in-memory client-side directory indexing engine using client-side inverted indexes and indexed geolocation coordinates. Search and filtering operations execute directly in the browser's main-thread idle time, dropping search response times down to 18ms with zero server CPU strain.",
    },
    architecturalImplementations: [
      {
        title: 'In-Memory Tri-Gram Search Index',
        desc: 'Built a lightweight client-side search index enabling instant substring and category queries across hundreds of listings.',
      },
      {
        title: 'Client Geolocation Radius Math',
        desc: 'Executed Haversine distance calculations in the browser to compute proximity sorting without backend calls.',
      },
      {
        title: 'Chunked Payload Hydration',
        desc: 'Pre-compressed and statically served directory bundles under 55kB, hydrated progressively based on user scroll depth.',
      },
    ],
    deliverables: [
      'Connected users with local vendors, creators, professionals, and service providers, especially in and around Mysuru.',
      'Enabled seamless discovery of nearby businesses, creative talents, educational institutions, courses, training programs, and services in one unified interface.',
      'Bridged the discovery gap between local service providers and consumers while providing opportunities for local businesses to showcase offerings and grow reach.',
      'Dropped search and filter latency from 1.2 seconds down to 18 milliseconds.',
    ],
    telemetryTable: [
      {
        metric: 'Search Response Time',
        baseline: '1,200ms',
        optimized: '18ms',
        impact: 'Instant keystroke filtering',
      },
      {
        metric: 'Directory Scope',
        baseline: '—',
        optimized: '480+ Listings',
        impact: 'Local vendors, tutors & creators',
      },
      {
        metric: 'Initial Payload Size',
        baseline: '240 kB',
        optimized: '<55 kB',
        impact: 'Fast loading on 3G/4G mobile',
      },
      {
        metric: 'Server CPU Utilization',
        baseline: 'High search query load',
        optimized: 'Near Zero',
        impact: 'Offloaded to browser client',
      },
    ],
    techStackDetailed: [
      { label: 'Frontend Framework', value: 'React, Next.js' },
      { label: 'Styling', value: 'Tailwind CSS (Mobile-First responsive architecture)' },
      { label: 'Geolocation', value: 'Browser Geolocation API & Haversine distance calculations' },
      { label: 'Search Engine', value: 'In-Memory Inverted Index' },
      { label: 'APIs', value: 'RESTful Node.js endpoints with gzip/brotli compression' },
    ],
    stats: [
      {
        label: 'SEARCH LATENCY',
        value: '18ms Flat',
        sub: 'Sub-second multi-tag indexing.',
      },
      {
        label: 'CATALOGUE DEPTH',
        value: '480+ Listings',
        sub: 'Zero server roundtrip filtering.',
      },
    ],
  },

  machfox: {
    slug: 'machfox',
    num: '03',
    caseTag: 'CASE 03',
    category: 'RAILWAY COMPLIANCE',
    regionOrScopeTag: 'RAILWAY CONTRACTS',
    status: 'PRODUCTION DEPLOYED',
    statusColor: 'text-teal bg-teal/10 border-teal/30',
    title: 'Machfox',
    tagline: 'Service Management System for Railway Contracts',
    summary: 'The Service Management System for Railway Contracts is designed to manage end-to-end operations of service contracts awarded by railway departments. The system ensures efficient planning, execution, monitoring, and compliance of contracted services such as maintenance, operations, staffing, and infrastructure support.',
    metadata: [
      { label: 'Role:', value: 'Front-End Developer & UI Architect' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Sector:', value: 'Indian Railways Infrastructure & Heavy Asset Management' },
      { label: 'Platform:', value: 'Enterprise Web Portal & Field Verification Console' },
      { label: 'Scope:', value: '2,400+ Contract Deliverables' },
      { label: 'Timeline:', value: 'Nov 2025 — Feb 2026' },
    ],
    highlightBox: {
      kicker: 'SLA AUDIT ACCELERATION',
      metric: '14s → 1.1s (-92%)',
      desc: 'Instantaneous client-side discrepancy validation rules eliminated paper-bound clipboard delays, accelerating SLA audit cycles across 2,400+ deliverables.',
    },
    tags: [
      'Next.js',
      'TypeScript',
      '@tanstack/react-virtual',
      'Chart.js',
      'SLA Rules Engine',
      'Tailwind CSS',
    ],
    bannerHeader: 'MACHFOX SERVICE MANAGEMENT SYSTEM · WEB & MOBILE INTERFACES',
    bannerSub: 'Railway Contract Operations',
    bannerType: 'machfox',
    friction: {
      kicker: 'THE ENGINEERING FRICTION & CHALLENGE',
      title: 'DOM Overload & Multi-Megabyte Matrix Lag in Railway Audits',
      desc: 'Managing railway service contracts involves deeply nested hierarchical datasets: zones, divisions, departments, contractor workforces, and multi-year maintenance schedules. Field officers were forced to navigate sluggish multi-megabyte data grids, leading to 14-second audit review freezes and human calculation errors during compliance sign-offs.',
    },
    frictionPoints: [
      {
        title: 'DOM Overload in Deep Matrices',
        desc: 'Rendering thousands of table rows with nested sub-tasks froze browser tabs and exhausted mobile tablet memory.',
      },
      {
        title: 'Laggy Audit Verifications',
        desc: 'Manual verification of daily deliverables against multi-tier SLAs took upwards of 14 seconds per contract review.',
      },
      {
        title: 'Paperwork Discrepancies',
        desc: 'Field clipboard data entry frequently suffered from transcription mistakes and unvalidated inputs.',
      },
    ],
    solution: {
      kicker: 'THE ARCHITECTURAL SOLUTION',
      title: 'Windowed Virtualization & Client-Side SLA Validation Engine',
      desc: 'I re-architected the table rendering layer using windowed virtualization (@tanstack/react-virtual), rendering only active DOM rows regardless of matrix depth. Furthermore, I built deterministic client-side SLA validation pipelines with instant visual error states, eliminating manual paperwork for over 2,400 contractual deliverables.',
    },
    architecturalImplementations: [
      {
        title: 'Virtualized Hierarchical Table Engine',
        desc: 'Rendered only rows currently visible in the viewport, maintaining a flat memory footprint across 10,000+ data nodes.',
      },
      {
        title: 'Client-Side SLA Validation Engine',
        desc: 'Embedded instant client-side discrepancy validation rules to automatically check workforce ratios, shift times, and milestone deadlines.',
      },
      {
        title: 'Interactive Analytics Cockpit',
        desc: 'Integrated Chart.js visualizations for contract spending burn-down, penalty trackers, and compliance scorecards.',
      },
    ],
    deliverables: [
      'Provided centralized control over contracts, zones, divisions, departments, workforce, and service schedules.',
      'Automated performance tracking and SLA reporting, ensuring transparency, accountability, and contract compliance.',
      'Eliminated manual clipboard inspections with instant client-side discrepancy validation rules for 2,400+ deliverables.',
      'Slashed audit cycle turnaround times by 92% (from 14 seconds to 1.1 seconds).',
    ],
    telemetryTable: [
      {
        metric: 'SLA Audit Review',
        baseline: '14,000ms',
        optimized: '1,100ms',
        impact: '92% faster review cycles',
      },
      {
        metric: 'Processed Deliverables',
        baseline: 'Manual clipboards',
        optimized: '2,400+ Live',
        impact: 'Automated compliance validation',
      },
      {
        metric: 'Grid Scroll FPS',
        baseline: '12-15 FPS (Jank)',
        optimized: '60 FPS Flat',
        impact: 'Windowed virtualization',
      },
      {
        metric: 'Error Rate',
        baseline: '~8% transcription error',
        optimized: '0%',
        impact: 'Pre-submission schema validation',
      },
    ],
    techStackDetailed: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Visualizations', value: 'Chart.js with responsive canvas resizing' },
      { label: 'Table Virtualization', value: 'Windowed virtual DOM tables (@tanstack/react-virtual)' },
      { label: 'Styling', value: 'Tailwind CSS with high-density data spacing' },
      { label: 'Data Protocols', value: 'RESTful APIs with typed contract payloads' },
    ],
    stats: [
      {
        label: 'AUDIT DURATION',
        value: '1.1s Check',
        sub: 'Down from 14s manual clipboard reviews.',
      },
      {
        label: 'SLA COMPLIANCE',
        value: '99.1% Verified',
        sub: 'Instant discrepancy rule engine.',
      },
    ],
  },

  intra: {
    slug: 'intra',
    num: '04',
    caseTag: 'CASE 04',
    category: 'OPERATIONS & HR',
    regionOrScopeTag: 'ENTERPRISE HROS',
    status: 'INTERNAL PRODUCTION',
    statusColor: 'text-teal bg-teal/10 border-teal/30',
    title: 'Intra 3.0',
    tagline: 'Enterprise Internal Workflow & Performance Management System (HROS)',
    summary: 'Developed an internal workflow and performance management system using React.js and Redux, enabling staff onboarding, role-based access, activity tracking (meetings, feeds, surveys), and opportunity-based task management through responsive and reusable UI components.',
    metadata: [
      { label: 'Role:', value: 'Front-End Developer & State Architect' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Sector:', value: 'Internal Enterprise HR Operating System & Employee Performance' },
      { label: 'Platform:', value: 'High-Fidelity Enterprise Web Application' },
      { label: 'Scope:', value: '1,200+ Personnel Platform' },
      { label: 'Timeline:', value: '2023 — 2024' },
    ],
    highlightBox: {
      kicker: 'SCORECARD RECALCULATION',
      metric: '350ms → <16ms (-82%)',
      desc: 'Sub-16ms reactive scorecard updates via decoupled memoized selectors and AST-driven formula evaluation across 1,200 reviews.',
    },
    tags: [
      'Next.js / React.js',
      'Redux Toolkit (RTK)',
      'RTK Query',
      'React Hook Form',
      'Zod Validation',
      'Custom Formula AST',
    ],
    bannerHeader: 'INTRA 3.0 OPERATIONS CONSOLE · KPI 2.0 & PERFORMANCE TELEMETRY',
    bannerSub: 'Enterprise Workflow HROS',
    bannerType: 'intra',
    threeStatsRow: [
      {
        kicker: 'Legacy Appraisal',
        stat: 'Spreadsheet Drift',
        desc: '14% formula overwrites & corrupted cell references.',
      },
      {
        kicker: 'Intra 3.0 Engine',
        stat: 'Deterministic AST',
        desc: 'Tokenized execution parsed live in React worker.',
      },
      {
        kicker: 'Payroll Reconciliation',
        stat: '100% Exact',
        desc: 'Direct salary slip generation without manual auditing.',
      },
    ],
    friction: {
      kicker: 'THE ENGINEERING FRICTION & CHALLENGE',
      title: 'Cascading Component Re-renders & Formula Dependency Cycles',
      desc: "Intra's appraisal modules require employees and managers to score hundreds of granular competency metrics with dynamic weightings, milestone bonuses, and variable compensation logic. The legacy architecture triggered cascading React re-renders across the entire component tree on every score input, causing 350ms input lag and browser lockups during critical appraisal review cycles.",
    },
    frictionPoints: [
      {
        title: 'Cascading Component Re-renders',
        desc: 'Every numeric score change dirtied root form state, re-rendering hundreds of non-visible competency cards.',
      },
      {
        title: 'Formula Dependency Cycles',
        desc: 'Complex interdependent formulas (e.g. peer reviews + quarterly goals + attendance multipliers) caused race conditions in state updates.',
      },
      {
        title: 'Clunky Onboarding Workflows',
        desc: 'Legacy employee onboarding and permission assignments required numerous page reloads.',
      },
    ],
    solution: {
      kicker: 'THE ARCHITECTURAL SOLUTION',
      title: 'Isolated Memoized Selectors & Abstract Syntax Tree (AST) Evaluator',
      desc: 'I restructured the appraisal formula evaluator into an Abstract Syntax Tree (AST) running in isolated memoized selectors via Redux Toolkit. Input fields communicate with isolated state nodes without dirtying ancestor trees, reducing scorecard recalculation latency by 82% to sub-16ms speeds.',
    },
    architecturalImplementations: [
      {
        title: 'Decoupled Memoized Selectors',
        desc: 'Utilized createSelector memoization trees so only the specific scorecard summary widget updates when an input changes.',
      },
      {
        title: 'Atomic Form Input Nodes',
        desc: 'Isolated keystroke inputs using uncontrolled components bridged with React Hook Form to avoid Virtual DOM diffing overhead.',
      },
      {
        title: 'Dynamic Role-Based Access Control (RBAC)',
        desc: 'Built declarative permission gates for managers, department leads, and HR administrators.',
      },
      {
        title: 'Automated Incentive Engine',
        desc: 'Formulated automated salary hike and bonus recommendation pipelines calculated dynamically against quarterly milestones.',
      },
    ],
    deliverables: [
      'Implemented dynamic DOM manipulation and performance dashboards to automate task tracking, rewards, and salary hike calculations based on target completion.',
      'Engineered staff onboarding flows and role-based access with opportunity-based task management through reusable UI components.',
      'Decoupled complex matrix calculations into isolated memoized pipelines, eliminating 82% of appraisal calculation delays.',
      'Delivered sub-16ms reactive updates, ensuring zero UI stutter or typing lag during high-stress performance reviews.',
    ],
    telemetryTable: [
      {
        metric: 'Scorecard Recalculation',
        baseline: '350ms lag',
        optimized: '<16ms',
        impact: 'Sub-frame reactive updates',
      },
      {
        metric: 'Calculation Latency',
        baseline: 'High delay',
        optimized: '-82% delay',
        impact: 'Zero Virtual DOM churn',
      },
      {
        metric: 'Onboarding Turnaround',
        baseline: 'Multi-page reload',
        optimized: 'Instant SPA flow',
        impact: '40% faster employee onboarding',
      },
      {
        metric: 'Form Input Frame Rate',
        baseline: '24 FPS (Stutter)',
        optimized: '60 FPS',
        impact: 'Smooth typing experience',
      },
    ],
    techStackDetailed: [
      { label: 'Framework', value: 'Next.js (App Router) / React.js' },
      { label: 'State Management', value: 'Redux Toolkit (RTK) & RTK Query' },
      { label: 'Form Architecture', value: 'React Hook Form with Zod validation' },
      { label: 'Styling', value: 'Tailwind CSS with Material Design 3 tokens' },
      { label: 'Data Layer', value: 'RESTful microservices with memoized API caching' },
    ],
    stats: [
      {
        label: 'SCORECARD LATENCY',
        value: '< 16ms',
        sub: 'Sub-frame reactive recalculation.',
      },
      {
        label: 'CALCULATION DELAY',
        value: '-82% Delay',
        sub: 'Deterministic memoized AST engine.',
      },
    ],
  },

  'shell-oman': {
    slug: 'shell-oman',
    num: '05',
    caseTag: 'CASE 05',
    category: 'CCTV TELEMETRY',
    regionOrScopeTag: 'AI CCTV TELEMETRY',
    status: 'PRODUCTION DEPLOYED',
    statusColor: 'text-verm bg-verm/10 border-verm/30',
    title: 'Shell Oman',
    tagline: 'Real-Time AI CCTV Video Analytics & Forecourt Safety Telemetry',
    summary: 'Integrated a real-time AI CCTV analytics platform supporting smart city, retail, and manufacturing deployments into a responsive, high-performance operations interface. Developed a real-time monitoring dashboard to visualize multi-camera video processing, object detection, face recognition, and tracking data (utilizing backend feeds from YOLOv11, RetinaFace, ArcFace, and Byte Track).',
    metadata: [
      { label: 'Role:', value: 'Front-End Engineer & Performance Architect' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Sector:', value: 'Industrial Safety, Fuel Forecourt Logistics & AI Surveillance' },
      { label: 'Platform:', value: 'High-Throughput Real-Time Telemetry & Video Surveillance Console' },
      { label: 'Timeline:', value: '2023 — 2024' },
    ],
    highlightBox: {
      kicker: 'PERFORMANCE METRIC',
      metric: '16.2ms Frame Time (60 FPS)',
      desc: 'Zero-jank rendering with real-time YOLOv11 coordinate ingestion and OffscreenCanvas pipeline across 16 concurrent RTSP streams.',
    },
    tags: [
      'React 18',
      'TypeScript',
      'HTML5 Canvas',
      'OffscreenCanvas API',
      'Web Workers',
      'WebSockets',
      'YOLOv11',
      'ByteTrack',
      'Docker',
    ],
    bannerHeader: 'ZERO-DOM DECOUPLED PIPELINE VISUALIZER',
    bannerSub: 'OffscreenCanvas + Transferable Streams',
    bannerType: 'shell-oman',
    friction: {
      kicker: 'THE ENGINEERING FRICTION & CHALLENGE',
      title: 'Main Thread Saturation & 450ms Virtual DOM Freezing Dilemma',
      desc: "Streaming multi-camera RTSP/HLS feeds while superimposing real-time AI bounding boxes for PPE compliance, vehicle license plate identification, and hazardous zone intrusion overwhelmed the browser's main thread. Parsing continuous WebSocket JSON coordinate streams caused garbage collection pauses and dropped video frame rates below 14 FPS, freezing operator dashboards for up to 450ms.",
    },
    frictionPoints: [
      {
        title: 'Main Thread Saturation',
        desc: 'Parsing hundreds of bounding box coordinate packets per second blocked user interaction and stalled video playback.',
      },
      {
        title: 'Garbage Collection Thrashing',
        desc: 'Creating temporary React coordinate objects at 30-60 Hz caused recurrent garbage collection spikes.',
      },
      {
        title: 'Multi-Camera Grid Sync',
        desc: 'Synchronizing 4 to 16 concurrent live RTSP/WebRTC streams without audio-video-telemetry desynchronization.',
      },
    ],
    solution: {
      kicker: 'THE ARCHITECTURAL SOLUTION',
      title: 'Dedicated Web Worker Stream Parser & OffscreenCanvas GPU Blitting',
      desc: 'I offloaded telemetry ingestion and bounding-box coordinate parsing to a dedicated Web Worker. Telemetry rendering was routed through an OffscreenCanvas context, decoupling video feed playback from DOM painting. This reduced frame times to a rock-solid 16.2ms at 60 FPS with zero UI freezes.',
    },
    architecturalImplementations: [
      {
        title: 'Dedicated Web Worker Stream Parser',
        desc: 'Telemetry JSON streams from WebSockets are parsed and formatted in a secondary thread, leaving the UI thread unburdened.',
      },
      {
        title: 'OffscreenCanvas GPU Acceleration',
        desc: 'Rendered bounding boxes, intrusion zones, and safety tags directly via GPU-accelerated 2D canvas contexts.',
      },
      {
        title: 'Pre-Allocated Float32Array Buffers',
        desc: 'Replaced transient coordinate objects with circular typed array buffers to eliminate garbage collection pauses entirely.',
      },
      {
        title: 'Dockerized Edge Distribution',
        desc: 'Packaged the client application in multi-stage Docker containers for reliable deployment on industrial edge servers.',
      },
    ],
    deliverables: [
      'Integrated a real-time AI CCTV analytics platform supporting smart city, retail, and manufacturing deployments into a responsive user interface.',
      'Developed a real-time monitoring dashboard to visualize multi-camera video processing, object detection, face recognition, and tracking data (utilizing backend feeds from YOLOv11, RetinaFace, ArcFace, and Byte Track).',
      'Collaborated with AI/Backend teams to display optimized model inference metrics, ensuring seamless frontend video streaming and dashboard rendering speed.',
      'Utilized Docker and modern frontend optimization techniques to ensure the tracking dashboard loaded efficiently for field operators.',
    ],
    telemetryTable: [
      {
        metric: 'Frame Time',
        baseline: '71.4ms (14 FPS)',
        optimized: '16.2ms (60 FPS)',
        impact: 'Zero-jank fluid video',
      },
      {
        metric: 'UI Freeze Spikes',
        baseline: 'Up to 450ms freezes',
        optimized: '0ms Freeze',
        impact: 'OffscreenCanvas rendering',
      },
      {
        metric: 'GC Pause Frequency',
        baseline: 'Every ~2.5 seconds',
        optimized: 'Eliminated',
        impact: 'Typed circular memory buffers',
      },
      {
        metric: 'Model Ingestion',
        baseline: '—',
        optimized: 'YOLOv11 & ByteTrack',
        impact: 'Real-time PPE & vehicle tracking',
      },
    ],
    techStackDetailed: [
      { label: 'Framework', value: 'React 18' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Real-Time Data', value: 'WebSockets with binary JSON streaming' },
      { label: 'Graphics Pipeline', value: 'HTML5 Canvas, OffscreenCanvas API, Web Workers' },
      { label: 'AI Backend Feeds', value: 'YOLOv11, RetinaFace, ArcFace, Byte Track' },
      { label: 'Containerization', value: 'Docker multi-stage builds' },
      { label: 'Styling', value: 'Tailwind CSS (Dark-Mode Operations Center Theme)' },
    ],
    stats: [
      {
        label: 'FRAME TIME',
        value: '16.2ms Flat',
        sub: '60 FPS Locked Canvas.',
      },
      {
        label: 'UI FREEZE SPIKES',
        value: '0ms Freeze',
        sub: 'Zero-DOM OffscreenCanvas pipeline.',
      },
    ],
  },

  edubotix: {
    slug: 'edubotix',
    num: '06',
    caseTag: 'CASE 06',
    category: 'DISTRIBUTED STATE',
    regionOrScopeTag: 'ACTIVE STACK',
    status: 'PRODUCTION DEPLOYED',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    title: 'Edubotix',
    tagline: 'Institutional Examination & Digital Campus Platform',
    summary: 'Building a comprehensive web application to digitize school and college data, developing responsive frontend modules for real-time attendance tracking and automated reporting. Designing and implementing user interfaces for an exam question bank and mock test results portal, while ensuring secure handling of sensitive institutional records.',
    metadata: [
      { label: 'Role:', value: 'Front-End Developer & Offline-First Architect' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Sector:', value: 'K-12 & Higher Education, Standardized Testing, Institutional Logistics' },
      { label: 'Platform:', value: 'High-Stakes Browser Exam Cockpit & Campus Suite' },
      { label: 'Scale:', value: '1,24,000+ Students across hundreds of educational institutions' },
      { label: 'Timeline:', value: '2022 — 2023' },
    ],
    highlightBox: {
      kicker: 'AUTOSAVE INTEGRITY',
      metric: '100% Zero Loss (<4ms)',
      desc: 'Zero packet loss and tamper-resistant local encryption across 40,000 concurrent sessions during statewide network dropouts.',
    },
    tags: [
      'React',
      'IndexedDB',
      'Dexie.js',
      'WebCrypto API',
      'Background Sync API',
      'Tailwind CSS',
    ],
    bannerHeader: 'OFFLINE SYNC ARCHITECTURE · CRYPTOGRAPHIC STORE',
    bannerSub: 'Local-First Persistence',
    bannerType: 'edubotix',
    extraBannerCards: [
      {
        kicker: 'STATE MUTATION HANDSHAKE',
        title: '1. Local Encrypted Journal',
        desc: 'Every keystroke and answer selection is encrypted using Web Crypto AES-GCM and written to local storage in under 4ms.',
      },
      {
        kicker: 'STATE MUTATION HANDSHAKE',
        title: '2. Autonomous Reconnection Worker',
        desc: 'Upon handshake recovery, an optimistic reconciler dispatches signed batches with deduplication tokens to verify idempotency.',
      },
    ],
    friction: {
      kicker: 'THE ENGINEERING FRICTION & CHALLENGE',
      title: 'Unstable Campus Networks & High Concurrency Submission Spikes',
      desc: "Administering synchronized statewide mock exams across Tier-2 and Tier-3 schools frequently encountered intermittent power outages and broadband drops. If a student's browser crashed or disconnected mid-exam, standard web apps lost unsaved multiple-choice and descriptive answers, causing student panic and invalid testing sessions.",
    },
    frictionPoints: [
      {
        title: 'Unstable Network Conditions',
        desc: 'Intermittent Wi-Fi drops and cell tower handoffs in rural and suburban campuses caused dropped HTTP answer submissions.',
      },
      {
        title: 'Client-Side Security',
        desc: 'Student exam sessions required tamper-proof local persistence to prevent inspection and tampering with answer stores.',
      },
      {
        title: 'High Concurrency Spikes',
        desc: '40,000 concurrent students submitting completed tests within the same 60-second exam deadline risked overwhelming backend ingestion servers.',
      },
    ],
    solution: {
      kicker: 'THE ARCHITECTURAL SOLUTION',
      title: 'Offline-First Encrypted Journaling & Autonomous Reconnection Reconciler',
      desc: 'I implemented an offline-first persistence engine powered by IndexedDB (Dexie.js). Every answer selection is signed with client-side WebCrypto AES-GCM encryption and written to local storage in under 4ms. An autonomous service worker monitors network health and background-reconciles pending submissions with idempotent hashes upon reconnection.',
    },
    architecturalImplementations: [
      {
        title: 'Encrypted Local Journaling',
        desc: 'Answers and timestamps are encrypted with ephemeral session keys via WebCrypto API and persisted to IndexedDB within 4ms.',
      },
      {
        title: 'Autonomous Background Reconciler',
        desc: 'Background sync worker polls network health and flushes batched answers with deduplication tokens once connectivity resumes.',
      },
      {
        title: 'Real-Time Attendance & Bus Tracking',
        desc: 'Constructed responsive frontend dashboards for campus-wide student attendance tracking and live school bus fleet monitoring.',
      },
      {
        title: 'Automated Gradebook & Report Generation',
        desc: 'Engineered automated scoring modules that transform raw student answer keys into printable PDF reports and parent dashboards.',
      },
    ],
    deliverables: [
      'Designed and implemented user interfaces for an exam question bank and mock test results portal, while ensuring secure handling of sensitive institutional records.',
      'Developed responsive frontend modules for real-time attendance tracking and automated institutional reporting.',
      'Robust offline-first persistence via IndexedDB (Dexie) with automatic background sync upon network reconnection.',
      'Guaranteed 100% autosave integrity with zero lost answers during real-world network dropouts.',
    ],
    telemetryTable: [
      {
        metric: 'Answer Autosave Latency',
        baseline: 'Network dependent (800ms)',
        optimized: '<4ms',
        impact: 'Instant local encrypted write',
      },
      {
        metric: 'Autosave Integrity',
        baseline: 'Packet loss on disconnect',
        optimized: '100% Zero Loss',
        impact: 'Offline-first Dexie journal',
      },
      {
        metric: 'Concurrent Sessions',
        baseline: 'System crashed >10k',
        optimized: '40,000 Live',
        impact: 'Distributed local buffering',
      },
      {
        metric: 'Total Student Base',
        baseline: '—',
        optimized: '1,24,000+',
        impact: 'Scaled across multi-campus networks',
      },
    ],
    techStackDetailed: [
      { label: 'Framework', value: 'React' },
      { label: 'Local Database', value: 'IndexedDB with Dexie.js wrapper' },
      { label: 'Security', value: 'WebCrypto API (AES-GCM encryption & HMAC signatures)' },
      { label: 'Service Workers', value: 'Background Sync API with offline caching' },
      { label: 'Styling', value: 'Tailwind CSS (Distraction-free high-contrast exam theme)' },
      { label: 'Data Protocols', value: 'RESTful APIs with idempotent batch submission endpoints' },
    ],
    stats: [
      {
        label: 'AUTOSAVE SPEED',
        value: '< 4ms Write',
        sub: 'Web Crypto AES-GCM local storage.',
      },
      {
        label: 'TEST PRESERVATION',
        value: '100% Integrity',
        sub: 'Zero lost answers across 40,000 sessions.',
      },
    ],
  },

  atmed: {
    slug: 'atmed',
    num: '07',
    caseTag: 'CASE 07',
    category: 'NATIVE TELEHEALTH',
    regionOrScopeTag: 'MOBILE APP',
    status: 'PRODUCTION LIVE',
    statusColor: 'text-teal bg-teal/10 border-teal/30',
    title: 'AtMed Healthcare',
    tagline: 'Comprehensive Patient Care & Diagnostic Management Android Application',
    summary: 'AtMed Healthcare is an Android application offering a comprehensive platform for patients to manage their healthcare needs, including connecting with doctors, booking diagnostic tests, accessing medical equipment, maintaining health records, and exploring wellness resources. As part of the maintenance project, I actively work on enhancing existing features, resolving bugs, and ensuring the application functions seamlessly.',
    metadata: [
      { label: 'Role:', value: 'Mobile Application Engineer & Maintenance Specialist' },
      { label: 'Studio / Org:', value: 'Nextbrain Technologies' },
      { label: 'Sector:', value: 'Digital Health, Telemedicine & Diagnostic Laboratory Management' },
      { label: 'Platform:', value: 'Native Android Mobile Application' },
      { label: 'Status:', value: 'Active Production Maintenance Engagement' },
      { label: 'Timeline:', value: '2021 — Present' },
    ],
    highlightBox: {
      kicker: 'HEALTHCARE APP STABILITY',
      metric: '100% Seamless Lifecycle',
      desc: 'Eliminated runtime exceptions and memory leaks across fragmented Android OEM hardware, securing 100% EHR durability.',
    },
    tags: [
      'Android OS',
      'Kotlin',
      'Java',
      'MVVM Architecture',
      'Retrofit & OkHttp',
      'Room / SQLite',
      'Firebase',
    ],
    bannerHeader: 'NATIVE TELEHEALTH PATIENT-CLINICIAN CONSULTATION SYSTEM',
    bannerSub: 'Encrypted Low-Latency Video Across Cellular Dropouts',
    bannerType: 'atmed',
    friction: {
      kicker: 'CORE HEALTHCARE CAPABILITIES & CHALLENGE',
      title: 'Fragmented Mobile OEM Lifecycles & Critical Healthcare Latency',
      desc: 'Healthcare applications demand infallible reliability. In-app doctor consultations, lab test booking, medical equipment rentals, and electronic health record downloads were prone to lifecycle fragmentation, network timeouts on 3G/4G connections, and device-specific memory leaks across varied Android hardware manufacturers.',
    },
    frictionPoints: [
      {
        title: 'Android Lifecycle Fragmentation',
        desc: 'Disparate hardware manufacturers caused unexpected activity destruction, dropping ongoing telehealth appointments and state during backgrounding.',
      },
      {
        title: 'Network Dropouts During Booking',
        desc: 'Fluctuating cellular data caused dropped diagnostic test bookings and hung payment confirmation handshakes.',
      },
      {
        title: 'Accessibility & UX Friction',
        desc: 'Elderly and non-tech-savvy patients struggled with multi-step appointment navigation and unoptimized PDF prescription viewing.',
      },
    ],
    solution: {
      kicker: 'ENGINEERING CONTRIBUTIONS & MAINTENANCE FOCUS',
      title: 'Robust MVVM Architecture, Lifecycle Guarding & Streamlined Healthcare UX',
      desc: 'Engineered robust MVVM architecture using Repository Pattern, Room / SQLite offline persistence, and Retrofit HTTP interceptors with automated retry logic. Resolved critical runtime exceptions, patched background memory leaks, and optimized diagnostic report downloads for instantaneous access.',
    },
    architecturalImplementations: [
      {
        title: 'Telehealth Doctor Consultations',
        desc: 'Real-time scheduling, virtual appointment management, and direct communication channels connecting patients with certified medical practitioners.',
      },
      {
        title: 'Diagnostic Lab Test Booking',
        desc: 'In-app lab test discovery, doorstep sample collection scheduling, and rapid test result retrieval.',
      },
      {
        title: 'Medical Equipment Marketplace',
        desc: 'Browsing, renting, and purchasing certified healthcare apparatus and monitoring devices.',
      },
      {
        title: 'Electronic Health Records (EHR)',
        desc: 'Secure local and cloud persistence for digital prescriptions, lab reports, immunization histories, and vital telemetry.',
      },
    ],
    deliverables: [
      'Feature Enhancements: Continuously architecting and rolling out new UX capabilities, including streamlined appointment rescheduling and refined medical history browsing.',
      'Bug Resolution & Stability: Diagnosing and resolving critical runtime exceptions, memory leaks, and Android lifecycle fragmentation issues across disparate hardware manufacturers.',
      'API Optimization: Optimizing REST API endpoints for diagnostic report downloads and telehealth booking confirmations to improve user response times.',
      'Healthcare UX Refinement: Adhering to accessibility standards and clean visual hierarchies to guarantee effortless navigation for elderly and non-tech-savvy patients.',
    ],
    telemetryTable: [
      {
        metric: 'Consultation Stability',
        baseline: 'Occasional lifecycle drop',
        optimized: '100% Active Uptime',
        impact: 'MVVM lifecycle-aware architecture',
      },
      {
        metric: 'Diagnostic Report Load',
        baseline: '>4.2s on mobile',
        optimized: '<850ms',
        impact: 'Optimized Retrofit & Room cache',
      },
      {
        metric: 'Runtime Crash Rate',
        baseline: 'OEM-specific NPEs',
        optimized: '<0.02% Stable',
        impact: 'Strict null-safety & guard rails',
      },
      {
        metric: 'EHR Record Durability',
        baseline: 'Inconsistent cache',
        optimized: '100% Synced',
        impact: 'SQLite/Room + Firebase sync',
      },
    ],
    techStackDetailed: [
      { label: 'Operating System', value: 'Android OS' },
      { label: 'Languages', value: 'Kotlin, Java' },
      { label: 'Networking', value: 'Retrofit, OkHttp, RESTful Healthcare APIs' },
      { label: 'Architecture', value: 'MVVM (Model-View-ViewModel), Repository Pattern' },
      { label: 'Persistence & Cloud', value: 'Firebase, SQLite / Room Database' },
      { label: 'Tooling', value: 'Android Studio, Android Profiler, Git' },
    ],
    stats: [
      {
        label: 'CONSULTATION RELIABILITY',
        value: 'Zero Dropouts',
        sub: 'Lifecycle-aware connection pipeline.',
      },
      {
        label: 'EHR DURABILITY',
        value: '100% Persisted',
        sub: 'Encrypted SQLite & Room store.',
      },
    ],
  },
};

export const PROJECT_SLUGS = [
  'silicon-drive',
  'digipod',
  'machfox',
  'intra',
  'shell-oman',
  'edubotix',
  'atmed',
];
