import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Header } from "../../styles/Headers";
import useTopWallets, { TopWalletType } from "../../app/hooks/use-top-wallets";
import Wallet from "./Wallet";

const StyledTopWallets = styled.div`
  display: flex;
  width: 100%;
  padding: var(--section-spacing);
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: var(--section-spacing-mobile);
  }
`;

const Wallets = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div:last-child {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Headers = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  width: 100%;
  padding: 0 2rem;
`;

const Item = styled.div`
  flex: 2;
`;

const RowHeader = styled(Item)`
  font-size: 1.7rem;
  font-weight: 600;
`;

const TopWallets = () => {
  const { t } = useTranslation();
  const topWallets = useTopWallets();

  const bestWallets = topWallets.slice(0, 6).sort((a, b) => {
    if (a.pnl > b.pnl) {
      return -1;
    }
    if (a.pnl < b.pnl) {
      return 1;
    }
    return 0;
  });

  return (
    <StyledTopWallets>
      <Header>{t("topWallets.title")}</Header>
      <Wallets>
        <Headers>
          <RowHeader>{t("topWallets.headers.address")}</RowHeader>
          <RowHeader>{t("topWallets.headers.pnl")}</RowHeader>
          {/* <RowHeader>{t("topWallets.headers.lens")}</RowHeader> */}
          <RowHeader />
        </Headers>
        {bestWallets.map((wallet: TopWalletType, index: number) => (
          <Wallet key={index} wallet={wallet} />
        ))}
      </Wallets>
    </StyledTopWallets>
  );
};

export default TopWallets;
