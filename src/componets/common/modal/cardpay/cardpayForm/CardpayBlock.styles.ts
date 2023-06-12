import styled from "styled-components";

export const ProBtnWrapper = styled.div`
  @media (max-width: 870px) {
    margin-bottom: 10px;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 12px;

  @media (max-width: 870px) {
    margin-top: 0px;
  }
`;

export const PaypalWrapper = styled.div`
  display: none;

  @media (max-width: 870px) {
    display: block;
    width: 100%;
    margin-bottom: -26px;
  }
`;

export const StyledCardNumberWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 22px;

  @media (max-width: 375px) {
    margin-top: 12px;
    margin-bottom: 16px;
  }
`;

export const StyledSubmitBtnWrapper = styled.div<{ isNeedSubmitBtn: boolean }>`
  width: 100%;
  margin-bottom: -30px;

  button:nth-child(1) {
    display: block;
  }

  button:nth-child(2) {
    display: none;
  }

  @media (max-width: 870px) {
    margin-top: -2px;
    margin-bottom: 24px;
  }

  @media (max-width: 375px) {
    margin-bottom: 16px;

    button:nth-child(1) {
      display: ${(props) => (props.isNeedSubmitBtn ? "block" : "none")};
    }

    button:nth-child(2) {
      display: block;
    }
  }
`;
