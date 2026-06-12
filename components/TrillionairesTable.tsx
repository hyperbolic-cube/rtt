import Link from "next/link";
import NetWorthCell from "@/components/NetWorthCell";

export default function TrillionairesTable() {
  return (
    <section
      aria-label="Trillionaires ranking"
      className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6"
    >
      <div className="overflow-hidden rounded-lg border border-line bg-ink-soft">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-wider text-zinc-500">
              <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                Rank
              </th>
              <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                Name
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-6">
                Net Worth
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 font-semibold sm:table-cell sm:px-6"
              >
                Source
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 font-semibold sm:table-cell sm:px-6"
              >
                Country
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {/* Row 1 — the world's only trillionaire. */}
            <tr className="align-middle">
              <td className="px-4 py-4 sm:px-6">
                <span className="font-display text-2xl font-bold text-foreground">
                  1
                </span>
              </td>
              <td className="px-4 py-4 sm:px-6">
                <span className="block font-semibold text-foreground">
                  Elon Musk
                </span>
                {/* On mobile, fold Source + Country under the name. */}
                <span className="mt-0.5 block text-xs text-zinc-500 sm:hidden">
                  SpaceX, Tesla · USA
                </span>
              </td>
              <td className="px-4 py-4 text-right sm:px-6">
                <NetWorthCell />
              </td>
              <td className="hidden px-4 py-4 text-zinc-300 sm:table-cell sm:px-6">
                SpaceX, Tesla
              </td>
              <td className="hidden px-4 py-4 text-zinc-300 sm:table-cell sm:px-6">
                USA
              </td>
            </tr>

            {/* Rows 2 & 3 — vacant. The punchline: he is alone. */}
            {[2, 3].map((rank) => (
              <tr key={rank} className="align-middle text-zinc-600">
                <td className="px-4 py-4 sm:px-6">
                  <span className="font-display text-2xl font-bold text-zinc-700">
                    {rank}
                  </span>
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <span className="block italic text-zinc-600">Position vacant</span>
                  <span className="mt-0.5 block text-xs text-zinc-700 sm:hidden">
                    — · —
                  </span>
                </td>
                <td className="px-4 py-4 text-right sm:px-6">
                  <span className="tabular font-display text-lg text-zinc-700">—</span>
                </td>
                <td className="hidden px-4 py-4 text-zinc-700 sm:table-cell sm:px-6">
                  —
                </td>
                <td className="hidden px-4 py-4 text-zinc-700 sm:table-cell sm:px-6">
                  —
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 px-1 text-xs leading-relaxed text-zinc-600">
        Net worth updated in real time from simulated market data. Rankings reflect
        the trillion-dollar threshold only. See our{" "}
        <Link
          href="/methodology"
          className="text-zinc-400 underline underline-offset-2 hover:text-forbes-blue"
        >
          methodology
        </Link>
        .
      </p>
    </section>
  );
}
