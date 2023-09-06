import { styled } from "styled-components";

export default function Inputform({ ...props }) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: 8px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
