import { useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";

const useENS = (
  address: string
): {
  ensName: string | null;
  ensAvatar: string | null;
} => {
  const { library } = useEthers();
  const [ensName, setENSName] = useState<string | null>(null);
  const [ensAvatar, setENSAvatar] = useState<string | null>(null);

  const resolveENS = async (): Promise<void> => {
    setENSAvatar(null);
    if (!library) return;
    const ensName = await library.lookupAddress(address);
    setENSName(ensName);
    if (!ensName) return;
    const resolver = await library.getResolver(ensName);
    if (!resolver) return;
    const avatar = await resolver.getAvatar();
    if (!avatar) return;
    setENSAvatar(avatar.url);
  };

  useEffect(() => {
    resolveENS();
  }, [address, library]);

  return { ensName, ensAvatar };
};

export default useENS;
