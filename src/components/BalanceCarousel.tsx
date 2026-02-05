import React from "react";
import { motion } from "framer-motion";
import { BalanceCard } from "./BalanceCard";
import type { WalletType, WalletData } from "../types";

interface BalanceCarouselProps {
  activeTab: WalletType;
  walletData: WalletData;
  onTabChange: (type: WalletType) => void;
}

const WALLET_ORDER: WalletType[] = ["PV", "AV", "GV", "REF"];

export const BalanceCarousel: React.FC<BalanceCarouselProps> = ({
  activeTab,
  walletData,
  onTabChange,
}) => {
  const activeIndex = WALLET_ORDER.indexOf(activeTab);
  const cardWidth = 286;
  const gap = 16;

  return (
    <div className="relative overflow-visible mb-6 flex justify-center items-center h-[170px]">
      <div className="w-[286px] h-full relative">
        <motion.div
          className="flex absolute items-center h-full"
          style={{ width: WALLET_ORDER.length * (cardWidth + gap) }}
          animate={{
            x: -activeIndex * (cardWidth + gap),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {WALLET_ORDER.map((type) => {
            const wallet = walletData[type];
            const isSelected = type === activeTab;

            return (
              <motion.div
                key={type}
                className="relative w-[286px] mr-4 flex flex-col justify-center cursor-pointer shrink-0"
                initial={false}
                animate={{
                  height: isSelected ? 170 : 105,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => onTabChange(type)}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <BalanceCard wallet={wallet} />
                  {!isSelected && (
                    <div className="absolute inset-0 bg-[#17426D] z-10" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
