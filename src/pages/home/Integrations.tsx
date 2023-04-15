import styled from "styled-components";
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
    name: "Taiko",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2Fqfmej%2Flogo%2F1676412617433_ycMVxfJt_400x400.jpeg",
  },
  {
    name: "Mina Protocol",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2F6wi0d%2Flogo%2F1664912919187_mina.png",
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
    name: "MetaMask",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2F4pn9u%2Flogo%2F1679944522371_2Ubgzfgg_400x400.jpeg",
  },
  {
    name: "Celo",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2Finotq%2Flogo%2F1678316332198_InjXBNx9_400x400.jpeg",
  },
  {
    name: "Uniswap Foundation",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2F026zc%2Fimages%2Fimageedit_19_7248710069.png",
  },
  {
    name: "Scroll",
    icon: "https://storage.googleapis.com/ethglobal-api-production/organizations%2Fyip67%2Fimages%2Fscroll---logo-logo-mark-full-color-rgb-266px%4072ppi.png",
  },
];

const StyledIntegrations = styled.div`
  display: flex;
  width: 100%;
  padding: var(--section-spacing);
  flex-direction: column;
  align-items: center;
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
  return (
    <StyledIntegrations>
      <Header>Integrations</Header>
      <Items>
        {integrations.map((integration: IntegrationType) => {
          return (
            <Item>
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
