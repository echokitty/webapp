import styled from "styled-components";

const StyledNotFoundPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 2.3rem;
  padding: 3rem;
`;

const NotFoundPage = () => {
  return <StyledNotFoundPage>404</StyledNotFoundPage>;
};

export default NotFoundPage;
