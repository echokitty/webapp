import styled from "styled-components";
import { useParams } from "react-router-dom";

import Overview from "./Overview";
import Positions from "./Positions";
import CreatePosition from "./CreatePosition";
import WalletSelector from "../../components/WalletSelector";

const StyledDashboardPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: var(--section-spacing);
  background-color: var(--pink);

  @media (max-width: 768px) {
    padding: var(--section-spacing-mobile);
  }
`;

const DashboardPage = () => {
  const { address, action } = useParams<"address" | "action">();

  return (
    <StyledDashboardPage>
      <Overview />
      <Positions />
      <CreatePosition show={action === "create"} address={address} />
      <WalletSelector />
    </StyledDashboardPage>
  );
};

export default DashboardPage;
