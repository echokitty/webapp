import { ReactNode } from "react";
import styled from "styled-components";
import exit from "../assets/ui/exit.svg";
import Button from "./Button";

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Background = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

interface ContainerProps {
  width?: string;
}

const Container = styled.div`
  position: relative;
  width: ${(props: ContainerProps) => props.width || "40rem"};
  background-color: var(--bg);
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--purple);
`;

const ExitButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

const Exit = styled.img`
  height: 2rem;
`;

const Header = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const SubHeader = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--main);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface Props {
  show: boolean;
  close: () => void;
  header?: string;
  subHeader?: string;
  buttonText?: string;
  buttonAction?: () => void;
  children?: ReactNode;
  width?: string;
}

const Popup = ({
  show,
  close,
  header,
  subHeader,
  buttonText,
  buttonAction,
  children,
  width,
}: Props) => {
  if (!show) return null;

  return (
    <StyledPopup>
      <Background />
      <Container width={width}>
        <ExitButton onClick={() => close()}>
          <Exit src={exit} />
        </ExitButton>
        {header && <Header>{header}</Header>}
        {subHeader && <SubHeader>{subHeader}</SubHeader>}
        {children && <Content>{children}</Content>}
        {buttonText && buttonAction && (
          <Button primary click={buttonAction}>
            {buttonText}
          </Button>
        )}
      </Container>
    </StyledPopup>
  );
};

export default Popup;
