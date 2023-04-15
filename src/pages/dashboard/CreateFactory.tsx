import styled from "styled-components";
import Popup from "../../components/Popup";
import useOverview from "../../app/hooks/use-overview";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledCreateFactory = styled.div`
  display: flex;
`;

const CreateFactory = () => {
  const { t } = useTranslation();
  const overview = useOverview();
  const navigate = useNavigate();

  const show = overview.pnl === 0;

  const header = t("dashboard.create.title");

  return (
    <Popup show={show} close={() => navigate("/")} header={header}>
      <StyledCreateFactory>meow</StyledCreateFactory>
    </Popup>
  );
};

export default CreateFactory;
