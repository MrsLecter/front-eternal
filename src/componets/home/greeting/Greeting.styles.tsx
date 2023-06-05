import styled from "styled-components";

export const StyledBackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 100%;
  height: 1262px;
  min-height: 1262px;
  overflow: hidden;
  max-width: 1642px;
  min-width: 700px;

  & > div:nth-child(1) {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    animation-name: conversationUp;
    animation-duration: 4s;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  //blur
  & > div:nth-child(2) {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.7;
      object-fit: contain;
    }
  }
  //black
  & > div:nth-child(3) {
    position: absolute;
    bottom: -3px;
    width: 100%;
    z-index: 6;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  //jobs
  & > div:nth-child(4) {
    position: absolute;
    bottom: 0px;
    width: 100%;
    animation-name: leftToRight;
    animation-duration: 4s;
    z-index: 5;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  //einshtain
  & > div:nth-child(5) {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    animation-name: rightToLeft;
    animation-duration: 4s;
    /* z-index: 5; */

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  //ilon
  & > div:nth-child(6) {
    position: absolute;
    bottom: 0px;
    width: 100%;
    animation-name: leftToRight;
    animation-duration: 4s;
    z-index: 4;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  //teresa
  & > div:nth-child(7) {
    position: absolute;
    bottom: 0px;
    width: 100%;
    animation-name: rightToLeft;
    animation-duration: 4s;
    z-index: 4;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 1130px) {
    height: 1100px;
    min-height: 1100px;
    max-height: 1100px;
  }

  @media (max-width: 900px) {
    height: 900px;
    min-height: 900px;
    max-height: 900px;
  }

  @media (max-width: 670px) {
    top: 0px;
    height: 716px;
    min-height: 616px;
    max-height: 716px;
  }

  @keyframes conversationUp {
    from {
      bottom: -400px;
      opacity: 0;
    }
    to {
      bottom: 0px;
      opacity: 1;
    }
  }

  @keyframes leftToRight {
    from {
      left: -400px;
      opacity: 0;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }

  @keyframes rightToLeft {
    from {
      right: -400px;
      opacity: 0;
    }
    to {
      right: 0px;
      opacity: 1;
    }
  }
`;

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 1642px;
  height: 1182px;
  min-height: 1182px;
  max-height: 1182px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 3;

  @media (max-width: 1130px) {
    height: 1100px;
    min-height: 1100px;
    max-height: 1100px;
  }

  @media (max-width: 900px) {
    height: 900px;
    min-height: 900px;
    max-height: 900px;
  }

  @media (max-width: 670px) {
    height: 645px;
    min-height: 645px;
    max-height: 716px;
  }
`;

export const StyledTitleWrapper = styled.div`
  width: 800px;
  margin-top: 140px;
  margin-left: 12px;

  @media (max-width: 670px) {
    width: 100%;
    margin-top: 58px;
  }
`;
