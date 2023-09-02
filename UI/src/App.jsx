import { useState } from "react";
import Popup from "./components/Modal/Popup";
import { GlobalStyle } from "./styles/Globalstyle";

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <GlobalStyle />
      <button onClick={handleClick}>Modal</button>
      {isModal && <Popup handleClick={handleClick} />}
    </>
  );
};

export default App;
