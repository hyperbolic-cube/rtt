import Link from "next/link";

const SHARE_TEXT =
  "I've just checked the global Trillionaires club. Elon is still drinking alone there. Check the real-time net worth.";
const SHARE_URL = "https://realtimetrillionaires.com";

function buildIntent(): string {
  const params = new URLSearchParams({ text: SHARE_TEXT, url: SHARE_URL });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

const FOOTER_LINKS = [
  { href: "/methodology", label: "Methodology" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="share" className="border-t border-line bg-ink-soft">
      <div className="mx-auto w-full max-w-5xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          He&apos;s lonely at the top.
        </h2>

        <a
          href={buildIntent()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.65l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
          </svg>
          Share on X
        </a>

        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-forbes-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-xs text-zinc-600">
          © {year} Real-Time Trillionaires · Satire. Figures are simulated.
        </p>
      </div>
    </footer>
  );
}
