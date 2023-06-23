
import WrapperModalWindow from "../../wrappers/wrapperModalWindow/WrapperModalWindow";
import { ModalDiv } from "../modalWindow/ModalWindow.styles";
import { ModalsContainer } from "./Payment.styles";
import FreeOfferBlock from "./paymentlForm/freeOfferBlock/FreeOfferBlock";
import ProOfferBlock from "./paymentlForm/proOfferBlock/ProOfferBlock";

interface IPaymentProps {
  modalClickHandler: () => void;
}

const Payment: React.FC<IPaymentProps> = ({ modalClickHandler }) => {
  const modalDivClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ModalsContainer>
      <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
        <WrapperModalWindow
          width={"514"}
          noBorder={true}
          isPayment={true}
          isPaddingSmall={true}
        >
          <FreeOfferBlock />
        </WrapperModalWindow>
      </ModalDiv>

      <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
        <WrapperModalWindow
          width={"320"}
          isPayment={true}
          isPaddingSmall={true}
        >
          <ProOfferBlock />
        </WrapperModalWindow>
      </ModalDiv>
    </ModalsContainer>
  );
};

export default Payment;
