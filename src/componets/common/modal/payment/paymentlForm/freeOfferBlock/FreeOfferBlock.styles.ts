import styled from "styled-components";

export const StyledFreeOfferBlock = styled.div`
  height: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: 870px) {
    height: 186px;
    min-height: 100px;
  }
`;

export const StyledLabel = styled.div`
  margin-top: 50px;
  margin-bottom: 32px;
  width: 68px;
  height: 43px;
  background-color: white;
  border-radius: 16px;
  padding: 8px 16px;
  color: #0e0e10;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.01em;
  user-select: none;

  @media (max-width: 870px) {
    margin-top: -2px;
    margin-bottom: 18px;
    width: 60px;
    height: 37px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const StyledOffer = styled.div`
  color: white;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;

  p:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 12px;
  }

  p:last-child {
    margin-bottom: 24px;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: -0.01em;

    span {
      color: ${({ theme }) => theme.color.pink};
    }
  }
  @media (max-width: 530px) {
    p:first-child {
      font-size: 18px;
      margin-bottom: 4px;
    }

    p:last-child {
      margin-bottom: 0px;
      font-size: 14px;
    }
  }
`;

export const StyledBtnWrapper = styled.div`
  width: 220px;
  margin-bottom: 0px;

  @media (max-width: 530px) {
    width: 100%;
    margin-top: 10px;
  }
`;
