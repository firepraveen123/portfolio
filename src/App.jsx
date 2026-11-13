import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChatBot from './components/WhatsAppChatBot';
import AwwwardsCursor from './components/AwwwardsCursor';
import FilmGrain from './components/FilmGrain';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';

const SNAP_SECTIONS = [
  { id: 'hero', title: '00 // Overview' },
  { id: 'impact', title: '01 // Production Ledger' },
  { id: 'selected-works', title: '02 // Silicon Drive' },
  { id: 'project-digipod', title: '03 // DigiPod' },
  { id: 'project-machfox', title: '04 // Machfox' },
  { id: 'project-intra', title: '05 // Intra 3.0' },
  { id: 'project-shell', title: '06 // Shell Oman' },
  { id: 'project-edubotix', title: '07 // Edubotix' },
  { id: 'craft-and-philosophy', title: '08 // How I Work' },
  { id: 'tech-and-stack', title: '09 // Toolkit & Stack' },
  { id: 'engineering-journey', title: '10 // Work Experience' },
  { id: 'skills-matrix', title: '11 // Skills Matrix' },
  { id: 'faq', title: '12 // FAQ' },
  { id: 'letters-and-contact', title: '13 // Contact Station' },
  { id: 'site-footer', title: '14 // Colophon & Footer' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const lenisRef = useRef(null);
  const isSnappingRef = useRef(false);

  useEffect(() => {
    // Initialize Lenis smooth inertia scrolling
    const isMobileDevice = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
    const lenis = new Lenis({
      duration: isMobileDevice ? 0.9 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Track active section for side indicator
      const currentY = window.scrollY;
      const offset = 140;
      for (let i = 0; i < SNAP_SECTIONS.length; i++) {
        const el = document.getElementById(SNAP_SECTIONS[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          if (currentY >= top) {
            setActiveSectionIndex(i);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  // Framer Aovix signature scroll appear animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.aovix-reveal-text:not(.is-visible), .aovix-reveal-image:not(.is-visible)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Run on initial mount and whenever page switches
    observeElements();
    const timer = setTimeout(observeElements, 120);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPage]);

  // One-scroll = One section glide navigation
  useEffect(() => {
    if (currentPage !== 'home') return;

    let unlockTimer = null;

    const snapToTarget = (direction) => {
      const currentScroll = window.scrollY;
      const offset = 95;

      const positions = SNAP_SECTIONS
        .map((sec, i) => {
          const el = document.getElementById(sec.id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { el, top: top - offset, i };
        })
        .filter(Boolean);

      if (!positions.length) return;

      let targetEl = null;

      if (direction > 0) {
        // Scroll DOWN: move to next section
        const next = positions.find((p) => p.top > currentScroll + 40);
        if (next) {
          targetEl = next.el;
        }
      } else {
        // Scroll UP: move to previous section
        const prevs = positions.filter((p) => p.top < currentScroll - 40);
        if (prevs.length > 0) {
          targetEl = prevs[prevs.length - 1].el;
        } else if (currentScroll > 40) {
          targetEl = 0;
        }
      }

      if (targetEl !== null) {
        isSnappingRef.current = true;
        clearTimeout(unlockTimer);

        if (lenisRef.current) {
          lenisRef.current.scrollTo(targetEl, {
            offset: targetEl === 0 ? 0 : -offset,
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            onComplete: () => {
              clearTimeout(unlockTimer);
              unlockTimer = setTimeout(() => {
                isSnappingRef.current = false;
              }, 120);
            },
          });
        } else {
          if (targetEl === 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
          unlockTimer = setTimeout(() => {
            isSnappingRef.current = false;
          }, 800);
        }

        // Failsafe auto-unlock
        unlockTimer = setTimeout(() => {
          isSnappingRef.current = false;
        }, 1100);
      }
    };

    const handleWheel = (e) => {
      // Don't intercept zoom or mobile/small tablet screens to allow fluid natural reading
      if (e.ctrlKey || window.innerWidth < 768) return;

      // Don't intercept inside interactive scrollable elements (e.g. WhatsApp chat bot, modal dropdowns)
      if (e.target.closest('#whatsapp-chat-container') || e.target.closest('.overflow-y-auto') || e.target.closest('textarea')) {
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 22) return;

      // Prevent native jump to achieve silky one-scroll one-section glide
      e.preventDefault();

      if (isSnappingRef.current) return;

      snapToTarget(delta > 0 ? 1 : -1);
    };

    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) return;

      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        if (!isSnappingRef.current) snapToTarget(1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        if (!isSnappingRef.current) snapToTarget(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(unlockTimer);
    };
  }, [currentPage]);

  const showToastNotification = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const handleCopyEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const email = 'praveenkumarselvan02@gmail.com';
    navigator.clipboard?.writeText(email);
    showToastNotification(`✓ ${email} copied to clipboard!`);
  };

  const handleNavigate = (page, sectionId) => {
    setCurrentPage(page);
    if (sectionId) {
      let attempts = 0;
      const checkAndScroll = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -95, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (attempts < 15) {
          attempts++;
          setTimeout(checkAndScroll, 50);
        }
      };
      // Initiate scroll check after state update render tick
      setTimeout(checkAndScroll, 60);
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed antialiased relative">
      {/* Awwwards Motion & Texture Suite */}
      <FilmGrain />
      <AwwwardsCursor />

      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
      />

      <div className="animate-fade-in flex-1">
        {currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} onCopyEmail={handleCopyEmail} />
        ) : (
          <CaseStudiesPage onNavigate={handleNavigate} onCopyEmail={handleCopyEmail} />
        )}
      </div>

      <Footer onNavigate={handleNavigate} onCopyEmail={handleCopyEmail} />

      {/* Floating Interactive Toast for HR / Recruiters */}
      {toast && (
        <div className="fixed bottom-20 sm:bottom-24 inset-x-4 sm:inset-x-auto sm:right-6 z-50 animate-fade-in-up bg-inverse-surface/95 text-inverse-on-surface px-4 py-3 rounded-xl shadow-2xl border border-white/10 flex items-center justify-between sm:justify-start gap-3 backdrop-blur-md max-w-md mx-auto sm:mx-0">
          <div className="flex items-center gap-2.5 truncate">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-medium tracking-wide truncate">{toast}</span>
          </div>
        </div>
      )}

      {/* Floating Vertical Section Navigator Dots (Large Desktop) */}
      {currentPage === 'home' && (
        <aside
          className="fixed right-3.5 top-1/2 -translate-y-1/2 z-30 hidden 2xl:flex flex-col items-center gap-2 p-2 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant/30 shadow-md transition-all duration-300"
          aria-label="Section Navigation"
        >
          {SNAP_SECTIONS.map((sec, idx) => {
            const isActive = idx === activeSectionIndex;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  const el = document.getElementById(sec.id);
                  if (el) {
                    if (lenisRef.current) {
                      lenisRef.current.scrollTo(el, { offset: -95, duration: 1.15 });
                    } else {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="group relative flex items-center justify-center p-1 rounded-full transition-all focus:outline-none"
                title={sec.title}
                aria-label={`Jump to ${sec.title}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-5 bg-primary shadow-xs'
                      : 'w-1.5 h-1.5 bg-outline-variant/70 hover:bg-primary group-hover:scale-150'
                  }`}
                />
                {/* Tooltip on hover */}
                <span className="absolute right-7 px-2.5 py-1 rounded-md bg-inverse-surface text-inverse-on-surface text-[10px] font-mono tracking-wide uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-md">
                  {sec.title}
                </span>
              </button>
            );
          })}
        </aside>
      )}

      {/* Interactive WhatsApp Chat Bot */}
      <WhatsAppChatBot />

      {/* Back to Top Spring Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-surface-container-high/90 hover:bg-primary hover:text-on-primary text-on-surface shadow-md border border-surface-container-highest transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
        </button>
      )}
    </div>
  );
}
