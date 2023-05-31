import styled from "styled-components";

export const StyledChatContainer = styled.main`
  position: relative;
  height: calc(100% - 96px);
  min-height: calc(100% - 96px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #0a0907;

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
    & > div {
      width: 100%;
      height: 421px;
      min-height: 421px;
    }
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
`;
