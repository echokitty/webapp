import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Header } from "../../styles/Headers";
import Button from "../../components/Button";
import { usePositions } from "../../contracts/views";
import usePrices from "../../app/hooks/use-prices";
import Position from "./Position";
import { NATIVE_TOKEN_ADDRESS } from "../../app/globals";

const StyledPositions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 110rem;
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

const Positions = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const positions = usePositions();

  const tokens: string[] = [NATIVE_TOKEN_ADDRESS];

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
          <Button primary click={() => navigate("create")}>
            {t("createPosition")}
          </Button>
        </ButtonContainer>
      </HeaderSection>
      {positions.map((position) => {
        return <Position key={position.id} position={position} />;
      })}
    </StyledPositions>
  );
};

export default Positions;
