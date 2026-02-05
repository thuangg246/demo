import { useState } from "react";
import { WalletHeader } from "./components/WalletHeader";
import { BalanceCarousel } from "./components/BalanceCarousel";
import { TabNavigation } from "./components/TabNavigation";
import { TransactionList } from "./components/TransactionList";
import { BottomNav } from "./components/BottomNav";
import { FloatingActions } from "./components/FloatingActions";
import type { WalletType, WalletData } from "./types";

function App() {
  const [activeTab, setActiveTab] = useState<WalletType>("PV");

  const walletData: WalletData = {
    PV: {
      type: "PV",
      balance: 3750,
      label: "SỐ DƯ",
    },
    AV: {
      type: "AV",
      balance: 5600,
      label: "SỐ DƯ",
    },
    GV: {
      type: "GV",
      balance: 3700,
      label: "SỐ DƯ",
    },
    REF: {
      type: "REF",
      balance: 2500,
      label: "SỐ DƯ",
    },
    transactions: [
      {
        id: "1",
        location: "SM Mall",
        time: "5 giây trước",
        amount: -250,
      },
      {
        id: "2",
        location: "SM Mall",
        time: "25 phút trước",
        amount: 250,
      },
      {
        id: "3",
        location: "SM Mall",
        time: "1 tiếng trước",
        amount: -250,
      },
      {
        id: "4",
        location: "SM Mall",
        time: "2 tiếng trước",
        amount: 250,
      },
    ],
  };

  return (
    <div className="h-screen bg-primary flex flex-col overflow-hidden">
      <WalletHeader />
      <BalanceCarousel
        activeTab={activeTab}
        walletData={walletData}
        onTabChange={setActiveTab}
      />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <TransactionList transactions={walletData.transactions} />
      <div className="flex justify-between px-4 py-2">
        <BottomNav />
        <FloatingActions />
      </div>
    </div>
  );
}

export default App;
