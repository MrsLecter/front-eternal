import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import ProBtn from "../common/buttons/ProBtn";
import TitlePricing from "../common/title/TitlePricing";
import { StyledOfferBlock } from "./FreeOfferBlock";
import OfferList from "./elements/OfferList";

const ProOfferBlock: React.FC = () => {
  return (
    <StyledOfferBlock>
      <ProBtn />
      <TitlePricing paymentMonthly={10} oneRow={true} />
      <OfferList />
      <PrimarySubmitBtn label={"subscribe"} />
    </StyledOfferBlock>
  );
};

export default ProOfferBlock;
