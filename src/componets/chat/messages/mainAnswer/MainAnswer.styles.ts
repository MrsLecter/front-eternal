import styled from "styled-components";

export const StyledMainAnswer = styled.div`
  position: relative;
  margin-bottom: 2.27vh;
`;

export const StyledMainAnswerContainer = styled.div`
  position: relative;
  float: right;
  width: calc(100% - 42px);
  min-width: calc(100% - 42px);
  padding: 11px 8px 11px 11px;
  border-radius: 28px;
  background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  text-overflow: ellipsis;

  & > div:first-child {
    content: "";
    position: absolute;
    top: calc(50% - 42px);
    left: -84px;
    border-color: transparent #7831dd transparent transparent;
    border-style: solid;
    border-width: 42px 42px 42px 42px;
    height: 0px;
    width: 0px;
  }

  & > div:nth-child(2) {
    content: "";
    position: absolute;
    top: calc(50% - 82px);
    left: -95px;
    border-color: transparent #7831dd transparent transparent;
    border-style: solid;
    border-width: 82px 22px 82px 82px;
    height: 0px;
    width: 0px;
  }

  & > div:last-child {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 3.39vw 2.86vw;
    font-family: "Avenir Medium";
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #0a0806;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 28px;

    div {
      width: 100%;
      min-height: 10px;
      max-height: 144px;
      overflow-y: auto;
    }
  }
`;
