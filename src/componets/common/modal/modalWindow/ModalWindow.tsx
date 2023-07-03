import { FOCUS_TRAP_OPTIONS } from "@/config/focus-trap-options";
import FocusTrap from "focus-trap-react";
import Header from "../../header/Header";
import { useAppSelector } from "@/hooks/reducers.hook";
import { ContentWrapper, ModalDiv, ModalWrapper } from "./ModalWindow.styles";

export interface IModalWindowProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalWindow: React.FC<IModalWindowProps> = ({ children, closeModal }) => {
  const { showCommonModal, isSmallHeader, showPaywallModal } = useAppSelector(
    (store) => store.internalReducer
  );

  const backdropClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    closeModal();
  };

  const modalClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>
      <ModalWrapper onMouseDown={(e) => backdropClickHandler(e)}>
        <Header
          zIndex={101}
          isHaveClose={showCommonModal}
          isSmall={isSmallHeader || showPaywallModal}
        />
        <ContentWrapper>
          <ModalDiv onMouseDown={(e) => modalClickHandler(e)}>
            {children}
          </ModalDiv>
        </ContentWrapper>
      </ModalWrapper>
    </FocusTrap>
  );
};

export default ModalWindow;
