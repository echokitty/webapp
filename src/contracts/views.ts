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
    "function target() view returns (address)",
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

  const targets = useContractCalls(
    wallets
      ? wallets.map((wallet) => ({
          abi: new utils.Interface(abi),
          address: wallet,
          method: "target",
          args: [],
        }))
      : []
  );

  // const pairs: { token: string; wallet: string }[] = [];

  // if (uniqueTokens && wallets) {
  //   uniqueTokens.forEach((token) => {
  //     wallets.forEach((wallet) => {
  //       pairs.push({ token, wallet });
  //     });
  //   });
  // }

  // const balancesData = useContractCalls(
  //   pairs
  //     ? pairs.map((pair) => ({
  //         abi: new utils.Interface(erc20Abi),
  //         address: pair.token,
  //         method: "balanceOf",
  //         args: [pair.wallet],
  //       }))
  //     : []
  // );

  // const balances: Record<string, Record<string, number>> = {};

  // if (balancesData) {
  //   balancesData.forEach((balanceData) => {
  //     if (balanceData) {
  //       balanceData.forEach((balance) => {
  //         if (balance) {
  //           const wallet = balanceData[0].address;
  //           const token = balanceData[0].args[0];
  //           balances[wallet][token]  balance.toString()
  //         }
  //       });
  //     }
  //   });
  // }

  if (!createdAt || !tokens || !wallets || !prices || !targets) return null;

  const positions: PositionType[] = [];

  wallets.forEach((wallet, id) => {
    if (!tokens) return;
    const nextTokens = tokens[id];
    if (!nextTokens) return;
    if (!nextTokens[0]) return;
    const tracking = targets[id];
    if (!tracking) return;
    const position: PositionType = {
      id,
      address: wallet,
      tracking: tracking[0],
      balance: 27.45,
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

export const useBalances = (
  tokens: string[],
  user: string
): Record<string, number> => {
  const balancesData = useContractCalls(
    tokens
      ? tokens.map((token) => ({
          abi: new utils.Interface(erc20Abi),
          address: token,
          method: "balanceOf",
          args: [user],
        }))
      : []
  );

  const decimals = useContractCalls(
    tokens
      ? tokens.map((token) => ({
          abi: new utils.Interface(erc20Abi),
          address: token,
          method: "decimals",
          args: [],
        }))
      : []
  );

  const balances: Record<string, number> = {};

  if (balancesData) {
    balancesData.forEach((balanceData, index: number) => {
      if (balanceData) {
        balanceData.forEach((balance) => {
          if (balance) {
            const token = tokens[index];
            const rawBalance = Number(balance.toString());
            const tokenDecimals = decimals[index];
            if (!tokenDecimals) return;
            const tokenDecimalsNumber = Number(tokenDecimals.toString());
            balances[token] = rawBalance / 10 ** tokenDecimalsNumber;
          }
        });
      }
    });
  }

  return balances;
};
