import React from 'react';

/**
 * FilmGrain
 * Ultra-lightweight, hardware-accelerated analog film grain overlay
 * inspired by Awwwards-winning studio sites like PSP Production (Lynksen).
 * Gives subtle organic depth to dark obsidian & warm ivory backgrounds without performance overhead.
 */
export default function FilmGrain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9990] select-none overflow-hidden opacity-[0.038] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}

