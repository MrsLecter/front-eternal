import ProBtn from "../../common/buttons/ProBtn";
import { StyledOfferBlock } from "./FreeOfferBlock";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";
import styled from "styled-components";
import CardNumberInput from "../../common/input/CardNumberInput";
import SecondaryWhiteBtn from "../../common/buttons/SecondaryWhiteBtn";
import paypalIcon from "@icons/paypal.svg";
import TitlePricing from "../../common/title/TitlePricing";
import CheckmarkBtn from "./elements/CheckmarkBtn";

const SubscribedBlock: React.FC = () => {
  return (
    <StyledOfferBlock>
      <CheckmarkBtn />
      <StyledMessage>
        <p>You have successfully subscribed!</p>
        <p>A receipt was sent to your email</p>
      </StyledMessage>
      <PrimarySubmitBtn label={"start chatting"} />
    </StyledOfferBlock>
  );
};

const StyledMessage = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  p {
    letter-spacing: -1%;
    text-align: center;
    color: white;
  }

  p:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
  }

  p:nth-child(2) {
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 375px) {
    margin-top: 16px;
    margin-bottom: 16px;
    p:first-child {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 16px;
    }

    p:nth-child(2) {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export default SubscribedBlock;
