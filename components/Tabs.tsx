"use client";

export type RankingTab = "top" | "women" | "youngest";

const TABS: { key: RankingTab; label: string }[] = [
  { key: "top", label: "Top 1" },
  { key: "women", label: "Women" },
  { key: "youngest", label: "Youngest" },
];

interface TabsProps {
  active: RankingTab;
  onChange: (tab: RankingTab) => void;
}

export default function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div
        role="tablist"
        aria-label="Trillionaire rankings"
        className="flex items-center gap-6 border-b border-line text-sm"
      >
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={isActive}
              aria-controls="rankings-panel"
              onClick={() => onChange(tab.key)}
              className={`-mb-px cursor-pointer border-b-2 pb-3 pt-1 font-medium transition-colors ${
                isActive
                  ? "border-forbes-blue text-foreground"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
