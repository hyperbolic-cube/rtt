"use client";

import { useState } from "react";

interface BreakingBannerProps {
  // Pre-formatted on the server and passed in, so SSR and the first client
  // render agree (no hydration mismatch).
  date: string;
}

export default function BreakingBanner({ date }: BreakingBannerProps) {
  // Dismissed for the session only — no storage, per the no-storage rule.
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-2 sm:px-6">
      <div
        role="alert"
        className="flex items-center gap-3 rounded-md border border-forbes-red/60 bg-forbes-red/10 px-3 py-2.5 sm:px-4"
      >
        <span className="shrink-0 rounded bg-forbes-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
          Breaking
        </span>
        <p className="min-w-0 flex-1 text-xs leading-snug text-zinc-200 sm:text-sm">
          <span className="tabular mr-2 font-semibold text-forbes-red">{date}</span>
          The trillion-dollar club just admitted its first member!
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss breaking news banner"
          className="-mr-1 shrink-0 rounded p-1 text-lg leading-none text-zinc-400 transition-colors hover:text-white"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}
