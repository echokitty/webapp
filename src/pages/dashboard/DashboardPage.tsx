import styled from "styled-components";

const StyledDashboardPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 2.3rem;
  padding: 3rem;
  border: solid 1px pink;
`;

const DashboardPage = () => {
  return <StyledDashboardPage>Dashboard page</StyledDashboardPage>;
};

export default DashboardPage;
