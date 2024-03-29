import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { setFreePlan, userSlice } from "@/store/reducers/userSlice";
import { SHARE_LINK_MESSAGE } from "@/constants/text-messages";
import localStorageHandler from "@/utils/local-storage-hendler";
import userService from "@/api/user-service";
import SecondaryWhiteBtn from "@/componets/common/buttons/SecondaryWhiteBtn";
import {
  StyledBtnWrapper,
  StyledFreeOfferBlock,
  StyledLabel,
  StyledOffer,
} from "./FreeOfferBlock.styles";
import { FC } from "react";

const FreeOfferBlock: FC = () => {
  const { shareLink } = useAppSelector((store) => store.userReducer);
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();

  const orderFreePlan = async () => {
    try {
      if (shareLink) {
        navigator.clipboard.writeText(SHARE_LINK_MESSAGE);
        alert("Link copied! Notice: you can get free questions only once");
        await userService.setFreePlan();
      }
      if (!shareLink) {
        dispatch(setFreePlan());
        localStorageHandler.setFreePaln();
        navigator.clipboard.writeText(SHARE_LINK_MESSAGE);
        alert(
          "Link copied. You now have the opportunity to ask 3 questions! Notice: you can get free questions only once"
        );
        await userService.setFreePlan();
      }
    } catch (err) {
      console.error("Error: bad purchase. Try again");
    }
  };

  const blockClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <StyledFreeOfferBlock onClick={(e) => blockClickHandler(e)}>
      <StyledLabel>Free</StyledLabel>
      <StyledOffer>
        <p>Share with a friend</p>
        <p>
          Get &nbsp;<span>5 free</span>&nbsp;questions when you share on social
          media
        </p>
      </StyledOffer>
      <StyledBtnWrapper>
        {isAuth && (
          <SecondaryWhiteBtn label={"Share"} clickHandler={orderFreePlan} />
        )}
      </StyledBtnWrapper>
    </StyledFreeOfferBlock>
  );
};

export default FreeOfferBlock;
