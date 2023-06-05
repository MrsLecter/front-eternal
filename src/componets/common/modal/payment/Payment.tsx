import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";
import { ModalsContainer } from "./Payment.styles";
import FreeOfferBlock from "./paymentlForm/freeOfferBlock/FreeOfferBlock";
import ProOfferBlock from "./paymentlForm/proOfferBlock/ProOfferBlock";

interface IPaymentProps {
  modalClickHandler: () => void;
}

const Payment: React.FC<IPaymentProps> = ({ modalClickHandler }) => {
  return (
    <ModalsContainer onClick={() => modalClickHandler()}>
      <WrapperModal
        width={"514"}
        noBorder={true}
        isPayment={true}
        isPaddingSmall={true}
      >
        <FreeOfferBlock />
      </WrapperModal>
      <WrapperModal width={"320"} isPayment={true} isPaddingSmall={true}>
        <ProOfferBlock />
      </WrapperModal>
    </ModalsContainer>
  );
};

export default Payment;
