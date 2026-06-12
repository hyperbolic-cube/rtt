import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — The Real-Time Trillionaires",
  description: "The terms governing your use of this satirical website.",
};

// NOTE: Placeholder copy. Have these reviewed and expanded before submitting
// for AdSense review or any real launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        By accessing The Real-Time Trillionaires, you agree to these terms. If you do
        not agree, please do not use the site. We may update these terms from time to
        time, and continued use constitutes acceptance of any changes.
      </p>

      <h2>Satire and accuracy</h2>
      <p>
        This website is a work of parody and commentary. All names, figures, rankings,
        and statistics are <strong>simulated or fictionalized</strong> for comedic and
        editorial effect. Nothing here is a statement of fact about any real person&apos;s
        finances, and nothing here constitutes financial, investment, or legal advice.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided &quot;as is&quot; without warranties of any kind. We do
        not guarantee that it will be available, accurate, or error-free. To the
        fullest extent permitted by law, we disclaim liability for any loss arising
        from your use of, or reliance on, anything presented here.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Trademarks, names, and likenesses referenced on this site belong to their
        respective owners and are used here for the purposes of commentary and parody.
        Their use does not imply endorsement, affiliation, or sponsorship.
      </p>
    </LegalPage>
  );
}
