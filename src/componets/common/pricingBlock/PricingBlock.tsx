import * as Avenir from "@typography/Avenir";
import { StyledPricingBlock } from "./PricingBlock.styles";
import ProLabel from "../label/ProLabel";

interface IPricingBlockProps {
  paymentMonthly: number;
  nextPayment?: string | Date;
}

const PricingBlock: React.FC<IPricingBlockProps> = ({
  paymentMonthly,
  nextPayment,
}) => {
  return (
    <StyledPricingBlock>
      <ProLabel />
      <Avenir.H4>${paymentMonthly}&nbsp;/&nbsp;month</Avenir.H4>
      <Avenir.BodyMedium>
        {!!nextPayment
          ? `Next payment will be processed on ${nextPayment}`
          : "Subscribe to have opportunity to asking unlimited questions"}
      </Avenir.BodyMedium>
    </StyledPricingBlock>
  );
};

export default PricingBlock;
