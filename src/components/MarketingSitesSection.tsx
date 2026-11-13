'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SITES = [
  {
    num: '01',
    name: 'Visionfacts.ai',
    tagline: 'Transforming workplace safety with advanced video analytics',
    gradient: 'from-verm/10 to-transparent',
    tags: ['Detection', 'Tracking', 'Counting', 'Analysis'],
    btnText: 'Request Demo',
    btnClass: 'btn-solid !bg-verm',
    meta: 'Site 01 · AI Video Analytics · B2B SaaS',
    desc: 'Marketing site for an AI video analytics platform serving retail, manufacturing, smart city and more, built to explain a technical product clearly and drive demo requests.',
    bullets: [
      '8 industry solution pages plus a 50+ use-case library',
      'Case studies, blog and video hub with SEO-ready metadata',
      'Demo-request funnel and WhatsApp chat entry point',
    ],
    pills: ['Next.js', 'SEO', 'Responsive'],
    link: 'https://visionfacts.ai/',
  },
  {
    num: '02',
    name: 'Khayash',
    domain: 'khayash.com',
    tagline: 'Still using visitor notebooks in the office?',
    gradient: 'from-teal/10 to-transparent',
    tags: ['QR Check-in', 'Kiosk App', 'Host Invites'],
    hasDualBtn: true,
    meta: 'Site 02 · Visitor Management · SaaS',
    desc: 'Product marketing site for a QR-based front office and visitor management platform, with clear pricing, industry pages and sign-up paths into the live app.',
    bullets: [
      'Product pages (VMS, Mailroom) and 8 industry solution pages',
      'Pricing page, demo request and free sign-up funnel',
      'Blog, FAQ, sitemap and Open Graph metadata',
    ],
    pills: ['Next.js', 'SEO', 'Conversion Funnel'],
    link: 'https://khayash.com/',
  },
  {
    num: '03',
    name: 'Silicon Drive',
    domain: 'silicondrive.com',
    tagline: 'Get where you need to go safely & affordably',
    gradient: 'from-ink/10 to-transparent',
    hasRidePills: true,
    btnText: 'Download App',
    btnClass: 'btn-solid !bg-verm',
    meta: 'Site 03 · Mobility · Cab Booking',
    desc: 'Public marketing site for the Silicon Drive cab platform, speaking to three audiences at once: riders, driver and fleet partners, and corporate customers.',
    bullets: [
      'Separate Riders, Drivers, Fleet Owner and Business (B2B) pages',
      'Animated “How it works” steps, ride types, safety and prebook sections',
      'App download CTAs, blog, FAQs and legal pages',
    ],
    pills: ['Next.js', 'Multi-audience IA', 'Responsive'],
    link: 'https://silicondrive.com/',
  },
  {
    num: '04',
    name: 'Nashaty',
    domain: 'nashaty.com',
    tagline: 'Grow Their World',
    gradient: 'from-verm/10 to-teal/10',
    tags: ['For Parents', 'For Providers', 'EN / AR'],
    btnText: 'Download app',
    btnClass: 'btn-solid',
    meta: 'Site 04 · Kids Activities · Qatar',
    desc: 'Two-sided marketing site for a Qatar after-school activity marketplace, built to win parents on one side and onboard activity providers on the other.',
    bullets: [
      'Dedicated For Parents and For Service Providers journeys',
      'Provider onboarding form with document uploads and plan selection',
      'Language switcher, parent blog, FAQs and App Store / Google Play links',
    ],
    pills: ['Next.js', 'Bilingual', 'Forms & Uploads'],
    link: 'https://nashaty.com/',
  },
];

export default function MarketingSitesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Auto-rotation timer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % SITES.length);
    }, 7000);

    return () => clearTimeout(timer);
  }, [activeTab, isIntersecting]);

  return (
    <section
      id="marketing-sites"
      ref={sectionRef}
      className="py-24 bg-sand/70 border-y border-line"
    >
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">02B // Marketing Websites</span>
          <span className="mono text-graphite">4 live production sites</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <h2 className="lg:col-span-8 fd font-medium tracking-tight text-4xl md:text-6xl leading-tight rv in">
            Marketing sites built to rank, convert &amp; scale.
          </h2>
          <p className="lg:col-span-4 text-graphite self-end rv in">
            Beyond product dashboards, I build fast, SEO-ready marketing websites for SaaS, mobility and consumer platforms. Four of them are live today.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10" id="sites">
          {/* Tab Selector */}
          <div className="lg:col-span-4 border-t border-line self-start">
            {SITES.map((site, index) => {
              const isOn = activeTab === index;
              return (
                <button
                  key={site.num}
                  onClick={() => setActiveTab(index)}
                  className={`site-tab ${isOn ? 'on' : ''} cursor-pointer`}
                >
                  <span className="mono">{site.num}</span>
                  <span className="fd text-2xl">{site.name}</span>
                  {isOn && <i className="tl" key={`tl-${index}`} />}
                </button>
              );
            })}
          </div>

          {/* Active Panel View */}
          <div className="lg:col-span-8">
            {SITES.map((site, index) => {
              const isOn = activeTab === index;
              if (!isOn) return null;

              return (
                <div key={site.num} className="site-panel on">
                  <div className="rounded-2xl border border-line bg-paper overflow-hidden shadow-xl">
                    <div className="px-4 py-2 border-b border-line flex items-center gap-2 bg-sand/60">
                      <i className="w-2 h-2 rounded-full bg-line" />
                      <i className="w-2 h-2 rounded-full bg-line" />
                      <i className="w-2 h-2 rounded-full bg-line" />
                      <span className="mono text-graphite mx-auto">
                        {site.domain || site.name.toLowerCase()}
                      </span>
                    </div>

                    <div className={`p-8 bg-gradient-to-br ${site.gradient}`}>
                      {site.hasRidePills ? (
                        <div className="inline-flex rounded-full border border-line p-0.5 mb-4 mono">
                          <span className="px-3 py-1 rounded-full bg-ink text-paper">Ride</span>
                          <span className="px-3 py-1">Drive</span>
                          <span className="px-3 py-1">Business</span>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {site.tags?.map((t) => (
                            <span key={t} className="pill">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="fd text-3xl leading-snug mb-5 max-w-md">
                        {site.tagline}
                      </p>

                      {site.hasDualBtn ? (
                        <div className="flex gap-3">
                          <span className="btn btn-solid">Request a demo</span>
                          <span className="btn btn-ghost">Sign up for free</span>
                        </div>
                      ) : (
                        <span className={`btn ${site.btnClass}`}>{site.btnText}</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mono text-graphite mb-2">{site.meta}</div>
                    <p className="text-graphite max-w-2xl mb-4">{site.desc}</p>
                    <ul className="text-sm space-y-1 mb-4">
                      {site.bullets.map((b, bi) => (
                        <li key={bi}>→ {b}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-2">
                      {site.pills.map((pill) => (
                        <span key={pill} className="pill pill-t">
                          {pill}
                        </span>
                      ))}
                      <a
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto btn btn-ghost !py-2 inline-flex items-center gap-1.5"
                      >
                        Visit live site <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

