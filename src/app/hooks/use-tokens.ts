import { useEffect, useState } from "react";
import { utils } from "ethers";

import { ZERO_ADDRESS } from "../globals";

export interface Token {
  address: string;
  symbol: string;
  balance: number;
  valueUsd: number;
  logoUrl: string;
  price: number;
}

// API relevant chains:
// eth-mainnet
// matic-mainnet

const useTokens = (chain: string, address: string) => {
  const [tokens, setTokens] = useState<Token[]>([]);

  const getTokenFromItem = (item: any) => {
    const token: Token = {
      address: item.contract_address,
      symbol: item.contract_ticker_symbol,
      balance: parseInt(item.balance, 10) / 10 ** item.contract_decimals,
      valueUsd: item.quote,
      logoUrl: item.logo_url,
      price: item.quote_rate,
    };
    return token;
  };

  const getTokens = async () => {
    if (!address || address === ZERO_ADDRESS) return;
    if (utils.isAddress(address) === false) return;
    // get it here
    // Save it to setTokens
    const headers = new Headers();
    headers.set("Authorization", "key: ckey_99e324656cbc4e48ba70fa76421");

    fetch(
      `https://api.covalenthq.com/v1/${chain}/address/${address}/balances_v2/?key=ckey_99e324656cbc4e48ba70fa76421`,
      { method: "GET", headers }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        const tokens_: Token[] = [];
        data.data.items.forEach((i: any) => {
          tokens_.push(getTokenFromItem(i));
        });
        setTokens(tokens_);
      });
  };

  useEffect(() => {
    getTokens();
  }, [address]);

  return tokens;
};

export default useTokens;
