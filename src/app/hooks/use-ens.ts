import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

const useENS = (
  address: string
): {
  ensName: string | null;
  ensAvatar: string | null;
} => {
  const { library } = useWeb3React();
  const [ensName, setENSName] = useState<string | null>(null);
  const [ensAvatar, setENSAvatar] = useState<string | null>(null);

  const resolveENS = async (): Promise<void> => {
    setENSAvatar(null);
    const ensName = await library.provider.lookupAddress(address);
    setENSName(ensName);
    if (!ensName) return;
    const resolver = await library.provider.getResolver(ensName);
    if (!resolver) return;
    const avatar = await resolver.getAvatar();
    if (!avatar) return;
    setENSAvatar(avatar.url);
  };

  useEffect(() => {
    resolveENS();
  }, [address]);

  return { ensName, ensAvatar };
};

export default useENS;
