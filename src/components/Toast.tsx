'use client';

import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  const isVisible = Boolean(message);

  return (
    <div
      id="toast"
      className={`fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-300 bg-[#161512] text-[#f4efe6] border border-white/15 shadow-xl px-4 py-2 rounded-lg flex items-center gap-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <CheckCircle className="w-4 h-4 text-ok" />
      <span className="mono">{message || 'Email address copied'}</span>
    </div>
  );
}

