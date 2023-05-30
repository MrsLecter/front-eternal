import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import BackScreenWithImage from "./backScreen/BackScreenWithImage";
import ModalWindowContainer from "./modalWindow/ModalWindowContainer";

interface IPaywallModal {
  children: React.ReactNode;
  backClickHandler: () => void;
}

const PaywallModal: React.FC<IPaywallModal> = ({
  children,
  backClickHandler,
}) => {
  const [render, setRender] = useState(false);

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
          <BackScreenWithImage backClickHandler={backClickHandler} />,
          backdrop
        )}
        {ReactDOM.createPortal(
          <ModalWindowContainer closeModal={backClickHandler}>
            {children}
          </ModalWindowContainer>,
          modal
        )}
      </>
    );
  } else {
    return null;
  }
};

export default PaywallModal;
