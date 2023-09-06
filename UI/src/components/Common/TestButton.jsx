import { styled } from "styled-components";
import Button from "./Button";
import { StyledTitle } from "../../styles/Globalstyle";
import { IoIosArrowForward } from "react-icons/io";
import { HiBell } from "react-icons/hi";

export default function TestButton() {
  const handleLargeButtonClick = () => {
    alert("버튼을 만들어보세요");
  };

  const handleNagativeButtonClick = () => {
    prompt("어렵나요?");
  };

  return (
    <>
      <StyledButtons>
        <Button
          width={"250px"}
          height={"50px"}
          border={"3px solid #54efc3"}
          fontweight={"600"}
          onClick={handleLargeButtonClick}
        >
          Large Primary Button
          <IoIosArrowForward />
        </Button>

        <Button bgcolor={"#54efc3"} width={"130px"} height={"45px"}>
          Medium
        </Button>

        <Button bgcolor={"#54efc3"} width={"100px"} height={"40px"}>
          Small
        </Button>
      </StyledButtons>

      <StyledButtons>
        <Button
          width={"250px"}
          height={"50px"}
          border={"3px solid #ea4c4b"}
          textcolor={"#ea4c4b"}
          fontweight={"600"}
          onClick={handleNagativeButtonClick}
        >
          Large Nagative Button <HiBell />
        </Button>

        <Button
          width={"130px"}
          height={"45px"}
          bgcolor={"#fab19f"}
          textcolor={"#ea4c4b"}
        >
          Medium
        </Button>

        <Button
          width={"100px"}
          height={"40px"}
          bgcolor={"#fab19f"}
          textcolor={"#ea4c4b"}
        >
          Medium
        </Button>
      </StyledButtons>
    </>
  );
}

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;
