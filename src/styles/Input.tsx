import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  transition: all 0.2s ease-in-out;
  background: #e6e6e6;

  // Hide the number input arrows
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
