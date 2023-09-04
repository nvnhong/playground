import PopupWithButtons from "./PopupWithButtons";
import PopupWithCloseButton from "./PopupWithCloseButton";
import useModal from "../../hook/useModal";

export default function TestModal() {
  const modalWithBtns = useModal();
  const modalWithCloseBtn = useModal();

  return (
    <div>
      <button onClick={modalWithBtns.open}>Open Modal (Buttons)</button>
      {modalWithBtns.isOpen && <PopupWithButtons close={modalWithBtns.close} />}

      <button onClick={modalWithCloseBtn.open}>
        Open Modal (Close Button)
      </button>
      {modalWithCloseBtn.isOpen && (
        <PopupWithCloseButton close={modalWithCloseBtn.close} />
      )}
    </div>
  );
}
