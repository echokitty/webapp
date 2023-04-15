import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Popup from "../../components/Popup";

const StyledCreatePosition = styled.div`
  display: flex;
`;

interface Props {
  show: boolean;
  address: string | undefined;
}

const CreatePosition = ({ show, address }: Props) => {
  const navigate = useNavigate();

  return (
    <Popup
      header="Create Position"
      subHeader="Enter the address of the address you would like to copy trade."
      show={show}
      close={() => navigate("/dashboard")}
      buttonText="Create"
      buttonAction={() => console.log("meow")}
    >
      <StyledCreatePosition>{address}</StyledCreatePosition>
    </Popup>
  );
};

export default CreatePosition;
