interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "1", label: "Member of the trillion-dollar club" },
  { value: "$1.1T", label: "Total wealth tracked" },
  { value: "∞%", label: "Wealth gap vs. the average human" },
  { value: "1", label: "New members this year" },
];

export default function StatsBar() {
  return (
    <section
      aria-label="Key statistics"
      className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6"
    >
      <dl className="grid grid-cols-2 divide-line overflow-hidden rounded-lg border border-line bg-ink-soft md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-5 sm:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line" : ""
            } md:border-t-0 ${i > 0 ? "md:border-l" : ""}`}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="tabular block font-display text-3xl font-bold text-forbes-blue sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs leading-snug text-zinc-500">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
