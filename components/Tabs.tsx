// Decorative, non-interactive tab strip — mirrors the Forbes/Bloomberg list
// chrome. Only "Top 1" is active; the others are inert by design.
const TABS = ["Top 1", "Women", "Youngest"] as const;

export default function Tabs() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div
        role="presentation"
        className="flex items-center gap-6 border-b border-line text-sm"
      >
        {TABS.map((tab, i) => {
          const active = i === 0;
          return (
            <span
              key={tab}
              aria-disabled="true"
              className={`-mb-px border-b-2 pb-3 pt-1 font-medium ${
                active
                  ? "border-forbes-blue text-foreground"
                  : "border-transparent text-zinc-600"
              }`}
            >
              {tab}
            </span>
          );
        })}
      </div>
    </div>
  );
}
