import styled from "styled-components";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import TopWallets from "./TopWallets";
import Integrations from "./Integrations";

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Hero />
      <HowItWorks />
      <TopWallets />
      <Integrations />
    </StyledHomePage>
  );
};

export default HomePage;
