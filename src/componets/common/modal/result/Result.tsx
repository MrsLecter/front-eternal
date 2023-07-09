import { FC } from "react";
import WrapperModalWindow from "../../wrappers/wrapperModalWindow/WrapperModalWindow";
import { ModalDiv } from "../modalWindow/ModalWindow.styles";
import SubscribedBlock from "./resultForm/SubscribedBlock";

const Result: FC = () => {
  const modalDivClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <ModalDiv onMouseDown={(e) => modalDivClickHandler(e)}>
      <WrapperModalWindow
        width={"625"}
        isPayment={true}
        isPaddingSmall={true}
        minHeight={243}
        maxHeight={355}
        marginTop={95}
      >
        <SubscribedBlock />
      </WrapperModalWindow>
    </ModalDiv>
  );
};

export default Result;
