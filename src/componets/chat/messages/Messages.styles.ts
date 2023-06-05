import styled from "styled-components";

export const StyledMessages = styled.div`
  padding-left: 60px;
  position: relative;
  min-width: calc(100% - 60px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  background-color: transparent;
  z-index: 10;
  /* 
  @media (max-width: 1600px) {
    min-height: calc(100% - 80px);
    min-width: calc(100% - 32px);
    padding-left: 16px;
  }
*/
  @media (max-width: 1250px) { 
    justify-content: flex-end;
    align-items: start;
    padding-bottom: 0px;
    min-width: calc(100% - 505px);
    padding-left: 16px;
  }

  @media (max-width: 870px) {
    margin-top: 100px;
    padding-top: 0px;
    height: calc(100% - 80px);
    min-height: 368px;
  }
`;
