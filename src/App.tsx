import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ChainId, Config, DAppProvider } from "@usedapp/core";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: var(--bg);
`;

const config: Config = {
  autoConnect: false,
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {},
};

const App = () => {
  return (
    <StyledApp>
      <DAppProvider config={config}>
        <Header />
        <Outlet />
        <Footer />
        <Error />
      </DAppProvider>
    </StyledApp>
  );
};

export default App;
