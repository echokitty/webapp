import { useState } from "react";

export interface TopWalletType {
  address: string;
  ens?: string;
  image?: string;
  pnl: number;
}

const data: TopWalletType[] = [
  {
    address: "0x9c5083dd4838e120dbeac44c052179692aa5dac5",
    ens: "pennilesswassie.eth",
    pnl: 34.78,
  },
  {
    address: "0xf07A2439296e07Bc4320AF924E655a01fb69D89C",
    ens: "adamscochran.eth",
    image:
      "https://ipfs.io/ipfs/QmQoNP19XomUHPof2sSQx745mrwhBZk2gC9csc2cKjxUQC",
    pnl: 174.01,
  },
  {
    address: "0x8a7f7c5b556b1298a74c0e89df46eba117a2f6c1",
    ens: "token🐳.eth",
    pnl: 23.1,
  },
  {
    address: "0x398d282487b44b6e53ce0aebca3cb60c3b6325e9",
    pnl: 11.19,
  },
  {
    address: "0x42f9134E9d3Bf7eEE1f8A5Ac2a4328B059E7468c",
    ens: "kain.eth",
    pnl: 1230.1,
  },
  {
    address: "0xe8c19dB00287e3536075114B2576c70773E039BD",
    pnl: 2.31,
  },
];

const useTopWallets = (): TopWalletType[] => {
  const [topWallets, setTopWallets] = useState(data);

  return topWallets;
};

export default useTopWallets;
