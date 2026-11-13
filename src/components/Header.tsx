'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, Download } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Impact', href: '#impact' },
  { label: 'Works', href: '#selected-works' },
  { label: 'Sites', href: '#marketing-sites' },
  { label: 'Craft', href: '#craft-and-philosophy' },
  { label: 'Toolkit', href: '#tech-and-stack' },
  { label: 'Journey', href: '#engineering-journey' },
  { label: 'Skills', href: '#skills-matrix' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Check initial theme
    const saved = localStorage.getItem('portfolio_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    try {
      localStorage.setItem('portfolio_theme', nextDark ? 'dark' : 'light');
    } catch {}
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      let current = '';
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.3) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="h-16 wrap flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#hero" className="fd text-2xl font-semibold hover:text-verm transition-colors">
            PKS
          </a>
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-line">
            <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
            <span className="mono text-graphite">Open to work</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-6 mono" id="nav">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                className={`nv ${isActive ? 'on' : ''}`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            id="theme"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-14 h-7 p-1 rounded-full border border-line bg-sand flex items-center transition-all cursor-pointer"
          >
            <span
              id="knob"
              className="w-5 h-5 rounded-full bg-ink flex items-center justify-center transition-transform duration-300"
              style={{ transform: isDark ? 'translateX(28px)' : 'none' }}
            >
              {isDark ? (
                <Moon className="w-3 h-3 text-paper fill-current" />
              ) : (
                <Sun className="w-3 h-3 text-paper fill-current" />
              )}
            </span>
          </button>
          <a
            href="/Praveen_Kumar_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Praveen_Kumar_S_Resume.pdf"
            className="hidden sm:inline-flex btn btn-ghost !py-2 items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
