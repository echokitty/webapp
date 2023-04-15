import styled from "styled-components";
import usePositions from "../../app/hooks/use-positions";
import { Header } from "../../styles/Headers";

const StyledPositions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 140rem;
  margin-top: 8rem;
`;

const Position = styled.div`
  display: flex;
  border: solid 1px pink;
  padding: 0.7rem 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

const Positions = () => {
  const positions = usePositions();

  return (
    <StyledPositions>
      <Header>Positions</Header>
      {positions.map((position) => {
        return (
          <Position key={position.id}>
            <div>{position.address}</div>
            <div>{position.balance}</div>
          </Position>
        );
      })}
    </StyledPositions>
  );
};

export default Positions;
