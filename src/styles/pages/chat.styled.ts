import styled from "styled-components";

export const StyledChatContainer = styled.main`
  position: relative;
  height: calc(100% - 96px);
  min-height: calc(100% - 96px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #0a0907;
  overflow-x: hidden;
  overflow-y: hidden;

  & > div {
    width: 50%;
    height: calc(100vh - 84px);
    min-height: calc(100vh - 84px);
  }

  & > div:first-child {
    overflow: visible;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    overflow-y: auto;
    & > div {
      width: 100%;
    }
  }

  @media (max-width: 870px) {
    height: 100%;
    min-height: 900px;

    & > div {
      height: 100%;
    }

    & > div:first-child {
      height: 405px;
      min-height: 405px;
    }

    & > div:last-child {
      /* height: 307px; */
      min-height: 307px;
    }
    overflow-y: scroll;
  }
`;

export const StyledSectionChatWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  background-color: #0a0907;
  overflow: hidden;

  @media (max-width: 1600px) {
    min-height: 100%;
  }

  @media (max-width: 1200px) {
    overflow-y: auto;
    min-height: 812px;
  }

  @media (max-width: 870px) {
    overflow-y: auto;
    min-height: 1000px;
  }
`;
