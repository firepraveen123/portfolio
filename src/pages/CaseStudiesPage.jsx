import React from 'react';
import SplitText from '../components/SplitText';

export default function CaseStudiesPage({ onNavigate, onCopyEmail }) {
  const scrollToCase = (caseId) => {
    const el = document.getElementById(caseId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full pt-20 sm:pt-24 bg-surface min-h-screen px-3.5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 overflow-x-hidden">
      <div className="flex flex-col w-full">

        {/* Editorial Header & Archival Masthead */}
        <section className="relative pt-4 sm:pt-space-md pb-8 sm:pb-space-xl">
          <div className="flex flex-col gap-space-sm">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs">
              <button
                onClick={() => onNavigate('home', 'hero')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary font-label-sm text-xs sm:text-label-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>← Back to Overview</span>
              </button>
              <span className="px-2.5 sm:px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider">
                Archive 01 • In-Depth Architectural Dispatches
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant">Bengaluru Engineering Desk</span>
            </div>

            <h1 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl lg:text-display-xl text-on-surface max-w-4xl tracking-tight mt-space-xs font-normal aovix-reveal-text aovix-delay-1">
              <SplitText text="Engineering case studies & real-world products." delay={0.05} />
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-start pt-space-xs">
              <p className="lg:col-span-7 font-body-lg text-sm sm:text-body-lg text-on-surface-variant leading-relaxed aovix-reveal-text aovix-delay-2">
                A systematic breakdown of six flagship production architectures tackling high-throughput real-time telemetry, complex enterprise state machines, low-latency transit dispatch, hyperlocal discovery, and resilient offline-first systems. Every case details the actual engineering friction, technical trade-offs, and measurable browser metrics.
              </p>

              {/* Ledger Index Box */}
              <div className="lg:col-span-5 p-3.5 sm:p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/30 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Ledger Index</span>
                  <span className="font-label-sm text-xs font-mono text-primary font-semibold">6 Primary Case Studies</span>
                </div>

                <div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface pt-1">
                  {/* Case 01 */}
                  <button
                    onClick={() => scrollToCase('case-silicon')}
                    className="w-full flex items-center justify-between py-1.5 px-2 rounded-md font-semibold text-primary bg-surface-container hover:bg-primary/10 transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                      <span className="truncate">01 / Corporate Transit Platform</span>
                    </span>
                    <span className="font-label-sm text-xs font-mono shrink-0 ml-2">Silicon Drive</span>
                  </button>

                  {/* Case 02 */}
                  <button
                    onClick={() => scrollToCase('case-digipod')}
                    className="w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-on-surface-variant truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      <span className="truncate">02 / Local Discovery &amp; Learning</span>
                    </span>
                    <span className="font-label-sm text-xs font-mono text-on-surface shrink-0 ml-2">DigiPod</span>
                  </button>

                  {/* Case 03 */}
                  <button
                    onClick={() => scrollToCase('case-machfox')}
                    className="w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-on-surface-variant truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                      <span className="truncate">03 / Railway Contract Compliance</span>
                    </span>
                    <span className="font-label-sm text-xs font-mono text-on-surface shrink-0 ml-2">Machfox</span>
                  </button>

                  {/* Case 04 */}
                  <button
                    onClick={() => scrollToCase('case-intra')}
                    className="w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-on-surface-variant truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                      <span className="truncate">04 / Enterprise Workflow &amp; HROS</span>
                    </span>
                    <span className="font-label-sm text-xs font-mono text-on-surface shrink-0 ml-2">Intra 3.0</span>
                  </button>

                  {/* Case 05 */}
                  <button
                    onClick={() => scrollToCase('case-shell')}
                    className="w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-on-surface-variant truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                      <span className="truncate">05 / Industrial AI CCTV Telemetry</span>
                    </span>
                    <span className="font-label-sm text-xs font-mono text-on-surface shrink-0 ml-2">Shell Oman</span>
                  </button>

                  {/* Case 06 */}
                  <button
                    onClick={() => scrollToCase('case-edubotix')}
                    className="w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-on-surface-variant truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                      <span className="truncate">06 / Digital Campus &amp; Exam Engine</span>
                    </span>
                    <span className="font-label-sm text-xs font-mono text-on-surface shrink-0 ml-2">Edubotix</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* CASE STUDY 01: SILICON DRIVE (FLEET TRANSIT DISPATCH)   */}
        {/* ======================================================== */}
        <article id="case-silicon" className="relative mb-space-xl pt-space-lg border-t border-outline-variant/30 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Left Column: Metadata, Context & Field Stamp */}
            <aside className="lg:col-span-4 flex flex-col gap-space-md aovix-reveal-text aovix-delay-1">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Case 01 / Transit Logistics</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 text-[10px] font-bold font-mono uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    ACTIVE ENGAGEMENT
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                    <SplitText text="Silicon Drive" />
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Corporate Cab Booking &amp; Fleet Transportation Management</p>
                </div>
                <div className="flex flex-col gap-1 pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                  <div className="flex justify-between">
                    <span>Studio / Org:</span>
                    <span className="text-on-surface">Nextbrain Technologies</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Role:</span>
                    <span className="text-on-surface">Frontend Software Architect</span>
                  </div>
                </div>
              </div>

              {/* Performance Metric Callout Box */}
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[18px]">local_taxi</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Dispatch Optimization</span>
                </div>
                <div className="text-headline-md font-headline-md text-on-surface font-mono font-bold">640ms → 420ms</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Transit dispatch latency slashed by 34% through optimistic UI updates, normalized client-side fleet state, and WebSocket batching across 128 active cabs.
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">React 18</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">TypeScript</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Google Maps</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">WebSockets</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Optimistic UI</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Tailwind CSS</span>
              </div>
            </aside>

            {/* Right Reading Column: The Problem, The Breakthrough & Architectural Console */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              {/* Architectural Visual Console */}
              <div className="rounded-xl overflow-hidden bg-surface-container-low p-space-md flex flex-col gap-space-md border border-outline-variant/20 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider font-mono">
                      Corporate Cab &amp; Fleet Operations Platform
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Moving People Moving Business</span>
                </div>

                {/* Fleet Hero Image Display */}
                <div data-cursor-label="EXPLORE" className="rounded-lg overflow-hidden relative shadow-sm border border-outline-variant/30 bg-[#0a1120] group/img">
                  <img
                    className="w-full h-52 xs:h-64 sm:h-72 lg:h-80 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    alt="Silicon Drive Corporate Fleet - Moving People Moving Business"
                    src="/images/silicon-drive-fleet.jpg"
                  />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/85 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 font-mono max-w-[calc(100%-20px)] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span className="truncate">Silicon Drive • Active Fleet Operations</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-slate-900/90 border border-slate-700/80 rounded px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] text-slate-300 font-mono shadow-md flex items-center gap-1.5 sm:gap-2 max-w-[calc(100%-20px)] truncate">
                    <span className="text-emerald-400 font-bold">128 CABS LIVE</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-cyan-400">0 WAIT QUEUE</span>
                  </div>
                </div>
              </div>

              {/* Problem & Solution Dispatches */}
              <div className="flex flex-col gap-space-md aovix-reveal-text aovix-delay-2">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/20">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">The Engineering Friction</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">The High-Density Urban Routing &amp; Latency Dilemma</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Silicon Drive handles high-frequency corporate commuter routes across Bengaluru's busy corridors. When hundreds of cab location vectors and passenger trip requests stream concurrently, typical React architectures choke under frequent state mutations, causing lock contention during driver dispatches and UI freezes on driver allocation boards.
                  </p>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/20">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">The Architectural Solution</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Optimistic Dispatch Routing with Normalized GeoJSON Buffers</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Silicon Drive is a corporate cab booking and transportation management platform designed to provide safe, reliable, and cost-efficient employee travel solutions for businesses. I decoupled the transit coordinates pipeline from standard React component re-renders. By batching WebSocket location updates into direct Google Maps overlay data sources and managing cab state through a normalized state machine with optimistic UI updates, dispatch latency dropped by 34% with zero lock contention.
                  </p>

                  <div className="pt-space-xs grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-sm rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-mono">Dispatch Response</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">420ms Flat</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Down from 640ms legacy bottlenecks.</p>
                    </div>
                    <div className="p-space-sm rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-mono">Lock Contention</span>
                      <span className="font-headline-sm text-headline-sm text-emerald-700 font-bold">0 Race Conditions</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Seamless multi-tenant driver queue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* CASE STUDY 02: DIGIPOD (LOCAL DISCOVERY & LEARNING)      */}
        {/* ======================================================== */}
        <article id="case-digipod" className="relative mb-space-xl pt-space-lg border-t border-outline-variant/30 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Left Column: Metadata & Context */}
            <aside className="lg:col-span-4 flex flex-col gap-space-md aovix-reveal-text aovix-delay-1">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-amber-700 font-bold">Case 02 / Hyperlocal Discovery</span>
                  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">MYSURU REGION</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                    <SplitText text="DigiPod" />
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Local Discovery &amp; Learning Platform</p>
                </div>
                <div className="flex flex-col gap-1 pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                  <div className="flex justify-between">
                    <span>Region:</span>
                    <span className="text-on-surface font-mono font-medium">Mysuru &amp; Surrounding Hubs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform:</span>
                    <span className="text-on-surface">Web &amp; Directory Portal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scope:</span>
                    <span className="text-on-surface font-mono">480+ Vendors &amp; Creators</span>
                  </div>
                </div>
              </div>

              {/* Metric Box */}
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-amber-700">
                  <span className="material-symbols-outlined text-[18px]">storefront</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Search Velocity</span>
                </div>
                <div className="text-headline-md font-headline-md text-on-surface font-mono font-bold">18ms Search Index</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  In-memory client-side directory indexing connects users to local businesses, courses, and creators with sub-20ms multi-tag filtering.
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">React</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Next.js</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Tailwind CSS</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Geolocation API</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Search Index</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">REST APIs</span>
              </div>
            </aside>

            {/* Right Reading Column */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              {/* Directory Visualization Mockup / Screen Capture */}
              <div className="rounded-xl overflow-hidden bg-surface-container-low p-space-md flex flex-col gap-space-md border border-outline-variant/20 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold font-mono">
                      DigiPod Operations Dashboard • User &amp; Vendor Network
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Mysuru Regional Hub</span>
                </div>

                {/* Dashboard Screen UI Capture */}
                <div data-cursor-label="DIGIPOD" className="rounded-lg overflow-hidden relative shadow-sm border border-outline-variant/30 group/img">
                  <img
                    className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    alt="DigiPod Local Discovery and Learning Platform Dashboard Overview"
                    src="/images/digipod-dashboard.png"
                  />
                  <div className="absolute bottom-2 left-2 px-2 sm:px-space-sm py-1 rounded bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 font-mono max-w-[calc(100%-20px)] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
                    <span className="truncate">Dashboard Overview • User Insights, Vendor Metrics &amp; Content Management</span>
                  </div>
                </div>
              </div>

              {/* Friction & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md aovix-reveal-text aovix-delay-2">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">Friction Point</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Fragmented Local Markets &amp; Lost Reach</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Local vendors, independent artisans, and educational course providers in Mysuru relied on scattered social channels with zero centralized search indexing. Users struggled to discover reliable neighborhood services and training programs, creating immense discovery friction.
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-amber-700 font-bold">Architectural Intervention</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Consolidated Local Discovery &amp; Learning Hub</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    DigiPod is a digital platform designed to connect users with local vendors, creators, professionals, and service providers, especially in and around Mysuru. It helps users discover nearby businesses, creative talents, educational institutions, courses, training programs, and services in one place. The platform bridges the gap between local service providers and people looking for their products, skills, and services while also providing opportunities for creators and vendors to showcase their offerings and grow their reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* CASE STUDY 03: MACHFOX (RAILWAY CONTRACT COMPLIANCE)     */}
        {/* ======================================================== */}
        <article id="case-machfox" className="relative mb-space-xl pt-space-lg border-t border-outline-variant/30 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Left Column: Metadata & Context */}
            <aside className="lg:col-span-4 flex flex-col gap-space-md aovix-reveal-text aovix-delay-1">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Case 03 / Railway Compliance</span>
                  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">RAILWAY CONTRACTS</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                    <SplitText text="Machfox" />
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Service Management System for Railway Contracts</p>
                </div>
                <div className="flex flex-col gap-1 pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                  <div className="flex justify-between">
                    <span>Studio / Org:</span>
                    <span className="text-on-surface">Nextbrain Technologies</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scope:</span>
                    <span className="text-on-surface font-mono">2,400+ Contract Deliverables</span>
                  </div>
                </div>
              </div>

              {/* Metric Box */}
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="material-symbols-outlined text-[18px]">train</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Audit Acceleration</span>
                </div>
                <div className="text-headline-md font-headline-md text-on-surface font-mono font-bold">4.5h → 0.04s</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Instantaneous client-side discrepancy validation rules eliminated paper-bound clipboard delays, accelerating SLA audit cycles by 92%.
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Next.js</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">TypeScript</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Virtualized Tables</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Chart.js</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">SLA Rules Engine</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Tailwind CSS</span>
              </div>
            </aside>

            {/* Right Reading Column */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              {/* MachFox Interface Display */}
              <div className="rounded-xl overflow-hidden bg-surface-container-low p-space-md flex flex-col gap-space-md border border-outline-variant/20 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold font-mono">
                    MachFox Service Management System • Web &amp; Mobile Interfaces
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Railway Contract Operations</span>
                </div>

                <div data-cursor-label="MACHFOX" className="rounded-lg overflow-hidden relative shadow-sm border border-outline-variant/30 group/img">
                  <img
                    className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    alt="MachFox Railway Service Contracts Management Dashboard and Mobile Field App"
                    src="/images/machfox-dashboard.jpg"
                  />
                  <div className="absolute bottom-2 left-2 px-2 sm:px-space-sm py-1 rounded bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 font-mono max-w-[calc(100%-20px)] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
                    <span className="truncate">Centralized Operations: Divisions, Routes, Machines &amp; Field Staff</span>
                  </div>
                </div>
              </div>

              {/* Friction & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md aovix-reveal-text aovix-delay-2">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">Friction Point</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">The Clipboard &amp; Disputed Audit Logjam</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Railway service contracts spanning maintenance, operations, staffing, and infrastructure support were verified through manual paper checklists across dispersed regional divisions. Compiling monthly compliance took weeks, leading to SLA disputes and delayed vendor payments.
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Architectural Intervention</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Centralized Control &amp; Client-Side SLA Engine</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    The Service Management System for Railway Contracts is designed to manage end-to-end operations of service contracts awarded by railway departments. The system ensures efficient planning, execution, monitoring, and compliance of contracted services such as maintenance, operations, staffing, and infrastructure support. It provides centralized control over contracts, zones, divisions, departments, workforce, service schedules, performance tracking, and reporting, ensuring transparency and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* CASE STUDY 04: INTRA 3.0 (ENTERPRISE APPRAISAL AST)      */}
        {/* ======================================================== */}
        <article id="case-intra" className="relative mb-space-xl pt-space-lg border-t border-outline-variant/30 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Left Column: Metadata & Notes */}
            <aside className="lg:col-span-4 flex flex-col gap-space-md aovix-reveal-text aovix-delay-1">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Case 04 / Operations &amp; HR</span>
                  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">ENTERPRISE HROS</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                    <SplitText text="Intra 3.0" />
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Internal Workflow &amp; Performance Management System</p>
                </div>
                <div className="flex flex-col gap-1 pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                  <div className="flex justify-between">
                    <span>Studio / Org:</span>
                    <span className="text-on-surface">Nextbrain Technologies</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scope:</span>
                    <span className="text-on-surface font-mono">1,200+ Personnel Platform</span>
                  </div>
                </div>
              </div>

              {/* Human Metric Box */}
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Velocity Shift</span>
                </div>
                <div className="text-headline-md font-headline-md text-on-surface font-mono font-bold">21 Days → 3.8 Days</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  82% turnaround acceleration across 1,200 employee reviews with full cryptographic audit compliance and 0 payroll discrepancy.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">React.js</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Redux Toolkit</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Custom Formula AST</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Atomic UI Kit</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Dynamic RBAC</span>
              </div>
            </aside>

            {/* Right Reading Column */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              {/* Interactive Preview Mockup Box / Screen Capture */}
              <div className="rounded-xl overflow-hidden bg-surface-container-low p-space-md flex flex-col gap-space-md border border-outline-variant/20 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold font-mono">
                      INTRA 3.0 Operations Console • KPI 2.0 &amp; Performance Telemetry
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Enterprise Workflow HROS</span>
                </div>
                <div data-cursor-label="INTRA 3.0" className="rounded-lg overflow-hidden relative shadow-sm border border-outline-variant/30 group/img">
                  <img
                    className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    alt="INTRA Enterprise Workflow & KPI Performance Management Dashboard"
                    src="/images/intra-dashboard.jpg"
                  />
                  <div className="absolute bottom-2 left-2 px-2 sm:px-space-sm py-1 rounded bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 font-mono max-w-[calc(100%-20px)] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span className="truncate">SE Dashboard • KPI 2.0 (110% Score), Opportunities &amp; Monthly Utilization</span>
                  </div>
                </div>

                {/* Formula Matrix Comparison Component */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex flex-col gap-1 border border-outline-variant/10">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Legacy Appraisal</span>
                    <span className="font-headline-sm text-headline-sm text-error font-bold">Spreadsheet Drift</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">14% formula overwrites &amp; corrupted cell references.</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex flex-col gap-1 border border-outline-variant/10">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Intra 3.0 Engine</span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">Deterministic AST</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Tokenized execution parsed live in React worker.</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex flex-col gap-1 border border-outline-variant/10">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Payroll Reconciliation</span>
                    <span className="font-headline-sm text-headline-sm text-emerald-700 font-bold">100% Exact</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Direct salary slip generation without manual auditing.</span>
                  </div>
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md aovix-reveal-text aovix-delay-2">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">Friction Point</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">The 21-Day Appraisal Logjam</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Appraisals were conducted on hundreds of fragmented Microsoft Excel workbooks circulated via email threads. Formulas were routinely accidentally overwritten, reviewers overwrote peer evaluation columns, and finance spent three weeks manually untangling discrepancies before monthly payroll could execute.
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Architectural Intervention</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Deterministic Client-Side AST Engine</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Developed an internal workflow and performance management system using React.js and Redux, enabling staff onboarding, role-based access, activity tracking (meetings, feeds, surveys), and opportunity-based task management through responsive and reusable UI components. Implemented dynamic DOM manipulation and performance dashboards to automate task tracking, rewards, and salary hike calculations based on target completion, improving workflow efficiency and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* CASE STUDY 05: SHELL OMAN (INDUSTRIAL AI CCTV TELEMETRY) */}
        {/* ======================================================== */}
        <article id="case-shell" className="relative mb-space-xl pt-space-lg border-t border-outline-variant/30 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Left Column: Metadata, Context & Field Stamp */}
            <aside className="lg:col-span-4 flex flex-col gap-space-md aovix-reveal-text aovix-delay-1">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Case 05 / CCTV Telemetry</span>
                  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">AI CCTV TELEMETRY</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                    <SplitText text="Shell Oman" />
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Real-Time AI CCTV Video Analytics Platform</p>
                </div>
                <div className="flex flex-col gap-1 pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                  <div className="flex justify-between">
                    <span>Studio / Org:</span>
                    <span className="text-on-surface">Nextbrain Technologies</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Role:</span>
                    <span className="text-on-surface">Staff Frontend Architect</span>
                  </div>
                </div>
              </div>

              {/* Architectural Callout Box */}
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[18px]">speed</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Performance Metric</span>
                </div>
                <div className="text-headline-md font-headline-md text-on-surface font-mono font-bold">450ms → 16.6ms</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Frametime collapsed from debilitating UI freezes directly to 60 FPS rock-steady canvas cycles across all 16 concurrent RTSP streams.
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">React 18</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">OffscreenCanvas</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Web Workers</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">WebSockets</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">YOLOv11 BBoxes</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Docker</span>
              </div>
            </aside>

            {/* Right Reading Column */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              {/* Architectural Visual Artifact & Pipeline Chart */}
              <div className="rounded-xl overflow-hidden bg-surface-container-low p-space-md flex flex-col gap-space-md border border-outline-variant/20 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider font-mono">Zero-DOM Decoupled Pipeline Visualizer</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">OffscreenCanvas • Transferable Streams</span>
                </div>

                {/* Inline Technical Diagram */}
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm items-center text-center">
                    <div className="p-space-sm rounded bg-surface-container flex flex-col gap-1 items-center">
                      <span className="font-label-sm text-label-sm text-primary font-semibold font-mono">16 RTSP Video Hubs</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Raw WebSocket Payload</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Binary ArrayBuffers</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-on-surface-variant py-2">
                      <span className="material-symbols-outlined text-primary text-[28px]">sync_alt</span>
                      <span className="font-label-sm text-label-sm text-primary font-mono">Off-Main-Thread Worker</span>
                    </div>
                    <div className="p-space-sm rounded bg-primary-container text-on-primary-container flex flex-col gap-1 items-center">
                      <span className="font-label-sm text-label-sm font-semibold font-mono">OffscreenCanvas Layer</span>
                      <span className="font-body-sm text-body-sm">Zero Virtual DOM Diffing</span>
                      <span className="font-label-sm text-label-sm font-mono">Pure GPU Rasterization</span>
                    </div>
                  </div>

                  {/* Telemetry Sparkline */}
                  <div className="pt-space-xs flex flex-col gap-1">
                    <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
                      <span className="font-mono">React Main Thread CPU Overhead (16 Feeds)</span>
                      <span className="text-primary font-semibold font-mono">91% Drop (78% → 7%)</span>
                    </div>
                    <svg className="w-full h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 500 55">
                      <path d="M0,45 Q60,43 120,44 T240,42 L260,12 L280,10 L320,12 L380,11 L440,10 L500,10" strokeLinecap="round" strokeWidth="2.5"></path>
                      <circle cx="260" cy="12" fill="currentColor" r="4"></circle>
                      <circle cx="500" cy="10" fill="currentColor" r="4"></circle>
                    </svg>
                  </div>
                </div>

                {/* Screen UI Capture */}
                <div data-cursor-label="SHELL" className="rounded-lg overflow-hidden relative shadow-sm border border-outline-variant/30 group/img">
                  <img
                    className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    alt="Shell Oman AI CCTV Event Severity Intelligence and Incident Summary Dashboard"
                    src="/images/shell-oman-dashboard.png"
                  />
                  <div className="absolute bottom-2 left-2 px-2 sm:px-space-sm py-1 rounded bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 font-mono max-w-[calc(100%-20px)] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span className="truncate">Shell Oman • Event Severity Intelligence • 957 Real-Time CCTV Incidents</span>
                  </div>
                </div>
              </div>

              {/* Problem & Solution Dispatches */}
              <div className="flex flex-col gap-space-md aovix-reveal-text aovix-delay-2">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/20">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">The Engineering Friction</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">The 450ms Virtual DOM Freezing Dilemma</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Shell Oman required continuous real-time hazard detection across 16 camera streams. When each frame received automated YOLOv11 bounding boxes and telemetry bounding coordinates from WebSockets at 30 FPS, React attempted to perform reconciliation for 480 node mutations every single second. The main execution thread seized up, garbage collection thrashing spiked, and the browser tab routinely froze for up to 450ms.
                  </p>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/20">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">The Architectural Solution</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Bypassing the DOM with Dedicated OffscreenCanvas</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Integrated a real-time AI CCTV analytics platform supporting smart city, retail, and manufacturing deployments into a responsive user interface. Developed a real-time monitoring dashboard to visualize multi-camera video processing, object detection, face recognition, and tracking data (utilizing backend feeds from YOLOv11, RetinaFace, ArcFace, and Byte Track). I severed the video and coordinate rendering pipeline entirely from React's component tree. Incoming WebSocket payloads were routed to a dedicated Web Worker via transferable <code className="font-label-sm text-label-sm bg-surface-container-high px-1 rounded font-mono">ArrayBuffers</code>, blitting bounding coordinates straight to WebGL/Canvas2D buffers without a single React re-render. Collaborated with AI/Backend teams to display optimized model inference metrics, and utilized Docker and modern frontend optimization techniques to ensure the tracking dashboard loaded efficiently for end-users.
                  </p>

                  <div className="pt-space-xs grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-sm rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-mono">Memory Footprint</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">112 MB Flat</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Down from 980MB leak state.</p>
                    </div>
                    <div className="p-space-sm rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-mono">Forecourt Incidents</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">0 Dropped Frames</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Safety-critical zero latency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* CASE STUDY 06: EDUBOTIX (OFFLINE-FIRST DISTRIBUTED STATE)*/}
        {/* ======================================================== */}
        <article id="case-edubotix" className="relative mb-space-xl pt-space-lg border-t border-outline-variant/30 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Left Column: Metadata & Notes */}
            <aside className="lg:col-span-4 flex flex-col gap-space-md aovix-reveal-text aovix-delay-1">
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">Case 06 / Distributed State</span>
                  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">ACTIVE STACK</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                    <SplitText text="Edubotix" />
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Digitized School &amp; College Data Portal • Exam Question Bank &amp; Mock Tests</p>
                </div>
                <div className="flex flex-col gap-1 pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                  <div className="flex justify-between">
                    <span>Scale:</span>
                    <span className="text-on-surface font-mono">40,000+ Active Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resilience:</span>
                    <span className="text-on-surface font-mono font-semibold text-emerald-700">99.99% Preservation</span>
                  </div>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">wifi_off</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Fault Tolerance</span>
                </div>
                <div className="text-headline-md font-headline-md text-on-surface font-mono font-bold">0 Dropped Tests</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Zero examination data loss during complete network blackouts across tier-2 and tier-3 rural college testing hubs.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">React &amp; Vite</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">WebCrypto API</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">IndexedDB Sync</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">AES-GCM 256</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface font-mono">Tailwind CSS</span>
              </div>
            </aside>

            {/* Right Reading Column */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              {/* Offline State Machine Visualizer */}
              <div className="rounded-xl overflow-hidden bg-surface-container-low p-space-md flex flex-col gap-space-md border border-outline-variant/20 shadow-sm aovix-reveal-image aovix-delay-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold font-mono">
                    Offline Sync Architecture • Cryptographic Store
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Local-First Persistence</span>
                </div>
                <div data-cursor-label="EDUBOTIX" className="rounded-lg overflow-hidden relative shadow-sm border border-outline-variant/30 group/img">
                  <img
                    className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                    alt="Edubotix Comprehensive School &amp; College Data Portal, Real-time Attendance &amp; Bus Tracking"
                    src="/images/edubotix-platform.jpg"
                  />
                  <div className="absolute bottom-2 left-2 px-2 sm:px-space-sm py-1 rounded bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 font-mono max-w-[calc(100%-20px)] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span className="truncate">Edubotix • 1,24,000+ Students, Attendance &amp; Live Transit</span>
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col gap-space-sm border border-outline-variant/10">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-mono">State Mutation Handshake</span>
                  <div className="flex flex-col sm:flex-row gap-space-md text-body-sm text-on-surface">
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="font-semibold text-primary">1. Local Encrypted Journal</span>
                      <span className="text-on-surface-variant text-body-sm">Every keystroke and answer selection is encrypted using WebCrypto AES-GCM and written to local storage in under 4ms.</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="font-semibold text-tertiary">2. Autonomous Reconnection Worker</span>
                      <span className="text-on-surface-variant text-body-sm">Upon handshake recovery, an optimistic reconciler dispatches signed batches with deduplication tokens to verify idempotency.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem & Impact Breakdown */}
              <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-outline-variant/20 aovix-reveal-text aovix-delay-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">The Field Reality</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Handling Network Turbulence at 40,000 Concurrent Sessions</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Building a comprehensive web application to digitize school and college data, developing responsive frontend modules for real-time attendance tracking and automated reporting. Designing and implementing user interfaces for an exam question bank and mock test results portal, while ensuring secure handling of sensitive institutional records. By deploying an offline-first architecture powered by <code className="font-label-sm text-label-sm bg-surface-container-high px-1 rounded font-mono">IndexedDB</code> and in-memory WebCrypto encryption, the student's entire exam environment continues seamlessly regardless of network presence.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* SECTION 02: PRODUCTION ENGAGEMENTS & AUXILIARY LEDGER    */}
        {/* ======================================================== */}
        <div className="w-full my-space-lg flex items-center justify-between border-t border-outline-variant/40 pt-space-md aovix-reveal-text aovix-delay-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-mono">
            Section 02 • Production Engagements &amp; Notable Systems
          </span>
          <span className="font-label-sm text-label-sm text-primary font-medium font-mono">2022 — Present</span>
        </div>

        {/* OTHER NOTABLE WORK (Ledger Grid) */}
        <section className="mb-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* AtMed Healthcare Card */}
            <div id="case-atmed" className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all duration-300 card-lift border border-outline-variant/20 scroll-mt-24 aovix-reveal-image aovix-delay-1">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">Healthcare Mobile Platform</span>
                  <span className="font-label-sm text-xs text-on-surface-variant font-mono font-medium">Native Android</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  <SplitText text="AtMed Healthcare" />
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  AtMed Healthcare is an Android application offering a comprehensive platform for patients to manage their healthcare needs, including connecting with doctors, booking diagnostic tests, accessing medical equipment, maintaining health records, and exploring wellness resources. As part of the maintenance project, I actively work on enhancing existing features, resolving bugs, and ensuring the application functions seamlessly.
                </p>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs border-t border-outline-variant/10">
                <div className="flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">health_and_safety</span>
                  <span className="font-medium">Telehealth &amp; Diagnostic Management</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Android</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Healthcare UX</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Diagnostics</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">REST APIs</span>
                </div>
              </div>
            </div>

            {/* Strapi CMS & Data Pipeline Card */}
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all duration-300 card-lift border border-outline-variant/20 aovix-reveal-image aovix-delay-2">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Content Architecture</span>
                  <span className="font-label-sm text-xs text-on-surface-variant font-mono">Next.js Headless</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  <SplitText text="Data Cache Tuning & Strapi CMS" />
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Engineered Next.js App Router multi-layer caching with headless Strapi CMS webhook revalidation, crushing TTFB and boosting payload throughput by 30%.
                </p>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs border-t border-outline-variant/10">
                <div className="flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
                  <span className="font-medium">+30% data throughput boost</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Next.js 14</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Strapi</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Edge Cache</span>
                </div>
              </div>
            </div>

            {/* Cloud Architecture Card */}
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all duration-300 card-lift border border-outline-variant/20 aovix-reveal-image aovix-delay-3">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Cloud Infrastructure</span>
                  <span className="font-label-sm text-xs text-on-surface-variant font-mono">Sep 2024</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  <SplitText text="AWS Verified Cloud Practitioner" />
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Certified AWS Cloud Practitioner architecting high-availability web assets on CloudFront CDN distributions, S3 asset buckets, and Dockerized microservice containers.
                </p>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs border-t border-outline-variant/10">
                <div className="flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">cloud_done</span>
                  <span className="font-medium">Active AWS Certification</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">AWS Cloud</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">CloudFront</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-mono">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Philosophy Callout Box */}
        <section className="mb-space-xl p-space-lg rounded-xl bg-surface-container-high relative overflow-hidden border border-outline-variant/30 aovix-reveal-text aovix-delay-1">
          <div className="flex flex-col lg:flex-row gap-space-lg items-start lg:items-center justify-between">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Architectural Principles</span>
              <blockquote className="font-quote-editorial text-quote-editorial text-on-surface italic leading-relaxed">
                “Software architecture is not the art of choosing the newest abstraction, but the discipline of knowing where human friction lives and eliminating it at the system boundaries.”
              </blockquote>
              <div className="flex items-center gap-space-sm pt-space-xs font-label-sm text-label-sm text-on-surface-variant font-mono">
                <span>— Field Note, Praveen Kumar S</span>
                <span>•</span>
                <span>Bengaluru Workspace Ledger</span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs w-full lg:w-auto">
              <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1 min-w-[240px] border border-outline-variant/20">
                <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm font-semibold">
                  <span>Primary Focus</span>
                  <span className="text-primary font-bold">Staff Level</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">High-throughput Web Systems</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Micro-frontend Decoupling</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Complex Enterprise UI Workflows</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action & Navigation */}
        <section className="p-space-lg rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg mb-space-lg shadow-sm border border-outline-variant/20 aovix-reveal-image aovix-delay-2">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold font-mono">Deep Dives &amp; Repository Walkthroughs</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              <SplitText text="Inspect the codebase or walk through the architecture." />
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Want to review architectural diagrams, inspect code repositories, or talk through a problem? Reach out directly to Praveen for an unfiltered design &amp; code walkthrough.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-space-sm w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('home', 'contact')}
              className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md tracking-wider transition-colors hover:bg-primary hover:text-on-primary shadow-sm btn-tactile cursor-pointer"
            >
              <span>01 / GET IN TOUCH</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <button
              onClick={() => onNavigate('home', 'craft')}
              className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md tracking-wider transition-colors hover:bg-surface-container-highest btn-tactile cursor-pointer"
            >
              <span>02 / EXPLORE TECH STACK</span>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
