import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { shortenAddress } from "@usedapp/core";
import { useTranslation } from "react-i18next";

import { TopWalletType } from "../../app/hooks/use-top-wallets";
import Button from "../../components/Button";
import { LIVE } from "../../app/globals";
// import useENS from "../../app/hooks/use-ens";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;

  div:last-child {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledWallet = styled(Row)`
  border: solid 1px pink;
  padding: 0.7rem 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: solid 2px #e6e6e6;
`;

const Item = styled.div`
  flex: 2;
`;

const Data = styled(Item)`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: left;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 5rem;
  border-radius: 50%;
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface Props {
  wallet: TopWalletType;
}

const Wallet = ({ wallet }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const { ensName, ensAvatar } = useENS(wallet.address);

  return (
    <StyledWallet>
      <Data>
        {wallet.image && <Icon src={wallet.image} />}
        {wallet.ens || shortenAddress(wallet.address)}
      </Data>
      <Data>{`${wallet.pnl.toLocaleString()}%`}</Data>
      {/* <Data>{wallet.ens}</Data> */}
      <Data>
        <Button
          click={() => {
            if (LIVE) navigate(`dashboard/create/${wallet.address}`);
          }}
        >
          {LIVE ? t("createPosition") : t("comingSoon")}
        </Button>
      </Data>
    </StyledWallet>
  );
};

export default Wallet;
