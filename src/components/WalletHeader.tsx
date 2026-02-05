import React from "react";
import { ArrowUp, ChevDown, Logo, ThreeDot } from "../assets";

export const WalletHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-primary px-4 py-2 mb-7.5">
      <div className="flex justify-between mb-2.5">
        <button className="text-sm text-[#EAFFFF]">Cancel</button>
        <div className="flex gap-1.5 items-center">
          <img src={Logo} alt="logo" />
          <span className="text-xs text-[#EAFFFF] font-bold">SM CENTRAL</span>
        </div>
        <div className="flex gap-2">
          <button>
            <img src={ChevDown} alt="chev down" />
          </button>
          <button>
            <img src={ThreeDot} alt="three dot" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={ArrowUp} alt="arrow up" />
          <h1 className="text-lg font-bold text-white">WALLET</h1>
        </div>
      </div>
    </div>
  );
};
