'use client';

import { useRef, useState } from 'react';
import { Copy, Send } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export default function ContactSection({ onShowToast }: ContactSectionProps) {
  const [magOffset, setMagOffset] = useState({ x: 0, y: 0 });
  const magContainerRef = useRef<HTMLDivElement>(null);
  const magBtnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magBtnRef.current) return;
    const rect = magBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setMagOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMagOffset({ x: 0, y: 0 });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('praveenkumarselvan02@gmail.com');
      onShowToast('Email address copied');
    } catch {
      window.location.href = 'mailto:praveenkumarselvan02@gmail.com';
    }
  };

  return (
    <section id="contact" className="band-dark py-24 overflow-hidden relative">
      {/* Background Marquee Text */}
      <div className="marq-wrap absolute top-6 left-0 w-full opacity-[0.07] pointer-events-none select-none">
        <div className="marq" style={{ '--t': '60s' } as React.CSSProperties}>
          <span className="fd text-[140px] font-bold whitespace-nowrap pr-10">
            LET’S BUILD SOMETHING EXCEPTIONAL — LET’S BUILD SOMETHING EXCEPTIONAL —{' '}
          </span>
          <span className="fd text-[140px] font-bold whitespace-nowrap pr-10">
            LET’S BUILD SOMETHING EXCEPTIONAL — LET’S BUILD SOMETHING EXCEPTIONAL —{' '}
          </span>
        </div>
      </div>

      <div className="wrap relative">
        <div className="kicker">
          <span className="mono text-verm font-semibold">08 // Contact &amp; Opportunities</span>
          <span className="mono flex items-center gap-2">
            <i className="w-2 h-2 rounded-full bg-ok animate-ping" />
            Open to on-site BLR, hybrid, remote
          </span>
        </div>

        <h2 className="fd font-medium tracking-tighter leading-[0.98] text-4xl sm:text-6xl md:text-8xl mb-8 rv in">
          Let’s build
          <br />
          <em className="text-verm font-normal">something exceptional</em> together.
        </h2>

        <p className="text-graphite text-lg max-w-2xl mb-12 rv in">
          Whether you’re refactoring a sluggish enterprise dashboard, starting a flagship product from scratch, or seeking guidance on browser performance, my channel is open.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-14 rv in">
          <a
            href="mailto:praveenkumarselvan02@gmail.com"
            className="fd text-2xl md:text-5xl font-semibold underline decoration-verm decoration-2 underline-offset-8 hover:text-verm transition-colors break-all"
          >
            praveenkumarselvan02@gmail.com
          </a>
          <button
            id="copy"
            onClick={copyEmail}
            className="btn btn-ghost !border-paper/40 cursor-pointer inline-flex items-center gap-1.5"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end border-t border-line pt-10">
          <div>
            <span className="mono text-graphite block mb-1">WhatsApp</span>
            <a
              href="https://wa.me/917558169247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:text-teal transition-colors"
            >
              +91 75581 69247
            </a>
          </div>

          <div>
            <span className="mono text-graphite block mb-1">GitHub</span>
            <a
              href="https://github.com/praveenkumars"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:text-teal transition-colors"
            >
              github.com/praveenkumars
            </a>
          </div>

          <div
            ref={magContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="md:text-right py-2"
          >
            <a
              id="mag"
              ref={magBtnRef}
              href="mailto:praveenkumarselvan02@gmail.com?subject=Engineering%20Engagement%20Inquiry"
              className="mag btn !bg-verm !text-white w-full sm:w-auto text-center justify-center !px-5 sm:!px-8 !py-4 sm:!py-5 text-sm sm:text-base shadow-xl transition-transform duration-150 inline-flex items-center gap-2"
              style={{
                transform: `translate(${magOffset.x}px, ${magOffset.y}px)`,
              }}
            >
              Initiate Direct Inquiry <Send className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

