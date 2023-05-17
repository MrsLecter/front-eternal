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
  z-index: 7;

  & > div {
    display: flex;
    overflow: hidden;
  }

  & > div:nth-child(2) {
    width: 100%;
    margin-left: 30px;
    background: transparent;
  }
  & > div:nth-child(3) {
    width: 100%;
    background: black;
  }

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

  @media (max-width: 800px) {
    button {
      display: block;
      position: absolute;
      top: 475px;
      right: 50px;
    }
  }

  @media (max-width: 400px) {
    button {
      display: block;
      position: absolute;
      top: 475px;
      right: 38%;
    }
  }
`;

export const StyledIndividualLabel = styled.div`
  margin-top: 0px;
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  margin-left: 30px;

  & > h2 {
    margin-top: 0px;
    margin-bottom: 10px;
  }

  & > h4 {
    opacity: 0.7;
  }

  @media (max-width: 1250px) {
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
`;
