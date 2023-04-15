import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Socials from "./Socials";
import logo from "../assets/logo.png";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--header-footer-padding);
  background: var(--purple);
`;

const LogoButton = styled.button`
  cursor: pointer;
`;

const Logo = styled.img`
  height: 6rem;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <LogoButton onClick={() => navigate("")}>
        <Logo src={logo} alt="EchoKitty Logo" />
      </LogoButton>
      <Socials />
    </StyledFooter>
  );
};

export default Footer;
