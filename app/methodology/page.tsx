import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Methodology — The Real-Time Trillionaires",
  description:
    "How we (do not) calculate the net worth of the world's only trillionaire.",
};

// NOTE: Placeholder copy. Expand this before submitting for AdSense review.
export default function MethodologyPage() {
  return (
    <LegalPage title="Methodology">
      <p>
        The Real-Time Trillionaires is a satirical project. The figures displayed on
        this site are <strong>simulated</strong> and generated algorithmically in your
        browser. They are not sourced from financial filings, market data providers,
        or any individual&apos;s actual holdings, and they should not be relied upon
        for any purpose.
      </p>

      <h2>How the number moves</h2>
      <p>
        Our flagship ticker begins at a fixed baseline of $1.1 trillion. Every two to
        four seconds, a small pseudo-random adjustment — between ten thousand and one
        and a half million dollars — is added to or subtracted from the running total.
        This produces the live &quot;market&quot; feel you see on the homepage. There
        is no underlying portfolio, exchange feed, or valuation model. It is theater.
      </p>

      <h2>Who qualifies</h2>
      <p>
        To appear on the list, a person must possess a net worth of at least one
        trillion United States dollars. At the time of writing, our research desk has
        identified exactly one qualifying individual. The remaining positions are held
        open in the event that the club ever expands.
      </p>

      <h2>Corrections</h2>
      <p>
        Because every number here is fictional, we are delighted to report that our
        error rate is both total and irrelevant. If you believe you belong on this
        list, you almost certainly do not.
      </p>
    </LegalPage>
  );
}
