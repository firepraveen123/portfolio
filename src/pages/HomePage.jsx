import React, { useState, useEffect, useRef } from 'react';
import SplitText from '../components/SplitText';

function AnimatedNumber({ end, duration = 1600, prefix = '', suffix = '', isVisible }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    let startTime = null;
    let frameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic ease-out curve (fast start, gradual deceleration to target)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * end);
      
      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, end, duration]);

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function HomePage({ onNavigate, onCopyEmail }) {
  const [isLedgerVisible, setIsLedgerVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const ledgerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLedgerVisible(true);
        } else {
          setIsLedgerVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ledgerRef.current) {
      observer.observe(ledgerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <main className="w-full pt-20 sm:pt-24 bg-surface min-h-screen px-3.5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 overflow-x-hidden">
<div className="flex flex-col w-full">
{/* Editorial Hero Section */}
<section id="hero" data-snap-section data-snap-title="Hero Overview" className="relative pt-4 sm:pt-space-md pb-8 sm:pb-space-xl overflow-hidden scroll-mt-20 sm:scroll-mt-24">
{/* Subtle Ambient Paper Glow Accent */}
<div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none -z-10"></div>

{/* Aovix-style Monumental Name Watermark in Background */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden">
  <span className="font-headline-lg font-black text-[13vw] sm:text-[15vw] tracking-tighter text-on-surface/[0.035] whitespace-nowrap uppercase block leading-none select-none">
    PRAVEEN
  </span>
</div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-center">
          {/* Left Editorial Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-space-md">
            {/* Craft Dispatch Kicker */}
            <div className="aovix-reveal-text aovix-delay-1 flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[11px] sm:text-label-sm text-primary uppercase tracking-widest">
              <span className="inline-block w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>Craft Dispatch • Edition No. 04</span>
              <span className="text-on-surface-variant/60">/</span>
              <span className="text-on-surface-variant font-label-sm lowercase tracking-normal italic font-quote-editorial">
                handcrafted web software &amp; interfaces
              </span>
            </div>

            {/* Headline with Editorial Weight */}
            <h1 className="aovix-reveal-text aovix-delay-2 font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-display-xl text-on-surface tracking-tight leading-[1.12] sm:leading-[1.08] font-normal">
              <SplitText text="Hey, I'm Praveen Kumar S." delay={0.02} stagger={0.016} />
              <br className="hidden sm:inline" />
              <SplitText text="I craft high-fidelity interfaces" className="italic font-quote-editorial text-primary font-normal" delay={0.24} stagger={0.016} />{' '}
              <br className="hidden sm:inline" />
              <SplitText text="and resilient web architectures." delay={0.46} stagger={0.016} />
            </h1>

            {/* Human, Grounded Narrative */}
            <p className="aovix-reveal-text aovix-delay-3 font-body-md text-sm sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed pt-space-xs">
              Senior Frontend Engineer with 4+ years of obsessive focus on browser performance, design engineering, and modern React/Next.js systems. Based in Bengaluru, turning complex distributed data flows into fluid, human-feeling web applications.
            </p>

            {/* Tactile Action Triggers */}
            <div className="aovix-reveal-text aovix-delay-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-space-sm pt-space-sm">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', 'selected-works');
                }}
                className="btn-tactile group inline-flex items-center justify-center gap-space-xs px-4 sm:px-space-md py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-xs sm:text-label-md tracking-wider transition-all duration-200 hover:bg-primary shadow-sm hover:shadow-md cursor-pointer text-center"
                href="#selected-works"
              >
                <span className="text-primary-fixed group-hover:text-on-primary">01 /</span>
                <span>EXPLORE SELECTED PROJECTS</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-y-0.5">
                  arrow_downward
                </span>
              </a>

              <button
                onClick={onCopyEmail}
                className="btn-tactile inline-flex items-center justify-center gap-space-xs px-4 sm:px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-xs sm:text-label-md tracking-wider hover:bg-surface-container-highest transition-all duration-200 text-center"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                <span>SAY HELLO VIA EMAIL</span>
              </button>

              <a
                href="/Praveenkumar.pdf"
                download="Praveen_Kumar_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile group inline-flex items-center justify-center gap-space-xs px-4 sm:px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-xs sm:text-label-md tracking-wider hover:bg-primary hover:text-on-primary border border-outline-variant/30 hover:border-primary shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer text-center"
                title="Download Praveen Kumar's Resume (PDF)"
              >
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:text-on-primary group-hover:translate-y-0.5 transition-all">
                  download
                </span>
                <span className="font-semibold uppercase tracking-wider">DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Micro Ledger Footnote */}
            <div className="aovix-reveal-text aovix-delay-5 pt-space-sm sm:pt-space-md flex flex-wrap items-center gap-x-3 gap-y-1.5 text-on-surface-variant font-label-sm text-xs sm:text-label-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[15px] sm:text-[16px]">location_on</span>
<span>Bengaluru (UTC+5:30)</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
<span>Nextbrain Technologies</span>
</div>
<span className="text-outline-variant">•</span>
<span>Single-threaded DOM purity</span>
</div>
</div>
{/* Right Physical Vignette with Floating Telemetry Chips */}
<div className="aovix-reveal-image aovix-delay-2 lg:col-span-5 flex flex-col gap-space-sm mt-4 lg:mt-0 relative group/hero-visual">
  {/* Floating Orbital Telemetry Badges (Aovix Floating Chip Style) */}
  <div className="absolute -top-3 -left-2 sm:-top-3.5 sm:-left-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-surface/90 backdrop-blur-md border border-outline-variant/30 shadow-lg flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-on-surface animate-float-slow pointer-events-none">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
    <span className="font-bold">REACT 19</span>
    <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-mono uppercase">CORE</span>
  </div>

  <div className="absolute -top-3 -right-2 sm:-top-3.5 sm:-right-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-surface/90 backdrop-blur-md border border-outline-variant/30 shadow-lg flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-on-surface animate-float-delayed pointer-events-none">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
    <span className="font-bold">NEXT.JS</span>
    <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-mono uppercase">SSR</span>
  </div>

  <div className="absolute -bottom-3 -left-2 sm:-bottom-3.5 sm:-left-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-surface/90 backdrop-blur-md border border-outline-variant/30 shadow-lg flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-on-surface animate-float-slow pointer-events-none">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse"></span>
    <span className="font-bold">TYPESCRIPT</span>
    <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-mono uppercase">STRICT</span>
  </div>

  <div className="absolute -bottom-3 -right-2 sm:-bottom-3.5 sm:-right-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-surface/90 backdrop-blur-md border border-outline-variant/30 shadow-lg flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-on-surface animate-float-delayed pointer-events-none">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse"></span>
    <span className="font-bold">AWS CLOUD</span>
    <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-mono uppercase">CERTIFIED</span>
  </div>

  <div className="relative bg-surface-container-low/95 backdrop-blur-sm p-3.5 sm:p-space-md rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-outline-variant/20">
    {/* Portrait plate */}
    <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-surface-container">
      <img 
        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
        alt="Praveen Kumar S - Front-End Developer at Nextbrain Technologies" 
        src="/images/praveen_kumar_centered.jpg"
        onError={(e) => { e.currentTarget.src = '/images/praveen_kumar.jpg'; }}
      />
    </div>

    {/* Vignette Caption Card */}
    <div className="mt-space-sm pt-space-xs flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="font-headline-sm text-base sm:text-body-lg font-bold text-on-surface">Praveen Kumar S</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm text-primary uppercase font-mono tracking-wider">[FRONT-END CRAFT]</span>
      </div>

      <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
        Front-End Developer crafting modern, responsive, and high-performance web experiences. Currently building scalable web applications at Nextbrain Technologies, working with React.js, Next.js, TypeScript, and modern frontend technologies.
      </p>

      <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
        Passionate about transforming UI designs into interactive experiences, writing clean and maintainable code, and creating seamless user experiences.
      </p>

      <div className="mt-space-xs p-2.5 sm:p-space-sm bg-surface-container rounded-lg flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 border border-outline-variant/10">
        <span className="font-label-sm text-xs sm:text-label-sm font-medium text-on-surface">AWS Certified Cloud Practitioner</span>
        <span className="font-label-sm text-xs sm:text-label-sm font-semibold text-primary font-mono">Sep 2024 • Certified</span>
      </div>
    </div>
  </div>

  {/* Sticky Note Marginalia */}
  <div className="p-2.5 sm:p-space-sm rounded-lg bg-surface-container-high/60 flex items-start gap-space-xs border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px] shrink-0 mt-0.5">draw</span>
    <p className="font-quote-editorial text-xs sm:text-body-sm italic text-on-surface leading-snug">
      “Great interfaces aren't just designed; they're engineered to make every interaction feel effortless.”
    </p>
  </div>
</div>
</div>
</section>
{/* In Numbers & Real Impact (Tactile Ledger Strip) */}
<section id="impact" ref={ledgerRef} data-snap-section data-snap-title="Production Ledger" className="py-6 sm:py-space-lg my-6 sm:my-space-md bg-surface-container-low rounded-xl px-3.5 sm:px-space-md lg:px-space-lg shadow-sm scroll-mt-20 sm:scroll-mt-24">
<div className="aovix-reveal-text aovix-delay-1 flex flex-col gap-1.5 sm:gap-space-sm mb-4 sm:mb-space-md">
<div className="flex flex-wrap items-center justify-between gap-1">
<span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-widest text-primary font-mono">01 // PRODUCTION LEDGER</span>
<span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">MEASURED • VERIFIED</span>
</div>
<h2 className="font-headline-md text-xl sm:text-2xl lg:text-headline-md text-on-surface font-normal">
  <SplitText text="Real engineering impact, measured in the browser" />
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-space-md">
  {/* Metric Card 1 */}
  <div className="aovix-reveal-image aovix-delay-1 group relative p-3.5 sm:p-space-md rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-primary/40 overflow-hidden cursor-pointer">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex items-baseline justify-between">
      <span className="font-display-xl text-3xl sm:text-headline-lg font-normal text-primary group-hover:scale-105 origin-left transition-transform duration-300 tabular-nums">
        <AnimatedNumber end={4} suffix="+" isVisible={isLedgerVisible} />
      </span>
      <span className="font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant font-mono group-hover:text-primary transition-colors">YEARS</span>
    </div>
    <span className="font-headline-sm text-body-sm font-semibold text-on-surface group-hover:text-primary transition-colors duration-300">Deep Web Crafting</span>
    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
      Across enterprise consoles, fintech workflows, and consumer SaaS scale in agile cross-functional crews.
    </p>
  </div>

  {/* Metric Card 2 */}
  <div className="aovix-reveal-image aovix-delay-2 group relative p-3.5 sm:p-space-md rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-emerald-500/40 overflow-hidden cursor-pointer">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex items-baseline justify-between">
      <span className="font-display-xl text-3xl sm:text-headline-lg font-normal text-emerald-700 group-hover:scale-105 origin-left transition-transform duration-300 tabular-nums">
        <AnimatedNumber end={30} prefix="+" suffix="%" isVisible={isLedgerVisible} />
      </span>
      <span className="font-label-sm text-[11px] sm:text-label-sm text-emerald-700 font-mono font-bold tracking-wider">THROUGHPUT</span>
    </div>
    <span className="font-headline-sm text-body-sm font-semibold text-on-surface group-hover:text-emerald-700 transition-colors duration-300">Data Cache Tuning</span>
    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
      Orchestrated Next.js App Router caching layers with Strapi CMS headless pipelines to crush TTFB.
    </p>
  </div>

  {/* Metric Card 3 */}
  <div className="aovix-reveal-image aovix-delay-3 group relative p-3.5 sm:p-space-md rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-cyan-500/40 overflow-hidden cursor-pointer">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex items-baseline justify-between">
      <span className="font-display-xl text-3xl sm:text-headline-lg font-normal text-cyan-700 group-hover:scale-105 origin-left transition-transform duration-300 tabular-nums">
        <AnimatedNumber end={20} prefix="-" suffix="%" isVisible={isLedgerVisible} />
      </span>
      <span className="font-label-sm text-[11px] sm:text-label-sm text-cyan-700 font-mono font-bold tracking-wider">LATENCY</span>
    </div>
    <span className="font-headline-sm text-body-sm font-semibold text-on-surface group-hover:text-cyan-700 transition-colors duration-300">Client Bundle Budgeting</span>
    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
      Ruthless tree-shaking, dynamic code splits, and zero-dependency SVG micro-runtimes under 40kB.
    </p>
  </div>

  {/* Metric Card 4 */}
  <div className="aovix-reveal-image aovix-delay-4 group relative p-3.5 sm:p-space-md rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-amber-500/40 overflow-hidden cursor-pointer">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex items-baseline justify-between">
      <span className={`material-symbols-outlined text-amber-600 text-[32px] sm:text-[38px] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ${isLedgerVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-80'}`}>
        verified_user
      </span>
      <span className="font-label-sm text-[11px] sm:text-label-sm text-amber-700 font-mono font-bold tracking-wider">AWS CLOUD</span>
    </div>
    <span className="font-headline-sm text-body-sm font-semibold text-on-surface group-hover:text-amber-700 transition-colors duration-300">Certified Practitioner</span>
    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
      Verified architectural grasp of S3 edge distribution, CloudFront CDN caching, and modern serverless topologies.
    </p>
  </div>
</div>
</section>
{/* Selected Works & Case Studies */}
<section className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg scroll-mt-20 sm:scroll-mt-24" id="selected-works" data-snap-section data-snap-title="Silicon Drive">
{/* Section Header with Editorial Stamp */}
<div className="aovix-reveal-text aovix-delay-1 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-space-sm pb-space-sm">
<div className="flex flex-col gap-1 sm:gap-space-xs">
<div className="flex items-center gap-space-xs font-label-sm text-[11px] sm:text-label-sm text-primary uppercase font-mono">
<span>02 // ARCHIVE OF SELECTED CASES</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface font-normal">
          <SplitText text="Systems engineered for precision, speed & human scale" />
        </h2>
</div>
<div className="flex flex-col items-start sm:items-end gap-2 sm:gap-space-xs">
<p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant max-w-sm">
        Each project represents a bespoke architectural response to performance bottlenecks and UX friction.
      </p>
<button onClick={() => onNavigate('case-studies')} className="w-full sm:w-auto justify-center inline-flex items-center gap-1.5 px-4 sm:px-space-md py-2 sm:py-1.5 rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary font-label-sm text-xs sm:text-label-sm uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer">
  <span>Read In-Depth Case Studies</span>
  <span>→</span>
</button>
</div>
</div>

{/* ======================================================== */}
{/* CASE 01: SILICON DRIVE (FLAGSHIP ACTIVE ENGAGEMENT) */}
{/* ======================================================== */}
<article data-cursor-label="EXPLORE" className="bg-surface-container-low rounded-xl p-3.5 sm:p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 card-lift border-2 border-primary/40 relative group/card">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-center">
    {/* Visual Column (7 cols) - Left on Desktop */}
    <div className="aovix-reveal-image aovix-delay-1 lg:col-span-7 flex flex-col gap-2.5 sm:gap-space-sm order-1 lg:order-1">
      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
        <img
          className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
          alt="Silicon Drive Corporate Fleet - Moving People Moving Business"
          src="/images/silicon-drive-fleet.jpg"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 border border-white/10 shadow-md z-10 max-w-[calc(100%-20px)] truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="font-mono font-bold tracking-wider truncate">SILICON DRIVE • 128 CABS LIVE</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-on-surface font-label-sm text-[10px] sm:text-label-sm shadow-sm flex items-center gap-1.5 z-10 max-w-[calc(100%-20px)] truncate">
          <span className="material-symbols-outlined text-primary text-[13px] sm:text-[14px] shrink-0">local_taxi</span>
          <span className="font-mono truncate">@google-maps + websockets queue</span>
        </div>
      </div>

      {/* Micro Sparkline SVG Visualization */}
      <div className="p-2.5 sm:p-space-sm bg-surface rounded-lg flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">DISPATCH QUEUE LATENCY</span>
          <span className="font-headline-sm text-xs sm:text-body-sm font-semibold text-on-surface">420ms avg / zero lock contention</span>
        </div>
        <svg className="w-full xs:w-36 sm:w-44 md:w-48 h-6 sm:h-8 text-emerald-600 overflow-visible sparkline-glow cursor-pointer shrink-0" fill="none" viewBox="0 0 160 30">
          <path d="M0 26 L25 24 L50 25 L75 14 L100 16 L125 15 L150 12 L160 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M0 26 L25 24 L50 25 L75 14 L100 16 L125 15 L150 12 L160 12 L160 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="160" cy="12" fill="currentColor" r="3.5" />
        </svg>
      </div>
    </div>

    {/* Content Column (5 cols) - Right on Desktop */}
    <div className="aovix-reveal-text aovix-delay-2 lg:col-span-5 flex flex-col gap-2.5 sm:gap-space-sm order-2 lg:order-2">
      <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase">
        <span className="font-bold">[CASE NO. 01]</span>
        <span>•</span>
        <span className="font-bold text-primary tracking-wider">SILICON DRIVE</span>
        <span>•</span>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
          ACTIVE ENGAGEMENT
        </span>
      </div>

      <h3 className="font-headline-lg text-lg sm:text-xl lg:text-headline-md text-on-surface font-normal">
        <SplitText text="Silicon Drive — " className="font-bold text-primary font-quote-editorial italic" delay={0.02} />
        <SplitText text="Corporate Cab Booking & Transportation Management Platform" delay={0.2} />
      </h3>

      <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
        Silicon Drive is a corporate cab booking and transportation management platform designed to provide safe, reliable, and cost-efficient employee travel solutions for businesses. Engineered dynamic dispatch route queues, multi-tenant fleet status boards, and live driver routing across high-density urban corridors with zero latency spikes.
      </p>

      <ul className="flex flex-col gap-1.5 sm:gap-2 font-body-sm text-xs sm:text-body-sm text-on-surface-variant pt-space-xs">
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Engineered low-latency dynamic route queues and driver allocation interfaces with Google Maps and real-time WebSockets.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Reduced transit dispatch latency by 34% through optimistic UI updates and normalized client-side fleet state.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Constructed multi-tenant fleet status telemetry boards supporting thousands of daily commuter rides with zero lock contention.</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">React 18</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">TypeScript</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Google Maps</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">WebSockets</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Tailwind CSS</span>
      </div>

      <div className="pt-space-xs">
        <button
          onClick={() => onNavigate('case-studies', 'case-silicon')}
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-primary hover:text-primary-container font-medium transition-colors cursor-pointer"
        >
          <span>Explore Silicon Drive Architecture</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</article>

{/* ======================================================== */}
{/* CASE 02: DIGIPOD (LOCAL DISCOVERY & LEARNING BROADSIDE) */}
{/* ======================================================== */}
<article id="project-digipod" data-snap-section data-snap-title="DigiPod" data-cursor-label="DIGIPOD" className="bg-surface-container-low rounded-xl p-3.5 sm:p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 card-lift scroll-mt-20 sm:scroll-mt-24 group/card">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-center">
    {/* Visual Column (7 cols) - Alternating Right on Desktop */}
    <div className="aovix-reveal-image aovix-delay-2 lg:col-span-7 flex flex-col gap-2.5 sm:gap-space-sm order-1 lg:order-2">
      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
        <img
          className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
          alt="DigiPod Local Discovery and Learning Platform Dashboard Overview"
          src="/images/digipod-dashboard.png"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/90 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 max-w-[calc(100%-20px)] truncate z-10">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
          <span className="font-mono font-bold tracking-wider truncate">DIGIPOD DASHBOARD • USER &amp; VENDOR METRICS</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-on-surface font-label-sm text-[10px] sm:text-label-sm shadow-sm flex items-center gap-1.5 z-10 max-w-[calc(100%-20px)] truncate">
          <span className="material-symbols-outlined text-amber-600 text-[13px] sm:text-[14px] shrink-0">storefront</span>
          <span className="font-mono truncate">@hyperlocal-discovery-engine</span>
        </div>
      </div>

      {/* Micro Sparkline SVG Visualization */}
      <div className="p-2.5 sm:p-space-sm bg-surface rounded-lg flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">DIRECTORY SEARCH LATENCY</span>
          <span className="font-headline-sm text-xs sm:text-body-sm font-semibold text-on-surface">18ms avg / instant client filter</span>
        </div>
        <svg className="w-full xs:w-36 sm:w-44 md:w-48 h-6 sm:h-8 text-amber-600 overflow-visible sparkline-glow cursor-pointer shrink-0" fill="none" viewBox="0 0 160 30">
          <path d="M0 24 L20 22 L40 23 L60 14 L80 12 L100 11 L120 10 L140 10 L160 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M0 24 L20 22 L40 23 L60 14 L80 12 L100 11 L120 10 L140 10 L160 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="160" cy="10" fill="currentColor" r="3.5" />
        </svg>
      </div>
    </div>

    {/* Content Column (5 cols) - Alternating Left on Desktop */}
    <div className="aovix-reveal-text aovix-delay-1 lg:col-span-5 flex flex-col gap-2.5 sm:gap-space-sm order-2 lg:order-1">
      <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-amber-700 font-mono uppercase">
        <span className="font-bold">[CASE NO. 02]</span>
        <span>•</span>
        <span className="font-bold text-amber-700 tracking-wider">DIGIPOD</span>
        <span>•</span>
        <span className="text-on-surface-variant font-semibold">Mysuru Regional Hub</span>
      </div>

      <h3 className="font-headline-lg text-lg sm:text-xl lg:text-headline-md text-on-surface font-normal">
        <SplitText text="DigiPod — " className="font-bold text-amber-700 font-quote-editorial italic" delay={0.02} />
        <SplitText text="Local Discovery & Learning Platform" delay={0.16} />
      </h3>

      <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
        DigiPod is a digital platform designed to connect users with local vendors, creators, professionals, and service providers, especially in and around Mysuru. It helps users discover nearby businesses, creative talents, educational institutions, courses, training programs, and services in one place. The platform bridges the gap between local service providers and people looking for their products, skills, and services while also providing opportunities for creators and vendors to showcase their offerings and grow their reach.
      </p>

      <ul className="flex flex-col gap-1.5 sm:gap-2 font-body-sm text-xs sm:text-body-sm text-on-surface-variant pt-space-xs">
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-amber-600 text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Connects users with local vendors, creators, professionals, and service providers, especially in and around Mysuru.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-amber-600 text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Empowers users to discover nearby businesses, creative talents, educational institutions, courses, and training programs in one place.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-amber-600 text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Bridges the gap between local service providers and consumers while providing opportunities for creators and vendors to showcase their offerings and grow their reach.</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">React</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Next.js</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Tailwind CSS</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Geolocation API</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Dynamic Search Index</span>
      </div>

      <div className="pt-space-xs">
        <button
          onClick={() => onNavigate('case-studies', 'case-digipod')}
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-amber-700 hover:text-on-surface font-medium transition-colors cursor-pointer"
        >
          <span>Explore DigiPod Architecture</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</article>

{/* ======================================================== */}
{/* CASE 03: MACHFOX (RAILWAY COMPLIANCE BROADSIDE) */}
{/* ======================================================== */}
<article id="project-machfox" data-snap-section data-snap-title="Machfox" data-cursor-label="MACHFOX" className="bg-surface-container-low rounded-xl p-3.5 sm:p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 card-lift scroll-mt-20 sm:scroll-mt-24 group/card">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-center">
    {/* Visual Column (7 cols) - Left on Desktop */}
    <div className="aovix-reveal-image aovix-delay-1 lg:col-span-7 flex flex-col gap-2.5 sm:gap-space-sm order-1 lg:order-1">
      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
        <img
          className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
          alt="MachFox Railway Service Contracts Management Dashboard and Mobile Field App"
          src="/images/machfox-dashboard.jpg"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/90 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 max-w-[calc(100%-20px)] truncate z-10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
          <span className="font-mono font-bold tracking-wider truncate">MACHFOX RAILWAY CONTRACTS • WEB &amp; MOBILE</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-on-surface font-label-sm text-[10px] sm:text-label-sm shadow-sm flex items-center gap-1.5 z-10 max-w-[calc(100%-20px)] truncate">
          <span className="material-symbols-outlined text-secondary text-[13px] sm:text-[14px] shrink-0">train</span>
          <span className="font-mono truncate">@service-contracts-engine</span>
        </div>
      </div>

      {/* Micro Sparkline SVG Visualization */}
      <div className="p-2.5 sm:p-space-sm bg-surface rounded-lg flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">AUDIT VERIFICATION VELOCITY</span>
          <span className="font-headline-sm text-xs sm:text-body-sm font-semibold text-on-surface">0.04s per contract rule pass</span>
        </div>
        <svg className="w-full xs:w-36 sm:w-44 md:w-48 h-6 sm:h-8 text-secondary overflow-visible sparkline-glow cursor-pointer shrink-0" fill="none" viewBox="0 0 160 30">
          <path d="M0 24 L20 22 L40 23 L60 14 L80 12 L100 13 L120 11 L140 10 L160 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M0 24 L20 22 L40 23 L60 14 L80 12 L100 13 L120 11 L140 10 L160 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="160" cy="10" fill="currentColor" r="3.5" />
        </svg>
      </div>
    </div>

    {/* Content Column (5 cols) - Right on Desktop */}
    <div className="aovix-reveal-text aovix-delay-2 lg:col-span-5 flex flex-col gap-2.5 sm:gap-space-sm order-2 lg:order-2">
      <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-secondary font-mono uppercase">
        <span className="font-bold">[CASE NO. 03]</span>
        <span>•</span>
        <span className="font-bold text-secondary tracking-wider">MACHFOX</span>
      </div>

      <h3 className="font-headline-lg text-lg sm:text-xl lg:text-headline-md text-on-surface font-normal">
        <SplitText text="Machfox — " className="font-bold text-secondary font-quote-editorial italic" delay={0.02} />
        <SplitText text="Service Management System for Railway Contracts" delay={0.16} />
      </h3>

      <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
        The Service Management System for Railway Contracts is designed to manage end-to-end operations of service contracts awarded by railway departments. The system ensures efficient planning, execution, monitoring, and compliance of contracted services such as maintenance, operations, staffing, and infrastructure support.
      </p>

      <ul className="flex flex-col gap-1.5 sm:gap-2 font-body-sm text-xs sm:text-body-sm text-on-surface-variant pt-space-xs">
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Provides centralized control over contracts, zones, divisions, departments, workforce, and service schedules.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Automated performance tracking and SLA reporting, ensuring transparency, accountability, and contract compliance.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Eliminated manual clipboard inspections with instant client-side discrepancy validation rules for 2,400+ deliverables.</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Next.js</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">TypeScript</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Chart.js</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Virtualized Tables</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Tailwind CSS</span>
      </div>

      <div className="pt-space-xs">
        <button
          onClick={() => onNavigate('case-studies', 'case-machfox')}
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-secondary hover:text-on-surface font-medium transition-colors cursor-pointer"
        >
          <span>Explore Machfox Architecture</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</article>

{/* ======================================================== */}
{/* CASE 04: INTRA 3.0 (ENTERPRISE WORKFLOW BROADSIDE) */}
{/* ======================================================== */}
<article id="project-intra" data-snap-section data-snap-title="Intra 3.0" data-cursor-label="INTRA 3.0" className="bg-surface-container-low rounded-xl p-3.5 sm:p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 card-lift scroll-mt-20 sm:scroll-mt-24 group/card">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-center">
    {/* Visual Column (7 cols) - Alternating Right on Desktop */}
    <div className="aovix-reveal-image aovix-delay-2 lg:col-span-7 flex flex-col gap-2.5 sm:gap-space-sm order-1 lg:order-2">
      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
        <img
          className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
          alt="INTRA Enterprise Workflow & KPI Performance Management Dashboard"
          src="/images/intra-dashboard.jpg"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/90 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 max-w-[calc(100%-20px)] truncate z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="font-mono font-bold tracking-wider truncate">INTRA 3.0 • KPI 2.0 &amp; SE UTILIZATION DASHBOARD</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-on-surface font-label-sm text-[10px] sm:text-label-sm shadow-sm flex items-center gap-1.5 z-10 max-w-[calc(100%-20px)] truncate">
          <span className="material-symbols-outlined text-primary text-[13px] sm:text-[14px] shrink-0">analytics</span>
          <span className="font-mono truncate">@kpi-workflow-orchestrator</span>
        </div>
      </div>
      <div className="p-2.5 sm:p-space-sm bg-surface rounded-lg flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">SCORECARD RECALCULATION DELAY</span>
          <span className="font-headline-sm text-xs sm:text-body-sm font-semibold text-on-surface">-82% delay / sub-16ms reactive updates</span>
        </div>
        <svg className="w-full xs:w-36 sm:w-44 md:w-48 h-6 sm:h-8 text-primary overflow-visible sparkline-glow cursor-pointer shrink-0" fill="none" viewBox="0 0 160 30">
          <path d="M0 26 L30 25 L60 22 L90 15 L120 12 L140 10 L160 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M0 26 L30 25 L60 22 L90 15 L120 12 L140 10 L160 10 L160 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="160" cy="10" fill="currentColor" r="3.5" />
        </svg>
      </div>
    </div>

    {/* Content Column (5 cols) - Left on Desktop */}
    <div className="aovix-reveal-text aovix-delay-1 lg:col-span-5 flex flex-col gap-2.5 sm:gap-space-sm order-2 lg:order-1">
      <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase">
        <span className="font-bold">[CASE NO. 04]</span>
        <span>•</span>
        <span className="font-bold text-primary tracking-wider">INTRA 3.0</span>
      </div>

      <h3 className="font-headline-lg text-lg sm:text-xl lg:text-headline-md text-on-surface font-normal">
        <SplitText text="Intra 3.0 — " className="font-bold text-primary font-quote-editorial italic" delay={0.02} />
        <SplitText text="Internal Workflow & Performance Management System" delay={0.18} />
      </h3>

      <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
        Developed an internal workflow and performance management system using React.js and Redux, enabling staff onboarding, role-based access, activity tracking (meetings, feeds, surveys), and opportunity-based task management through responsive and reusable UI components.
      </p>

      <ul className="flex flex-col gap-1.5 sm:gap-2 font-body-sm text-xs sm:text-body-sm text-on-surface-variant pt-space-xs">
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Implemented dynamic DOM manipulation and performance dashboards to automate task tracking, rewards, and salary hike calculations based on target completion.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Engineered staff onboarding flows and role-based access with opportunity-based task management through reusable UI components.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Decoupled complex matrix calculations into isolated memoized pipelines, eliminating 82% of appraisal calculation delays.</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Next.js App Router</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Redux Toolkit</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">React Hook Form</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Zod</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Tailwind</span>
      </div>

      <div className="pt-space-xs">
        <button
          onClick={() => onNavigate('case-studies', 'case-intra')}
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-primary hover:text-primary-container font-medium transition-colors cursor-pointer"
        >
          <span>Read Intra 3.0 Architecture Dispatch</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</article>

{/* ======================================================== */}
{/* CASE 05: SHELL OMAN (INDUSTRIAL TELEMETRY BROADSIDE) */}
{/* ======================================================== */}
<article id="project-shell" data-snap-section data-snap-title="Shell Oman" data-cursor-label="SHELL" className="bg-surface-container-low rounded-xl p-3.5 sm:p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 card-lift scroll-mt-20 sm:scroll-mt-24 group/card">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-center">
    {/* Visual Column (7 cols) - Left on Desktop */}
    <div className="aovix-reveal-image aovix-delay-1 lg:col-span-7 flex flex-col gap-2.5 sm:gap-space-sm order-1 lg:order-1">
      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
        <img
          className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
          alt="High-resolution UI dashboard mockup of Shell Oman Event Severity Intelligence and CCTV Analytics"
          src="/images/shell-oman-dashboard.png"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/90 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 max-w-[calc(100%-20px)] truncate z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="font-mono font-bold tracking-wider truncate">SHELL OMAN • EVENT SEVERITY INTELLIGENCE • LIVE</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-on-surface font-label-sm text-[10px] sm:text-label-sm shadow-sm flex items-center gap-1.5 z-10 max-w-[calc(100%-20px)] truncate">
          <span className="material-symbols-outlined text-primary text-[13px] sm:text-[14px] shrink-0">security</span>
          <span className="font-mono truncate">@intrusion-ppe-detection</span>
        </div>
      </div>
      <div className="p-2.5 sm:p-space-sm bg-surface rounded-lg flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">FRAME TIME STABILITY</span>
          <span className="font-headline-sm text-xs sm:text-body-sm font-semibold text-on-surface">16.2ms avg / zero jank</span>
        </div>
        <svg className="w-full xs:w-36 sm:w-44 md:w-48 h-6 sm:h-8 text-primary overflow-visible sparkline-glow cursor-pointer shrink-0" fill="none" viewBox="0 0 160 30">
          <path d="M0 24 L20 22 L40 25 L60 21 L80 23 L100 22 L120 24 L140 21 L160 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M0 24 L20 22 L40 25 L60 21 L80 23 L100 22 L120 24 L140 21 L160 22 L160 30 L0 30 Z" fill="currentColor" fillOpacity="0.08" />
          <circle cx="160" cy="22" fill="currentColor" r="3" />
        </svg>
      </div>
    </div>

    {/* Content Column (5 cols) - Right on Desktop */}
    <div className="aovix-reveal-text aovix-delay-2 lg:col-span-5 flex flex-col gap-2.5 sm:gap-space-sm order-2 lg:order-2">
      <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase">
        <span className="font-bold">[CASE NO. 05]</span>
        <span>•</span>
        <span className="font-bold text-primary tracking-wider">SHELL OMAN</span>
      </div>

      <h3 className="font-headline-lg text-lg sm:text-xl lg:text-headline-md text-on-surface font-normal">
        <SplitText text="Shell Oman — " className="font-bold text-primary font-quote-editorial italic" delay={0.02} />
        <SplitText text="Real-Time AI CCTV Video Analytics Platform" delay={0.18} />
      </h3>

      <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
        Integrated a real-time AI CCTV analytics platform supporting smart city, retail, and manufacturing deployments into a responsive, high-performance operations interface.
      </p>

      <ul className="flex flex-col gap-1.5 sm:gap-2 font-body-sm text-xs sm:text-body-sm text-on-surface-variant pt-space-xs">
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Integrated a real-time AI CCTV analytics platform supporting smart city, retail, and manufacturing deployments into a responsive user interface.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Developed a real-time monitoring dashboard to visualize multi-camera video processing, object detection, face recognition, and tracking data (utilizing backend feeds from YOLOv11, RetinaFace, ArcFace, and Byte Track).</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Collaborated with AI/Backend teams to display optimized model inference metrics, ensuring seamless frontend video streaming and dashboard rendering speed.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Utilized Docker and modern frontend optimization techniques to ensure the tracking dashboard loaded efficiently for end-users.</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">React 18</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">TypeScript</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">WebSockets</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">OffscreenCanvas</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">YOLOv11</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Docker</span>
      </div>

      <div className="pt-space-xs">
        <button
          onClick={() => onNavigate('case-studies', 'case-shell')}
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-primary hover:text-primary-container font-medium transition-colors cursor-pointer"
        >
          <span>Explore Deep Dive &amp; Telemetry Architecture</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</article>

{/* ======================================================== */}
{/* CASE 06: EDUBOTIX (DIGITAL EXAMS BROADSIDE) */}
{/* ======================================================== */}
<article id="project-edubotix" data-snap-section data-snap-title="Edubotix" data-cursor-label="EDUBOTIX" className="bg-surface-container-low rounded-xl p-3.5 sm:p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 card-lift scroll-mt-20 sm:scroll-mt-24 group/card">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-space-lg items-center">
    {/* Visual Column (7 cols) - Alternating Right on Desktop */}
    <div className="aovix-reveal-image aovix-delay-2 lg:col-span-7 flex flex-col gap-2.5 sm:gap-space-sm order-1 lg:order-2">
      <div className="relative rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
        <img
          className="w-full h-52 xs:h-64 sm:h-80 lg:h-96 object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
          alt="Edubotix Comprehensive School &amp; College Data Portal, Real-time Attendance &amp; Bus Tracking"
          src="/images/edubotix-platform.jpg"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-inverse-surface/90 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-inverse-on-surface font-label-sm text-[10px] sm:text-label-sm flex items-center gap-1.5 max-w-[calc(100%-20px)] truncate z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="font-mono font-bold tracking-wider truncate">EDUBOTIX • 1,24,000+ STUDENTS • REAL-TIME CAMPUS PORTAL</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 sm:px-space-sm py-1 rounded text-on-surface font-label-sm text-[10px] sm:text-label-sm shadow-sm flex items-center gap-1.5 z-10 max-w-[calc(100%-20px)] truncate">
          <span className="material-symbols-outlined text-primary text-[13px] sm:text-[14px] shrink-0">school</span>
          <span className="font-mono truncate">@campus-data-sync</span>
        </div>
      </div>
      <div className="p-2.5 sm:p-space-sm bg-surface rounded-lg flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">OFFLINE ANSWER INTEGRITY</span>
          <span className="font-headline-sm text-xs sm:text-body-sm font-semibold text-on-surface">100% autosave sync / zero packet loss</span>
        </div>
        <svg className="w-full xs:w-36 sm:w-44 md:w-48 h-6 sm:h-8 text-primary overflow-visible sparkline-glow cursor-pointer shrink-0" fill="none" viewBox="0 0 160 30">
          <path d="M0 24 L25 24 L50 20 L75 16 L100 12 L130 11 L160 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M0 24 L25 24 L50 20 L75 16 L100 12 L130 11 L160 10 L160 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="160" cy="10" fill="currentColor" r="3.5" />
        </svg>
      </div>
    </div>

    {/* Content Column (5 cols) - Left on Desktop */}
    <div className="aovix-reveal-text aovix-delay-1 lg:col-span-5 flex flex-col gap-2.5 sm:gap-space-sm order-2 lg:order-1">
      <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase">
        <span className="font-bold">[CASE NO. 06]</span>
        <span>•</span>
        <span className="font-bold text-primary tracking-wider">EDUBOTIX</span>
      </div>

      <h3 className="font-headline-lg text-lg sm:text-xl lg:text-headline-md text-on-surface font-normal">
        <SplitText text="Edubotix — " className="font-bold text-primary font-quote-editorial italic" delay={0.02} />
        <SplitText text="Institutional Examination & Digital Campus Platform" delay={0.16} />
      </h3>

      <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
        Building a comprehensive web application to digitize school and college data, developing responsive frontend modules for real-time attendance tracking and automated reporting.
      </p>

      <ul className="flex flex-col gap-1.5 sm:gap-2 font-body-sm text-xs sm:text-body-sm text-on-surface-variant pt-space-xs">
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Designing and implementing user interfaces for an exam question bank and mock test results portal, while ensuring secure handling of sensitive institutional records.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Developing responsive frontend modules for real-time attendance tracking and automated institutional reporting.</span>
        </li>
        <li className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Robust offline-first persistence via IndexedDB (Dexie) with automatic background sync upon network reconnection.</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">React</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">IndexedDB / Dexie</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">WebCrypto API</span>
        <span className="font-label-sm text-[10px] sm:text-label-sm px-2 py-0.5 sm:py-1 rounded bg-surface text-on-surface-variant font-mono">Tailwind CSS</span>
      </div>

      <div className="pt-space-xs">
        <button
          onClick={() => onNavigate('case-studies', 'case-edubotix')}
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-primary hover:text-primary-container font-medium transition-colors cursor-pointer"
        >
          <span>Read Exam Cockpit Architecture Dispatch</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</article>

{/* Additional Production Engagement: AtMed Healthcare */}
<div className="mt-4 sm:mt-space-md p-3.5 sm:p-space-md lg:p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-space-md shadow-sm hover:shadow transition-shadow">
  <div className="flex flex-col gap-1 sm:gap-space-xs max-w-3xl">
    <div className="flex flex-wrap items-center gap-1 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm font-mono uppercase">
      <span className="font-bold text-tertiary">[MOBILE PLATFORM &amp; HEALTHCARE]</span>
      <span className="text-outline-variant">•</span>
      <span className="text-on-surface-variant font-semibold">ANDROID TELEHEALTH PLATFORM</span>
    </div>
    <h3 className="font-headline-sm text-base sm:text-headline-sm text-on-surface font-bold">
      <SplitText text="AtMed Healthcare — " className="text-tertiary font-quote-editorial italic" delay={0.02} />
      <SplitText text="Comprehensive Patient Care & Diagnostic Management Android Application" delay={0.2} />
    </h3>
    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
      AtMed Healthcare is an Android application offering a comprehensive platform for patients to manage their healthcare needs, including connecting with doctors, booking diagnostic tests, accessing medical equipment, maintaining health records, and exploring wellness resources. As part of the maintenance project, I actively work on enhancing existing features, resolving bugs, and ensuring the application functions seamlessly.
    </p>
  </div>
  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
    <div className="flex flex-wrap gap-1">
      <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] sm:text-xs text-on-surface-variant font-mono">Android</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] sm:text-xs text-on-surface-variant font-mono">Telehealth</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] sm:text-xs text-on-surface-variant font-mono">REST APIs</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] sm:text-xs text-on-surface-variant font-mono">Maintenance</span>
    </div>
    <button
      onClick={() => onNavigate('case-studies', 'case-atmed')}
      className="inline-flex items-center gap-1 font-label-sm text-xs sm:text-label-sm text-tertiary hover:text-on-surface font-medium transition-colors cursor-pointer"
    >
      <span>View In Case Studies Archive</span>
      <span>→</span>
    </button>
  </div>
</div>
</section>
{/* How I Think About Frontend (How I Work) */}
<section id="craft-and-philosophy" data-snap-section data-snap-title="How I Work" className="py-8 sm:py-space-xl bg-surface-container rounded-xl px-3.5 sm:px-space-md lg:px-space-lg shadow-sm scroll-mt-20 sm:scroll-mt-24">
<div className="aovix-reveal-text aovix-delay-1 max-w-3xl flex flex-col gap-2 sm:gap-space-sm mb-6 sm:mb-space-lg">
<span className="font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase tracking-widest">03 // HOW I WORK</span>
<h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface font-normal">
        <SplitText text="How I think about building for the web" />
      </h2>
<p className="font-quote-editorial text-base sm:text-lg lg:text-quote-editorial italic text-on-surface-variant leading-relaxed">
        “I care less about how a page looks when everything works, and more about how it behaves when things go wrong: a slow network, a late-loading font, or someone using only a keyboard.”
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-space-md">
{/* Pillar 1 */}
<div className="aovix-reveal-image aovix-delay-1 group relative p-4 sm:p-space-md lg:p-space-lg rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-primary/40 overflow-hidden cursor-pointer">
  {/* Top Accent Gradient Bar */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary mb-space-xs transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
    <span className="material-symbols-outlined text-[20px] sm:text-[22px] transition-transform duration-300">layers</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="font-mono text-xs font-bold text-primary">01.</span>
    <h3 className="font-headline-sm text-base sm:text-headline-sm text-on-surface group-hover:text-primary font-semibold transition-colors duration-300">
      <SplitText text="Polished, but lightweight" />
    </h3>
  </div>
  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed pt-1">
    I like interfaces that feel smooth and carefully finished, but not at the cost of speed. I build most of my UI with CSS (grid, subgrid, transitions) instead of adding heavy libraries. On Silicon Drive, this kept the bundle under 42 KB and improved load time by 30%.
  </p>
  <div className="mt-auto pt-space-xs flex items-center gap-1 text-[11px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
    <span>Principle 01</span>
    <span className="text-xs">→</span>
  </div>
</div>

{/* Pillar 2 */}
<div className="aovix-reveal-image aovix-delay-2 group relative p-4 sm:p-space-md lg:p-space-lg rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-secondary/40 overflow-hidden cursor-pointer">
  {/* Top Accent Gradient Bar */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-high group-hover:bg-secondary group-hover:text-on-secondary flex items-center justify-center text-secondary mb-space-xs transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 shadow-sm">
    <span className="material-symbols-outlined text-[20px] sm:text-[22px] transition-transform duration-300">account_tree</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="font-mono text-xs font-bold text-secondary">02.</span>
    <h3 className="font-headline-sm text-base sm:text-headline-sm text-on-surface group-hover:text-secondary font-semibold transition-colors duration-300">
      <SplitText text="Clear, predictable state" />
    </h3>
  </div>
  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed pt-1">
    Messy state is where most frontend bugs start. I keep each kind of state in its own place: animations in CSS, server data cached near the API layer, and app data in one clear store. That makes the code easier to debug and easier for teammates to pick up.
  </p>
  <div className="mt-auto pt-space-xs flex items-center gap-1 text-[11px] font-mono text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
    <span>Principle 02</span>
    <span className="text-xs">→</span>
  </div>
</div>

{/* Pillar 3 */}
<div className="aovix-reveal-image aovix-delay-3 group relative p-4 sm:p-space-md lg:p-space-lg rounded-xl bg-surface flex flex-col gap-space-xs shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 sm:hover:-translate-y-2 border border-outline-variant/20 hover:border-tertiary/40 overflow-hidden cursor-pointer">
  {/* Top Accent Gradient Bar */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary via-tertiary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-high group-hover:bg-tertiary group-hover:text-on-tertiary flex items-center justify-center text-tertiary mb-space-xs transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
    <span className="material-symbols-outlined text-[20px] sm:text-[22px] transition-transform duration-300">accessibility_new</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="font-mono text-xs font-bold text-tertiary">03.</span>
    <h3 className="font-headline-sm text-base sm:text-headline-sm text-on-surface group-hover:text-tertiary font-semibold transition-colors duration-300">
      <SplitText text="Accessible from the start" />
    </h3>
  </div>
  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed pt-1">
    If a site only works for people with a mouse and perfect eyesight, it isn't finished. I build in keyboard navigation, proper ARIA labels, and screen-reader testing from the first day, not as a fix at the end. I test with NVDA/VoiceOver and aim for WCAG AA compliance.
  </p>
  <div className="mt-auto pt-space-xs flex items-center gap-1 text-[11px] font-mono text-tertiary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
    <span>Principle 03</span>
    <span className="text-xs">→</span>
  </div>
</div>
</div>
</section>
{/* Engineering Toolkit (Organized by Craft Domain) */}
<section id="tech-and-stack" data-snap-section data-snap-title="Toolkit & Proficiencies" className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg scroll-mt-20 sm:scroll-mt-24">
<div className="aovix-reveal-text aovix-delay-1 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-space-sm pb-space-xs">
<div className="flex flex-col gap-1 sm:gap-space-xs">
<span className="font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase tracking-widest">04 // TOOLKIT &amp; PROFICIENCIES</span>
<h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface font-normal">
          <SplitText text="Instruments honed over hundreds of commits" />
        </h2>
</div>
<span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">REVISED Q1 2025</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-space-md">
{/* Domain 1: Core Daily Interface Work */}
<div className="aovix-reveal-image aovix-delay-1 group p-4 sm:p-space-md rounded-xl bg-surface-container-low hover:bg-surface flex flex-col gap-4 sm:gap-space-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-outline-variant/20 hover:border-primary/40 cursor-pointer">
  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <span className="material-symbols-outlined text-[19px]">devices</span>
      </div>
      <span className="font-label-sm text-[11px] sm:text-label-sm font-semibold uppercase tracking-wider text-primary font-mono group-hover:tracking-widest transition-all">01 / CORE CLIENT</span>
    </div>
    <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase">UI &amp; Client</span>
  </div>
  <div className="flex flex-col gap-3.5 sm:gap-space-sm">
    {/* 1.1 React & Next.js */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center text-primary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover/item:rotate-90" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-primary transition-colors">React 19 &amp; Next.js (App Router)</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Server Components, Suspense boundaries, streaming SSR</span>
      </div>
    </div>
    {/* 1.2 TypeScript */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center text-primary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5 font-mono font-bold text-[11px]">
        TS
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-primary transition-colors">TypeScript Strict Mode</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Discriminated unions, generic constraints, zero ‘any’ tolerance</span>
      </div>
    </div>
    {/* 1.3 Tailwind CSS */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center text-primary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover/item:scale-110" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-primary transition-colors">Tailwind CSS &amp; Modern Layout</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">CSS Grid subgrids, container queries, CSS variable theming</span>
      </div>
    </div>
    {/* 1.4 HTML5 Canvas */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center text-primary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">draw</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-primary transition-colors">HTML5 Canvas &amp; Web Workers</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">OffscreenCanvas, real-time telemetry streaming</span>
      </div>
    </div>
  </div>
</div>
{/* Domain 2: Systems, Data & Scale */}
<div className="aovix-reveal-image aovix-delay-2 group p-4 sm:p-space-md rounded-xl bg-surface-container-low hover:bg-surface flex flex-col gap-4 sm:gap-space-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-outline-variant/20 hover:border-secondary/40 cursor-pointer">
  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <span className="material-symbols-outlined text-[19px]">dns</span>
      </div>
      <span className="font-label-sm text-[11px] sm:text-label-sm font-semibold uppercase tracking-wider text-secondary font-mono group-hover:tracking-widest transition-all">02 / SYSTEMS &amp; INFRA</span>
    </div>
    <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase">Backend &amp; Cloud</span>
  </div>
  <div className="flex flex-col gap-3.5 sm:gap-space-sm">
    {/* 2.1 Node.js */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-secondary group-hover/item:text-on-secondary flex items-center justify-center text-secondary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">terminal</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-secondary transition-colors">Node.js &amp; Headless Architecture</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Strapi CMS custom plugins, REST API contracts, webhooks</span>
      </div>
    </div>
    {/* 2.2 AWS */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-secondary group-hover/item:text-on-secondary flex items-center justify-center text-secondary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">cloud</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-secondary transition-colors">AWS Cloud Ecosystem</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">S3 asset pipelines, CloudFront distributions, edge invalidations</span>
      </div>
    </div>
    {/* 2.3 State Architecture */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-secondary group-hover/item:text-on-secondary flex items-center justify-center text-secondary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">account_tree</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-secondary transition-colors">State Architecture</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Redux Toolkit, RTK Query, Zustand, local Dexie/IndexedDB</span>
      </div>
    </div>
    {/* 2.4 Docker & Containerization */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-secondary group-hover/item:text-on-secondary flex items-center justify-center text-secondary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">deployed_code</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-secondary transition-colors">Containerization &amp; Deployment</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Docker multistage builds, Vercel edge runtime, GitHub Actions</span>
      </div>
    </div>
  </div>
</div>
{/* Domain 3: Quality, Verification & Craft */}
<div className="aovix-reveal-image aovix-delay-3 group p-4 sm:p-space-md rounded-xl bg-surface-container-low hover:bg-surface flex flex-col gap-4 sm:gap-space-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-outline-variant/20 hover:border-tertiary/40 cursor-pointer">
  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <span className="material-symbols-outlined text-[19px]">fact_check</span>
      </div>
      <span className="font-label-sm text-[11px] sm:text-label-sm font-semibold uppercase tracking-wider text-tertiary font-mono group-hover:tracking-widest transition-all">03 / CODE RIGOR</span>
    </div>
    <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase">QA &amp; Speed</span>
  </div>
  <div className="flex flex-col gap-3.5 sm:gap-space-sm">
    {/* 3.1 Testing & Coverage */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-tertiary group-hover/item:text-on-tertiary flex items-center justify-center text-tertiary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">verified</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-tertiary transition-colors">Testing &amp; Coverage</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Jest unit suites, Cypress e2e workflows, React Testing Library</span>
      </div>
    </div>
    {/* 3.2 Code Quality & Linting */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-tertiary group-hover/item:text-on-tertiary flex items-center justify-center text-tertiary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">rule</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-tertiary transition-colors">Code Quality &amp; Linting</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">SonarQube gate analysis, ESLint custom AST rules, Prettier</span>
      </div>
    </div>
    {/* 3.3 Browser Profiling */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-tertiary group-hover/item:text-on-tertiary flex items-center justify-center text-tertiary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">speed</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-tertiary transition-colors">Browser Profiling</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Chrome DevTools Performance Tracing, Memory leak audits, Lighthouse</span>
      </div>
    </div>
    {/* 3.4 API Verification */}
    <div className="flex items-start gap-3 group/item">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high group-hover/item:bg-tertiary group-hover/item:text-on-tertiary flex items-center justify-center text-tertiary shrink-0 transition-all duration-200 border border-outline-variant/30 mt-0.5">
        <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover/item:scale-110">api</span>
      </div>
      <div className="flex flex-col">
        <span className="font-headline-sm text-sm sm:text-body-md font-semibold text-on-surface group-hover/item:text-tertiary transition-colors">API Verification</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Postman collections, contract mock servers, Zod response validation</span>
      </div>
    </div>
  </div>
</div>
</div>
</section>

{/* Section 05: Work Experience & Career Trajectory */}
<section id="engineering-journey" data-snap-section data-snap-title="Work Experience" className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg scroll-mt-20 sm:scroll-mt-24">
  <div className="aovix-reveal-text aovix-delay-1 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-space-sm pb-space-xs">
    <div className="flex flex-col gap-1 sm:gap-space-xs">
      <span className="font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase tracking-widest">05 // WORK EXPERIENCE</span>
      <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface font-normal">
        <SplitText text="Engineering journey & career trajectory" />
      </h2>
    </div>
    <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">2021 — PRESENT</span>
  </div>

  <div className="flex flex-col gap-5 sm:gap-space-md">
    {/* Role 1: Software Engineer */}
    <div className="aovix-reveal-image aovix-delay-1 p-4 sm:p-space-lg rounded-xl bg-surface-container-low hover:bg-surface border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl group/exp">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-space-md pb-4 border-b border-outline-variant/15">
        <div className="flex items-start gap-3 sm:gap-space-sm">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover/exp:scale-105 group-hover/exp:bg-primary group-hover/exp:text-on-primary transition-all duration-300">
            <span className="material-symbols-outlined text-[22px] sm:text-[24px]">terminal</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-headline-md text-base sm:text-xl font-bold text-on-surface">
                <SplitText text="Software Engineer" />
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                CURRENT ENGAGEMENT
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-on-surface-variant pt-0.5">
              <span className="font-semibold text-on-surface">Nextbrain Technologies Pvt Ltd</span>
              <span>•</span>
              <span className="font-mono text-[11px] sm:text-xs">Bengaluru, India</span>
            </div>
          </div>
        </div>
        <div className="sm:text-right shrink-0">
          <span className="font-mono text-xs sm:text-sm font-semibold text-primary px-2.5 py-1 rounded-md bg-surface-container">2022 — Present</span>
        </div>
      </div>

      {/* Bullet points from resume */}
      <ul className="flex flex-col gap-2.5 pt-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Developing and maintaining static and dynamic web applications using <strong className="text-on-surface font-semibold">Next.js, Node.js, and Strapi</strong>, improving platform scalability and handling capacity by <strong className="text-primary font-semibold">30%</strong>.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Building responsive, user-centric interfaces with <strong className="text-on-surface font-semibold">HTML, CSS, JavaScript, and React.js</strong> to deliver high-fidelity, accessible designs.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Collaborating with UI/UX designers and backend teams to deliver full-stack applications, reducing overall project delivery times by <strong className="text-primary font-semibold">15%</strong>.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Integrating REST APIs for seamless data handling, optimizing API response consumption, and ensuring a <strong className="text-primary font-semibold">20% decrease</strong> in client-side loading times.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Continuously optimizing production code and implementing frontend best practices to boost <strong className="text-on-surface font-semibold">Core Web Vitals</strong> and long-term application scalability.</span>
        </li>
      </ul>

      {/* Impact tags */}
      <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-2 border-t border-outline-variant/10">
        <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-wider mr-1">Stack:</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Next.js</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">React.js</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Node.js</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Strapi CMS</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">REST APIs</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">TypeScript</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Tailwind CSS</span>
      </div>
    </div>

    {/* Role 2: Android Developer */}
    <div className="aovix-reveal-image aovix-delay-2 p-4 sm:p-space-lg rounded-xl bg-surface-container-low hover:bg-surface border border-outline-variant/20 hover:border-secondary/40 transition-all duration-300 shadow-sm hover:shadow-xl group/exp">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-space-md pb-4 border-b border-outline-variant/15">
        <div className="flex items-start gap-3 sm:gap-space-sm">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 border border-secondary/20 group-hover/exp:scale-105 group-hover/exp:bg-secondary group-hover/exp:text-on-secondary transition-all duration-300">
            <span className="material-symbols-outlined text-[22px] sm:text-[24px]">smartphone</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-headline-md text-base sm:text-xl font-bold text-on-surface">
                <SplitText text="Android Developer" />
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                NATIVE MOBILE
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-on-surface-variant pt-0.5">
              <span className="font-semibold text-on-surface">Nextbrain Technologies Pvt Ltd</span>
              <span>•</span>
              <span className="font-mono text-[11px] sm:text-xs">Bengaluru, India</span>
            </div>
          </div>
        </div>
        <div className="sm:text-right shrink-0">
          <span className="font-mono text-xs sm:text-sm font-semibold text-secondary px-2.5 py-1 rounded-md bg-surface-container">2021 — 2022</span>
        </div>
      </div>

      {/* Bullet points from resume */}
      <ul className="flex flex-col gap-2.5 pt-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Designed, developed, and maintained Android applications using <strong className="text-on-surface font-semibold">Kotlin and Java</strong>, prioritizing user experience and fluid UI functionality.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Collaborated with cross-functional product teams to define, implement, and ship new mobile features that enhanced application usability and customer retention.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Optimized app performance to ensure seamless operation across diverse Android screen sizes and hardware specs, resolving critical memory and thread lifecycle bottlenecks.</span>
        </li>
        <li className="flex items-start gap-2 sm:gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
          <span>Contributed to delivering engaging, high-quality mobile applications that reached global consumer and enterprise userbases.</span>
        </li>
      </ul>

      {/* Impact tags */}
      <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-2 border-t border-outline-variant/10">
        <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-wider mr-1">Stack:</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Kotlin</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Java</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Android Studio</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Jetpack Compose</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Retrofit</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">Firebase</span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface">MVVM</span>
      </div>
    </div>
  </div>
</section>

{/* Section 06: Comprehensive Skills & Competencies Matrix */}
<section id="skills-matrix" data-snap-section data-snap-title="Skills Matrix" className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg scroll-mt-20 sm:scroll-mt-24">
  <div className="aovix-reveal-text aovix-delay-1 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-space-sm pb-space-xs">
    <div className="flex flex-col gap-1 sm:gap-space-xs">
      <span className="font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase tracking-widest">06 // SKILLS &amp; PROFICIENCIES</span>
      <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface font-normal">
        <SplitText text="Core technical skills & competencies" />
      </h2>
    </div>
    <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">STANDARDIZED ARSENAL</span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-space-md">
    {/* 1. Programming Languages */}
    <div className="aovix-reveal-image aovix-delay-1 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider pb-1 border-b border-outline-variant/15">
        <span className="material-symbols-outlined text-[18px]">code</span>
        <span>Languages</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Kotlin', 'Java', 'Python'].map(lang => (
          <span key={lang} className="px-2.5 py-1 rounded-md bg-surface-container font-mono text-xs text-on-surface hover:bg-primary hover:text-on-primary transition-colors cursor-default">
            {lang}
          </span>
        ))}
      </div>
    </div>

    {/* 2. Frameworks & Libraries */}
    <div className="aovix-reveal-image aovix-delay-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-secondary font-mono text-xs font-bold uppercase tracking-wider pb-1 border-b border-outline-variant/15">
        <span className="material-symbols-outlined text-[18px]">layers</span>
        <span>Frameworks &amp; Libs</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {['React.js', 'Next.js', 'Redux / RTK', 'Node.js', 'Strapi CMS', 'Tailwind CSS', 'Bootstrap'].map(fw => (
          <span key={fw} className="px-2.5 py-1 rounded-md bg-surface-container font-mono text-xs text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors cursor-default">
            {fw}
          </span>
        ))}
      </div>
    </div>

    {/* 3. Mobile Development */}
    <div className="aovix-reveal-image aovix-delay-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-tertiary font-mono text-xs font-bold uppercase tracking-wider pb-1 border-b border-outline-variant/15">
        <span className="material-symbols-outlined text-[18px]">smartphone</span>
        <span>Mobile &amp; App</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {['Android Development', 'Android Studio', 'Jetpack Compose', 'Firebase', 'Retrofit', 'MVVM'].map(mob => (
          <span key={mob} className="px-2.5 py-1 rounded-md bg-surface-container font-mono text-xs text-on-surface hover:bg-tertiary hover:text-on-tertiary transition-colors cursor-default">
            {mob}
          </span>
        ))}
      </div>
    </div>

    {/* 4. Frontend & Architecture */}
    <div className="aovix-reveal-image aovix-delay-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider pb-1 border-b border-outline-variant/15">
        <span className="material-symbols-outlined text-[18px]">architecture</span>
        <span>Architecture &amp; Tools</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {['Responsive Web Design', 'Cross-Browser Parity', 'REST API Integration', 'Git / GitHub', 'Postman', 'SonarQube', 'Linux / Windows'].map(tool => (
          <span key={tool} className="px-2.5 py-1 rounded-md bg-surface-container font-mono text-xs text-on-surface hover:bg-amber-600 hover:text-white transition-colors cursor-default">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Section 07: Frequently Asked Questions (FAQ) */}
<section id="faq" data-snap-section data-snap-title="Frequently Asked Questions" className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg scroll-mt-20 sm:scroll-mt-24">
  <div className="aovix-reveal-text aovix-delay-1 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-space-sm pb-space-xs">
    <div className="flex flex-col gap-1 sm:gap-space-xs">
      <span className="font-label-sm text-[10px] sm:text-label-sm text-primary font-mono uppercase tracking-widest">07 // FREQUENTLY ASKED QUESTIONS</span>
      <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface font-normal">
        <SplitText text="Direct answers to common inquiries" />
      </h2>
    </div>
    <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant font-mono">TECHNICAL &amp; PROFESSIONAL FAQ</span>
  </div>

  <div className="flex flex-col gap-3 sm:gap-3.5">
    {[
      {
        q: "What is your primary frontend technology stack and architecture focus?",
        a: "I specialize in React 18/19, Next.js (App Router), TypeScript Strict Mode, and modern CSS/Tailwind layouts. On the data layer, I pair frontends with headless CMS architectures like Strapi and Node.js REST services. My engineering focus centers on responsive, pixel-faithful UI execution, robust state management, and resilient performance across adverse network conditions."
      },
      {
        q: "How does your background in Android development (Kotlin & Java) benefit your web work?",
        a: "Starting as an Android Developer (2021–2022) with Kotlin, Java, and MVVM instilled foundational rigor regarding memory lifecycle limits, thread synchronization, hardware fragmentation, and offline persistence. That background directly elevates my web architecture—I treat the browser as a true runtime platform, using Web Workers, OffscreenCanvas, and normalized client caches to keep the main thread locked at 60 FPS."
      },
      {
        q: "What measurable performance and business impacts have you delivered?",
        a: "At Nextbrain Technologies, my work improved platform handling capacity by 30% and slashed client-side API response loading times by 20%. Across client architectures, I reduced corporate transit dispatch latency from 640ms to 420ms on Silicon Drive, collapsed video telemetry rendering from 450ms UI freezes down to 16.6ms at 60 FPS on Shell Oman, and accelerated SLA audit cycles by 92% on Machfox."
      },
      {
        q: "How do you collaborate across cross-functional teams (UI/UX designers & backend engineers)?",
        a: "I view frontend as the bridge between creative design and distributed systems. By translating Figma designs into atomic, tokenized design systems, I have helped cross-functional teams reduce project delivery times by 15%. With backend engineers, I establish typed TypeScript/Zod API contracts and mock endpoints early, eliminating serialization surprises and preventing integration regressions."
      },
      {
        q: "What types of frontend roles or opportunities are you currently open to?",
        a: "I am actively open to Front-End Developer, Senior Frontend Engineer, and Web Architect opportunities. I am based in Bengaluru, India, and open to full-time on-site, hybrid, or remote roles with forward-thinking engineering organizations and product studios worldwide."
      }
    ].map((faq, idx) => {
      const isOpen = openFaq === idx;
      return (
        <div 
          key={idx}
          className="aovix-reveal-image aovix-delay-1 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-xs"
        >
          <button
            onClick={() => setOpenFaq(isOpen ? null : idx)}
            className="w-full flex items-center justify-between gap-4 p-4 sm:p-space-md text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-primary shrink-0">0{idx + 1}.</span>
              <span className="font-headline-sm text-sm sm:text-base font-semibold text-on-surface group-hover:text-primary transition-colors">
                {faq.q}
              </span>
            </div>
            <div className={`w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary text-on-primary' : 'group-hover:bg-primary/10'}`}>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
          </button>
          {isOpen && (
            <div className="px-4 pb-4 sm:px-space-md sm:pb-space-md pt-0 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10 animate-fade-in">
              <p className="pt-3">{faq.a}</p>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>
{/* Warm Personal Invitation / Contact Station */}
<section id="letters-and-contact" data-snap-section data-snap-title="Contact & Opportunities" className="my-8 sm:my-space-xl p-4 sm:p-space-md lg:p-space-xl rounded-xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden shadow-lg scroll-mt-20 sm:scroll-mt-24">
  {/* Subtle architectural sketch accent behind text */}
  <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-primary/20 blur-2xl pointer-events-none"></div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-center relative z-10">
    <div className="lg:col-span-8 flex flex-col gap-2.5 sm:gap-space-sm aovix-reveal-text aovix-delay-1">
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs font-label-sm text-[10px] sm:text-label-sm text-primary-fixed font-mono uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
        <span>LET'S CONNECT // OPEN TO OPPORTUNITIES</span>
      </div>
      <h2 className="font-headline-lg text-xl sm:text-2xl lg:text-headline-lg font-normal tracking-tight leading-snug">
        <SplitText text="Have a project or frontend opportunity in mind?" />
      </h2>
      <p className="font-body-md text-xs sm:text-body-md text-inverse-on-surface/90 max-w-xl leading-relaxed">
        I'm a Front-End Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas and designs into functional digital experiences using modern frontend technologies.
      </p>
      <p className="font-body-md text-xs sm:text-body-md text-inverse-on-surface/80 max-w-xl leading-relaxed">
        I'm open to exciting frontend development opportunities, challenging projects, and collaborations. Let's connect and build something great.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-space-md pt-space-xs">
        {/* Primary Mail Action */}
        <a 
          href="mailto:praveenkumarselvan02@gmail.com" 
          onClick={onCopyEmail} 
          className="btn-tactile inline-flex items-center justify-center gap-space-xs px-4 sm:px-space-lg py-3 rounded-lg bg-primary-container text-on-primary-container font-label-md text-xs sm:text-label-md tracking-wider hover:bg-primary hover:text-on-primary transition-all shadow-md active:scale-95 text-center"
        >
          <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
          <span>SEND AN EMAIL</span>
          <span className="text-body-sm">→</span>
        </a>
        {/* Direct Phone Contact */}
        <a className="inline-flex items-center gap-1.5 sm:gap-space-xs font-label-md text-xs sm:text-label-md text-inverse-on-surface/90 hover:text-primary-fixed transition-colors font-mono py-1" href="tel:+917558169247">
          <span className="material-symbols-outlined text-[18px] text-primary-fixed shrink-0">call</span>
          <span>+91 75581 69247</span>
        </a>
        {/* Direct WhatsApp Contact */}
        <a 
          className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md text-emerald-400 hover:text-emerald-300 transition-colors font-mono py-1" 
          href="https://wa.me/917558169247" 
          target="_blank" 
          rel="noreferrer"
        >
          <svg className="w-4 h-4 fill-current text-[#25D366] shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
    <div className="lg:col-span-4 flex flex-col gap-space-sm bg-inverse-surface/40 p-3.5 sm:p-space-md rounded-lg backdrop-blur-sm border border-white/5 aovix-reveal-image aovix-delay-2">
      <span className="font-label-sm text-[10px] sm:text-label-sm font-mono uppercase tracking-wider text-inverse-on-surface/60 font-bold">CONTACT DETAILS</span>
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-[10px] sm:text-[11px] text-inverse-on-surface/60 font-mono tracking-wider">EMAIL</span>
        <a href="mailto:praveenkumarselvan02@gmail.com" className="font-body-sm text-xs sm:text-body-sm text-inverse-on-surface hover:text-primary-fixed font-mono select-all transition-colors break-all">
          praveenkumarselvan02@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-1 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-[11px] text-inverse-on-surface/60 font-mono tracking-wider">WHATSAPP / PHONE</span>
        <a href="https://wa.me/917558169247" target="_blank" rel="noreferrer" className="font-body-sm text-xs sm:text-body-sm text-emerald-400 hover:underline font-mono inline-flex items-center gap-1">
          <span>+91 75581 69247</span>
          <span className="text-xs">↗</span>
        </a>
      </div>
      <div className="flex flex-col gap-1 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-[11px] text-inverse-on-surface/60 font-mono tracking-wider">LOCATION</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-inverse-on-surface">Bengaluru, India</span>
      </div>
      <div className="flex flex-col gap-1 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-[11px] text-inverse-on-surface/60 font-mono tracking-wider">AVAILABILITY</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-emerald-400 font-medium">Open to Frontend Developer Opportunities</span>
      </div>
      <div className="flex flex-col gap-1 pt-space-xs">
        <span className="font-label-sm text-[10px] sm:text-[11px] text-inverse-on-surface/60 font-mono tracking-wider">TECHNOLOGIES</span>
        <span className="font-body-sm text-xs sm:text-body-sm text-inverse-on-surface font-mono">React.js • Next.js • JavaScript • HTML • CSS</span>
      </div>
      <div className="flex flex-col gap-1 pt-space-xs border-t border-inverse-surface/60 mt-1">
        <span className="font-label-sm text-[10px] sm:text-[11px] text-inverse-on-surface/60 font-mono tracking-wider">GITHUB</span>
        <a
          href="https://github.com/firepraveen123/praveen"
          target="_blank"
          rel="noreferrer"
          className="font-body-sm text-xs sm:text-body-sm text-primary-fixed hover:underline font-mono inline-flex items-center gap-1 break-all"
        >
          <span>github.com/firepraveen123/praveen</span>
          <span className="text-xs font-bold">↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
{/* Interactive Coffee Toast Script (Vanilla micro-interaction) */}

</div>
    </main>
  );
}
