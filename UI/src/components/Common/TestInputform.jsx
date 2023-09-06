import { useState } from "react";
import { StyledTitle } from "../../styles/Globalstyle";
import Button from "./Button";
import Inputform from "./Inputform";

export default function TestInputform() {
  const [value, setValue] = useState({ name: "", number: "" });

  const handleNameChange = (event) => {
    setValue({ ...value, name: event.target.value });
  };

  const handleNumberChange = (event) => {
    console.log(value.number);
    setValue({
      ...value,
      number: event.target.value.toLocaleString("ko-KR"),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = value.name;
    const number = parseInt(value.number.replaceAll(",", ""));

    if (name === "" && isNaN(number)) {
      alert("이름과 가격 모두 입력해주세요");
      return;
    }

    if (isNaN(number)) {
      alert(`{name: ${name}, price: }`);
    }

    alert(`{name: ${name}, price: ${number}}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledTitle>Input</StyledTitle>
      이름 <Inputform onChange={handleNameChange} />
      가격{" "}
      <Inputform
        type="number"
        value={value.number}
        onChange={handleNumberChange}
        placeholder={0}
      />
      <Button type="submit" width={"100px"} height={"40px"} bgcolor={"#54efc3"}>
        저장
      </Button>
    </form>
  );
}
