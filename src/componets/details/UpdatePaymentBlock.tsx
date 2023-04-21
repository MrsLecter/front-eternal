import ProBtn from "../../common/buttons/ProBtn";
import SecondaryWhiteBtn from "../../common/buttons/SecondaryWhiteBtn";
import TextBtn from "../../common/buttons/TextBtn";
import Image from "next/image";
import styled from "styled-components";
import Pricing from "../../common/title/TitlePricing";
import CardNumberInput from "../../common/input/CardNumberInput";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";

const UpdatePaymentBlock: React.FC = () => {
  return (
    <StyledUpadatePaymentBlock>
      <ProBtn />
      <Pricing paymentMonthly={10} nextPayment={"April 6"} />
      <StyledCardWrapper>
        <CardNumberInput />
        <div>
          <PrimarySubmitBtn label={"save"} />
        </div>
      </StyledCardWrapper>
      {/* <SecondaryWhiteBtn label={"update payment"} />
      <StyledTextWrapper>
        <TextBtn label={"cancel subscription"} />
      </StyledTextWrapper> */}
    </StyledUpadatePaymentBlock>
  );
};

const StyledCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div:last-child {
    margin-left: 16px;
    width: 162px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;

    & > div:last-child {
      width: 100%;
      margin-left: 0px;
      margin-top: 16px;
    }
  }
`;

const StyledUpadatePaymentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
  margin-top: 23px;
`;

export default UpdatePaymentBlock;
