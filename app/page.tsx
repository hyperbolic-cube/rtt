import TopNav from "@/components/TopNav";
import AdSlot from "@/components/AdSlot";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import Tabs from "@/components/Tabs";
import TrillionairesTable from "@/components/TrillionairesTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex-1">
        <AdSlot />
        <Header />
        <StatsBar />
        <Tabs />
        <TrillionairesTable />
      </main>
      <Footer />
    </div>
  );
}
