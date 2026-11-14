'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  GitBranch,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Play,
  RefreshCw,
  Eye,
  Volume2,
  Sparkles,
  Sliders,
  ArrowRight,
  Cpu,
  Layers,
} from 'lucide-react';

const MANIFESTO_TEXT =
  '“I care less about how a page looks when everything works, and more about how it behaves when things go wrong: a slow network, a late-loading font, or someone navigating solely with a keyboard.”';

type FsmKey = 'IDLE' | 'DISPATCH' | 'OPTIMISTIC' | 'SYNCED';

const FSM_STEPS: { key: FsmKey; label: string; desc: string; payload: Record<string, unknown> }[] = [
  {
    key: 'IDLE',
    label: '01. Idle State',
    desc: 'Store hydrated, zero pending listeners, waiting on input.',
    payload: { status: 'STABLE', pendingQueue: 0, desyncRisk: '0.00%' },
  },
  {
    key: 'DISPATCH',
    label: '02. Action Emitted',
    desc: 'Deterministic event recorded into immutable AST tree.',
    payload: { action: 'UPDATE_TELEMETRY', eventId: 'evt_9984', pure: true },
  },
  {
    key: 'OPTIMISTIC',
    label: '03. Optimistic Render',
    desc: 'Instant zero-latency UI update before server roundtrip.',
    payload: { uiLatency: '0.4ms', speculative: true, rollbackArmed: true },
  },
  {
    key: 'SYNCED',
    label: '04. Server Settled',
    desc: 'WebSocket ACK verified. Local journal reconciled.',
    payload: { serverAck: 200, reconciliation: 'SUCCESS', desync: 0 },
  },
];

export default function CraftPhilosophySection() {
  const manifestoRef = useRef<HTMLParagraphElement>(null);
  const words = MANIFESTO_TEXT.split(' ');
  const [litCount, setLitCount] = useState(0);

  // Card 01 Interactive: 60fps Spring & Frame-Budget Engine
  const [isSpringing, setIsSpringing] = useState(false);
  const [fps, setFps] = useState('60.0');
  const [frameMs, setFrameMs] = useState('2.1');

  // Card 02 Interactive: Deterministic Finite State Machine
  const [activeFsm, setActiveFsm] = useState<FsmKey>('OPTIMISTIC');

  // Card 03 Interactive: Universal Accessibility & Contrast Inspector
  const [a11yTab, setA11yTab] = useState<'contrast' | 'focus' | 'screenreader'>('contrast');

  useEffect(() => {
    const handleScroll = () => {
      if (!manifestoRef.current) return;
      const rect = manifestoRef.current.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.85 - rect.top) / (rect.height + window.innerHeight * 0.3))
      );
      const n = Math.floor(p * words.length * 1.15);
      setLitCount(n);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  const triggerSpring = () => {
    if (isSpringing) return;
    setIsSpringing(true);
    setFps('59.9');
    setFrameMs('2.4');
    setTimeout(() => {
      setFps('60.0');
      setFrameMs('2.1');
    }, 450);
    setTimeout(() => {
      setIsSpringing(false);
    }, 1200);
  };

  const advanceFsm = () => {
    const keys: FsmKey[] = ['IDLE', 'DISPATCH', 'OPTIMISTIC', 'SYNCED'];
    const nextIdx = (keys.indexOf(activeFsm) + 1) % keys.length;
    setActiveFsm(keys[nextIdx]);
  };

  const currentFsmStep = FSM_STEPS.find((s) => s.key === activeFsm) || FSM_STEPS[2];

  return (
    <section id="craft-and-philosophy" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="wrap">
        {/* Section Kicker */}
        <div className="kicker">
          <span className="mono text-verm font-semibold">03 // How I Work</span>
          <span className="mono text-graphite">Foundational ethos · System doctrine</span>
        </div>

        <h2 className="fd font-medium tracking-tight text-4xl md:text-6xl mb-8 rv in">
          How I think about building for the web.
        </h2>

        {/* Word-by-word illuminated manifesto */}
        <div className="relative mb-20 pl-6 sm:pl-8 border-l-2 border-verm/70">
          <span className="block mono text-[11px] uppercase tracking-widest text-graphite mb-3">
            Craft Manifesto // Browser Integrity
          </span>
          <p
            id="manifesto"
            ref={manifestoRef}
            className="fd italic text-2xl sm:text-3xl md:text-5xl leading-[1.3] max-w-5xl select-none text-ink"
          >
            {words.map((w, i) => (
              <span
                key={i}
                className={`word transition-opacity duration-200 ${
                  i < litCount ? 'lit opacity-100 font-medium' : 'opacity-20'
                }`}
              >
                {w}{' '}
              </span>
            ))}
          </p>
          <div className="mono text-xs text-graphite mt-4 flex items-center gap-3">
            <span>Praveen Kumar S. · Senior Frontend &amp; Systems Engineer</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-graphite/40" />
            <span className="hidden sm:inline">Scroll to illuminate manifesto</span>
          </div>
        </div>

        {/* 3 Redesigned Architectural Craft Cards */}
        <div className="space-y-8">
          {/* ================= CARD 01 ================= */}
          <div className="group relative rounded-3xl border border-line bg-paper/90 dark:bg-ink/70 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
            {/* Top Vermilion Accent Rail */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-verm via-verm/60 to-transparent" />

            {/* Giant Watermark Numeral */}
            <span className="fd text-7xl sm:text-9xl font-bold opacity-[0.06] text-ink dark:text-paper select-none absolute right-6 top-6 sm:right-10 sm:top-8 pointer-events-none">
              01
            </span>

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Thesis & Metrics */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mono font-semibold bg-verm/10 text-verm border border-verm/20">
                    <Activity className="w-3.5 h-3.5" />
                    PRINCIPLE 01 // FRAME PERFORMANCE
                  </span>
                  <span className="mono text-xs text-graphite hidden sm:inline">GPU Composited</span>
                </div>

                <h3 className="fd text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight">
                  Polished, but lightweight
                </h3>

                <p className="text-graphite text-base sm:text-lg leading-relaxed max-w-2xl">
                  Minimal CSS weight, zero unnecessary runtime abstractions, native browser layout primitives, and hardware-accelerated 60fps animations that never drop a single frame under load.
                </p>

                {/* Metric Badges */}
                <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Jank Target</span>
                    <b className="fd text-xl sm:text-2xl text-verm">0.0ms</b>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Frame Rate</span>
                    <b className="fd text-xl sm:text-2xl text-ink">60 FPS</b>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">CSS Budget</span>
                    <b className="fd text-xl sm:text-2xl text-ink">&lt; 38KB</b>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Frame-Budget & Spring Engine */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-ink text-paper p-5 sm:p-6 border border-paper/15 shadow-2xl font-mono text-xs">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-paper/10 text-paper/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-paper tracking-wider text-[11px]">
                        FRAME OSCILLOSCOPE
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-paper/10 text-paper/80">
                      GPU THREAD ACTIVE
                    </span>
                  </div>

                  {/* Telemetry Display */}
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center">
                      <span className="text-paper/60">Frame Duration:</span>
                      <span className="text-emerald-400 font-bold text-sm">{frameMs}ms <span className="text-[10px] font-normal text-paper/40">/ 16.6ms</span></span>
                    </div>

                    {/* Progress Bar of Frame Budget */}
                    <div className="w-full h-2 rounded-full bg-paper/10 overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300"
                        style={{ width: `${(parseFloat(frameMs) / 16.6) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-paper/40">
                      <span>0ms</span>
                      <span>Budget: 16.6ms (14.2ms Headroom)</span>
                      <span>16.6ms</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-paper/10">
                      <span className="text-paper/60">Composited Rate:</span>
                      <span className="text-paper font-semibold">{fps} FPS Locked</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-paper/60">Layout Thrashing (CLS):</span>
                      <span className="text-emerald-400 font-semibold">0.000 (Zero Shift)</span>
                    </div>
                  </div>

                  {/* Interactive Spring Playground */}
                  <div className="p-3.5 rounded-xl bg-paper/5 border border-paper/10 space-y-3">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-paper/80 font-medium">Kinetic Spring Demo:</span>
                      <span className="text-[10px] text-verm font-mono">
                        {isSpringing ? 'CALCULATING TRANSFORM' : 'IDLE'}
                      </span>
                    </div>

                    {/* Animated Stage */}
                    <div className="relative h-9 rounded-lg bg-paper/10 flex items-center px-2 overflow-hidden">
                      <div
                        className="h-6 w-14 rounded-md bg-verm text-white text-[10px] font-bold flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{
                          transform: isSpringing
                            ? 'translate3d(calc(100% + 120px), 0, 0)'
                            : 'translate3d(0, 0, 0)',
                        }}
                      >
                        60 FPS
                      </div>
                    </div>

                    <button
                      onClick={triggerSpring}
                      disabled={isSpringing}
                      className="w-full py-2 px-3 rounded-lg bg-paper text-ink font-semibold text-xs hover:bg-verm hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {isSpringing ? 'Compositing Spring...' : 'Test Hardware 60fps Spring'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 02 ================= */}
          <div className="group relative rounded-3xl border border-line bg-paper/90 dark:bg-ink/70 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
            {/* Top Teal Accent Rail */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-transparent" />

            {/* Giant Watermark Numeral */}
            <span className="fd text-7xl sm:text-9xl font-bold opacity-[0.06] text-ink dark:text-paper select-none absolute right-6 top-6 sm:right-10 sm:top-8 pointer-events-none">
              02
            </span>

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Thesis & Metrics */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    <GitBranch className="w-3.5 h-3.5" />
                    PRINCIPLE 02 // DETERMINISTIC STATE
                  </span>
                  <span className="mono text-xs text-graphite hidden sm:inline">Immutable Store</span>
                </div>

                <h3 className="fd text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight">
                  Clear, predictable state
                </h3>

                <p className="text-graphite text-base sm:text-lg leading-relaxed max-w-2xl">
                  Deterministic finite state patterns. Async data flows decoupled from presentation components, making bugs reproducible and client state resilient against packet loss and network jitter.
                </p>

                {/* Metric Badges */}
                <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Architecture</span>
                    <b className="fd text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">Pure FSM</b>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Store Model</span>
                    <b className="fd text-xl sm:text-2xl text-ink">Immutable</b>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Desync Rate</span>
                    <b className="fd text-xl sm:text-2xl text-ink">0.00%</b>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Finite State Machine Simulator */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-ink text-paper p-5 sm:p-6 border border-paper/15 shadow-2xl font-mono text-xs">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-paper/10 text-paper/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      <span className="font-semibold text-paper tracking-wider text-[11px]">
                        FINITE STATE MACHINE
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-paper/10 text-paper/80">
                      STRICT INVARIANTS
                    </span>
                  </div>

                  {/* 4 State Node Tabs */}
                  <div className="grid grid-cols-4 gap-1.5 mb-4">
                    {FSM_STEPS.map((step) => {
                      const isActive = activeFsm === step.key;
                      return (
                        <button
                          key={step.key}
                          onClick={() => setActiveFsm(step.key)}
                          className={`py-2 px-1 rounded-lg text-center transition-all cursor-pointer text-[10px] font-semibold border ${
                            isActive
                              ? 'bg-teal-500/20 border-teal-400 text-teal-300 shadow-sm'
                              : 'bg-paper/5 border-paper/10 text-paper/60 hover:text-paper hover:bg-paper/10'
                          }`}
                        >
                          {step.key}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active State Details Box */}
                  <div className="p-3.5 rounded-xl bg-paper/5 border border-paper/10 space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-teal-300 font-bold">{currentFsmStep.label}</span>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> VERIFIED PURE
                      </span>
                    </div>
                    <p className="text-[11px] text-paper/70 leading-relaxed">
                      {currentFsmStep.desc}
                    </p>

                    {/* Code AST JSON Preview */}
                    <div className="p-2.5 rounded-lg bg-black/40 border border-paper/10 text-[10px] text-paper/90 overflow-x-auto">
                      <pre>{JSON.stringify(currentFsmStep.payload, null, 2)}</pre>
                    </div>
                  </div>

                  {/* Advance Step Button */}
                  <button
                    onClick={advanceFsm}
                    className="w-full py-2 px-3 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-300 hover:bg-teal-500 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Simulate Next State Transition ➔
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 03 ================= */}
          <div className="group relative rounded-3xl border border-line bg-paper/90 dark:bg-ink/70 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
            {/* Top Indigo Accent Rail */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-transparent" />

            {/* Giant Watermark Numeral */}
            <span className="fd text-7xl sm:text-9xl font-bold opacity-[0.06] text-ink dark:text-paper select-none absolute right-6 top-6 sm:right-10 sm:top-8 pointer-events-none">
              03
            </span>

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Thesis & Metrics */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    PRINCIPLE 03 // UNIVERSAL ACCESS
                  </span>
                  <span className="mono text-xs text-graphite hidden sm:inline">WCAG 2.1 AA Standard</span>
                </div>

                <h3 className="fd text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight">
                  Built for everyone, everywhere
                </h3>

                <p className="text-graphite text-base sm:text-lg leading-relaxed max-w-2xl">
                  WCAG AA accessibility from day zero. Logical focus rings, semantic landmarks, high-contrast resilience, and screen-reader navigable telemetry feeds that leave no user behind.
                </p>

                {/* Metric Badges */}
                <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Compliance</span>
                    <b className="fd text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400">WCAG 2.1 AA</b>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Contrast Ratio</span>
                    <b className="fd text-xl sm:text-2xl text-ink">15.2 : 1</b>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sand/60 dark:bg-paper/5 border border-line">
                    <span className="block mono text-[10px] uppercase text-graphite font-semibold">Keyboard Nav</span>
                    <b className="fd text-xl sm:text-2xl text-ink">100% Trap-Free</b>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Accessibility Inspector */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-ink text-paper p-5 sm:p-6 border border-paper/15 shadow-2xl font-mono text-xs">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-paper/10 text-paper/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      <span className="font-semibold text-paper tracking-wider text-[11px]">
                        A11Y AUDIT SIMULATOR
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-paper/10 text-paper/80">
                      AAA PASSED
                    </span>
                  </div>

                  {/* 3 Inspection Modes */}
                  <div className="grid grid-cols-3 gap-1.5 mb-4">
                    <button
                      onClick={() => setA11yTab('contrast')}
                      className={`py-2 px-1 rounded-lg text-center transition-all cursor-pointer text-[10px] font-semibold border ${
                        a11yTab === 'contrast'
                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300'
                          : 'bg-paper/5 border-paper/10 text-paper/60 hover:text-paper'
                      }`}
                    >
                      Contrast
                    </button>
                    <button
                      onClick={() => setA11yTab('focus')}
                      className={`py-2 px-1 rounded-lg text-center transition-all cursor-pointer text-[10px] font-semibold border ${
                        a11yTab === 'focus'
                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300'
                          : 'bg-paper/5 border-paper/10 text-paper/60 hover:text-paper'
                      }`}
                    >
                      Focus Ring
                    </button>
                    <button
                      onClick={() => setA11yTab('screenreader')}
                      className={`py-2 px-1 rounded-lg text-center transition-all cursor-pointer text-[10px] font-semibold border ${
                        a11yTab === 'screenreader'
                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300'
                          : 'bg-paper/5 border-paper/10 text-paper/60 hover:text-paper'
                      }`}
                    >
                      Screen Reader
                    </button>
                  </div>

                  {/* Dynamic Inspection Pane */}
                  <div className="p-4 rounded-xl bg-paper/5 border border-paper/10 space-y-3 min-h-[140px] flex flex-col justify-center">
                    {a11yTab === 'contrast' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-paper/60">Color Ratio:</span>
                          <span className="text-emerald-400 font-bold text-sm">15.2 : 1 (AAA)</span>
                        </div>
                        <div className="p-3 rounded-lg bg-paper text-ink flex items-center justify-between">
                          <span className="font-serif text-lg font-bold">Aa High Contrast</span>
                          <span className="text-[10px] font-mono bg-ink text-paper px-2 py-0.5 rounded">
                            Passes WCAG AAA
                          </span>
                        </div>
                        <span className="text-[10px] text-paper/50 block">
                          Calibrated for glare, low-luminance displays, and deuteranopia.
                        </span>
                      </div>
                    )}

                    {a11yTab === 'focus' && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-paper/60">Keyboard Traversal:</span>
                          <span className="text-indigo-300 font-semibold">Active Tab Trap-Free</span>
                        </div>
                        <div className="py-2 flex justify-center">
                          <button
                            tabIndex={0}
                            className="px-4 py-2 rounded-xl bg-paper text-ink font-semibold text-xs ring-4 ring-verm ring-offset-2 ring-offset-ink outline-none transition-all shadow-lg"
                          >
                            :focus-visible Indicator
                          </button>
                        </div>
                        <span className="text-[10px] text-paper/50 block text-center">
                          3px high-visibility ring conforming to WCAG 2.4.7 focus appearance.
                        </span>
                      </div>
                    )}

                    {a11yTab === 'screenreader' && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-indigo-300">
                          <Volume2 className="w-3.5 h-3.5" />
                          <span className="font-semibold text-[11px]">ARIA Live Speech Stream:</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/50 border border-paper/15 text-[11px] text-paper/90 leading-relaxed italic">
                          &ldquo;Navigation landmark, region &apos;Craft Philosophy&apos;, 3 interactive engineering standards listed. Tab to inspect.&rdquo;
                        </div>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> role=&quot;region&quot; aria-live=&quot;polite&quot; active
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-paper/10 flex items-center justify-between text-[10px] text-paper/50">
                    <span>AUDIT TOOL: LIGHTHOUSE &amp; AXE</span>
                    <span className="text-emerald-400 font-semibold">SCORE: 100 / 100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
