import FocusTrap from "focus-trap-react";
import styled from "styled-components";

interface IBackdropProps {
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const BackScreen: React.FC<IBackdropProps> = ({ backClickHandler }) => {
  return <StyledBackdrop onMouseDown={backClickHandler} />;
};

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  z-index: 100;
  background: rgba(3, 2, 2, 0.4);
  backdrop-filter: blur(77px);
  animation: appearing 0.3s ease-in-out;
  overflow: hidden;

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default BackScreen;
