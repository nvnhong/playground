import { GlobalStyle } from "./styles/Globalstyle";
import TestModal from "./components/Modal/TestModal";
import TestButton from "./components/Common/TestButton";
import TestInputform from "./components/Common/TestInputform";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TestButton />
      <TestInputform />
      <TestModal />
    </>
  );
};

export default App;
