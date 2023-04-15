import styled from "styled-components";
import { useParams } from "react-router-dom";

import Overview from "./Overview";
import Positions from "./Positions";
import CreatePosition from "./CreatePosition";

const StyledDashboardPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: var(--section-spacing);
`;

const DashboardPage = () => {
  const { address, action } = useParams<"address" | "action">();

  return (
    <StyledDashboardPage>
      <Overview />
      <Positions />
      <CreatePosition show={action === "create"} address={address} />
    </StyledDashboardPage>
  );
};

export default DashboardPage;
