import styled, { css } from "styled-components";

export const WrapperDetailsCentring = styled.div<{ shouldNotScroll: boolean }>`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  ${(props) =>
    props.shouldNotScroll &&
    css`
      height: 100%;
      overflow: hidden;
    `}

  @media (max-width: 870px) {
    ${(props) =>
      props.shouldNotScroll &&
      css`
        height: 100%;
        overflow: hidden;
      `}
  }
`;

export const StyledModalWrapper = styled.div`
  position: relative;
  margin-top: 78px;
  margin-bottom: -72px;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  & > div {
    margin-top: 24px;
  }

  & > div:first-child {
    margin-top: 0px;
  }

  @media (max-width: 870px) {
    margin-top: 10px;
    margin-bottom: 66px;
  }
`;

export const WrapperDetailsForm = styled.div`
  margin-top: -2px;

  & > p {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: white;
  }

  @media (max-width: 870px) {
    margin-top: 0px;
  }
`;
