import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 1642px;
  height: 1182px;
  min-height: 1182px;
  max-height: 1182px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 3;

  @media (max-width: 1130px) {
    height: 1100px;
    min-height: 1100px;
    max-height: 1100px;
  }

  @media (max-width: 900px) {
    height: 900px;
    min-height: 900px;
    max-height: 900px;
  }

  @media (max-width: 670px) {
    height: 645px;
    min-height: 645px;
    max-height: 716px;
  }
`;

export const StyledTitleWrapper = styled.div`
  width: 800px;
  margin-top: 136px;
  margin-left: 12px;

  @media (max-width: 670px) {
    width: 100%;
    margin-top: 44px;
  }
`;
