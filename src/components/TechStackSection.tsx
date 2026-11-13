'use client';

import { useState } from 'react';

const TABS = [
  {
    id: 0,
    label: 'A · Core Client',
    items: [
      {
        title: 'React 19 / 18',
        tag: 'concurrent',
        tagColor: 'text-teal',
        desc: 'Suspense, Server Components, action transitions, micro-task coordination.',
      },
      {
        title: 'Next.js (App & Pages)',
        tag: 'hybrid SSR',
        tagColor: 'text-teal',
        desc: 'Streaming SSR, ISR regeneration, route handlers, middleware cookies.',
      },
      {
        title: 'TypeScript (Strict)',
        tag: 'type safety',
        tagColor: 'text-teal',
        desc: 'Generics, discriminated unions, zero-any policy, schema verification.',
      },
      {
        title: 'Modern JavaScript',
        tag: 'standards',
        tagColor: 'text-teal',
        desc: 'Async iterators, event loops, Web Workers, Proxy wrappers, DOM APIs.',
      },
    ],
  },
  {
    id: 1,
    label: 'B · Systems & Infra',
    items: [
      {
        title: 'AWS Cloud Practitioner',
        tag: 'accredited',
        tagColor: 'text-verm',
        desc: 'S3 static hosting, CloudFront distributions, Route 53, IAM policy security.',
      },
      {
        title: 'REST & GraphQL',
        tag: 'apis',
        tagColor: 'text-verm',
        desc: 'Normalized client schemas, optimistic mutations, batch query resolution.',
      },
      {
        title: 'WebSockets & SSE',
        tag: 'real-time',
        tagColor: 'text-verm',
        desc: 'Bi-directional dispatch, heartbeats, reconnection backoffs.',
      },
      {
        title: 'CI/CD Automation',
        tag: 'deploy',
        tagColor: 'text-verm',
        desc: 'GitHub Actions, Vercel edge deployment, bundle regression checks.',
      },
    ],
  },
  {
    id: 2,
    label: 'C · Code Rigor',
    items: [
      {
        title: 'Bundle Budgeting',
        tag: 'metrics',
        tagColor: 'text-ok',
        desc: 'Zero-dependency audits, tree-shaking, Rollup manual chunking.',
      },
      {
        title: 'Jest & RTL',
        tag: 'testing',
        tagColor: 'text-ok',
        desc: 'Behavior-driven integration tests, MSW network mocking, 85%+ coverage.',
      },
      {
        title: 'Web Vitals Profiling',
        tag: 'vitals',
        tagColor: 'text-ok',
        desc: 'INP < 200ms, LCP < 2.5s, CLS < 0.1 verified on throttled 3G devices.',
      },
      {
        title: 'Tailwind & CSS Modules',
        tag: 'styling',
        tagColor: 'text-ok',
        desc: 'Sub-50KB CSS payloads, custom design systems, token scale.',
      },
    ],
  },
];

export default function TechStackSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section id="tech-and-stack" className="py-24 bg-sand/70 border-y border-line overflow-hidden">
      <div className="wrap">
        <div className="kicker">
          <span className="mono text-verm font-semibold">04 // Toolkit &amp; Proficiencies</span>
          <span className="mono text-graphite">Stack revision 4.2</span>
        </div>
        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl mb-4 max-w-3xl rv in">
          Instruments honed over hundreds of production commits.
        </h2>
        <p className="text-graphite max-w-2xl mb-14 rv in">
          Technical tooling that favors durability, runtime stability and web standards over fleeting industry hype.
        </p>
      </div>

      {/* Dual marquee banners */}
      <div className="marq-wrap space-y-4 mb-16">
        <div className="marq" style={{ '--t': '38s' } as React.CSSProperties}>
          <div className="flex gap-4 pr-4 shrink-0 fd text-5xl md:text-7xl font-medium">
            <span>React 19</span><span className="text-verm">✦</span>
            <span>Next.js</span><span className="text-verm">✦</span>
            <span>TypeScript</span><span className="text-verm">✦</span>
            <span>Tailwind</span><span className="text-verm">✦</span>
            <span>TanStack</span><span className="text-verm">✦</span>
          </div>
          <div className="flex gap-4 pr-4 shrink-0 fd text-5xl md:text-7xl font-medium">
            <span>React 19</span><span className="text-verm">✦</span>
            <span>Next.js</span><span className="text-verm">✦</span>
            <span>TypeScript</span><span className="text-verm">✦</span>
            <span>Tailwind</span><span className="text-verm">✦</span>
            <span>TanStack</span><span className="text-verm">✦</span>
          </div>
        </div>

        <div className="marq rev" style={{ '--t': '44s' } as React.CSSProperties}>
          <div
            className="flex gap-4 pr-4 shrink-0 fd italic text-5xl md:text-7xl text-transparent"
            style={{ WebkitTextStroke: '1.5px rgb(var(--ink))' }}
          >
            <span>WebSockets</span><span>✦</span>
            <span>AWS</span><span>✦</span>
            <span>GraphQL</span><span>✦</span>
            <span>Kotlin</span><span>✦</span>
            <span>Vite</span><span>✦</span>
          </div>
          <div
            className="flex gap-4 pr-4 shrink-0 fd italic text-5xl md:text-7xl text-transparent"
            style={{ WebkitTextStroke: '1.5px rgb(var(--ink))' }}
          >
            <span>WebSockets</span><span>✦</span>
            <span>AWS</span><span>✦</span>
            <span>GraphQL</span><span>✦</span>
            <span>Kotlin</span><span>✦</span>
            <span>Vite</span><span>✦</span>
          </div>
        </div>
      </div>

      {/* Terminal Box */}
      <div className="wrap">
        <div className="rounded-2xl border border-line bg-ink text-paper overflow-hidden shadow-2xl rv in">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-paper/15">
            <i className="w-3 h-3 rounded-full bg-verm" />
            <i className="w-3 h-3 rounded-full bg-yellow-400" />
            <i className="w-3 h-3 rounded-full bg-ok" />
            <span className="mono opacity-60 mx-auto">~/toolkit — zsh</span>
          </div>

          <div className="p-4 sm:p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-8" id="tt">
              {TABS.map((tab) => {
                const isOn = selectedTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`tt ${isOn ? 'on' : ''} !text-paper cursor-pointer`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {TABS.map((tab) => {
              if (tab.id !== selectedTab) return null;
              return (
                <ul
                  key={tab.id}
                  className="tp on grid md:grid-cols-2 gap-x-10 gap-y-5"
                >
                  {tab.items.map((item, index) => (
                    <li
                      key={item.title}
                      style={{ '--k': index } as React.CSSProperties}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <b>{item.title}</b>
                        <span className={`mono ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <p className="text-sm opacity-60">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

