import { styled } from "styled-components";

export default function Popup({ handleClick }) {
  return (
    <Container>
      <Content>
        <h1>Lorem Ipsum</h1>
        닫기와 확인 버튼 2개가 있고, <br />
        외부 영역을 눌러도 모달이 닫히지 않아요.
      </Content>
      <Buttons>
        <Button color={"red"} onClick={handleClick}>
          Cancel
        </Button>
        <Button color={"green"}>OK</Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 350px;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
  padding: 30px 20px;
  user-select: none;
`;

const Content = styled.div`
  text-align: center;
  line-height: 1.5;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.color === "green") return "#74ba89";
    if (props.color === "red") return "#ef7a4f";
  }};
  color: white;
  letter-spacing: 1.5px;
  transition: all 0.5s ease;

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 0px 10px #bbb;
  }
`;
