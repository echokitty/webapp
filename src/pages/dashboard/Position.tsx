import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { PositionType, useBalances } from "../../contracts/views";
import { roundToDp } from "../../app/lib/formatting";
import PieChart from "../../components/PieChart";
import usePrices from "../../app/hooks/use-prices";

const StyledPosition = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: var(--bg);

  div:first-child {
    flex: 1.5;
  }
`;

const Section = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  color: var(--sub);
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.7rem;
`;

const SectionValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

interface Props {
  position: PositionType;
}

const Position = ({ position }: Props) => {
  const { t } = useTranslation();
  const tokens = position.tokens.map((token) => token.tokenAddress);
  const balances = useBalances(tokens, position.address);
  const prices = usePrices(tokens);

  let total = 0;

  if (!balances || !prices) return null;

  tokens.forEach((token: string) => {
    const price = prices[token];
    const balance = balances[token];
    total += price * balance;
  });

  return (
    <StyledPosition>
      <Section>
        <SectionHeader>{t("dashboard.overview.headers.address")}</SectionHeader>
        <SectionValue>{position.tracking}</SectionValue>
        <SectionHeader>{t("dashboard.overview.headers.total")}</SectionHeader>
        <SectionValue>{`$${roundToDp(total).toLocaleString()}`}</SectionValue>
        <SectionHeader>{t("dashboard.overview.headers.pnl")}</SectionHeader>
        <SectionValue>{`${roundToDp(
          position.pnl
        ).toLocaleString()}%`}</SectionValue>
      </Section>
      <Section>
        <PieChart
          data={tokens.map((token) => balances[token] * prices[token])}
          labels={tokens}
        />
      </Section>
    </StyledPosition>
  );
};

export default Position;
