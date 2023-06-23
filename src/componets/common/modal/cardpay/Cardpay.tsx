import WrapperModalWindow from "../../wrappers/wrapperModalWindow/WrapperModalWindow";
import { ModalDiv } from "../modalWindow/ModalWindow.styles";
import CardpayBlock from "./cardpayForm/CardpayBlock";

const Cardpay: React.FC = () => {
  const modalDivClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
      <WrapperModalWindow
        width={"625"}
        isPaddingSmall={true}
        maxHeight={364}
        minHeight={328}
      >
        <CardpayBlock />
      </WrapperModalWindow>
    </ModalDiv>
  );
};

export default Cardpay;
