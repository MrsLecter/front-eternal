import styled from "styled-components";
import SoulsIntro from "../../soulsIntro/SoulsIntro";
import { FC } from "react";

interface IBackdropProps {
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const BackScreenWithImage: FC<IBackdropProps> = ({ backClickHandler }) => {
  return (
    <StyledBackdropWithImage onClick={backClickHandler}>
      <div>
        <SoulsIntro isBlured={true} />
      </div>
    </StyledBackdropWithImage>
  );
};

export const StyledBackdropWithImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(77px);
  animation: appearing 0.3s ease-in-out;
  overflow: hidden;

  & > div {
    position: relative;
    width: 100vw;
    height: 1262px;
    max-height: 1262px;
  }

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default BackScreenWithImage;
