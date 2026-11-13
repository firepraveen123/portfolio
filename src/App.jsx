import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChatBot from './components/WhatsAppChatBot';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

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
        <div className="fixed bottom-24 right-6 z-50 animate-fade-in-up bg-inverse-surface/95 text-inverse-on-surface px-4 py-3 rounded-xl shadow-2xl border border-white/10 flex items-center gap-3 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-medium tracking-wide">{toast}</span>
        </div>
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
