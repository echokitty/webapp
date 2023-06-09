import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import KeyboardCat from "../../components/KeyboardCat";
import { LIVE } from "../../app/globals";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  width: 100%;
  height: calc(70vh - 112px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Header = styled.h1`
  font-size: 14rem;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: "magic-retro", sans-serif;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const SubHeader = styled.h3`
  font-size: 2.3rem;
  line-height: 1.2;
  text-align: center;
  font-weight: 500;
  margin-bottom: 5rem;
  max-width: 70rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <StyledHero>
      <Content>
        <Header>{t("title")}</Header>
        <SubHeader>{t("description")}</SubHeader>
        <Button
          large
          primary
          desktopOnly
          click={() => {
            if (LIVE) navigate("dashboard/create");
          }}
        >
          {LIVE ? t("createPosition") : t("comingSoon")}
        </Button>
      </Content>
      <Content>
        <KeyboardCat />
      </Content>
    </StyledHero>
  );
};

export default Hero;
