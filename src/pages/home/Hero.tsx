import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  width: 100%;
  height: calc(100vh - 112px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 14rem;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: "magic-retro", sans-serif;
`;

const SubHeader = styled.h3`
  font-size: 2.3rem;
  line-height: 1.2;
  text-align: center;
  font-weight: 500;
  margin-bottom: 5rem;
  max-width: 70rem;
`;

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <StyledHero>
      <Content>
        <Header>{t("title")}</Header>
        <SubHeader>{t("description")}</SubHeader>
        <Button large primary click={() => navigate("dashboard/create")}>
          {t("createPosition")}
        </Button>
      </Content>
    </StyledHero>
  );
};

export default Hero;
