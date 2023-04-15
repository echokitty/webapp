import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Header } from "../../styles/Headers";

interface IntegrationType {
  name: string;
  icon: string;
}

const integrations: IntegrationType[] = [
  {
    name: "1inch Network",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2Fif0ri%2Flogo%2F1675803570272_mhT50NcT_400x400.jpeg",
  },
  {
    name: "Gnosis Chain",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2F9z8z1%2Flogo%2F1664911999338_gnosis.jpeg",
  },
  {
    name: "Polygon",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2F536ub%2Fimages%2FWhite%20on%20Gradient%20Square.png",
  },
  {
    name: "Lens Protocol",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2Fvxwti%2Flogo%2F1678645512720_Screen%20Shot%202023-03-12%20at%2011.25.01%20AM.png",
  },
  {
    name: "Uniswap Foundation",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2F026zc%2Fimages%2Fimageedit_19_7248710069.png",
  },
];

const StyledIntegrations = styled.div`
  display: flex;
  width: 100%;
  padding: var(--section-spacing);
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: var(--section-spacing-mobile);
  }
`;

const Items = styled.div`
  display: grid;
  width: 100%;
  max-width: 140rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-row-gap: 5rem;
`;

const Item = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

const IconLabel = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const Integrations = () => {
  const { t } = useTranslation();

  return (
    <StyledIntegrations>
      <Header>{t("integrations.title")}</Header>
      <Items>
        {integrations.map((integration: IntegrationType) => {
          return (
            <Item key={integration.name}>
              <Icon src={integration.icon} />
              <IconLabel>{integration.name}</IconLabel>
            </Item>
          );
        })}
      </Items>
    </StyledIntegrations>
  );
};

export default Integrations;
