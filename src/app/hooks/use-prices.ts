import { useState, useEffect } from "react";

const URL = "https://coins.llama.fi/prices/current/";

const usePrices = (tokens: string[]): Record<string, number> | null => {
  const [prices, setPrices] = useState<Record<string, number> | null>(null);

  const fetchPrices = async () => {
    console.log("getting prices");
    console.log(tokens);
    if (tokens.length === 0) return;
    const prices_: Record<string, number> = {};

    const response = await fetch(`${URL}ethereum:${tokens.join(",ethereum:")}`);
    const data = await response.json();
    tokens.forEach((token) => {
      prices_[token] = data.coins[`ethereum:${token}`].price;
    });

    setPrices(prices_);
  };

  useEffect(() => {
    fetchPrices();
  }, [tokens]);

  return prices;
};

export default usePrices;
