import styled from "styled-components";
import Hero from "./Hero";

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
    </StyledHomePage>
  );
};

export default HomePage;
