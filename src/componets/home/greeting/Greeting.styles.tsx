import styled from "styled-components";

export const StyledBackgroundImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
`;

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 1262px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(
    115deg,
    rgba(88, 51, 239, 0.2) 0.5%,
    rgba(29, 29, 36, 0) 12%
  );
  /* overflow: hidden; */
`;

export const StyledTitleWrapper = styled.div`
  width: 800px;
  margin-top: 140px;

  @media (max-width: 375px) {
    width: 100%;
    margin-top: 65.03px;
  }
`;

export const StyledIndividualsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 567px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;

  #scene {
    height: 567px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > div {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledLayer = styled.div``;
