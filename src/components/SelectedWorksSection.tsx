'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Video, ExternalLink } from 'lucide-react';

const SLIDES = [
  {
    num: '01',
    slug: 'silicon-drive',
    themeClass: 's1 band-dark',
    kicker: 'Case 01 · Enterprise Fleet Operations',
    title: 'Silicon Drive — Corporate Fleet Orchestration Platform',
    desc: 'Architected the mission-control dispatch interface servicing thousands of daily B2B corporate rides across metro hubs. Optimized rendering for simultaneous multi-point GIS streams and rapid driver allocation.',
    features: [
      { bold: 'Real-time telemetry:', text: 'Dual WebSocket pipelines with zero UI jitter.' },
      { bold: 'Dispatch optimization:', text: 'Spatial quadrant indexing cut wait time by 34%.' },
      { bold: 'Strict validation:', text: 'State machine preventing dual driver assignments.' },
    ],
    tags: ['React 18', 'Next.js', 'WebSockets', 'Tailwind', 'Mapbox GL'],
    mockup: (
      <div className="mock w-full">
        <div className="px-4 py-3 border-b border-line flex justify-between mono text-graphite text-xs">
          <span>fleet.silicondrive.io</span>
          <span className="text-ok font-semibold">● stream live</span>
        </div>
        <div className="p-5 space-y-4 bg-paper">
          <div className="h-44 md:h-52 rounded-lg border border-line bg-sand/50 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
              <path
                d="M10,70 Q90,5 190,40"
                stroke="rgb(228,71,43)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                fill="none"
              >
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
              </path>
            </svg>
            <span className="absolute top-4 left-5 mono bg-cream border border-line px-2.5 py-1 rounded text-xs shadow-sm">
              CAB-409 en-route
            </span>
            <span className="absolute bottom-4 right-5 mono bg-cream border border-line px-2.5 py-1 rounded text-xs shadow-sm">
              CAB-112 standby
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="border border-line rounded-lg p-2.5 bg-cream/50">
              <div className="mono text-graphite text-[10px] mb-0.5">Dispatches</div>
              <b className="fd text-lg md:text-xl">1,492</b>
            </div>
            <div className="border border-line rounded-lg p-2.5 bg-cream/50">
              <div className="mono text-graphite text-[10px] mb-0.5">SLA met</div>
              <b className="fd text-ok text-lg md:text-xl">99.4%</b>
            </div>
            <div className="border border-line rounded-lg p-2.5 bg-cream/50">
              <div className="mono text-graphite text-[10px] mb-0.5">Allocation</div>
              <b className="fd text-verm text-lg md:text-xl">1.8s</b>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '02',
    slug: 'digipod',
    themeClass: 's2',
    kicker: 'Case 02 · Hyperlocal Discovery · Mysuru',
    title: 'DigiPod — Community Directory & Educational Knowledge Engine',
    desc: 'A community marketplace indexing 480+ local vendors and academies across Mysuru, with instant sub-second search, proximity weighting, geo-fenced filters and dynamic SSR previews.',
    features: [
      { bold: '18ms search pipeline:', text: 'Algolia client caching with debounced normalization.' },
      { bold: 'Instant filters:', text: 'Zero server round-trips for faceted breakdowns.' },
      { bold: 'Lightweight GIS:', text: 'Leaflet tiles lazy-loaded without blocking FCP.' },
    ],
    tags: ['TypeScript', 'Next.js SSR', 'Algolia', 'Leaflet'],
    mockup: (
      <div className="mock w-full">
        <div className="px-4 py-3 border-b border-line mono text-graphite text-xs">
          digipod.mysuru.hub/catalogue
        </div>
        <div className="p-5 bg-paper space-y-3">
          <div className="border border-line rounded-lg px-4 py-3 text-sm bg-cream flex justify-between items-center shadow-sm">
            <span className="font-medium">Micro-roasteries, Gokulam</span>
            <span className="mono text-xs text-teal font-semibold">0.4 km</span>
          </div>
          <div className="border border-line rounded-lg px-4 py-3 text-sm bg-cream flex justify-between items-center shadow-sm">
            <span className="font-medium">Robotics for Teens Academy</span>
            <span className="mono text-xs text-teal font-semibold">1.2 km</span>
          </div>
          <div className="border border-line rounded-lg px-4 py-3 text-sm bg-cream flex justify-between items-center shadow-sm">
            <span className="font-medium">Artisan Bookbinders &amp; Press</span>
            <span className="mono text-xs text-teal font-semibold">2.0 km</span>
          </div>
          <div className="border border-line rounded-lg px-4 py-3 text-sm bg-cream flex justify-between items-center shadow-sm">
            <span className="font-medium">Heritage Silk Weavers Collective</span>
            <span className="mono text-xs text-teal font-semibold">2.8 km</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    slug: 'machfox',
    themeClass: 's3',
    kicker: 'Case 03 · Mission Critical Ops · Infrastructure',
    title: 'Machfox — Indian Railway Contractor Ops & Compliance Hub',
    desc: 'Web execution suite for railway contractors handling track rehabilitation, tender SLA verification and hardware auditing — built for low-bandwidth rail yards and high tabular density.',
    features: [
      { bold: '92% faster SLA audits:', text: 'Automated verification matrices in real time.' },
      { bold: 'Offline logging:', text: 'Local indexed transactions sync when 4G resumes.' },
      { bold: 'Grid virtualization:', text: '10,000+ muster roll entries at 60 FPS.' },
    ],
    tags: ['React 18', 'TanStack Table', 'Zustand', 'Vite'],
    mockup: (
      <div className="mock mono w-full">
        <div className="px-4 py-3 border-b border-line flex justify-between text-graphite text-xs">
          <span>Machfox // Rail-zone-SW-4</span>
          <span className="text-ok font-semibold">Grid OK · 60fps</span>
        </div>
        <div className="p-4 bg-paper text-xs">
          <div className="grid grid-cols-4 gap-2 text-graphite border-b border-line pb-2 font-semibold">
            <span>Section</span><span>Status</span><span>Ballast</span><span>Audit</span>
          </div>
          <div className="grid grid-cols-4 gap-2 py-2.5 border-b border-line items-center">
            <span className="font-mono">KM 142/8</span><span className="text-ok font-semibold">Passed</span><span>98.2%</span><span className="text-teal font-semibold">Verified</span>
          </div>
          <div className="grid grid-cols-4 gap-2 py-2.5 border-b border-line items-center">
            <span className="font-mono">KM 143/2</span><span className="text-verm font-semibold">Flagged</span><span>84.0%</span><span className="text-verm font-semibold">Re-check</span>
          </div>
          <div className="grid grid-cols-4 gap-2 py-2.5 border-b border-line items-center">
            <span className="font-mono">KM 144/9</span><span className="text-ok font-semibold">Passed</span><span>99.1%</span><span className="text-teal font-semibold">Verified</span>
          </div>
          <div className="grid grid-cols-4 gap-2 py-2.5 items-center">
            <span className="font-mono">KM 145/4</span><span className="text-ok font-semibold">Passed</span><span>97.8%</span><span className="text-teal font-semibold">Verified</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '04',
    slug: 'intra',
    themeClass: 's4 band-dark',
    kicker: 'Case 04 · Enterprise Internal Platform',
    title: 'Intra 3.0 — Internal Workflow & Organization Scorecard',
    desc: 'Replaced fragmented legacy spreadsheets with a unified operational system: multi-department milestones, real-time KPI tracking and engineering resource allocation.',
    features: [
      { bold: '−82% scorecard delay:', text: 'Continuous computation replaced manual Friday reviews.' },
      { bold: 'Automated rollups:', text: 'Server Actions generating burndowns with near-zero overhead.' },
      { bold: 'Executive stream:', text: 'Dense dashboard with role-based views.' },
    ],
    tags: ['Next.js 14', 'Server Actions', 'PostgreSQL', 'TanStack Table'],
    mockup: (
      <div className="mock p-5 space-y-4 bg-paper w-full">
        <div className="mono flex justify-between text-xs">
          <span className="font-semibold">Intra 3.0 // Sprint orchestration</span>
          <span className="text-teal font-semibold">Q1 Review</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs mb-1">
            <span>Sprint velocity</span><b className="text-teal">94% target</b>
          </div>
          <div className="bar !h-2.5">
            <i style={{ '--w': '94%', background: 'rgb(var(--teal))' } as React.CSSProperties} />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs mb-1">
            <span>Scorecard compilation delay</span><b className="text-verm">−82% delay</b>
          </div>
          <div className="bar !h-2.5">
            <i style={{ '--w': '18%' } as React.CSSProperties} />
          </div>
        </div>
        <p className="text-xs text-graphite border border-line rounded-lg p-3 bg-cream/40 leading-relaxed">
          Automated rollups compile 14 team feeds into an executive digest in under 1.2 seconds, replacing fragmented Excel files.
        </p>
      </div>
    ),
  },
  {
    num: '05',
    slug: 'shell-oman',
    themeClass: 's5',
    kicker: 'Case 05 · Edge Computer Vision · Safety',
    title: 'Shell Oman — Real-Time AI CCTV Hazard Telemetry Dashboard',
    desc: 'Interactive safety observation console for high-hazard fuel terminals. Sub-second streaming overlay identifying PPE violations, unauthorized perimeter incursions and fuel spills.',
    features: [
      { bold: 'Sub-50ms latency:', text: 'WebSocket canvas rendering directly off edge AI models.' },
      { bold: '60 FPS streaming:', text: 'Multi-camera bounding boxes with zero DOM leakage.' },
      { bold: 'Instant alerts:', text: 'Sub-100ms audible and visual breach triggers.' },
    ],
    tags: ['WebGL', 'Canvas API', 'WebSockets', 'React'],
    mockup: (
      <div className="mock mono text-xs w-full">
        <div className="px-4 py-3 border-b border-line flex justify-between">
          <span>Shell CCTV HUD // CAM_04</span>
          <span className="text-verm font-semibold">● AI detection live</span>
        </div>
        <div className="relative h-48 md:h-56 bg-sand overflow-hidden">
          <div className="absolute top-5 left-6 border-2 border-ok bg-ok/10 text-ok px-2 py-0.5 text-[10px] font-bold rounded">
            [PERSON_01] PPE: verified
          </div>
          <div className="absolute bottom-8 right-6 border-2 border-verm bg-verm/10 text-verm px-2 py-0.5 text-[10px] font-bold rounded animate-pulse">
            [ALERT] No helmet detected
          </div>
          <div
            className="absolute left-0 right-0 h-0.5 bg-verm/70 animate-pulse"
            style={{ top: '48%' }}
          />
          <div className="absolute bottom-3 left-3 bg-ink text-paper text-[10px] px-2 py-1 rounded">
            Frame 16.2ms // 60 FPS // Edge AI
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '06',
    slug: 'edubotix',
    themeClass: 's6',
    kicker: 'Case 06 · Distributed EdTech Platform',
    title: 'Edubotix — Digital Campus & High-Stakes Examination Engine',
    desc: 'Secure browser test-taking interface handling university exams for 40,000 simultaneous candidates — with zero data loss even during complete network cutoffs.',
    features: [
      { bold: 'Offline autosave:', text: 'Service Worker storage with IndexedDB writes.' },
      { bold: '40,000 concurrent sessions:', text: 'Edge delivery with deterministic state sync.' },
      { bold: 'Checkpointing:', text: 'Tamper-resistant response signatures submitted asynchronously.' },
    ],
    tags: ['Service Workers', 'IndexedDB', 'Next.js', 'TypeScript'],
    mockup: (
      <div className="mock p-5 bg-paper space-y-3 mono w-full">
        <div className="flex justify-between text-xs">
          <span className="font-semibold">Edubotix // secure session</span>
          <span className="text-ok font-semibold">● Sync armed</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between py-1 border-b border-line">
            <span>Concurrent candidates</span><b className="text-ink">40,000</b>
          </div>
          <div className="flex justify-between py-1 border-b border-line">
            <span>IndexedDB buffer integrity</span><b className="text-ok">0 packets dropped</b>
          </div>
          <div className="flex justify-between py-1">
            <span>Cryptographic Digest</span><span className="text-graphite">SHA-256</span>
          </div>
        </div>
        <p className="normal-case tracking-normal text-xs text-graphite border border-line rounded-lg p-3 bg-cream/40 leading-relaxed">
          When the internet disconnects mid-exam, answers are stored securely in local IndexedDB and automatically submitted once reconnect occurs.
        </p>
      </div>
    ),
  },
  {
    num: '07',
    slug: 'atmed',
    themeClass: 's7',
    kicker: 'Mobile bonus · Native Telehealth App',
    title: 'AtMed Healthcare — Native Patient-Clinician Consultation App',
    desc: 'Native Android engineering using Jetpack Compose, WebRTC video synchronization and end-to-end encrypted medical record caching with SQLite.',
    features: [
      { bold: 'Native Kotlin:', text: 'Built with Jetpack Compose, Coroutines & Flow.' },
      { bold: 'Encrypted offline sync:', text: 'Full SQLite durability for critical patient data.' },
      { bold: 'Real-time WebRTC:', text: 'Low-latency multi-peer audio/video streaming.' },
    ],
    tags: ['Kotlin', 'Compose', 'WebRTC', 'SQLite'],
    mockup: (
      <div className="flex justify-center w-full">
        <div className="mock w-60 md:w-64 !rounded-[2.5rem] p-3.5 bg-paper shadow-2xl">
          <div className="rounded-[2rem] bg-sand h-64 md:h-72 flex flex-col items-center justify-center gap-3">
            <Video className="w-12 h-12 text-teal floaty stroke-[1.5]" />
            <span className="mono text-graphite text-xs font-semibold">Consultation live</span>
            <span className="pill text-[10px]">WebRTC · 1080p · E2E</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SelectedWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCoolingDown = useRef(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  // Jump to specific slide
  const goToSlide = useCallback((index: number) => {
    const bounded = Math.max(0, Math.min(SLIDES.length - 1, index));
    setCurrentIndex(bounded);
  }, []);

  // Discrete 1-scroll = 1-slide controller
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      // Only capture when this section is dominant in the viewport
      const isInViewport = rect.top <= 120 && rect.bottom >= window.innerHeight * 0.65;
      if (!isInViewport) return;

      // Scroll Down (wheel down)
      if (e.deltaY > 20) {
        if (currentIndex < SLIDES.length - 1) {
          e.preventDefault();
          // Ensure section is nicely centered
          if (Math.abs(rect.top) > 10) {
            window.scrollTo({ top: window.scrollY + rect.top - 20, behavior: 'smooth' });
          }
          if (!isCoolingDown.current) {
            isCoolingDown.current = true;
            setCurrentIndex((prev) => Math.min(SLIDES.length - 1, prev + 1));
            setTimeout(() => {
              isCoolingDown.current = false;
            }, 550);
          }
        }
        // When on slide 7 (index === 6), allow normal vertical scroll down to the next section!
      }
      // Scroll Up (wheel up)
      else if (e.deltaY < -20) {
        if (currentIndex > 0) {
          e.preventDefault();
          if (Math.abs(rect.top) > 10) {
            window.scrollTo({ top: window.scrollY + rect.top - 20, behavior: 'smooth' });
          }
          if (!isCoolingDown.current) {
            isCoolingDown.current = true;
            setCurrentIndex((prev) => Math.max(0, prev - 1));
            setTimeout(() => {
              isCoolingDown.current = false;
            }, 550);
          }
        }
        // When on slide 1 (index === 0), allow normal vertical scroll up to previous section!
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  // Touch Swipe for mobile/tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0 && currentIndex < SLIDES.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (deltaX < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  // Keyboard navigation when in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= window.innerHeight * 0.4) {
        if (e.key === 'ArrowRight') {
          goToSlide(currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
          goToSlide(currentIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, goToSlide]);

  const progressPct = ((currentIndex + 1) / SLIDES.length) * 100;

  return (
    <section
      id="selected-works"
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen py-10 md:py-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="w-full flex flex-col justify-between h-full px-4 md:px-8 lg:px-12">
        {/* Top Header Row */}
        <div className="w-full max-w-[1600px] mx-auto shrink-0 mb-3">
          <div className="kicker !mb-3">
            <span className="mono text-verm font-semibold">02 // Selected Cases</span>
            <span className="mono text-graphite">1 scroll = 1 project dispatch</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="fd font-medium tracking-tight text-3xl md:text-5xl lg:text-6xl max-w-3xl leading-tight">
              Systems engineered for precision, speed &amp; human scale.
            </h2>
            <div className="flex items-center gap-4">
              <span className="mono text-graphite text-sm">
                <b id="cnt" className="text-ink text-lg font-semibold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </b>{' '}
                / 07
              </span>
              <button
                id="prev"
                onClick={() => goToSlide(currentIndex - 1)}
                className="w-12 h-12 rounded-full border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition cursor-pointer"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                id="next"
                onClick={() => goToSlide(currentIndex + 1)}
                className="w-12 h-12 rounded-full border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition cursor-pointer"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport: 1 step per project with smooth CSS transform */}
        <div className="w-full max-w-[1600px] mx-auto overflow-hidden my-auto py-3">
          <div
            className="flex gap-8 select-none items-stretch will-change-transform"
            style={{
              transform: `translateX(calc(-${currentIndex} * (min(1480px, 92vw) + 2rem)))`,
              transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {SLIDES.map((slide, index) => {
              const isAct = index === currentIndex;
              return (
                <article
                  key={slide.num}
                  className={`slide shrink-0 !p-8 md:!p-12 lg:!p-14 ${slide.themeClass} ${
                    isAct ? 'act' : ''
                  }`}
                  style={{
                    width: 'min(1480px, 92vw)',
                    minHeight: '520px',
                  }}
                >
                  <span className="bignum !text-[14rem] md:!text-[18rem] -top-8 right-6">
                    {slide.num}
                  </span>

                  <div className="flex flex-col justify-between gap-4 relative z-10 h-full">
                    <div>
                      <div className="mono text-xs md:text-sm mb-2">
                        <span className="text-verm font-semibold">
                          {slide.kicker.split(' · ')[0]}
                        </span>{' '}
                        ·{' '}
                        <span className="text-graphite">
                          {slide.kicker.split(' · ')[1]}
                        </span>
                      </div>

                      <Link
                        href={`/projects/${slide.slug}`}
                        className="group inline-block"
                      >
                        <h3 className="fd text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-3 group-hover:text-verm transition-colors">
                          {slide.title}
                        </h3>
                      </Link>

                      <p className="text-graphite text-base md:text-lg leading-relaxed max-w-2xl mb-4">
                        {slide.desc}
                      </p>
                    </div>

                    <ul className="text-sm md:text-base space-y-2 max-w-2xl">
                      {slide.features.map((f, fi) => (
                        <li key={fi} className="flex gap-3 items-start">
                          <Check className="w-5 h-5 text-teal shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>
                            <b>{f.bold} </b>
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        href={`/projects/${slide.slug}`}
                        className="btn btn-solid !py-2.5 !px-5 text-xs inline-flex items-center gap-2 group shadow-md"
                      >
                        View Project Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex flex-wrap gap-1.5">
                        {slide.tags.map((tag) => (
                          <span key={tag} className="pill pill-t !text-xs !py-1.5 !px-3">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${slide.slug}`}
                    className="relative z-10 flex items-center justify-center w-full cursor-pointer group"
                    title={`View ${slide.title} Architecture Details`}
                  >
                    <div className="w-full transition-transform duration-300 group-hover:scale-[1.02]">
                      {slide.mockup}
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Progress line and dot indicators */}
        <div className="w-full max-w-[1600px] mx-auto shrink-0 mt-3 flex items-center gap-4">
          <div className="flex-1 h-1.5 bg-line relative overflow-hidden rounded-full">
            <div
              id="sp"
              className="absolute inset-y-0 left-0 bg-verm transition-all duration-300 rounded-full"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div id="dots" className="flex gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="w-3 h-3 rounded-full bg-line transition-all cursor-pointer"
                style={{
                  background: i === currentIndex ? 'rgb(var(--verm))' : undefined,
                  transform: i === currentIndex ? 'scale(1.4)' : undefined,
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
