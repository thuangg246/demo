import React from "react";
import type { WalletBalance } from "../types";

interface BalanceCardProps {
  wallet: WalletBalance;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ wallet }) => {
  const hasMultipleButtons = wallet.type === "PV";
  const hasSingleButton = wallet.type === "AV" || wallet.type === "GV";
  const hasTwoButtons = wallet.type === "REF";

  return (
    <div className="gradient-card rounded-3xl px-6 py-4 h-full flex flex-col justify-between">
      <div className="mb-1 text-[#EAFFFF]">
        <h2 className="text-sm font-bold">{wallet.type}</h2>
      </div>

      <div className="mb-2 text-[#EAFFFF]">
        <p className="text-[10px]">{wallet.label}</p>
        <p className="font-bold">
          <span className="text-[37.5px] font-bold ">
            {wallet.balance.toLocaleString()}
          </span>
          <span className="text-sm ml-1">Point</span>
        </p>
      </div>

      <div className="flex gap-3">
        {hasMultipleButtons && (
          <div className="flex justify-between w-full">
            <button className="bg-[#EAFFFF] min-w-[100px] h-8 hover:bg-[#EAFFFF]/80 font-bold px-4 rounded-lg transition-all shadow-lg flex items-center justify-center">
              <span className="bg-linear-to-r from-[#00D1FE] to-[#B220FC] bg-clip-text text-transparent text-[13px]">
                Nạp
              </span>
            </button>
            <button className="bg-transparent min-w-[100px] h-8 hover:bg-white/30 backdrop-blur-sm text-[13px] text-white font-bold px-4 rounded-lg border border-[#EAFFFF] transition-all flex items-center justify-center">
              Rút
            </button>
          </div>
        )}
        {hasSingleButton && (
          <button className="bg-[#EAFFFF] h-8 hover:bg-[#EAFFFF]/80 font-bold px-4 rounded-lg transition-all shadow-lg flex items-center justify-center">
            <span className="bg-linear-to-r from-[#00D1FE] to-[#B220FC] bg-clip-text text-transparent text-[13px]">
              Xem lịch sử
            </span>
          </button>
        )}
        {hasTwoButtons && (
          <div className="flex justify-between w-full">
            <button className="bg-[#EAFFFF] h-8 hover:bg-[#EAFFFF]/80 font-bold px-4 rounded-lg transition-all shadow-lg flex items-center justify-center">
              <span className="bg-linear-to-r from-[#00D1FE] to-[#B220FC] bg-clip-text text-transparent text-[13px]">
                Xem lịch sử
              </span>
            </button>
            <button className="bg-transparent font-bold h-8 hover:bg-white/30 backdrop-blur-sm text-[13px] text-white px-4 rounded-lg border border-[#EAFFFF] transition-all flex items-center justify-center">
              Chuyển PV
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
