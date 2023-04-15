import { useState } from "react";

export interface TokenBalanceType {
  tokenAddress: string;
  balance: number;
}

export interface EventType {
  fromTokenAddress: string;
  toTokenAddress: string;
  fromAmount: number;
  toAmount: number;
}

export interface PositionType {
  id: number;
  address: string;
  balance: number;
  pnl: number;
  tokens: TokenBalanceType[];
  events: EventType[];
}

// DAI token address

const data: PositionType[] = [
  {
    id: 1,
    address: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B",
    balance: 19828,
    pnl: 34.76,
    tokens: [
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 18119,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 1819,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 119,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 8119,
      },
    ],
    events: [
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
    ],
  },
  {
    id: 2,
    address: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B",
    balance: 91828,
    pnl: -14.76,
    tokens: [
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 18119,
      },
      {
        tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        balance: 181900,
      },
      {
        tokenAddress: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
        balance: 119000,
      },
      {
        tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        balance: 811900,
      },
    ],
    events: [
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
    ],
  },
  {
    id: 3,
    address: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B",
    balance: 128,
    pnl: 4.76,
    tokens: [
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 18119,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 1819,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 119,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 8119,
      },
    ],
    events: [
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
    ],
  },
  {
    id: 4,
    address: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B",
    balance: 8,
    pnl: 340.76,
    tokens: [
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 18119,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 1819,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 119,
      },
      {
        tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        balance: 8119,
      },
    ],
    events: [
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
      {
        fromTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        toTokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        fromAmount: 19181,
        toAmount: 9819,
      },
    ],
  },
];

const usePositions = (): PositionType[] => {
  const [positions, setPositions] = useState(data);

  return positions;
};

export default usePositions;
