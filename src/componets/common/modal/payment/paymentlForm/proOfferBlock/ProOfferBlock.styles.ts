import styled from "styled-components";

export const WrapperPrimary = styled.div`
  width: 220px;
  min-width: 220px;
  max-width: 220px;

  @media (max-width: 870px) {
    width: 295px;
    min-width: 295px;
  }
`;

export const StyledProOfferBlock = styled.div`
  height: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: 870px) {
    min-height: 100%;
  }
`;

export const StyledProBtnWrapper = styled.div`
  margin-bottom: 12px;
  &:hover {
    cursor: default;
  }
`;
