import styled from "styled-components";

export const StyledCardWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -22px;

  & > div:nth-child(2) {
    margin-left: 16px;
    margin-bottom: -4px;
    width: 119px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(2) {
      width: 100%;
      margin-left: 0px;
      margin-top: 16px;
      margin-bottom: 6px;
    }
  }
`;

export const StyledUpadatePaymentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledTextWrapper = styled.div`
  width: 100%;
  margin-top: 14px;
  margin-bottom: -50px;
  border-radius: 50%;

  @media (max-width: 870px) {
    margin-bottom: -46px;
    margin-top: 8px;
    button {
      font-size: 12px;
    }
  }
`;
