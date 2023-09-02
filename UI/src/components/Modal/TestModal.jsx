import { useState } from "react";
import Popup from "./Popup";
import { styled } from "styled-components";

export default function TestModal() {
  /*
  1. 'Open Modal' 버튼 클릭
  2. Modal 생성 + 회색으로 Background 색상 변경 + (Option) 다른 곳을 클릭해서 이벤트가 생성되거나 화면 스크롤 불가능
  3. Modal의 'Cancel' 버튼 클릭
  4. Modal 제거 + 원래 색상으로 Background 색상 변경
  */

  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(!isModal);
  };

  return (
    <BackGround isModal={isModal}>
      <button onClick={handleClick}>Open Modal</button>
      {isModal && <Popup handleClick={handleClick} />}
    </BackGround>
  );
}

const BackGround = styled.div``;
