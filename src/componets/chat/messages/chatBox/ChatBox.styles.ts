import styled from "styled-components";

export const StyledChatBox = styled.div`
  position: absolute;
  bottom: 130px;
  width: calc(94% - 5.27%);
  min-width: calc(94% - 5.27%);
  margin-top: 54px;
  height: calc(100% - 184px);
  max-height: calc(100% - 184px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: auto;

  & > div {
    position: relative;
    min-width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    transform: rotateX(180deg);
  }

  @media (min-width: 1640px) {
    margin-right: 40px;
  }

  @media (max-width: 1250px) {
    margin-top: 0px;
    margin-right: 12px;
    max-height: 100%;
  }

  @media (max-width: 870px) {
    min-width: 343px;
    height: 100%;
    min-height: 307px;
    max-height: 100%;

    bottom: 90px;
    margin-right: 0px;
    width: 88vw;
  }
`;
