'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Mail, BadgeCheck, MapPin, Briefcase } from 'lucide-react';

const PHRASES = [
  'I craft high-fidelity interfaces',
  'I engineer resilient web architectures',
  'I tune every millisecond of the browser',
  'I turn data flows into fluid UI',
];

const MARQUEE_TECH = [
  'React', 'Next.js', 'TypeScript', 'Tailwind',
  'WebSockets', 'WebGL', 'TanStack Query', 'Kotlin', 'AWS',
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = PHRASES[phraseIdx];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIdx < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, charIdx + 1));
          setCharIdx((prev) => prev + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1600);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, charIdx - 1));
          setCharIdx((prev) => prev - 1);
        }, 28);
      } else {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
        timeout = setTimeout(() => {}, 350);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx]);

  // Watermark parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY * -0.25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pt-16">
      {/* Background typographic watermark */}
      <div
        id="wm"
        aria-hidden="true"
        className="absolute -top-6 -left-6 select-none pointer-events-none opacity-[0.03] fd font-bold text-[200px] md:text-[300px] leading-none tracking-tighter whitespace-nowrap will-change-transform z-0"
        style={{ transform: `translateX(${scrollOffset}px)` }}
      >
        PRAVEEN
      </div>

      <div className="wrap relative z-10 pt-10 pb-20">
        {/* Top Header Dispatch Line */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-10 border-b border-line rv in">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-verm animate-ping" />
            <span className="mono font-semibold text-xs sm:text-sm">
              Craft Dispatch — Handcrafted Web Software &amp; Interfaces
            </span>
          </div>
          <span className="mono text-xs sm:text-sm text-graphite">
            Bengaluru, IN · 12.9716° N, 77.5946° E
          </span>
        </div>

        {/* Main 2-Column Hero Grid: Left Content + Right Unobstructed Portrait */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Bio, Buttons, Telemetry */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="fd font-medium leading-[1.1] tracking-[-0.03em] text-[clamp(2.1rem,4.8vw,4rem)] rv in text-ink">
              <span className="block whitespace-nowrap">Hey, I’m Praveen Kumar S.</span>
              <span className="block min-h-[1.25em]">
                <em className="italic font-normal text-verm" id="type">
                  {typedText}
                </em>
                <span className="caret" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-graphite max-w-2xl leading-relaxed rv in">
              Senior Frontend Engineer with 4+ years of obsessive focus on browser
              performance, design engineering, and modern React/Next.js systems. Based in
              Bengaluru, turning complex distributed data flows into fluid,
              human-feeling web applications.
            </p>

            {/* Floating Tech Chips */}
            <div className="flex flex-wrap gap-2 rv in">
              <span className="pill floaty">React 19</span>
              <span className="pill floaty" style={{ animationDelay: '0.4s' }}>
                Next.js SSR
              </span>
              <span className="pill floaty" style={{ animationDelay: '0.8s' }}>
                TypeScript
              </span>
              <span className="pill floaty" style={{ animationDelay: '1.2s' }}>
                AWS Certified
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 rv in pt-1">
              <a href="#selected-works" className="btn btn-solid">
                Explore Projects <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Say Hello <Mail className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Editorial Quote */}
            <blockquote className="fd italic text-sm sm:text-base leading-snug text-graphite border-l-2 border-verm/70 pl-4 max-w-xl mt-2 rv in">
              “Great interfaces aren’t just designed; they’re engineered to make
              every interaction feel effortless, predictable, and physically
              instantaneous.”
            </blockquote>

            {/* Compact Career Telemetry Bar (No Cards Blocking the Photo) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-line/70 rv in">
              <div className="p-3 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                <span className="mono text-[10px] uppercase text-graphite block">Location</span>
                <b className="text-xs sm:text-sm text-ink block mt-0.5">Bengaluru, KA</b>
                <span className="mono text-[10px] text-teal">UTC+5:30</span>
              </div>
              <div className="p-3 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                <span className="mono text-[10px] uppercase text-graphite block">Current Post</span>
                <b className="text-xs sm:text-sm text-ink block mt-0.5 truncate">Nextbrain Tech</b>
                <span className="mono text-[10px] text-ok font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                <span className="mono text-[10px] uppercase text-graphite block">Credential</span>
                <b className="text-xs sm:text-sm text-ink flex items-center gap-1 mt-0.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-verm shrink-0" /> AWS Certified
                </b>
                <span className="mono text-[10px] text-graphite">Cloud Practitioner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Unobstructed Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end rv in">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] group">
              {/* Subtle ambient halo glow */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-verm/25 via-emerald-500/15 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              {/* The Clean Portrait Card Frame */}
              <div className="relative rounded-3xl sm:rounded-[2.5rem] border border-line/80 dark:border-paper/15 overflow-hidden shadow-2xl bg-ink aspect-[4/5] w-full">
                {/* Praveen's Photo — Clear, Sharp, 100% Unobstructed Face */}
                <img
                  src="/images/praveen-hero.jpg"
                  alt="Praveen Kumar S. — Senior Frontend Engineer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Gentle bottom-to-top shadow vignette inside frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] mono font-semibold bg-black/60 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Bengaluru, India · Open to Work
                  </span>
                </div>

                {/* Floating Bottom Info Pill (Positioned at bottom edge, face is completely free) */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3 sm:p-3.5 rounded-2xl bg-paper/95 dark:bg-ink/90 backdrop-blur-md border border-line/80 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="mono text-[10px] uppercase text-graphite block">
                      Senior Frontend Engineer
                    </span>
                    <b className="fd text-sm text-ink block tracking-tight">
                      Praveen Kumar S.
                    </b>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] mono font-bold bg-verm/10 text-verm border border-verm/20">
                      <BadgeCheck className="w-3.5 h-3.5 text-verm" /> AWS CERTIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="border-y border-line py-4 bg-sand/60 marq-wrap overflow-hidden">
        <div className="marq mono text-graphite" style={{ '--t': '40s' } as React.CSSProperties}>
          <div className="flex gap-10 pr-10 shrink-0">
            {MARQUEE_TECH.map((item, i) => (
              <span key={`m1-${i}`} className="inline-flex items-center gap-10">
                <span>{item}</span>
                <span>●</span>
              </span>
            ))}
          </div>
          <div className="flex gap-10 pr-10 shrink-0">
            {MARQUEE_TECH.map((item, i) => (
              <span key={`m2-${i}`} className="inline-flex items-center gap-10">
                <span>{item}</span>
                <span>●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
