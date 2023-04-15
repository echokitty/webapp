import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Header } from "../../styles/Headers";
import useOverview from "../../app/hooks/use-overview";
import { roundToDp } from "../../app/lib/formatting";
import PieChart from "../../components/PieChart";

const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 140rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Chart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const ItemHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const ItemValue = styled.div`
  font-size: 4rem;
  font-weight: 600;
`;

const Overview = () => {
  const { t } = useTranslation();
  const overview = useOverview();

  const labels = overview.tokens.map((token) => token.tokenAddress);

  const data = overview.tokens.map((token) => token.balance);

  return (
    <StyledOverview>
      <Header>{t("dashboard.overview.title")}</Header>
      <Content>
        <Stats>
          <Item>
            <ItemHeader>{t("dashboard.overview.headers.total")}</ItemHeader>
            <ItemValue>{`$${overview.balance.toLocaleString()}`}</ItemValue>
          </Item>
          <Item>
            <ItemHeader>{t("dashboard.overview.headers.pnl")}</ItemHeader>
            <ItemValue>{`${roundToDp(
              overview.pnl
            ).toLocaleString()}%`}</ItemValue>
          </Item>
        </Stats>
        <Chart>
          <PieChart labels={labels} data={data} />
        </Chart>
      </Content>
    </StyledOverview>
  );
};

export default Overview;
