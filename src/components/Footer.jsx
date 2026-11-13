import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer id="site-footer" data-snap-section data-snap-title="Footer" className="w-full bg-surface-container-low mt-space-xl py-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)] border-t border-surface-container-high/60 scroll-mt-24">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start pb-space-lg border-b border-surface-container-high/60">
          <div className="md:col-span-8 flex flex-col gap-space-sm">
            <span className="font-headline-md text-headline-md text-on-surface font-normal">
              Praveen Kumar S
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Architecting tactile, reliable, and human-grounded digital systems. Guided by typographical clarity, structural empathy, and resilient frontend design.
            </p>
            <div className="flex items-center gap-space-xs pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Bengaluru, India • Open to Frontend Developer Opportunities</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-space-sm md:items-end">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Connect &amp; Dispatches
            </span>
            <nav className="flex flex-col gap-space-xs md:items-end">
              <a
                className="font-body-sm text-body-sm text-primary font-semibold hover:underline transition-colors inline-flex items-center gap-1 font-mono"
                href="/Praveenkumar.pdf"
                download="Praveen_Kumar_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Resume (PDF)</span>
                <span className="text-[12px]">↓</span>
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1 font-mono"
                href="https://github.com/firepraveen123/praveen"
                rel="noreferrer"
                target="_blank"
              >
                <span>GitHub Repository</span>
                <span className="text-[12px]">↗</span>
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-emerald-700 transition-colors inline-flex items-center gap-1 font-mono"
                href="https://wa.me/917558169247"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp: +91 75581 69247</span>
                <span className="text-[12px]">↗</span>
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1 font-mono"
                href="mailto:praveenkumarselvan02@gmail.com"
              >
                <span>praveenkumarselvan02@gmail.com</span>
                <span className="text-[12px]">↗</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2026 Praveen Kumar S. Bringing designs to life, one pixel at a time.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
