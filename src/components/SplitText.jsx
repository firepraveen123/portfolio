import React, { useEffect, useRef, useState } from 'react';

/**
 * SplitText — Kinetic Letter-by-Letter Staggered Reveal on Scroll
 * Inspired by Aovix (aovix.framer.website)
 * Splits text into non-breaking words and individual character spans with staggered transition delays.
 */
export default function SplitText({
  text,
  children,
  className = '',
  charClassName = '',
  tag: Tag = 'span',
  delay = 0,
  stagger = 0.018,
  threshold = 0.1,
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // If reduced motion is requested, show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const content = text || (typeof children === 'string' ? children : '');
  if (!content) return null;

  const words = content.split(' ');
  let charCount = 0;

  return (
    <Tag
      ref={containerRef}
      className={`inline ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {words.map((word, wordIdx) => {
        const letters = word.split('');
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {letters.map((char, charIdx) => {
              const charDelay = delay + charCount * stagger;
              charCount++;
              return (
                <span
                  key={charIdx}
                  className={`split-char ${charClassName} ${isVisible ? 'is-visible' : ''}`}
                  style={{
                    transitionDelay: isVisible ? `${charDelay.toFixed(3)}s` : '0s',
                  }}
                >
                  {char}
                </span>
              );
            })}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </Tag>
  );
}

