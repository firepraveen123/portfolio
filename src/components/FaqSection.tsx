'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    num: '01',
    question: 'What is your primary architectural approach when starting a greenfield frontend?',
    answer:
      'I start at the data boundaries rather than the UI canvas. I define strict domain types, establish normalized cache boundaries (typically via TanStack Query), map out error state flows, and set strict JavaScript bundle budgets before writing presentation markup, so performance and maintainability don’t erode as the UI scales.',
  },
  {
    num: '02',
    question: 'How do you balance aesthetic micro-interactions with tight performance budgets?',
    answer:
      'I stick to compositor-only transitions, animating just transform and opacity so animations run on the GPU without triggering reflows. Heavy canvas loops (like WebGL bounding boxes) are segregated into dedicated offscreen rendering pipelines.',
  },
  {
    num: '03',
    question: 'Are you open to relocating or working with distributed remote teams?',
    answer:
      'Yes. I’m based in Bengaluru (UTC+5:30) and available for on-site roles in the city, hybrid setups, or fully distributed global teams. I’m used to asynchronous communication, detailed PR documentation, and cross-timezone syncs.',
  },
  {
    num: '04',
    question: 'How does your native Android experience inform your web frontend work?',
    answer:
      'Native Android builds an acute awareness of device constraints: garbage collection pauses, thermal throttling, touch-event latency, and SQLite durability. On the web that becomes zero tolerance for memory leaks, reckless re-rendering, and unvalidated network calls.',
  },
  {
    num: '05',
    question: 'What is your availability for new contracts or full-time opportunities?',
    answer:
      'I’m open to discussions for Senior Frontend Engineer, Web Architect, or Founding Frontend Engineer roles. A standard notice period applies for full-time transitions, with immediate availability for selective advisory or architectural consulting.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24">
      <div className="wrap">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <span className="mono text-verm font-semibold">07 // FAQ</span>
            <h2 className="fd font-medium tracking-tight text-4xl md:text-5xl mt-3 rv in">
              Direct answers to common inquiries.
            </h2>
          </div>

          <div className="lg:col-span-8 border-t border-line" id="faqs">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.num}
                  onClick={() => toggleFaq(index)}
                  className={`fi border-b border-line py-6 cursor-pointer rv in ${
                    isOpen ? 'on' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="fd text-4xl text-verm w-14">{faq.num}</span>
                    <h3 className="fd text-xl md:text-2xl flex-1">{faq.question}</h3>
                    <Plus
                      className={`w-6 h-6 text-verm shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </div>

                  <div
                    className="fq"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                    }}
                  >
                    <div>
                      <p className="text-graphite pl-[76px] pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
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

