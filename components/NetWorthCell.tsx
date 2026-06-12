"use client";

import { useMockNetWorth } from "@/hooks/useMockNetWorth";

export default function NetWorthCell() {
  const { formatted, direction, tick } = useMockNetWorth();

  const isUp = direction === "up";
  const isDown = direction === "down";

  // key={tick} remounts the inner span on every change so the 500ms flash
  // animation restarts cleanly. transition-colors handles the fade back to
  // white once `direction` resets to "none".
  return (
    <span className="inline-flex items-center justify-end gap-1.5 whitespace-nowrap">
      <span
        key={tick}
        className={`tabular font-display text-lg font-bold transition-colors duration-500 sm:text-xl ${
          isUp ? "flash-up text-up" : isDown ? "flash-down text-down" : "text-white"
        }`}
      >
        {formatted}
      </span>
      <span
        aria-hidden="true"
        className={`w-3 text-xs ${
          isUp ? "text-up" : isDown ? "text-down" : "text-transparent"
        }`}
      >
        {isUp ? "▲" : isDown ? "▼" : ""}
      </span>
    </span>
  );
}
