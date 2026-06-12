import LiveClock from "@/components/LiveClock";

export default function Header() {
  return (
    <header className="hero-glow mx-auto w-full max-w-5xl px-4 pb-8 pt-6 text-center sm:px-6 sm:pt-10">
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
          The World&apos;s
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl">
          Real-Time Trillionaires
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-zinc-400 sm:text-lg">
          Tracking the world&apos;s most exclusive club.
        </p>
        <div className="mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm">
          <span
            className="inline-block h-2 w-2 animate-pulse rounded-full bg-up"
            aria-hidden="true"
          />
          <LiveClock />
        </div>
      </div>
    </header>
  );
}
