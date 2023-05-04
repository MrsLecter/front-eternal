import * as Avenir from "@typography/Avenir";
import styled from "styled-components";
import ProBtn from "../buttons/ProBtn";

interface IPricingBlockProps {
  paymentMonthly: number;
  nextPayment?: string;
}

const PricingBlock: React.FC<IPricingBlockProps> = ({
  paymentMonthly,
  nextPayment,
}) => {
  return (
    <StyledPricingBlock>
      <ProBtn />
      <Avenir.H4>${paymentMonthly}&nbsp;/&nbsp;month</Avenir.H4>
      <Avenir.BodyMedium>
        {nextPayment
          ? `Next payment will be processed on ${nextPayment}`
          : "Subscribe to have opportunity to asking unlimited questions"}
      </Avenir.BodyMedium>
    </StyledPricingBlock>
  );
};

const StyledPricingBlock = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  & > h4 {
    color: #ffffff;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  & > p:last-child {
    color: #ffffff;
    opacity: 0.7;
  }

  @media (max-width: 870px) {
    width: 189px;
    height: 130px;
    margin-bottom: 16px;

    button {
      margin-top: -4px;
    }

    & > h4 {
      margin-top: 4px;
      margin-bottom: 6px;
      font-size: 20px;
    }

    & > p:last-child {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default PricingBlock;
