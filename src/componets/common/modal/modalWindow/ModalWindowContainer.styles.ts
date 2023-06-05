import styled from "styled-components";

export const StyledModalWindowContainer = styled.div`
  position: fixed;
  width: auto;
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
