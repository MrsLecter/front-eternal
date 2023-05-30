import { FOCUS_TRAP_OPTIONS } from "@/constants/focus-trap-options";
import FocusTrap from "focus-trap-react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../../header/Header";
import { useAppSelector } from "@/hooks/reducers.hook";

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
      <ModalWrapper onClick={(e) => backdropClickHandler(e)}>
        <Header
          zIndex={101}
          isHaveClose={showCommonModal}
          isSmall={isSmallHeader || showPaywallModal}
        />
        <ContentWrapper>
          <ModalDiv onClick={(e) => modalClickHandler(e)}>{children}</ModalDiv>
        </ContentWrapper>
      </ModalWrapper>
    </FocusTrap>
  );
};

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  min-width: 100vw;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  z-index: 101;
`;

export const ContentWrapper = styled.div`
  height: calc(100% - 84px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalDiv = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  padding: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  z-index: 101;
  overflow: hidden;
  animation: appearing 0.5s ease-in-out;

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

// export const ModalDiv = styled.div`
//   position: fixed;
//   width: auto;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 32px;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 101;
//   overflow: hidden;
//   animation: appearing 0.5s ease-in-out;

//   @keyframes appearing {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   @media (max-width: 870px) {
//     margin-top: 95px;
//     min-width: 100%;
//     height: 100%;
//     min-height: 100%;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     width: 343px;
//     overflow: auto;
//   }
// `;

export default ModalWindow;
