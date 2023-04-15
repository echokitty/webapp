import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import usePositions from "../../app/hooks/use-positions";
import { Header } from "../../styles/Headers";
import Button from "../../components/Button";

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
  border: solid 1px pink;
  padding: 0.7rem 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

const Positions = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const positions = usePositions();

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
            <div>{position.address}</div>
            <div>{position.balance}</div>
          </Position>
        );
      })}
    </StyledPositions>
  );
};

export default Positions;
