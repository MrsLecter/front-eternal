import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";
import { ModalDiv } from "../modalWindow/ModalWindow.styles";
import SubscribedBlock from "./resultForm/SubscribedBlock";

const Result: React.FC = () => {
  const modalDivClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
      <WrapperModal
        width={"625"}
        isPayment={true}
        isPaddingSmall={true}
        minHeight={243}
        maxHeight={355}
        marginTop={95}
      >
        <SubscribedBlock />
      </WrapperModal>
    </ModalDiv>
  );
};

export default Result;
