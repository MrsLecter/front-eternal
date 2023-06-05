import styled from "styled-components";

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
    min-height: 110%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 343px;
    overflow: auto;
  }
`;
