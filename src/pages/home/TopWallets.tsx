import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { shortenAddress } from "@usedapp/core";

import { Header } from "../../styles/Headers";
import useTopWallets, { TopWalletType } from "../../app/hooks/use-top-wallets";
import Button from "../../components/Button";

const StyledTopWallets = styled.div`
  display: flex;
  width: 100%;
  padding: var(--section-spacing);
  flex-direction: column;
  align-items: center;
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
  }
`;

const Wallet = styled(Row)`
  border: solid 1px pink;
  padding: 0.7rem 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
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

const Data = styled(Item)`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
`;

const TopWallets = () => {
  const navigate = useNavigate();
  const topWallets = useTopWallets();

  const bestWallets = topWallets.slice(0, 6);

  return (
    <StyledTopWallets>
      <Header>Top Wallets</Header>
      <Wallets>
        <Headers>
          <RowHeader>ENS</RowHeader>
          <RowHeader>Address</RowHeader>
          <RowHeader>PNL</RowHeader>
          <RowHeader />
        </Headers>
        {bestWallets.map((wallet: TopWalletType) => (
          <Wallet key={wallet.address}>
            <Data>{wallet.ens}</Data>
            <Data>{shortenAddress(wallet.address)}</Data>
            <Data>{`${wallet.pnl}%`}</Data>
            <Data>
              <Button
                click={() => navigate(`dashboard/create/${wallet.address}`)}
              >
                Create Position
              </Button>
            </Data>
          </Wallet>
        ))}
      </Wallets>
    </StyledTopWallets>
  );
};

export default TopWallets;
