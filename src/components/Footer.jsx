import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer id="site-footer" data-snap-section data-snap-title="Footer" className="w-full bg-surface-container-low mt-8 sm:mt-space-xl py-8 sm:py-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)] border-t border-surface-container-high/60 scroll-mt-20 sm:scroll-mt-24">
      <div className="w-full px-3.5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col gap-6 sm:gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-space-lg items-start pb-6 sm:pb-space-lg border-b border-surface-container-high/60">
          <div className="md:col-span-8 flex flex-col gap-2 sm:gap-space-sm">
            <span className="font-headline-md text-xl sm:text-headline-md text-on-surface font-normal">
              Praveen Kumar S
            </span>
            <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-xl leading-relaxed">
              Architecting tactile, reliable, and human-grounded digital systems. Guided by typographical clarity, structural empathy, and resilient frontend design.
            </p>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs pt-space-xs font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>Bengaluru, India • Open to Frontend Developer Opportunities</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-2 sm:gap-space-sm md:items-end">
            <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-wider text-on-surface-variant font-mono">
              Connect &amp; Dispatches
            </span>
            <nav className="flex flex-col gap-1.5 sm:gap-space-xs md:items-end">
              <a
                className="font-body-sm text-xs sm:text-body-sm text-primary font-semibold hover:underline transition-colors inline-flex items-center gap-1 font-mono py-0.5"
                href="/Praveenkumar.pdf"
                download="Praveen_Kumar_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Resume (PDF)</span>
                <span className="text-[12px]">↓</span>
              </a>
              <a
                className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1 font-mono py-0.5"
                href="https://github.com/firepraveen123/praveen"
                rel="noreferrer"
                target="_blank"
              >
                <span>GitHub Repository</span>
                <span className="text-[12px]">↗</span>
              </a>
              <a
                className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant hover:text-emerald-700 transition-colors inline-flex items-center gap-1 font-mono py-0.5"
                href="https://wa.me/917558169247"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp: +91 75581 69247</span>
                <span className="text-[12px]">↗</span>
              </a>
              <a
                className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1 font-mono py-0.5 break-all"
                href="mailto:praveenkumarselvan02@gmail.com"
              >
                <span>praveenkumarselvan02@gmail.com</span>
                <span className="text-[12px]">↗</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-2 sm:pt-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
          <p className="font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant">
            © 2026 Praveen Kumar S. Bringing designs to life, one pixel at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
