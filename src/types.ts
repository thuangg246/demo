export type WalletType = "PV" | "AV" | "GV" | "REF";

export interface WalletBalance {
  type: WalletType;
  balance: number;
  label: string;
}

export interface Transaction {
  id: string;
  location: string;
  time: string;
  amount: number;
}

export interface WalletData {
  PV: WalletBalance;
  AV: WalletBalance;
  GV: WalletBalance;
  REF: WalletBalance;
  transactions: Transaction[];
}
