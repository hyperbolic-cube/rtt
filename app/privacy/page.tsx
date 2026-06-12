import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — The Real-Time Trillionaires",
  description: "Our privacy policy and how we handle data on this satirical site.",
};

// NOTE: Placeholder copy. Expand this with your real policy (and ad/analytics
// disclosures) before submitting for AdSense review.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This page explains how The Real-Time Trillionaires (&quot;we&quot;,
        &quot;us&quot;) handles information when you visit this website. We aim to
        collect as little as possible. The site does not require an account, and we do
        not ask you to submit personal information to use it.
      </p>

      <h2>Information we collect</h2>
      <p>
        The core experience runs entirely in your browser and stores nothing on your
        device. We do not use cookies, local storage, or session storage for the
        ticker itself. If we enable advertising or analytics in the future, those
        third-party providers may set their own cookies and collect usage data in
        accordance with their respective policies, and we will update this notice
        accordingly.
      </p>

      <h2>Advertising</h2>
      <p>
        We may display advertisements served by third-party networks such as Google
        AdSense. These partners may use cookies or device identifiers to serve and
        measure ads. You can review and control personalized advertising through your
        ad provider&apos;s settings and applicable industry opt-out tools.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to the address you choose to
        publish here before launch. As a satirical project, we have no business
        relationship with any individual named or implied on this site.
      </p>
    </LegalPage>
  );
}
