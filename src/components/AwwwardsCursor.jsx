import React, { useEffect, useState, useRef } from 'react';

/**
 * AwwwardsCursor
 * Fluid magnetic cursor inspired by PSP Production (by Lynksen, Awwwards HM).
 * Features:
 * - 60-120fps hardware-accelerated lerp (spring physics)
 * - Dynamic morphing on interactive elements (cards, buttons, links)
 * - Contextual label pills ("VIEW CASE", "EXPLORE", "CONNECT")
 * - Completely dormant/hidden on touch devices for zero mobile overhead
 */
export default function AwwwardsCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on pointer-accurate non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

    if (isTouch && !isFinePointer) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check for custom cursor targets
      const target = e.target;
      const cardTarget = target.closest('[data-cursor-label]');
      const clickableTarget = target.closest('a, button, input, textarea, select, [role="button"], .interactive-cursor');

      if (cardTarget) {
        setCursorLabel(cardTarget.getAttribute('data-cursor-label') || 'VIEW');
        setIsHovered(true);
      } else if (clickableTarget) {
        setCursorLabel('');
        setIsHovered(true);
      } else {
        setCursorLabel('');
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // High performance RAF loop with exponential lerp
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Direct snap for dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lag for ring (lerp factor 0.18 gives cinematic elasticity)
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#9b2f00] transition-transform duration-100 ease-out will-change-transform ${
          cursorLabel ? 'scale-0' : isHovered ? 'scale-125' : 'scale-100'
        }`}
      />

      {/* Elastic Follower Ring / Morphing Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full will-change-transform ${
          cursorLabel
            ? '-ml-14 -mt-6 h-12 w-28 border border-[#9b2f00]/60 bg-[#121110]/90 text-white shadow-xl backdrop-blur-md transition-[width,height,margin,background-color,border-color] duration-200'
            : isHovered
            ? '-ml-6 -mt-6 h-12 w-12 border-2 border-[#9b2f00]/70 bg-[#9b2f00]/10 transition-[width,height,margin,background-color,border-color] duration-200'
            : '-ml-4 -mt-4 h-8 w-8 border border-[#9b2f00]/40 bg-transparent transition-[width,height,margin,background-color,border-color] duration-200'
        } ${isPressed ? 'scale-90' : 'scale-100'}`}
      >
        {cursorLabel && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#f5ede4] select-none">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}

