import OfferList from "../elements/OfferList";
import localStorageHandler from "@/utils/local-storage-hendler";
import { useAppDispatch } from "@/hooks/reducers.hook";
import TitlePricing from "@/componets/common/title/TitlePricing";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";
import {
  StyledProBtnWrapper,
  StyledProOfferBlock,
  WrapperPrimary,
} from "./ProOfferBlock.styles";
import ProLabel from "@/componets/common/label/ProLabel";
import { toggleToCardpay } from "@/store/reducers/modalSlice";
import { FC } from "react";

const ProOfferBlock: FC = () => {
  const isAuth = localStorageHandler.getAccessToken();
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
        <ProLabel />
      </StyledProBtnWrapper>

      <TitlePricing paymentMonthly={10} oneRow={true} />
      <OfferList />

      <WrapperPrimary>
        {isAuth && (
          <PrimarySubmitBtn
            label={"subscribe"}
            clickHandler={goToCardPay}
            isHigh={false}
          />
        )}
      </WrapperPrimary>
    </StyledProOfferBlock>
  );
};

export default ProOfferBlock;
