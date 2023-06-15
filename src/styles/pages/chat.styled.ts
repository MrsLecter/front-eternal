import styled from "styled-components";

export const StyledSectionChatWrapper = styled.div`
  height: 100vh;
  min-height: 100vh;
  overflow-x: visible;

  @media (max-width: 1250px) {
    height: 100%;
    min-height: 100%;
  }
`;

export const StyledChatContainer = styled.main`
  position: relative;
  height: calc(100% - 96px);
  min-height: calc(100% - 96px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #0a0907;
  overflow-x: visible;
  overflow-y: hidden;

  & > div {
    width: 50%;
    /* height: calc(100% - 84px);
    min-height: calc(100% - 84px); */
    height: 100%;
    min-height: 100%;
  }

  & > div:first-child {
    overflow: visible;
    box-shadow: 0px 24px 34px #0a0907;
    z-index: 10;
  }

  & > div:last-child {
    z-index: 3;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    overflow-y: auto;
    & > div {
      width: 100%;
    }
    min-height: 728px;
    height: calc(100% - 84px);
    max-height: calc(100% - 84px);

    & > div {
      height: 100%;
    }

    & > div:first-child {
      height: 360px;
      min-height: 360px;
    }

    & > div:last-child {
      min-height: 368px;
    }
    overflow-y: scroll;
  }
`;
