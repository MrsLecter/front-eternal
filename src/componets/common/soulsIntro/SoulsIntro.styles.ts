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
  /* position: absolute; */
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
      /* min-width: 396px; */

      img {
        animation-delay: 0.4s;
        animation-duration: 3s;
        animation-timing-function: ease-out;
        animation-name: goRight;
      }
    }
    aspect-ratio: 664/638;
    transform: translateX(240px);
    /* margin-left: 80px; */
    /* animation-duration: 3s;
    animation-name: goRight; */
  }

  div:nth-child(2) {
    figure {
      width: 23vw;
      max-width: 379px;
      min-width: 191.25px;

      img {
        animation-duration: 3s;
        animation-name: goRight;
        animation-timing-function: ease-out;
      }
    }
    /* aspect-ratio: 758/812; */
    aspect-ratio: 664/638;
    transform: translateX(150px);
    /* margin-left: -120px; */
    /* animation-duration: 3s;
    animation-name: goRight; */
  }

  div:nth-child(3) {
    width: 100vw;
    /* min-width: 408px; */
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
    /* background-color: red; */
    margin: 0 auto;
  }

  div:nth-child(5) {
    figure {
      width: 23vw;
      max-width: 379px;
      min-width: 168.18px;

      img {
        animation-duration: 3s;
        animation-name: goLeft;
        animation-timing-function: ease-out;
      }
    }
    /* aspect-ratio: 758/812; */
    aspect-ratio: 664/638;
    transform: translateX(-150px);
    /* margin-right: 0px; */
  }

  div:nth-child(6) {
    figure {
      width: 28vw;
      max-width: 332px;
      /* min-width: 332px; */
      img {
        animation-delay: 0.4s;
        animation-duration: 3s;
        animation-name: goLeft;
        animation-timing-function: ease-out;
      }
    }
    aspect-ratio: 664/638;
    transform: translateX(-250px);
    /* margin-right: 0px; */
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
      /* position: relative; */
      margin-left: 0px;
    }
  }

  @media (max-width: 1400px) {
    height: 60%;
    div:nth-child(2) {
      figure {
        width: 26vw;
        min-width: 168.18px;
        max-width: 379px;
      }
      transform: translateX(118px);
    }

    div:nth-child(5) {
      figure {
        width: 26vw;
        max-width: 379px;
        min-width: 168.18px;
      }
      transform: translateX(-150px);
    }

    div:nth-child(1) {
      figure {
        width: 23vw;
      }
      transform: translateX(220px);
    }
    div:nth-child(6) {
      figure {
        width: 23vw;
      }
      transform: translateX(-250px);
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
      /* background-color: yellow; */
      transform: translateX(-5vw);
    }

    div:nth-child(2) {
      transform: translateX(15vw);

      /* background-color: lightblue; */
    }
    div:nth-child(5) {
      transform: translateX(-15vw);
      /* background-color: lightcoral; */
    }
  }

  @media (max-width: 650px) {
    div:nth-child(4) {
      /* background-color: yellow; */
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

      /* background-color: yellow; */
    }

    div:nth-child(2) {
      figure {
        max-height: 205.45px;
      }
      transform: translateX(15vw);
      /* transform: translateX(0vw); */

      /* background-color: lightblue; */
    }
    div:nth-child(5) {
      figure {
        max-height: 197.02px;
      }
      transform: translateX(-15vw);
      /* transform: translateX(0vw); */
      /* background-color: lightcoral; */
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
  animation-duration: 3s;
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

  /* @media (max-width: 870px) {
    figure {
      width: 130vw;
    } 


  } */
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

  /* padding-left: 50px;
  padding-right: 50px; */
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

  @media (max-width: 375px) {
    /* height: 800px; */
  }
`;
