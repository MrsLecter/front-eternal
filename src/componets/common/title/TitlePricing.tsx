import styled from "styled-components";

interface ITitlePricingProps {
  paymentMonthly: number;
  nextPayment?: string;
  oneRow?: boolean;
}

const TitlePricing: React.FC<ITitlePricingProps> = ({
  paymentMonthly,
  nextPayment,
  oneRow = false,
}) => {
  return (
    <StyledTitlePricing>
      <p>${paymentMonthly}&nbsp;/&nbsp;month</p>
      {!oneRow && <p>Next payment will be processed on {nextPayment}</p>}
    </StyledTitlePricing>
  );
};

const StyledTitlePricing = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;

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
    margin-bottom: 12px;
  }

  p:nth-child(2) {
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    opacity: 0.7;
  }

  @media (max-width: 870px) {
    width: 184px;
    margin-top: 4px;
    margin-bottom: 8px;

    p:first-child {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 8px;
    }

    p:nth-child(2) {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default TitlePricing;
