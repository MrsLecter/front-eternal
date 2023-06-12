import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";
import { ModalDiv } from "../modalWindow/ModalWindow.styles";
import CardpayBlock from "./cardpayForm/CardpayBlock";

const Cardpay: React.FC = () => {
    const modalDivClickHandler = (event: React.MouseEvent) => {
      event.stopPropagation();
    };
  return (
    <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
<WrapperModal
      width={"625"}
      isPaddingSmall={true}
      maxHeight={364}
      minHeight={328}
    >
      <CardpayBlock />
    </WrapperModal>

    </ModalDiv>
    
  );
};

export default Cardpay;
