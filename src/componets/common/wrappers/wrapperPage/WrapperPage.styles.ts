import styled from "styled-components";

export const StyledBackground = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: visible;
  overflow-y: auto;
  background-color: ${(props) => props.background};
  z-index: -12;

  @media (max-width: 1250px) {
    justify-content: flex-start;
  }
`;

export const StyledMainContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1640px;
  display: flex;
  flex-direction: column;
  overflow-x: visible;

  @media (max-width: 1250px) {
    height: 100%;
    justify-content: flex-start;
  }
`;
