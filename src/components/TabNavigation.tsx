import React from "react";
import type { WalletType } from "../types";

interface TabNavigationProps {
  activeTab: WalletType;
  onTabChange: (tab: WalletType) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: WalletType[] = ["PV", "AV", "GV", "REF"];

  return (
    <div className="px-4 mb-8">
      <div className="bg-second/40 rounded-2xl p-2 flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex-1 p-2 text-sm rounded-lg font-bold transition-all duration-300 ${
              activeTab === tab
                ? "gradient-card text-white shadow-lg"
                : "text-[#A2BFE1] hover:text-white/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
