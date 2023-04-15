import styled from "styled-components";

import on from "../assets/ui/on.png";
import off from "../assets/ui/off.png";

const Button = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 2rem;
  margin-right: 2rem;
`;

interface Props {
  checked: boolean;
  toggle: () => void;
}

const Radio = ({ checked, toggle }: Props) => {
  return (
    <Button onClick={() => toggle()}>
      <Image src={checked ? on : off} />
    </Button>
  );
};

export default Radio;
