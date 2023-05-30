import OfferList from "./elements/OfferList";
import styled from "styled-components";
import localStorageHandler from "@/utils/local-storage-hendler";
import { internalSlice } from "@/store/reducers/internalSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import TitlePricing from "@/componets/common/title/TitlePricing";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";
import ProBtn from "@/componets/common/buttons/ProBtn";

const ProOfferBlock: React.FC = () => {
  const isAuth = localStorageHandler.getAccessToken();

  const { toggleToCardpay } = internalSlice.actions;
  const dispatch = useAppDispatch();

  const goToCardPay = () => {
    dispatch(toggleToCardpay());
  };

  const blockClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <StyledProOfferBlock onClick={(e) => blockClickHandler(e)}>
      <StyledProBtnWrapper>
        <ProBtn />
      </StyledProBtnWrapper>

      <TitlePricing paymentMonthly={10} oneRow={true} />
      <OfferList />

      <WrapperPrimary>
       {isAuth && <PrimarySubmitBtn
          label={"subscribe"}
          clickHandler={goToCardPay}
          isHigh={false}
        />} 
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
  height: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: 870px) {
    min-height: 100%;
  }
`;

const StyledProBtnWrapper = styled.div`
  margin-bottom: 12px;
`;

export default ProOfferBlock;
