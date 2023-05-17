import { useRouter } from "next/router";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import ProBtn from "../common/buttons/ProBtn";
import TitlePricing from "../common/title/TitlePricing";
import OfferList from "./elements/OfferList";
import { APP_ROUTES } from "@/constants/common";
import styled from "styled-components";

const ProOfferBlock: React.FC = () => {
  const router = useRouter();

  const goToCardPay = () => {
    console.log("click cardpay");
    router.push(APP_ROUTES.Cardpay);
  };
  return (
    <StyledProOfferBlock>
      <StyledProBtnWrapper>
        <ProBtn />
      </StyledProBtnWrapper>

      <TitlePricing paymentMonthly={10} oneRow={true} />
      <OfferList />
      <WrapperPrimary>
        <PrimarySubmitBtn
          label={"subscribe"}
          clickHandler={goToCardPay}
          isHigh={false}
        />
      </WrapperPrimary>
    </StyledProOfferBlock>
  );
};

const WrapperPrimary = styled.div`
  width: 220px;
  min-width: 220px;
  max-width: 220px;

  @media (max-width: 870px) {
    width: 295px;
    min-width: 295px;
  }
`;

export const StyledProOfferBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

const StyledProBtnWrapper = styled.div`
  margin-bottom: 12px;
`;

export default ProOfferBlock;
