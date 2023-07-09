import CheckmarkCircle from "../../payment/paymentlForm/elements/CheckmarkCircle";
import { useAppDispatch } from "@/hooks/reducers.hook";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";
import { StyledMessage } from "./SubscribedBlock.styles";
import { StyledProOfferBlock } from "../../payment/paymentlForm/proOfferBlock/ProOfferBlock.styles";
import { FC } from "react";
import { backdropClick } from "@/store/reducers/modalSlice";

const SubscribedBlock: FC = () => {
  const dispatch = useAppDispatch();

  const goToHomePage = () => {
    dispatch(backdropClick());
  };

  const blockClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <StyledProOfferBlock onClick={(e) => blockClickHandler(e)}>
      <CheckmarkCircle />
      <StyledMessage>
        <p>You have successfully subscribed!</p>
        <p>A receipt was sent to your email</p>
      </StyledMessage>

      <PrimarySubmitBtn
        label={"start chatting"}
        isHigh={false}
        clickHandler={goToHomePage}
      />
    </StyledProOfferBlock>
  );
};

export default SubscribedBlock;
