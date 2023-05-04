import { StyledOfferBlock } from "./FreeOfferBlock";
import styled from "styled-components";
import paypalIcon from "@icons/paypal.svg";
import ProBtn from "../common/buttons/ProBtn";
import TitlePricing from "../common/title/TitlePricing";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import SecondaryWhiteBtn from "../common/buttons/SecondaryWhiteBtn";
import CardNumberInput from "../common/input/CardNumberInput";

const CardpayBlock: React.FC = () => {
  return (
    <StyledOfferBlock>
      <ProBtn />
      <TitlePricing paymentMonthly={10} oneRow={true} />
      <StyledCardNumberWrapper>
        <CardNumberInput />
      </StyledCardNumberWrapper>
      <StyledSubmitBtnWrapper>
        <PrimarySubmitBtn label={"submit payment"} />
        <PrimarySubmitBtn label={"subscribe"} />
      </StyledSubmitBtnWrapper>

      <SecondaryWhiteBtn
        image={{ src: paypalIcon, width: 20, height: 24 }}
        label="pay with paypal"
      />
    </StyledOfferBlock>
  );
};

const StyledCardNumberWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: 375px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

const StyledSubmitBtnWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;

  button:nth-child(1) {
    display: block;
  }

  button:nth-child(2) {
    display: none;
  }

  @media (max-width: 375px) {
    margin-bottom: 16px;

    button:nth-child(1) {
      display: none;
    }

    button:nth-child(2) {
      display: block;
    }
  }
`;

export default CardpayBlock;
