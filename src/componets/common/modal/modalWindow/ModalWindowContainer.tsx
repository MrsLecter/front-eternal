import FocusTrap from "focus-trap-react";
import { FOCUS_TRAP_OPTIONS } from "@/config/focus-trap-options";
import { useAppSelector } from "@/hooks/reducers.hook";
import Header from "../../header/Header";
import { StyledModalWindowContainer } from "./ModalWindowContainer.styles";
import { ContentWrapper, ModalWrapper } from "./ModalWindow.styles";

export interface IModalsContainerProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalWindowContainer: React.FC<IModalsContainerProps> = ({
  children,
  closeModal,
}) => {
  const { showCommonModal, isSmallHeader, showPaywallModal } = useAppSelector(
    (store) => store.internalReducer
  );

  const backdropClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    closeModal();
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
          <StyledModalWindowContainer>{children}</StyledModalWindowContainer>
        </ContentWrapper>
      </ModalWrapper>
    </FocusTrap>
  );
};

export default ModalWindowContainer;
