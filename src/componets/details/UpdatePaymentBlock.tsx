import Image from "next/image";
import styled from "styled-components";
import ProBtn from "../common/buttons/ProBtn";
import CardNumberInput from "../common/input/CardNumberInput";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import PricingBlock from "../common/pricingBlock/PricingBlock";
import TextBtn from "../common/buttons/TextBtn";
import SecondaryWhiteBtn from "../common/buttons/SecondaryWhiteBtn";
import { useAppSelector } from "@/hooks/reducers.hook";

const UpdatePaymentBlock: React.FC = () => {
  const { nextPayment } = useAppSelector((store) => store.userReducer);
  console.log("nextPayment", nextPayment);
  return (
    <StyledUpadatePaymentBlock>
      <PricingBlock paymentMonthly={10} nextPayment={nextPayment} />
      {nextPayment ? (
        <>
          <SecondaryWhiteBtn label={"update payment"} />
          <StyledTextWrapper>
            <TextBtn label={"cancel subscription"} />
          </StyledTextWrapper>
        </>
      ) : (
        <>
          <StyledCardWrapper>
            <CardNumberInput />
            <div>
              <PrimarySubmitBtn label={"save"} />
            </div>
          </StyledCardWrapper>
        </>
      )}
    </StyledUpadatePaymentBlock>
  );
};

const StyledCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -32px;

  & > div:nth-child(2) {
    margin-left: 16px;
    width: 119px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(2) {
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
  margin-top: 14px;
  margin-bottom: -48px;

  @media (max-width: 870px) {
    margin-bottom: -46px;
    margin-top: 8px;
    button {
      font-size: 12px;
    }
  }
`;

export default UpdatePaymentBlock;
