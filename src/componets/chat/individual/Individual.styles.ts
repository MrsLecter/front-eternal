import styled from "styled-components";

export const StyledIndividual = styled.div`
  position: relative;
  padding-top: 50px;
  width: 51.31vw;
  height: 66.9vh;
  max-width: 940px;
  max-height: 940px;
  margin: 0 auto;
  /* min-width: 100%; */
  /* height: 90%; */
  /* min-height: 1405px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
  z-index: 7;

  @media (min-width: 1600px) {
    /* min-height: 1405px; */
    button {
      display: none;
    }
  }

  @media (max-width: 1600px) {
    min-height: 90%;
    overflow-y: auto;
    button {
      display: none;
    }
  }

  @media (max-width: 1250px) {
    /* justify-content: cen  ter; */
    background-color: #0a0907;
    max-height: 505px;
    min-height: 100%;
    align-items: center;
    box-shadow: 0px 24px 34px #000000;
    button {
      display: none;
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
  margin-top: 19px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;

  & > h2 {
    margin-top: 0px;
    margin-bottom: 10px;
  }

  & > h4 {
    opacity: 0.7;
  }

  @media (max-width: 1250px) {
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

export const StyledWrapperLoader = styled.div`
  position: absolute;
  top: 10vh;
  width: 50vw;
  height: 50vh;

  overflow: visible;
  z-index: -1;
`;
