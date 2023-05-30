import styled from "styled-components";
import TitleMedium from "../../title/TitleMedium";
import FocusTrap from "focus-trap-react";
import { FOCUS_TRAP_OPTIONS } from "@/constants/focus-trap-options";
import { useAppSelector } from "@/hooks/reducers.hook";
import { ContentWrapper, ModalWrapper } from "./ModalWindow";
import Header from "../../header/Header";

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
      <ModalWrapper onClick={(e) => backdropClickHandler(e)}>
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



const StyledModalWindowContainer = styled.div`
  position: fixed;
  width: auto;
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  animation: appearing 0.5s ease-in-out;
  overflow: hidden;

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 870px) {
    margin-top: 95px;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 343px;
    overflow: auto;
  }
`;

export default ModalWindowContainer;
