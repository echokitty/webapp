import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Socials from "./Socials";

interface NavItemType {
  label: string;
  link: string;
}

const navItems: NavItemType[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Dashboard",
    link: "/dashboard",
  },
];

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const LogoButton = styled.button`
  cursor: pointer;
`;

const Logo = styled.div`
  font-size: 2.3rem;
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
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <LogoButton onClick={() => navigate("")}>
        <Logo>EchoKitty</Logo>
      </LogoButton>
      <NavItems>
        {navItems.map((navItem: NavItemType) => (
          <NavItem key={navItem.link} to={navItem.link}>
            {navItem.label}
          </NavItem>
        ))}
      </NavItems>
      <Socials />
    </StyledHeader>
  );
};

export default Header;
