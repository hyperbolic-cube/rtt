"use client";

import { useState } from "react";
import Tabs, { type RankingTab } from "@/components/Tabs";
import TrillionairesTable from "@/components/TrillionairesTable";

export default function Rankings() {
  const [tab, setTab] = useState<RankingTab>("top");

  return (
    <>
      <Tabs active={tab} onChange={setTab} />
      <TrillionairesTable variant={tab} />
    </>
  );
}
