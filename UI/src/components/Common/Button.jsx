import { styled } from "styled-components";

export default function Button({ ...props }) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  width: ${(props) => props.width};

  height: ${(props) => props.height};

  background-color: ${(props) =>
    props.bgcolor || "white"}; // 배경색을 props로 받거나 기본값으로 설정

  border: ${(props) =>
    props.border || "none"}; // 테두리 스타일을 props로 받거나 설정

  color: ${(props) =>
    props.textcolor || "black"}; // 텍스트 색상을 props로 받거나 기본값으로 설정

  font-weight: ${(props) => props.fontweight || "none"};

  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    filter: brightness(90%);
  }
`;
