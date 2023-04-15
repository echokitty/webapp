import { useEffect, useState } from "react";

export interface Token {
  address: string;
  balanace: number;
}

const useTokens = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  const getTokens = async () => {
    // get it here
    // Save it to setTokens
  };

  useEffect(() => {
    getTokens();
  }, []);

  return tokens;
};

export default useTokens;
