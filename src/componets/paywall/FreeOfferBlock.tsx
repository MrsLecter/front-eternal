import SecondaryWhiteBtn from "../../common/buttons/SecondaryWhiteBtn";
import styled from "styled-components";

const FreeOfferBlock: React.FC = () => {
  return (
    <StyledOfferBlock>
      <StyledLabel>Free</StyledLabel>
      <StyledOffer>
        <p>Share with a friend</p>
        <p>
          Get &nbsp;<span>3 free</span>&nbsp;questions when you share on social
          media
        </p>
      </StyledOffer>
      <StyledBtnWrapper>
        <SecondaryWhiteBtn label={"Share"} />
      </StyledBtnWrapper>
    </StyledOfferBlock>
  );
};

export const StyledOfferBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;
`;

const StyledLabel = styled.div`
  margin-bottom: 24px;
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

  @media (max-width: 530px) {
    margin-bottom: 18px;
    width: 60px;
    height: 37px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledOffer = styled.div`
  color: white;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;

  p:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 4px;
  }

  p:last-child {
    margin-bottom: 24px;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);

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

const StyledBtnWrapper = styled.div`
  width: 220px;

  @media (max-width: 530px) {
    width: 100%;
    margin-top: 16px;
  }
`;

export default FreeOfferBlock;
