import styled from "styled-components";

export const StyledIndividual = styled.div`
  position: relative;
  padding-top: 70px;
  width: 51.31vw;
  height: 66.9vh;
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

  /* & > div:nth-child(2) {
    width: 100%;
    margin-left: 30px;
    background: transparent;
  }
  & > div:nth-child(3) {
    width: 100%;
    background: black;
  } */

  button {
    display: none;
  }

  @media (max-width: 1600px) {
    min-height: 90%;
    overflow-y: auto;
  }

  @media (max-width: 1250px) {
    /* justify-content: cen  ter; */
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
    max-height: 421px;
    height: 100%;
    min-height: 100%;
    /* background-color: red; */
    z-index: 11;

    box-shadow: 0px 24px 34px #0a0907;

    & > div:first-child {
      margin-top: 0px;
      margin-bottom: 0px;
      max-height: 421px;
    }
  }
`;

export const StyledIndividualLabel = styled.div`
  margin-top: 0px;
  padding: 10px;
  width: 100%;
  height: 100%;
  /* min-height: 331px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  /* margin-left: 30px; */
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
    padding: 0px;
    margin-left: 0px;

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

  @media (max-width: 870px) {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    margin-top: 0px;
    padding-top: 0px;
    /* box-shadow: 0px 24px 34px #0a0907; */

    /* top: 310px; */

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
`;
