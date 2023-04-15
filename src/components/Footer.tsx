import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Logo>{t("title")}</Logo>
      <Socials />
    </StyledFooter>
  );
};

export default Footer;
