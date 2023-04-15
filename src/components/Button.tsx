import { useEthers } from "@usedapp/core";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectError } from "../state/errorSlice";

interface ButtonProps {
  primary?: boolean;
  large?: boolean;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 0.5rem;

  background-color: ${(props: ButtonProps) =>
    props.primary ? "var(--blue)" : "var(--purple)"};
  padding: ${(props: ButtonProps) =>
    props.large ? "1.5rem 3rem" : "1rem 2rem"};
  font-size: ${(props: ButtonProps) => (props.large ? "2rem" : "1.6rem")};
  font-weight: ${(props: ButtonProps) => (props.large ? "500" : "400")};
  color: ${(props: ButtonProps) =>
    props.primary ? "var(--main)" : "var(--bg)"};

  :disabled {
    cursor: auto;
    background-color: var(--sub);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.6rem;
  }
`;

interface Props {
  click: () => void;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  large?: boolean;
}

const Button = ({
  children,
  click,
  primary,
  disabled,
  loading,
  large,
}: Props) => {
  const { account, activateBrowserWallet } = useEthers();
  const error = useSelector(selectError);
  const [pending, setPending] = useState(false);

  const isWeb3 = loading !== undefined;

  useEffect(() => {
    if (error || loading) setPending(false);
  }, [error, loading]);

  return (
    <StyledButton
      onClick={() => {
        if (loading || disabled || pending) return;
        if (isWeb3) setPending(true);
        if (isWeb3 && !account) activateBrowserWallet();
        else click();
      }}
      disabled={disabled || loading || pending}
      primary={primary}
      large={large}
    >
      {isWeb3 && !account
        ? "Connect Wallet"
        : loading
        ? "Loading..."
        : children}
    </StyledButton>
  );
};

export default Button;
