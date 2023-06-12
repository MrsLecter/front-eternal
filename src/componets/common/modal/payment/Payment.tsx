import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";
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
        <WrapperModal
          width={"514"}
          noBorder={true}
          isPayment={true}
          isPaddingSmall={true}
        >
          <FreeOfferBlock />
        </WrapperModal>
      </ModalDiv>

      <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
        <WrapperModal width={"320"} isPayment={true} isPaddingSmall={true}>
          <ProOfferBlock />
        </WrapperModal>
      </ModalDiv>
    </ModalsContainer>
  );
};

export default Payment;
