import TopNav from "@/components/TopNav";
import AdSlot, { AD_ENABLED } from "@/components/AdSlot";
import Header from "@/components/Header";
import BreakingBanner from "@/components/BreakingBanner";
import StatsBar from "@/components/StatsBar";
import Rankings from "@/components/Rankings";
import Footer from "@/components/Footer";

// Formatted once on the server so the banner's date matches on hydration.
const todayEastern = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "America/New_York",
}).format(new Date());

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex-1">
        <AdSlot />
        <Header />
        {/* Temporary placeholder shown until the AdSense unit goes live.
            Flip AD_ENABLED in components/AdSlot.tsx and the ad slot above
            takes over while this banner disappears. */}
        {!AD_ENABLED && <BreakingBanner date={todayEastern} />}
        <StatsBar />
        <Rankings />
      </main>
      <Footer />
    </div>
  );
}
