import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  width: 100%;
  height: 80vh;
  background-color: pink;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  font-size: 8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SubHeader = styled.div`
  font-size: 2.3rem;
  line-height: 1.2;
  text-align: center;
  font-weight: 500;
  margin-bottom: 3rem;
  max-width: 70rem;
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <StyledHero>
      <Content>
        <Header>EchoKitty</Header>
        <SubHeader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </SubHeader>
        <Button click={() => navigate("dashboard")}>Create Position</Button>
      </Content>
    </StyledHero>
  );
};

export default Hero;
