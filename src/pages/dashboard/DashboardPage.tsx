import styled from "styled-components";
import Overview from "./Overview";

const StyledDashboardPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: var(--section-spacing);
`;

const DashboardPage = () => {
  return (
    <StyledDashboardPage>
      <Overview />
    </StyledDashboardPage>
  );
};

export default DashboardPage;
