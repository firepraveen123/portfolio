export default function Footer() {
  return (
    <footer className="bg-paper border-t border-line py-12">
      <div className="wrap flex flex-col md:flex-row justify-between gap-6 md:items-center">
        <div>
          <div className="fd text-2xl font-semibold">Praveen Kumar S.</div>
          <div className="mono text-graphite">
            Senior Frontend Engineer &amp; Web Architect © 2026
          </div>
          <p className="fd italic text-graphite mt-2">
            “Bringing designs to life, one pixel and one frame at a time.”
          </p>
        </div>

        <div className="flex gap-6 mono text-graphite">
          <a className="hover:text-verm transition-colors" href="#impact">
            Impact
          </a>
          <a className="hover:text-verm transition-colors" href="#selected-works">
            Works
          </a>
          <a className="hover:text-verm transition-colors" href="#engineering-journey">
            Journey
          </a>
          <a className="hover:text-verm transition-colors" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

