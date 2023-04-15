import styled from "styled-components";

import on from "../assets/ui/on.png";
import off from "../assets/ui/off.png";

const Image = styled.img`
  width: 2rem;
  margin-right: 2rem;
`;

interface Props {
  checked: boolean;
  toggle: () => void;
}

const Radio = ({ checked, toggle }: Props) => {
  return <Image src={checked ? on : off} />;
};

export default Radio;
