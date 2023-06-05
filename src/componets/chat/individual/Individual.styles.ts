import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  min-height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: visible;

  @media (max-width: 1250px) {
    height: 360px;
    min-height: 360px;

    & > div:last-child {
      top: -50px;
    }
  }

  /* position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 870px) {
    overflow: hidden;
  } */
`;

export const ImageGradient = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: inherit;
  max-width: inherit;
  height: 19%;
  object-fit: contain;
  background: linear-gradient(180deg, rgba(17, 17, 21, 0) 30%, #111115 100%);
  z-index: 3;

  @media (max-width: 870px) {
    bottom: -0px;
  }
`;

export const StyledIndividual = styled.div`
  position: relative;
  padding-top: 77px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;



  & > div {
    position: relative;
  }

  @media (max-width: 1250px) {
    margin-top: 30px;
    height: 360px;
    min-height: 360px;
  }

  @media (max-width: 870px) {
    margin-top: 50px;
  }

  /* position: relative;
  padding-top: 70px;
  width: 51.31vw;
  height: 100%;
  max-width: 940px;
  max-height: 940px;
  min-height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
  background-color: #0a0907;
  box-shadow: 0px 24px 34px #0a0907;
  overflow: hidden;
  overflow-y: auto;
  z-index: 7; 

  & > div {
    width: 101%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: transparent;

    div:first-child {
      margin-bottom: -24px;
      z-index: 10;
      animation: appearance 0.5s ease-in-out;

      @keyframes appearance {
        from {
          filter: blur(77px);
        }
        to {
          filter: blur(0px);
        }
      }
    }
  }

  button {
    display: none;
  } */
  /*
  @media (max-width: 1600px) {
    min-height: 90%;
    overflow-y: auto;
  }

  @media (max-width: 1250px) {
    width: 90vw;
    background-color: #0a0907;
    max-height: 505px;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 11;
    box-shadow: 0px 24px 34px #0a0907;

    & > div:nth-child(2) {
      margin-left: 0px;
    }

    & > div:nth-child(1) {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 100%;
    min-height: 100%;
    z-index: 11;
    box-shadow: 0px 24px 34px #0a0907;
    overflow: hidden;

    & > div:first-child {
      margin-top: 0px;
      margin-bottom: 0px;
      max-height: 421px;
    }
  }
  @media (max-width: 450px) {
    height: 421px;
  } */
`;

export const StyledIndividualLabel = styled.div`
  margin-top: 0px;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  background-color: #0a0907;

  z-index: 11;

  & > h2 {
    margin-top: 0px;
    margin-bottom: 10px;
  }

  & > h4 {
    opacity: 0.7;
  }

  @media (max-width: 1250px) {
    position: absolute;
    bottom: 48px;
    padding: 0px;
    margin-left: 0px;
    background-color: transparent;

    h2 {
      font-size: 14px;
      line-height: 15.4px;
      letter-spacing: 0.15em;
    }

    h4 {
      font-size: 11px;
      line-height: 12.1px;
      letter-spacing: 0.2em;
    }
  }

  /* @media (max-width: 870px) {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 29px;
    margin-top: 0px;
    padding-top: 0px;
    z-index: 12;
    background-color: transparent;

    h2 {
      margin-bottom: 2px;
      z-index: 12;
    }

    h4 {
      z-index: 12;
    }
  }

  @media (max-width: 450px) {
    bottom: 20px;
  } */
`;
