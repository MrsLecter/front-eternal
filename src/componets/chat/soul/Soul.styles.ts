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
  background: linear-gradient(180deg, rgba(17, 17, 21, 0) 30%, #0a0907 100%);
  z-index: 3;

  @media (max-width: 870px) {
    bottom: -0px;
  }
`;

export const StyledSoul = styled.div`
  position: relative;
  padding-top: 77px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;

  & > div {
    position: relative;
    overflow-x: visible;
  }

  @media (max-width: 1250px) {
    margin-top: 30px;
    height: 360px;
    min-height: 360px;
  }

  @media (max-width: 870px) {
    margin-top: 50px;
  }
`;

export const StyledSoulLabel = styled.div`
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
`;
