import React from "react";
import type { Transaction } from "../types";
import { Plus } from "../assets";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  return (
    <div className="flex-1 overflow-y-auto px-4">
      <h3 className="text-[#EAFFFF] font-bold text-xl mb-6 sticky top-0 bg-primary pt-2 pb-2 z-10">
        Giao dịch
      </h3>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center gap-4 bg-second/40 rounded-2xl px-4 py-2 hover:bg-primary/60 transition-all"
          >
            <div className="w-10 h-10 gradient-card rounded-full flex items-center justify-center flex-shrink-0">
              <img src={Plus} alt="plus" />
            </div>

            <div className="flex-1 gap-1 flex flex-col min-w-0">
              <p className="text-white text-sm font-bold truncate">
                {transaction.location}
              </p>
              <p className="text-[#EEE3F1B2] text-[10px]">{transaction.time}</p>
            </div>

            <div
              className={`text-base ${
                transaction.amount > 0 ? "text-[#06C9FB]" : "text-[#CF7CFF]"
              }`}
            >
              {transaction.amount > 0 ? "+" : ""}
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
