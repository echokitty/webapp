import styled from "styled-components";
import Socials from "./Socials";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--header-footer-padding);
`;

const Logo = styled.div`
  font-size: 2.3rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>EchoKitty</Logo>
      <Socials />
    </StyledFooter>
  );
};

export default Footer;
