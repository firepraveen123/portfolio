import React, { useState, useEffect } from 'react';

export default function Header({ currentPage, onNavigate, onCopyEmail }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page, sectionId) => {
    onNavigate(page, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all">
      <div className="w-full px-3.5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 relative">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6 flex-shrink min-w-0">
          <button
            onClick={() => handleLinkClick('home', 'hero')}
            className="group flex items-center gap-2 sm:gap-3 text-left focus:outline-none transition-transform hover:scale-[1.02] active:scale-95 min-w-0"
            aria-label="Praveen Kumar S Home"
          >
            <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-surface-container-high text-primary font-headline-md font-bold text-xs sm:text-sm tracking-tight border border-outline-variant/30 shadow-xs transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-md shrink-0">
              PK.
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface leading-tight tracking-tight group-hover:text-primary transition-colors truncate">
                Praveen Kumar S
              </span>
              <span className="hidden xs:inline-block font-label-sm text-[10px] sm:text-[11px] font-mono text-on-surface-variant uppercase tracking-wider truncate">
                Staff Frontend Architect
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-surface-container/70 border border-surface-container-high/80 backdrop-blur-md shadow-xs flex-shrink-0">
          <button
            onClick={() => handleLinkClick('case-studies')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide transition-all duration-200 active:scale-95 ${
              currentPage === 'case-studies'
                ? 'bg-surface text-primary shadow-xs font-semibold scale-[1.02]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
            }`}
          >
            Selected Work
          </button>
          <button
            onClick={() => handleLinkClick('home', 'craft-and-philosophy')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-all duration-200 active:scale-95"
          >
            How I Work
          </button>
          <button
            onClick={() => handleLinkClick('home', 'engineering-journey')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-all duration-200 active:scale-95"
          >
            Experience
          </button>
          <button
            onClick={() => handleLinkClick('home', 'skills-matrix')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-all duration-200 active:scale-95"
          >
            Skills
          </button>
          <button
            onClick={() => handleLinkClick('home', 'tech-and-stack')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-all duration-200 active:scale-95"
          >
            Stack
          </button>
          <button
            onClick={() => handleLinkClick('home', 'faq')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-all duration-200 active:scale-95"
          >
            FAQ
          </button>
          <button
            onClick={() => handleLinkClick('home', 'letters-and-contact')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full font-body-sm text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-all duration-200 active:scale-95"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA and Profile */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Resume Download Action */}
          <a
            href="/Praveenkumar.pdf"
            download="Praveen_Kumar_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface border border-outline-variant/30 font-label-md text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-xs active:scale-95 group shrink-0"
            title="Download Praveen Kumar's Resume (PDF)"
          >
            <span className="material-symbols-outlined text-[15px] sm:text-[17px] text-primary group-hover:text-on-primary group-hover:translate-y-0.5 transition-all">
              download
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-bold">RESUME</span>
          </a>

          <a
            href="https://github.com/firepraveen123/praveen"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant items-center justify-center border border-outline-variant/30 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
            title="GitHub: firepraveen123/praveen"
            aria-label="GitHub Repository"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <button
            onClick={onCopyEmail}
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-xs tracking-wider uppercase font-semibold transition-all duration-200 hover:bg-primary-container shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shrink-0"
            title="Copy email to clipboard"
          >
            <span>LET'S TALK</span>
            <span className="text-sm font-bold">→</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors active:scale-95 shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-primary via-primary-container to-secondary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-container-high/60 bg-surface/98 backdrop-blur-2xl px-4 sm:px-6 py-4 shadow-xl animate-fade-in-up max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              Overview / Home
            </button>
            <button
              onClick={() => handleLinkClick('case-studies')}
              className={`text-left px-4 py-2.5 rounded-lg font-body-md text-sm transition-colors ${
                currentPage === 'case-studies'
                  ? 'bg-surface-container font-semibold text-primary'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              Selected Work &amp; Case Studies
            </button>
            <button
              onClick={() => handleLinkClick('home', 'craft-and-philosophy')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              How I Work
            </button>
            <button
              onClick={() => handleLinkClick('home', 'engineering-journey')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              Work Experience (Nextbrain)
            </button>
            <button
              onClick={() => handleLinkClick('home', 'skills-matrix')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              Skills &amp; Competencies
            </button>
            <button
              onClick={() => handleLinkClick('home', 'tech-and-stack')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              Toolkit &amp; Stack
            </button>
            <button
              onClick={() => handleLinkClick('home', 'faq')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              Frequently Asked Questions (FAQ)
            </button>
            <button
              onClick={() => handleLinkClick('home', 'letters-and-contact')}
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              Letters &amp; Inquiries
            </button>
            <a
              href="/Praveenkumar.pdf"
              download="Praveen_Kumar_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left px-4 py-2.5 rounded-lg bg-surface-container font-body-md text-sm text-primary font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download Resume (PDF)</span>
              </span>
              <span className="text-xs font-mono text-on-surface-variant">643 KB</span>
            </a>
            <a
              href="https://github.com/firepraveen123/praveen"
              target="_blank"
              rel="noreferrer"
              className="text-left px-4 py-2.5 rounded-lg font-body-md text-sm text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between"
            >
              <span>GitHub: firepraveen123/praveen</span>
              <span className="text-xs font-mono text-primary font-bold">↗</span>
            </a>
            <div className="pt-3 border-t border-surface-container-high/60 mt-2">
              <button
                onClick={onCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-xs tracking-wider uppercase font-semibold active:scale-95"
              >
                <span>LET'S TALK (COPY EMAIL)</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
