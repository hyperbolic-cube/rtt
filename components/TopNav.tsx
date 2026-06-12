export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="font-display text-xl font-black tracking-tight text-foreground"
        >
          RTT<span className="text-forbes-red">.</span>
        </a>
      </nav>
    </header>
  );
}
