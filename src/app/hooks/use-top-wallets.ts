import { useState } from "react";

export interface TopWalletType {
  address: string;
  ens: string;
  pnl: number;
}

const data: TopWalletType[] = [
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
  {
    address: "0x0a252663DBCc0b073063D6420a40319e438Cfa59",
    ens: "chase-manning.eth",
    pnl: 34.78,
  },
];

const useTopWallets = (): TopWalletType[] => {
  const [topWallets, setTopWallets] = useState(data);

  return topWallets;
};

export default useTopWallets;
