import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Users,
  Store,
  Train,
  Smartphone,
  Shield,
  Activity,
  Calendar,
  Lock,
  RefreshCw,
  Video,
  Check,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { PROJECTS_DATA, PROJECT_SLUGS, ProjectDetail } from '@/data/projects';
import ThemeToggle from '@/components/ThemeToggle';

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const LEDGER_ITEMS = [
  {
    slug: 'silicon-drive',
    num: '01',
    category: 'Corporate Transit Platform',
    name: 'silicon drive',
  },
  {
    slug: 'digipod',
    num: '02',
    category: 'Local Discovery & Learning',
    name: 'DigiPod',
  },
  {
    slug: 'machfox',
    num: '03',
    category: 'Railway Contract Compliance',
    name: 'Machfox',
  },
  {
    slug: 'intra',
    num: '04',
    category: 'Enterprise Workflow & HROS',
    name: 'Intra 3.0',
  },
  {
    slug: 'shell-oman',
    num: '05',
    category: 'Industrial AI CCTV Telemetry',
    name: 'shell oman',
  },
  {
    slug: 'edubotix',
    num: '06',
    category: 'Digital Campus & Exam Engine',
    name: 'Edubotix',
  },
  {
    slug: 'atmed',
    num: '07',
    category: 'Native Telehealth Consultation',
    name: 'AtMed Healthcare',
  },
];

function SiliconDriveBanner() {
  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-b from-amber-600 via-orange-600 to-stone-900 overflow-hidden flex flex-col justify-between p-4 md:p-6 text-white shadow-inner">
      {/* City Skyline Silhouette & Warm Sunset Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Stylized Skyline Vectors */}
      <svg
        className="absolute bottom-12 inset-x-0 w-full h-36 opacity-35 text-amber-950 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1000 200"
        fill="currentColor"
      >
        <rect x="20" y="80" width="45" height="120" />
        <rect x="80" y="40" width="60" height="160" />
        <rect x="155" y="70" width="50" height="130" />
        <polygon points="180,20 155,70 205,70" />
        <rect x="220" y="90" width="40" height="110" />
        <rect x="280" y="30" width="70" height="170" />
        <rect x="370" y="60" width="55" height="140" />
        <rect x="440" y="100" width="50" height="100" />
        <rect x="510" y="50" width="65" height="150" />
        <rect x="595" y="85" width="45" height="115" />
        <polygon points="617,35 595,85 640,85" />
        <rect x="660" y="45" width="60" height="155" />
        <rect x="740" y="75" width="50" height="125" />
        <rect x="810" y="35" width="65" height="165" />
        <rect x="895" y="90" width="75" height="110" />
      </svg>

      {/* Top Bar Badges */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <span className="mono text-[10px] md:text-xs px-3 py-1 rounded bg-black/60 border border-white/20 tracking-wider flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Silicon Drive · Active Fleet Operations
        </span>
        <span className="mono text-[10px] text-amber-200/90 hidden sm:inline-block">
          Bengaluru Regional Corridor Dispatch
        </span>
      </div>

      {/* Center Title Banner: MOVING PEOPLE MOVING BUSINESS */}
      <div className="relative z-10 text-center my-auto py-2">
        <div className="fd font-bold text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          MOVING PEOPLE MOVING BUSINESS
        </div>
        <p className="mono text-[10px] sm:text-xs text-amber-200/90 mt-1 uppercase tracking-wider font-medium">
          Zero-Contention Cab Orchestration &amp; Spatial Quadrant Dispatch
        </p>
      </div>

      {/* Corporate Fleet Silhouette Illustration */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex items-end justify-center gap-3 sm:gap-6 opacity-95">
        {/* White Luxury Coach Bus */}
        <div className="flex flex-col items-center">
          <div className="w-24 sm:w-36 h-10 sm:h-14 bg-white/95 rounded-t-lg rounded-b-sm border border-stone-400 shadow-lg flex flex-col justify-between p-1">
            <div className="flex gap-1 h-3 sm:h-4 w-full">
              <div className="bg-stone-800 flex-1 rounded-sm" />
              <div className="bg-stone-800 flex-1 rounded-sm" />
              <div className="bg-stone-800 flex-1 rounded-sm" />
              <div className="bg-stone-800 flex-1 rounded-sm" />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="mono text-[7px] text-stone-700 font-bold">SILICON-COACH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="flex justify-between w-20 sm:w-32 -mt-1 px-1">
            <div className="w-3.5 h-3.5 rounded-full bg-stone-900 border border-stone-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-stone-900 border border-stone-400" />
          </div>
        </div>

        {/* Executive Transit Traveler Van */}
        <div className="flex flex-col items-center">
          <div className="w-20 sm:w-28 h-9 sm:h-12 bg-white/95 rounded-t-md rounded-b-sm border border-stone-400 shadow-lg flex flex-col justify-between p-1">
            <div className="flex gap-1 h-2.5 sm:h-3 w-full">
              <div className="bg-stone-800 flex-1 rounded-sm" />
              <div className="bg-stone-800 flex-1 rounded-sm" />
              <div className="bg-stone-800 flex-1 rounded-sm" />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span className="mono text-[6px] text-stone-700 font-bold">SHUTTLE-V</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
            </div>
          </div>
          <div className="flex justify-between w-16 sm:w-24 -mt-1 px-1">
            <div className="w-3 h-3 rounded-full bg-stone-900 border border-stone-400" />
            <div className="w-3 h-3 rounded-full bg-stone-900 border border-stone-400" />
          </div>
        </div>

        {/* Executive White Sedan Cab */}
        <div className="flex flex-col items-center">
          <div className="w-16 sm:w-22 h-7 sm:h-9 bg-white/95 rounded-t-md rounded-b-sm border border-stone-400 shadow-lg flex flex-col justify-between p-0.5">
            <div className="flex gap-1 h-2 sm:h-2.5 w-full mx-auto max-w-[80%]">
              <div className="bg-stone-800 flex-1 rounded-sm" />
              <div className="bg-stone-800 flex-1 rounded-sm" />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="w-1 h-1 rounded-full bg-amber-300" />
              <span className="mono text-[5px] text-stone-800 font-bold bg-amber-300 px-0.5 rounded">KA-01</span>
              <span className="w-1 h-1 rounded-full bg-amber-300" />
            </div>
          </div>
          <div className="flex justify-between w-14 sm:w-18 -mt-1 px-1">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-400" />
          </div>
        </div>
      </div>

      {/* Bottom Live Bar */}
      <div className="relative z-10 flex justify-between items-center text-xs mono text-stone-300 pt-2 border-t border-white/15">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-white font-medium">128 CABS LIVE IN TRANSIT</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-black/70 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-[11px] font-semibold tracking-wider">
          128 CABS LIVE | 0 WAIT QUEUE
        </span>
      </div>
    </div>
  );
}

function ProjectVisualFrame({ project }: { project: ProjectDetail }) {
  if (project.bannerType === 'silicon-drive') {
    return <SiliconDriveBanner />;
  }

  if (project.bannerType === 'digipod') {
    return (
      <div className="bg-paper p-5 md:p-6 border-b border-line">
        <div className="flex items-center justify-between pb-4 border-b border-line mb-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal text-white flex items-center justify-center font-bold text-sm">
              DP
            </div>
            <div>
              <b className="fd text-lg">Dashboard Overview</b>
              <span className="mono text-[10px] text-graphite block">
                User Insights, Vendor Metrics &amp; Content Management
              </span>
            </div>
          </div>
          <span className="pill pill-t !text-[10px]">Mysuru Hub Live</span>
        </div>

        {/* User Insights */}
        <div className="mb-5">
          <div className="mono text-[11px] font-semibold text-graphite mb-2.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-teal" />
            User Insights
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Total Users</span>
              <b className="fd text-xl text-ink">27</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">New Today</span>
              <b className="fd text-xl text-ink">0</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Daily Active</span>
              <b className="fd text-xl text-ink">0</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Engagement</span>
              <b className="fd text-xl text-teal">0%</b>
            </div>
          </div>
        </div>

        {/* Vendor Insights */}
        <div>
          <div className="mono text-[11px] font-semibold text-graphite mb-2.5 flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5 text-verm" />
            Vendor Insights
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Total Vendors</span>
              <b className="fd text-xl text-ink">9</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Basic Tier</span>
              <b className="fd text-xl text-ink">2</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Growth Tier</span>
              <b className="fd text-xl text-teal">3</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Premium Tier</span>
              <b className="fd text-xl text-verm">4</b>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            <div className="p-3 rounded-xl bg-sand/40 border border-line">
              <span className="text-[10px] mono text-graphite block">New This Month</span>
              <b className="fd text-lg">0</b>
            </div>
            <div className="p-3 rounded-xl bg-sand/40 border border-line">
              <span className="text-[10px] mono text-graphite block">Active Subscriptions</span>
              <b className="fd text-lg text-ok">9</b>
            </div>
            <div className="p-3 rounded-xl bg-sand/40 border border-line">
              <span className="text-[10px] mono text-graphite block">Retention Rate</span>
              <b className="fd text-lg text-ok">100%</b>
            </div>
            <div className="p-3 rounded-xl bg-sand/40 border border-line">
              <span className="text-[10px] mono text-graphite block">Renewals Due</span>
              <b className="fd text-lg text-verm">1</b>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.bannerType === 'machfox') {
    return (
      <div className="bg-paper p-5 md:p-6 border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Web Dashboard */}
          <div className="md:col-span-8 p-4 rounded-xl bg-cream border border-line flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-verm" />
                  <b className="font-semibold text-sm">Dashboard Overview</b>
                </div>
                <span className="mono text-[10px] text-graphite">Hi, Jenny Wilson!</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-paper border border-line">
                  <div className="mono text-[9px] text-graphite">Divisions</div>
                  <b className="fd text-base">35</b>
                </div>
                <div className="p-2 rounded bg-paper border border-line">
                  <div className="mono text-[9px] text-graphite">Routes</div>
                  <b className="fd text-base">120</b>
                </div>
                <div className="p-2 rounded bg-paper border border-line">
                  <div className="mono text-[9px] text-graphite">Curves</div>
                  <b className="fd text-base">750</b>
                </div>
                <div className="p-2 rounded bg-paper border border-line">
                  <div className="mono text-[9px] text-graphite">Machines</div>
                  <b className="fd text-base text-ok">1,500</b>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs mt-3 pt-3 border-t border-line">
              <div className="p-2 rounded bg-paper border border-line">
                <div className="mono text-[9px] text-graphite">Letters</div>
                <b className="fd text-sm">35</b>
              </div>
              <div className="p-2 rounded bg-paper border border-line">
                <div className="mono text-[9px] text-graphite">Tenders</div>
                <b className="fd text-sm">35</b>
              </div>
              <div className="p-2 rounded bg-paper border border-line">
                <div className="mono text-[9px] text-graphite">Staffs</div>
                <b className="fd text-sm">260</b>
              </div>
              <div className="p-2 rounded bg-paper border border-line">
                <div className="mono text-[9px] text-graphite">Stations</div>
                <b className="fd text-sm">120</b>
              </div>
            </div>
          </div>

          {/* Mobile App View */}
          <div className="md:col-span-4 p-4 rounded-xl bg-sand/30 border border-line flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-line mb-3">
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-teal" />
                <span className="mono text-[10px] font-semibold">Mobile Inspect</span>
              </div>
              <span className="mono text-[9px] text-ok">Live Sync</span>
            </div>

            <div className="p-2 rounded bg-paper border border-line mb-2">
              <span className="mono text-[9px] text-graphite block">Supervisor</span>
              <b className="text-xs">Amardeep Singh</b>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between p-1.5 rounded bg-paper border border-line">
                <span className="text-[10px] mono text-graphite">Total Tasks</span>
                <b>15</b>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-paper border border-line">
                <span className="text-[10px] mono text-graphite">In Progress</span>
                <b className="text-teal">10</b>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-paper border border-line">
                <span className="text-[10px] mono text-graphite">Completed</span>
                <b className="text-ok">10</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.bannerType === 'intra') {
    return (
      <div className="bg-paper p-5 md:p-6 border-b border-line">
        <div className="flex items-center justify-between pb-3 border-b border-line mb-4">
          <span className="mono text-xs font-semibold text-ink">
            Reactive AST Formula Matrix · Module UI
          </span>
          <span className="mono text-[10px] text-graphite">
            Live Client-Side Lexer
          </span>
        </div>

        {/* Dynamic Metric Sliders Frame */}
        <div className="p-4 rounded-xl bg-cream border border-line mb-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="mono text-[11px] text-graphite">
              Salary Increment Lexer: Auto-Normalized against Department Curve
            </span>
            <span className="pill pill-t !text-[10px] text-ok">Verified AST</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-graphite">KPI Achievement Score</span>
                <b className="text-ok font-mono">112% (Tier 1 Exceeds)</b>
              </div>
              <div className="w-full h-2 rounded-full bg-line overflow-hidden">
                <div className="h-full bg-teal rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-graphite">Bonus Allocation Formula</span>
                <b className="text-verm font-mono">AST: $base * (1 + 0.18 * score)</b>
              </div>
              <div className="w-full h-2 rounded-full bg-line overflow-hidden">
                <div className="h-full bg-verm rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Ledger */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="p-2.5 rounded-lg bg-sand/30 border border-line text-center">
            <div className="mono text-[9px] text-graphite">Trainings</div>
            <b className="fd text-lg">35</b>
          </div>
          <div className="p-2.5 rounded-lg bg-sand/30 border border-line text-center">
            <div className="mono text-[9px] text-graphite">Partners Trained</div>
            <b className="fd text-lg">75</b>
          </div>
          <div className="p-2.5 rounded-lg bg-sand/30 border border-line text-center">
            <div className="mono text-[9px] text-graphite">Participants</div>
            <b className="fd text-lg">460</b>
          </div>
          <div className="p-2.5 rounded-lg bg-sand/30 border border-line text-center">
            <div className="mono text-[9px] text-graphite">Avg Rating</div>
            <b className="fd text-lg text-teal">4.6 / 5</b>
          </div>
          <div className="p-2.5 rounded-lg bg-sand/30 border border-line text-center col-span-2 md:col-span-1">
            <div className="mono text-[9px] text-graphite">KPI Score</div>
            <b className="fd text-lg text-ok">110%</b>
          </div>
        </div>
      </div>
    );
  }

  if (project.bannerType === 'shell-oman') {
    return (
      <div className="bg-paper p-5 md:p-6 border-b border-line">
        {/* Zero-DOM Pipeline Visualizer */}
        <div className="p-4 rounded-xl bg-ink text-paper border border-line mb-5">
          <div className="flex flex-wrap items-center justify-between text-[11px] mono opacity-80 pb-3 border-b border-paper/15 mb-4">
            <span>16 RTSP Video Hubs (Raw Binary WebSockets)</span>
            <span className="text-ok">→ OffscreenCanvas Layer (Direct GPU Blit)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3 rounded bg-paper/5 border border-paper/10">
              <div className="mono text-[10px] text-graphite">Main Thread CPU</div>
              <b className="text-ok text-base">7% Utilization</b>
              <span className="mono text-[9px] block text-graphite">Down from 78%</span>
            </div>
            <div className="p-3 rounded bg-paper/5 border border-paper/10">
              <div className="mono text-[10px] text-graphite">Worker Latency</div>
              <b className="text-teal text-base">&lt; 16.6ms / frame</b>
              <span className="mono text-[9px] block text-graphite">60 FPS Locked</span>
            </div>
            <div className="p-3 rounded bg-paper/5 border border-paper/10">
              <div className="mono text-[10px] text-graphite">Virtual DOM Overhead</div>
              <b className="text-verm text-base">0 Reflows</b>
              <span className="mono text-[9px] block text-graphite">Transferable Buffers</span>
            </div>
          </div>
        </div>

        {/* Severity Intelligence Dashboard */}
        <div>
          <div className="mono text-[11px] font-semibold text-graphite mb-2">
            Event Severity Intelligence · Overall System
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-graphite block">Total Events</span>
              <b className="fd text-xl">957</b>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-ok block">Critical</span>
              <b className="fd text-xl text-ok">0</b>
              <span className="mono text-[9px] text-graphite block">Immediate</span>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-verm block">High</span>
              <b className="fd text-xl text-verm">623</b>
              <span className="mono text-[9px] text-graphite block">Urgent Action</span>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line">
              <span className="text-[10px] mono text-amber-500 block">Moderate</span>
              <b className="fd text-xl text-amber-600">275</b>
              <span className="mono text-[9px] text-graphite block">Detention</span>
            </div>
            <div className="p-3 rounded-xl bg-cream border border-line col-span-2 md:col-span-1">
              <span className="text-[10px] mono text-teal block">Low</span>
              <b className="fd text-xl text-teal">59</b>
              <span className="mono text-[9px] text-graphite block">Routine</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.bannerType === 'edubotix') {
    return (
      <div className="bg-paper p-5 md:p-6 border-b border-line">
        <div className="p-4 rounded-xl bg-cream border border-line mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal/15 text-teal flex items-center justify-center font-bold">
              EM
            </div>
            <div>
              <b className="text-sm">Ethan Miller · Grade 5 &amp; A</b>
              <span className="mono text-[10px] text-graphite block">
                Brooklyn Central · Student Active Session
              </span>
            </div>
          </div>
          <span className="pill pill-t !text-[10px] text-ok">
            Air-Gapped Offline Safe
          </span>
        </div>

        {/* Realtime Buffer Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-sand/30 border border-line">
            <div className="mono text-[10px] text-graphite">Concurrent Candidates</div>
            <b className="fd text-xl text-ink">40,000</b>
          </div>
          <div className="p-3 rounded-xl bg-sand/30 border border-line">
            <div className="mono text-[10px] text-graphite">Packets Dropped</div>
            <b className="fd text-xl text-ok">0 Lost</b>
          </div>
          <div className="p-3 rounded-xl bg-sand/30 border border-line">
            <div className="mono text-[10px] text-graphite">Digest Integrity</div>
            <b className="fd text-xl text-teal">SHA-256</b>
          </div>
        </div>
      </div>
    );
  }

  // AtMed Healthcare
  return (
    <div className="bg-paper p-6 md:p-8 border-b border-line">
      <div className="p-5 rounded-xl bg-cream border border-line flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-teal" />
            <b className="fd text-xl">Consultation Live · E2E Encrypted</b>
          </div>
          <p className="text-xs text-graphite max-w-md">
            Dynamic bitrate WebRTC pipeline maintaining 1080p stream synchronization across fluctuating cellular bandwidth.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-paper border border-line text-center min-w-[100px]">
            <span className="mono text-[9px] text-graphite block">Audio / Video</span>
            <b className="mono text-xs text-teal font-semibold">WebRTC · E2E</b>
          </div>
          <div className="p-3 rounded-lg bg-paper border border-line text-center min-w-[100px]">
            <span className="mono text-[9px] text-graphite block">Local Storage</span>
            <b className="mono text-xs text-ok font-semibold">SQLite Sync</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  // Find next and previous project
  const currentIndex = PROJECT_SLUGS.indexOf(slug);
  const prevSlug = currentIndex > 0 ? PROJECT_SLUGS[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < PROJECT_SLUGS.length - 1
      ? PROJECT_SLUGS[currentIndex + 1]
      : null;

  const prevProject = prevSlug ? PROJECTS_DATA[prevSlug] : null;
  const nextProject = nextSlug ? PROJECTS_DATA[nextSlug] : null;

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
      {/* Top Fixed Header Navbar */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-line shadow-xs">
        <div className="h-16 wrap flex items-center justify-between">
          <Link
            href="/#selected-works"
            className="inline-flex items-center gap-1.5 sm:gap-2 mono text-xs sm:text-sm text-graphite hover:text-verm transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
            <span>
              <span className="hidden sm:inline">Back to </span>Overview
            </span>
          </Link>

          <Link
            href="/"
            className="fd text-xl sm:text-2xl font-semibold tracking-tight hover:text-verm transition-colors"
          >
            PKS
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="mailto:praveenkumarselvan02@gmail.com?subject=Inquiry%20about%20Architecture"
              className="btn btn-solid !py-2 !px-2.5 sm:!px-4 text-[11px] sm:text-xs font-mono tracking-wider"
            >
              <span className="hidden sm:inline">Discuss Architecture</span>
              <span className="sm:hidden">Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="wrap py-8 sm:py-12">
        {/* ========================================================= */}
        {/* EDITORIAL HEADER & ARCHIVAL MASTHEAD (Matching Screenshot) */}
        {/* ========================================================= */}
        <section className="mb-10 sm:mb-14 pb-8 border-b border-line">
          <div className="flex flex-col gap-4">
            {/* Top kicker row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <Link
                href="/#selected-works"
                className="inline-flex items-center gap-1.5 mono text-[11px] font-semibold text-graphite hover:text-verm transition-colors uppercase tracking-wider group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                BACK TO OVERVIEW
              </Link>
              <span className="text-line">•</span>
              <span className="mono text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-cream border border-line text-ink font-semibold tracking-wider">
                ARCHIVE 01 · IN-DEPTH ARCHITECTURAL DISPATCHES
              </span>
              <span className="text-line hidden sm:inline">•</span>
              <span className="mono text-[10px] sm:text-[11px] text-graphite hidden sm:inline">
                Bengaluru Engineering Desk
              </span>
            </div>

            {/* Editorial Heading + Subtitle on Left, Ledger Index Box on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <h1 className="fd text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.12]">
                  Engineering case studies &amp; real-world products.
                </h1>
                <p className="text-graphite text-sm sm:text-base leading-relaxed max-w-2xl">
                  A systematic breakdown of six flagship production architectures tackling high-throughput real-time telemetry, complex enterprise state machines, low-latency transit dispatch, hyperlocal discovery, and resilient offline-first systems. Every case details the actual engineering friction, technical trade-offs, and measurable browser metrics.
                </p>
              </div>

              {/* Right Side: LEDGER INDEX Box */}
              <div className="lg:col-span-5 rounded-xl border border-line bg-cream/70 dark:bg-stone-900/60 p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-line mb-2">
                  <span className="mono text-[11px] uppercase tracking-wider font-semibold text-graphite">
                    LEDGER INDEX
                  </span>
                  <span className="mono text-[11px] text-verm font-medium">
                    {LEDGER_ITEMS.length} primary case studies
                  </span>
                </div>

                <nav className="flex flex-col gap-0.5" aria-label="Ledger Index">
                  {LEDGER_ITEMS.map((item) => {
                    const isActive = item.slug === slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/projects/${item.slug}`}
                        className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs transition-colors ${
                          isActive
                            ? 'bg-sand/80 dark:bg-stone-800 text-ink font-semibold shadow-xs'
                            : 'text-graphite hover:text-ink hover:bg-sand/40'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isActive ? 'bg-verm animate-pulse' : 'bg-graphite/40'
                            }`}
                          />
                          <span
                            className={`truncate ${
                              isActive ? 'text-ink font-semibold' : 'text-graphite'
                            }`}
                          >
                            {item.num} / {item.category}
                          </span>
                        </div>
                        <span
                          className={`mono text-[11px] shrink-0 ml-2 ${
                            isActive
                              ? 'text-verm font-semibold'
                              : 'text-graphite/80'
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CASE STUDY SECTION: Asymmetric Two-Column Grid */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Spec Sheet & Key Metadata */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-line bg-cream p-6 md:p-8 flex flex-col gap-6 shadow-sm">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="mono text-xs text-verm font-semibold tracking-wider">
                    {project.caseTag} / {project.category}
                  </span>
                  <span
                    className={`mono text-[10px] px-2.5 py-0.5 rounded-full border font-semibold flex items-center gap-1.5 ${
                      project.statusColor || 'text-ok bg-ok/10 border-ok/30'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.regionOrScopeTag}
                  </span>
                </div>

                <h2 className="fd text-3xl sm:text-4xl font-medium tracking-tight mb-2 text-ink">
                  {project.title}
                </h2>
                <p className="text-graphite text-sm leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Studio & Role Specs */}
              <div className="border-t border-line pt-4 space-y-3 mono text-xs">
                {project.metadata.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-2">
                    <span className="text-graphite shrink-0">{item.label}</span>
                    <b className="font-semibold text-ink text-right">{item.value}</b>
                  </div>
                ))}
              </div>

              {/* Key Optimization Highlight Box */}
              <div className="rounded-xl border border-line bg-paper p-4">
                <div className="flex items-center gap-1.5 mono text-[10px] text-verm font-semibold mb-1">
                  <Zap className="w-3.5 h-3.5 text-verm" />
                  {project.highlightBox.kicker}
                </div>
                <div className="fd text-2xl font-medium text-ink my-1">
                  {project.highlightBox.metric}
                </div>
                <p className="text-xs text-graphite leading-relaxed">
                  {project.highlightBox.desc}
                </p>
              </div>

              {/* Stack Badges */}
              <div>
                <span className="mono text-[11px] text-graphite block mb-2 font-semibold">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill pill-t !text-[11px] !py-1 !px-2.5 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Case Deep-Dive & Architecture */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Top Visual Card */}
            <div className="rounded-2xl border border-line bg-cream overflow-hidden shadow-sm">
              <div className="px-5 py-3 border-b border-line flex flex-wrap items-center justify-between text-xs mono bg-sand/40">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ok" />
                  <span className="font-semibold text-ink">
                    {project.bannerHeader}
                  </span>
                </div>
                <span className="text-graphite italic font-serif">
                  {project.bannerSub}
                </span>
              </div>

              {/* Dynamic Project Visual Frame */}
              <ProjectVisualFrame project={project} />

              {/* Optional 3-Column Stats Row (like Intra 3.0) */}
              {project.threeStatsRow && (
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line bg-cream border-t border-line">
                  {project.threeStatsRow.map((stat, i) => (
                    <div key={i} className="p-4">
                      <span className="mono text-[10px] text-graphite block mb-1">
                        {stat.kicker}
                      </span>
                      <b className="fd text-lg text-ink block mb-0.5">{stat.stat}</b>
                      <p className="text-xs text-graphite leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Extra Banner Cards (like Edubotix Handshake cards) */}
            {project.extraBannerCards && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.extraBannerCards.map((card, i) => (
                  <div key={i} className="p-4 rounded-xl border border-line bg-paper">
                    <span className="mono text-[10px] text-verm font-semibold block mb-1">
                      {card.kicker}
                    </span>
                    <b className="fd text-base block mb-1">{card.title}</b>
                    <p className="text-xs text-graphite leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Executive Project Summary Box */}
            {project.summary && (
              <section className="p-6 md:p-7 rounded-2xl bg-cream border border-line shadow-xs">
                <span className="mono text-[11px] text-graphite uppercase tracking-wider font-semibold block mb-1.5">
                  Executive Project Summary
                </span>
                <p className="text-ink text-base md:text-lg leading-relaxed font-serif">
                  {project.summary}
                </p>
              </section>
            )}

            {/* The Engineering Friction */}
            <section className="rounded-2xl border border-line bg-paper p-6 md:p-8 shadow-sm">
              <div className="mono text-xs text-verm font-semibold tracking-wider mb-2">
                {project.friction.kicker}
              </div>
              <h3 className="fd text-2xl md:text-3xl font-medium tracking-tight mb-4 text-ink">
                {project.friction.title}
              </h3>
              <p className="text-graphite text-base md:text-lg leading-relaxed">
                {project.friction.desc}
              </p>

              {/* Key Friction Points */}
              {project.frictionPoints && (
                <div className="mt-6 pt-6 border-t border-line">
                  <span className="mono text-[11px] text-graphite uppercase tracking-wider font-semibold block mb-4">
                    Key Friction Points
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.frictionPoints.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-cream border border-line flex flex-col justify-between"
                      >
                        <div>
                          <div className="mono text-xs text-verm font-bold mb-1.5">
                            {String(idx + 1).padStart(2, '0')}. {pt.title}
                          </div>
                          <p className="text-xs text-graphite leading-relaxed">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* The Architectural Solution */}
            <section className="rounded-2xl border border-line bg-paper p-6 md:p-8 shadow-sm">
              <div className="mono text-xs text-verm font-semibold tracking-wider mb-2">
                {project.solution.kicker}
              </div>
              <h3 className="fd text-2xl md:text-3xl font-medium tracking-tight mb-4 text-ink">
                {project.solution.title}
              </h3>
              <p className="text-graphite text-base md:text-lg leading-relaxed mb-6">
                {project.solution.desc}
              </p>

              {/* Key Architectural Implementations */}
              {project.architecturalImplementations && (
                <div className="mb-6 pt-6 border-t border-line">
                  <span className="mono text-[11px] text-graphite uppercase tracking-wider font-semibold block mb-4">
                    Key Architectural Implementations
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.architecturalImplementations.map((impl, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-cream border border-line"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 rounded-full bg-teal" />
                          <b className="fd text-sm text-ink">{impl.title}</b>
                        </div>
                        <p className="text-xs text-graphite leading-relaxed">
                          {impl.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2-Column High-Impact Stats */}
              {project.stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-line pt-6">
                  <div className="p-4 rounded-xl bg-cream border border-line">
                    <span className="mono text-[11px] text-graphite block mb-1">
                      {project.stats[0].label}
                    </span>
                    <div className="fd text-2xl md:text-3xl font-semibold text-ink my-1">
                      {project.stats[0].value}
                    </div>
                    <p className="text-xs text-graphite">
                      {project.stats[0].sub}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cream border border-line">
                    <span className="mono text-[11px] text-graphite block mb-1">
                      {project.stats[1].label}
                    </span>
                    <div className="fd text-2xl md:text-3xl font-semibold text-ok my-1">
                      {project.stats[1].value}
                    </div>
                    <p className="text-xs text-graphite">
                      {project.stats[1].sub}
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Production Metrics & Telemetry Table */}
            {project.telemetryTable && (
              <section className="rounded-2xl border border-line bg-paper p-6 md:p-8 shadow-sm overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="mono text-xs text-verm font-semibold tracking-wider">
                    PRODUCTION METRICS &amp; TELEMETRY
                  </div>
                  <span className="mono text-[10px] text-graphite">
                    Measured in Live Production Operations
                  </span>
                </div>

                <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-line mono text-graphite">
                        <th className="py-2.5 font-semibold">Metric</th>
                        <th className="py-2.5 font-semibold">Baseline</th>
                        <th className="py-2.5 font-semibold">Optimized</th>
                        <th className="py-2.5 font-semibold">Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {project.telemetryTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-sand/30 transition-colors">
                          <td className="py-3 font-semibold text-ink">{row.metric}</td>
                          <td className="py-3 mono text-graphite">{row.baseline}</td>
                          <td className="py-3 mono font-bold text-ink">{row.optimized}</td>
                          <td className="py-3">
                            <span className="pill pill-t !text-[11px] !py-0.5 !px-2.5 text-teal">
                              {row.impact}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Key Deliverables & Outcomes */}
            {project.deliverables && (
              <section className="rounded-2xl border border-line bg-paper p-6 md:p-8 shadow-sm">
                <div className="mono text-xs text-verm font-semibold tracking-wider mb-2">
                  KEY DELIVERABLES &amp; OUTCOMES
                </div>
                <h3 className="fd text-2xl font-medium tracking-tight mb-4 text-ink">
                  Engineered for Scale &amp; Verifiable Production Durability
                </h3>
                <ul className="space-y-3">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-graphite">
                      <Check className="w-5 h-5 text-teal shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technology Stack Architecture */}
            {project.techStackDetailed && (
              <section className="rounded-2xl border border-line bg-cream p-6 md:p-8 shadow-sm">
                <div className="mono text-xs text-verm font-semibold tracking-wider mb-2">
                  TECHNOLOGY STACK ARCHITECTURE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {project.techStackDetailed.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-paper border border-line flex flex-col justify-between"
                    >
                      <span className="mono text-[10px] text-graphite uppercase tracking-wider block mb-1">
                        {item.label}
                      </span>
                      <b className="fd text-sm text-ink">{item.value}</b>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Next / Prev Project Navigation Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4 pt-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="flex-1 p-5 rounded-xl border border-line bg-cream hover:bg-sand transition-colors flex items-center gap-4 group"
                >
                  <ArrowLeft className="w-5 h-5 text-graphite group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="mono text-[10px] text-graphite">Previous Case</div>
                    <b className="fd text-lg font-medium text-ink">{prevProject.title}</b>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="flex-1 p-5 rounded-xl border border-line bg-cream hover:bg-sand transition-colors flex items-center justify-between text-right gap-4 group"
                >
                  <div>
                    <div className="mono text-[10px] text-graphite">Next Case</div>
                    <b className="fd text-lg font-medium text-ink">{nextProject.title}</b>
                  </div>
                  <ArrowRight className="w-5 h-5 text-graphite group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>

            {/* Warm Call to Action */}
            <section className="p-6 md:p-8 rounded-2xl bg-cream border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm mt-4">
              <div className="max-w-xl space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="mono text-xs font-semibold uppercase tracking-wider text-ink">
                    Deep Dives &amp; Repository Walkthroughs
                  </span>
                </div>
                <h4 className="fd text-2xl font-medium text-ink">
                  Inspect the codebase or walk through the architecture.
                </h4>
                <p className="text-sm text-graphite leading-relaxed">
                  Want to review architectural diagrams, inspect live performance profiles, or talk through state orchestration? Reach out directly for an unfiltered design &amp; code walkthrough.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href="mailto:praveenkumarselvan02@gmail.com?subject=Codebase%20Walkthrough"
                  className="btn btn-solid !py-3 !px-5 text-xs text-center font-mono tracking-wider"
                >
                  01 / GET IN TOUCH
                </a>
                <Link
                  href="/#selected-works"
                  className="btn btn-ghost !py-3 !px-5 text-xs text-center font-mono tracking-wider border border-line"
                >
                  02 / ALL PROJECTS
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
