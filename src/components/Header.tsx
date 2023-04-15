import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "styled-components";
import Socials from "./Socials";
import logo from "../assets/logo.png";

interface NavItemType {
  label: string;
  link: string;
}

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--header-footer-padding);
`;

const LogoButton = styled.button`
  cursor: pointer;
`;

const Logo = styled.img`
  height: 6rem;
`;

const NavItems = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
`;

const NavItem = styled(Link)`
  margin: 0 1rem;
  font-size: 2rem;
`;

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navItems: NavItemType[] = [
    {
      label: t("navItems.home"),
      link: "/",
    },
    {
      label: t("navItems.dashboard"),
      link: "/dashboard",
    },
  ];

  return (
    <StyledHeader>
      <LogoButton onClick={() => navigate("")}>
        <Logo src={logo} alt="EchoKitty Logo" />
      </LogoButton>
      <NavItems>
        {navItems.map((navItem: NavItemType, index: number) => (
          <NavItem key={index} to={navItem.link}>
            {navItem.label}
          </NavItem>
        ))}
      </NavItems>
      <Socials />
    </StyledHeader>
  );
};

export default Header;
