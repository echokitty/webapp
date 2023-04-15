import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import usePositions from "../../app/hooks/use-positions";
import { Header } from "../../styles/Headers";
import Button from "../../components/Button";
import { usePositions } from "../../contracts/views";
import usePrices from "../../app/hooks/use-prices";
import { roundToDp } from "../../app/lib/formatting";
import PieChart from "../../components/PieChart";

const StyledPositions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 140rem;
  margin-top: 8rem;
  z-index: 1;
`;

const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const Position = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: var(--bg);
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

const Positions = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const positions = usePositions();

  const tokens: string[] = [];

  (positions || []).forEach((position) => {
    position.tokens.forEach((token) => {
      if (!tokens.includes(token.tokenAddress)) {
        tokens.push(token.tokenAddress);
      }
    });
  });

  const prices = usePrices(tokens);

  if (!positions || !prices) {
    return null;
  }

  return (
    <StyledPositions>
      <HeaderSection>
        <Header>{t("dashboard.positions.title")}</Header>
        <ButtonContainer>
          <Button click={() => navigate("create")}>
            {t("createPosition")}
          </Button>
        </ButtonContainer>
      </HeaderSection>
      {positions.map((position) => {
        return (
          <Position key={position.id}>
            <Section>
              <SectionHeader>
                {t("dashboard.overview.headers.address")}
              </SectionHeader>
              <SectionValue>{position.tracking}</SectionValue>

              <SectionHeader>
                {t("dashboard.overview.headers.total")}
              </SectionHeader>
              <SectionValue>{`$${roundToDp(
                position.balance
              ).toLocaleString()}`}</SectionValue>
              <SectionHeader>
                {t("dashboard.overview.headers.pnl")}
              </SectionHeader>
              <SectionValue>{`${roundToDp(
                position.pnl
              ).toLocaleString()}%`}</SectionValue>
            </Section>
            <Section>
              <PieChart
                data={position.tokens.map((token) => token.balance)}
                labels={position.tokens.map((token) => token.tokenAddress)}
              />
            </Section>
          </Position>
        );
      })}
    </StyledPositions>
  );
};

export default Positions;
