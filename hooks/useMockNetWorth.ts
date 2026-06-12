"use client";

import { useEffect, useState } from "react";

// Deterministic base so SSR output and the first client render match (no
// hydration mismatch). Ticking only begins after mount, inside useEffect.
const BASE_VALUE = 1_100_000_000_000; // $1.1T

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export type NetWorthDirection = "up" | "down" | "none";

export interface MockNetWorth {
  netWorth: number;
  formatted: string;
  direction: NetWorthDirection;
  tick: number;
}

export function useMockNetWorth(): MockNetWorth {
  const [netWorth, setNetWorth] = useState(BASE_VALUE);
  const [direction, setDirection] = useState<NetWorthDirection>("none");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let tickTimer: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      // Every 2–4 seconds, randomized via setTimeout (not setInterval).
      const delay = 2000 + Math.random() * 2000;

      tickTimer = setTimeout(() => {
        // Randomly add OR subtract a value between 10,000 and 1,500,000.
        const magnitude = Math.floor(
          10_000 + Math.random() * (1_500_000 - 10_000),
        );
        const goesUp = Math.random() >= 0.5;
        const change = goesUp ? magnitude : -magnitude;

        setNetWorth((prev) => prev + change);
        setDirection(goesUp ? "up" : "down");
        setTick((prev) => prev + 1);

        // direction resets to "none" 500ms after each change.
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => setDirection("none"), 500);

        scheduleNext();
      }, delay);
    };

    scheduleNext();

    // Clean up timers on unmount.
    return () => {
      clearTimeout(tickTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  return {
    netWorth,
    formatted: currencyFormatter.format(netWorth),
    direction,
    tick,
  };
}
