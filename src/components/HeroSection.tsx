'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Mail, BadgeCheck } from 'lucide-react';

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
      {/* Background Portrait of Praveen */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[58%] select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Portrait Image Layer */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom md:bg-right bg-cover md:bg-contain transition-opacity duration-700 opacity-20 sm:opacity-25 lg:opacity-35 dark:opacity-40 filter contrast-105 saturate-[0.85] dark:saturate-100"
          style={{
            backgroundImage: "url('/praveen.jpg')",
          }}
        />

        {/* Multi-Directional Feathering Gradients to seamlessly blend with theme */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-[rgb(var(--paper))] via-[rgb(var(--paper))]/90 to-transparent z-[1]" />
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-t from-[rgb(var(--paper))] via-[rgb(var(--paper))]/80 to-transparent z-[1]" />
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[rgb(var(--paper))] to-transparent z-[1]" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[rgb(var(--paper))] to-transparent z-[1]" />
      </div>

      <div
        id="wm"
        aria-hidden="true"
        className="absolute -top-6 -left-6 select-none pointer-events-none opacity-[0.03] fd font-bold text-[200px] md:text-[300px] leading-none tracking-tighter whitespace-nowrap will-change-transform z-0"
        style={{ transform: `translateX(${scrollOffset}px)` }}
      >
        PRAVEEN
      </div>

      <div className="wrap relative z-10 pt-12 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-12 border-b border-line rv in">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-verm animate-ping" />
            <span className="mono font-semibold">
              Craft Dispatch — Handcrafted Web Software &amp; Interfaces
            </span>
          </div>
          <span className="mono text-graphite">
            Bengaluru, IN
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col gap-7">
            <h1 className="fd font-medium leading-[1.1] tracking-[-0.03em] text-[clamp(1.15rem,4.5vw,3.8rem)] rv in">
              <span className="block whitespace-nowrap">Hey, I’m Praveen Kumar S.</span>
              <span className="block min-h-[1.2em]">
                <em className="italic font-normal text-verm" id="type">
                  {typedText}
                </em>
                <span className="caret" />
              </span>
            </h1>

            <p className="text-lg text-graphite max-w-2xl leading-relaxed rv in">
              Senior Frontend Engineer with 4+ years of obsessive focus on browser
              performance, design engineering, and modern React/Next.js systems. Based in
              Bengaluru, turning complex distributed data flows into fluid,
              human-feeling web applications.
            </p>

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

            <div className="flex flex-wrap items-center gap-4 rv in">
              <a href="#selected-works" className="btn btn-solid">
                Explore Projects <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Say Hello <Mail className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l border-line lg:pl-10 flex flex-col bg-paper/60 dark:bg-ink/60 lg:bg-paper/30 lg:dark:bg-ink/30 backdrop-blur-md rounded-3xl p-6 lg:p-0 lg:rounded-none lg:border-y-0 lg:border-r-0 border border-line lg:border-l rv in">
            <div className="py-4 border-b border-line">
              <span className="mono text-graphite block mb-1">Location</span>
              <div className="flex justify-between">
                <b className="font-medium">Bengaluru, Karnataka</b>
                <span className="mono text-teal">UTC+5:30</span>
              </div>
            </div>

            <div className="py-4 border-b border-line">
              <span className="mono text-graphite block mb-1">Current post</span>
              <div className="flex justify-between">
                <b className="font-medium">Nextbrain Technologies</b>
                <span className="mono text-ok font-semibold">Active</span>
              </div>
            </div>

            <div className="py-4 border-b border-line">
              <span className="mono text-graphite block mb-1">Credential</span>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-verm" />
                <b className="font-medium">AWS Certified Cloud Practitioner</b>
              </div>
              <span className="mono text-graphite">Validated Sep 2024</span>
            </div>

            <blockquote className="fd italic text-lg leading-snug pt-6 text-ink">
              “Great interfaces aren’t just designed; they’re engineered to make
              every interaction feel effortless, predictable, and physically
              instantaneous.”
            </blockquote>
          </aside>
        </div>
      </div>

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

