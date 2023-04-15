import { useState, useEffect } from "react";

const URL = "https://coins.llama.fi/prices/current/";

const usePrices = (tokens: string[]): Record<string, number> | null => {
  const [prices, setPrices] = useState<Record<string, number> | null>(null);

  const { length } = tokens;

  const fetchPrices = async () => {
    if (tokens.length === 0) return;
    const prices_: Record<string, number> = {};

    const network = "polygon";

    const url = `${URL}${network}:${tokens.join(`,${network}:`)}`;
    const response = await fetch(url);
    const data = await response.json();
    tokens.forEach((token) => {
      prices_[token] = data.coins[`${network}:${token}`].price;
    });

    setPrices(prices_);
  };

  useEffect(() => {
    fetchPrices();
  }, [length]);

  return prices;
};

export default usePrices;
