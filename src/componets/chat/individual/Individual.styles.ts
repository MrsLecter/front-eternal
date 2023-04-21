import styled from "styled-components";

export const StyledIndividual = styled.div`
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > div:first-child {
    width: 110%;
  }

  @media (max-width: 375px) {
    & > div:first-child {
      width: 90%;
    }
  }
`;

export const StyledIndividualLabel = styled.div`
  margin-top: 19px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;

  p:first-child {
    font-family: "Arquitecta Medium";
    font-weight: 500;
    font-size: 24px;
    line-height: 31.2px;
    text-align: center;
  }

  p:last-child {
    margin-top: 10px;
    font-family: "Arquitecta Bold";
    font-weight: 700;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: 0.15em;
    text-align: center;
  }
`;
