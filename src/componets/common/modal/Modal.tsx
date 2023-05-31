import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import BackScreen from "./backScreen/BackScreen";
import ModalWindow from "./modalWindow/ModalWindow";
import { useAppSelector } from "@/hooks/reducers.hook";

interface IModalProps {
  children: React.ReactNode;
  backClickHandler: () => void;
  haveClose?: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, backClickHandler }) => {
  const [render, setRender] = useState(false);
  const { showCommonModal, showPaywallModal } = useAppSelector(
    (store) => store.internalReducer
  );

  interface KeyboardEvent {
    key: string;
  }

  useEffect(() => {
    if (showCommonModal || showPaywallModal) {
      const handleKeyboardEvents = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          backClickHandler();
        }
      };
      document.addEventListener("keydown", handleKeyboardEvents);

      return () => removeEventListener("keydown", handleKeyboardEvents);
    }
  }, []);

  useEffect(() => setRender(true), []);

  if (render) {
    const backdrop = document.getElementById("backdrop");
    const modal = document.getElementById("modal");

    if (!modal || !backdrop || (!backdrop && !modal)) {
      throw Error("Element 'modal' or/end 'backdrop' not assigned in DOM");
    }

    return (
      <>
        {ReactDOM.createPortal(
          <BackScreen backClickHandler={backClickHandler} />,
          backdrop
        )}
        {ReactDOM.createPortal(
          <ModalWindow closeModal={backClickHandler}>{children}</ModalWindow>,
          modal
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Modal;
