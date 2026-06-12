// Flip this to true (or wire it to an env var) once a real ad unit is pasted
// in below. While there is no ad to show, the slot renders nothing at all and
// the BreakingBanner takes its place (see app/page.tsx).
export const AD_ENABLED = false;

export default function AdSlot() {
  if (!AD_ENABLED) return null;

  return (
    <aside
      aria-label="Advertisement"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-4 sm:px-6"
    >
      <span className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        Advertisement
      </span>
      {/*
        Google AdSense leaderboard goes here.
        After AdSense approval, paste your unit, e.g.:

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="0000000000"
             data-ad-format="auto"
             data-full-width-responsive="true" />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

        ...then set AD_ENABLED above to true.
      */}
      <div
        id="ad-slot-top"
        className="flex h-[90px] w-full max-w-[728px] items-center justify-center border border-dashed border-line bg-ink-soft text-[11px] uppercase tracking-widest text-zinc-700"
      >
        728 × 90
      </div>
    </aside>
  );
}
