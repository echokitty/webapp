import { useContractCall, useContractCalls, useEthers } from "@usedapp/core";
import { utils } from "ethers";

import erc20Abi from "./erc20.json";
import useGlobals from "../app/hooks/use-globals";
import { ZERO_ADDRESS } from "../app/globals";
import usePrices from "../app/hooks/use-prices";

export const useTokenSymbol = (token: string) => {
  const [symbol] = useContractCall({
    abi: new utils.Interface(erc20Abi),
    address: token,
    method: "symbol",
    args: [],
  }) ?? ["---"];
  return symbol;
};

export const useWallet = (): string | null => {
  const globals = useGlobals();
  const { account } = useEthers();

  const abi = ["function getWalletFor(address) view returns (address)"];
  const [wallet] = useContractCall({
    abi: new utils.Interface(abi),
    address: globals.FACTORY,
    method: "getWalletFor",
    args: [account],
  }) ?? [null];

  if (wallet === ZERO_ADDRESS) return null;
  return wallet;
};

export const useSubwallets = (): string[] | null => {
  const wallet = useWallet();

  const abi = ["function listSubwallets() view returns (address[]) "];
  const [wallets] = useContractCall(
    wallet && {
      abi: new utils.Interface(abi),
      address: wallet || ZERO_ADDRESS,
      method: "listSubwallets",
      args: [],
    }
  ) ?? [null];

  return wallets;
};

export interface TokenBalanceType {
  tokenAddress: string;
  balance: number;
}

export interface PositionType {
  id: number;
  address: string;
  tracking: string;
  balance: number;
  pnl: number;
  tokens: TokenBalanceType[];
}

export const usePositions = (): PositionType[] | null => {
  const wallets = useSubwallets();

  const abi = [
    "function createdAt() view returns (uint256)",
    "function listTokens() view returns (address[])",
  ];
  const createdAt = useContractCalls(
    wallets
      ? wallets.map((wallet) => ({
          abi: new utils.Interface(abi),
          address: wallet,
          method: "createdAt",
          args: [],
        }))
      : []
  );

  const tokens = useContractCalls(
    wallets
      ? wallets.map((wallet) => ({
          abi: new utils.Interface(abi),
          address: wallet,
          method: "listTokens",
          args: [],
        }))
      : []
  );

  const uniqueTokens: string[] = [];

  if (tokens) {
    tokens.forEach((tokenList) => {
      if (tokenList) {
        tokenList.forEach((token) => {
          token.forEach((t: any) => {
            if (t && !uniqueTokens.includes(t)) uniqueTokens.push(t);
          });
        });
      }
    });
  }

  const prices = usePrices(uniqueTokens);

  if (!createdAt || !tokens || !wallets || !prices) return null;

  const positions: PositionType[] = [];

  wallets.forEach((wallet, id) => {
    // const balance = wallet.
    if (!tokens) return;
    const nextTokens = tokens[id];
    if (!nextTokens) return;
    if (!nextTokens[0]) return;
    const position: PositionType = {
      id,
      address: wallet,
      tracking: "address",
      balance: 123,
      pnl: 0,
      tokens: nextTokens[0].map((token: string) => {
        const tokenBalanceType: TokenBalanceType = {
          tokenAddress: token,
          balance: 123,
        };
        return tokenBalanceType;
      }),
    };
    positions.push(position);
  });

  return positions;
};
