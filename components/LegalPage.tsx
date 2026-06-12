import Link from "next/link";
import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-14 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-forbes-blue"
      >
        <span aria-hidden="true">←</span> Back to home
      </Link>

      <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl">
        {title}
      </h1>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-400 [&_a]:text-forbes-blue [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground">
        {children}
      </div>

      <p className="mt-12 border-t border-line pt-6 text-xs text-zinc-600">
        Real-Time Trillionaires is a work of satire. All figures are simulated and
        do not represent any individual&apos;s actual net worth.
      </p>
    </main>
  );
}
