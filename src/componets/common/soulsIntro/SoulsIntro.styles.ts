import styled, { css } from "styled-components";

export const StyledBorder = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1642px;
  height: 19%;
  object-fit: contain;
  background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
  z-index: 1;
`;

export const Intro = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 70%;
  max-width: 1640px;
  aspect-ratio: 1580 / 908;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  z-index: 3;

  div:nth-child(1) {
    figure {
      width: 28vw;
      max-width: 332px;

      img {
        animation-delay: 0.4s;
        animation-duration: 2s;
        animation-timing-function: ease-out;
        animation-name: goRight;
      }
    }
    aspect-ratio: 664/638;
    transform: translateX(240px);
  }

  div:nth-child(2) {
    figure {
      width: 23vw;
      max-width: 379px;
      min-width: 191.25px;

      img {
        animation-duration: 2s;
        animation-name: goRight;
        animation-timing-function: ease-out;
      }
    }
    aspect-ratio: 664/638;
    transform: translateX(150px);
  }

  div:nth-child(3) {
    width: 100vw;
  }

  div:nth-child(4) {
    position: relative;
    margin: 0 auto;

    figure {
      width: 35vw;
      max-width: 567px;
      min-width: 251.6px;
    }

    aspect-ratio: 1/1;
    margin: 0 auto;
  }

  div:nth-child(5) {
    figure {
      width: 23vw;
      max-width: 379px;
      min-width: 168.18px;

      img {
        animation-duration: 2s;
        animation-name: goLeft;
        animation-timing-function: ease-out;
      }
    }

    aspect-ratio: 664/638;
    transform: translateX(-150px);
  }

  div:nth-child(6) {
    figure {
      width: 28vw;
      max-width: 332px;

      img {
        animation-delay: 0.4s;
        animation-duration: 2s;
        animation-name: goLeft;
        animation-timing-function: ease-out;
      }
    }
    aspect-ratio: 664/638;
    transform: translateX(-250px);
  }

  @keyframes goRight {
    from {
      margin-left: -150px;
    }

    to {
      margin-left: 0px;
    }
  }

  @keyframes goLeft {
    from {
      margin-left: 150px;
    }

    to {
      margin-left: 0px;
    }
  }

  @media (max-width: 1400px) {
    height: 60%;

    div:nth-child(2) {
      transform: translateX(118px);
      figure {
        width: 26vw;
        min-width: 168.18px;
        max-width: 379px;
      }
    }

    div:nth-child(5) {
      transform: translateX(-150px);
      figure {
        width: 26vw;
        max-width: 379px;
        min-width: 168.18px;
      }
    }

    div:nth-child(1) {
      transform: translateX(220px);

      figure {
        width: 23vw;
      }
    }

    div:nth-child(6) {
      transform: translateX(-250px);

      figure {
        width: 23vw;
      }
    }
  }

  @media (max-width: 869px) {
    height: 40%;

    div:nth-child(1) {
      display: none;
      width: 0vw;
    }

    div:nth-child(6) {
      display: none;
      width: 0vw;
    }

    div:nth-child(4) {
      transform: translateX(-5vw);
    }

    div:nth-child(2) {
      transform: translateX(15vw);
    }

    div:nth-child(5) {
      transform: translateX(-15vw);
    }
  }

  @media (max-width: 650px) {
    div:nth-child(4) {
      transform: translateX(0vw);
    }
  }

  @media (max-width: 600px) {
    height: 40%;

    div:nth-child(1) {
      display: none;
      width: 0vw;
    }

    div:nth-child(6) {
      display: none;
      width: 0vw;
    }

    div:nth-child(4) {
      figure {
        min-width: 251.6px;
      }
    }

    div:nth-child(2) {
      transform: translateX(15vw);

      figure {
        max-height: 205.45px;
      }
    }
    div:nth-child(5) {
      transform: translateX(-15vw);
      figure {
        max-height: 197.02px;
      }
    }
  }

  @media (max-width: 480px) {
    height: 30%;

    div:nth-child(2) {
      transform: translateX(19vw);
    }

    div:nth-child(5) {
      transform: translateX(-17vw);
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  min-width: 572px;
  z-index: 1;
`;

export const Conversation = styled.div`
  position: absolute;
  width: 100%;
  min-width: 572px;
  z-index: 1;
  animation-duration: 2s;
  animation-name: goUp;
  animation-timing-function: ease-out;

  @keyframes goUp {
    from {
      bottom: -100px;
    }

    to {
      bottom: 0px;
    }
  }
`;

export const SoulsWrapper = styled.div<{
  isBlured: boolean;
}>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1642px;
  height: 1062px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: -9;
  overflow: hidden;

  ${(props) =>
    props.isBlured &&
    css`
      @media (max-width: 870px) {
        filter: blur(45.2417px);
      }
    `}
`;
