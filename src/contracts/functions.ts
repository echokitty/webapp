import { useEthers } from "@usedapp/core";
import { utils } from "ethers";
import { NATIVE_TOKEN_ADDRESS, ZERO_ADDRESS } from "../app/globals";
import useContract from "../app/hooks/use-contract";
import smartWalletAbi from "./smart-wallet.json";
import { usePredictedSubWalletAddress, useWallet } from "./views";

// export const useWrap = (wallet: string) => {
//   const globals = useGlobals();

//   const { state: wrapState, send: wrap } = useContract(
//     globals.FACTORY,
//     wethAbi,
//     "deposit"
//     "Wrap"
//   );
//   return { wrapState, wrap };
// };

type Swap = {
  toToken: string;
  fromAmount: number;
  slippage?: number;
};

const getApiEndpoint = (chainId: number) =>
  `https://api.1inch.io/v5.0/${chainId}/swap`;

export function format1inchSwap(swap: any): any {
  const { tx } = swap;
  return [[tx.to, tx.data, tx.value], swap.toToken.address];
}

async function getSwapData(
  swap: Swap,
  chainId: number,
  address: string
): Promise<any> {
  const url = new URL(getApiEndpoint(chainId));
  const slippage = swap.slippage || 1;
  url.searchParams.set("fromTokenAddress", NATIVE_TOKEN_ADDRESS);
  url.searchParams.set("toTokenAddress", swap.toToken);
  url.searchParams.set("amount", swap.fromAmount.toString());
  url.searchParams.set("slippage", slippage.toString());
  url.searchParams.set("fromAddress", address);
  url.searchParams.set("disableEstimate", "true");
  const res = await fetch(url.toString());
  const json = await res.json();
  return json as object;
}

export const useCreatePosition = (target: string) => {
  const wallet = useWallet();
  const { chainId } = useEthers();

  const salt = utils.keccak256(utils.randomBytes(32));

  const predictedAddress = usePredictedSubWalletAddress(salt, target);

  const { state: createPositionState, send } = useContract(
    wallet || ZERO_ADDRESS,
    smartWalletAbi,
    "createSubwallet",
    "CreatePosition"
  );

  const createPosition = async (swaps: Swap[]) => {
    const oneInchSwaps = await Promise.all(
      swaps.map((s) =>
        getSwapData(s, chainId || 1, predictedAddress || ZERO_ADDRESS)
      )
    );
    const swapParams = oneInchSwaps.map((s) => format1inchSwap(s));
    return send(salt, [target, swapParams]);
  };

  return { createPositionState, createPosition };
};
