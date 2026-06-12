"use client";

import { useEffect, useState } from "react";

// Renders the current time in US Eastern (EDT). Time is intentionally only
// computed on the client; we suppress hydration warning on the <time> element
// because server and client clocks will differ.
function formatEastern(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  }).format(date);
}

export default function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => setTime(formatEastern(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular text-zinc-300" suppressHydrationWarning>
      Last Updated {time || "—:—:—"} EDT
    </span>
  );
}
