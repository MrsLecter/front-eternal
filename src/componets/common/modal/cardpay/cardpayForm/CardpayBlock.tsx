import paypalIcon from "@icons/paypal.svg";
import { useInput } from "@/hooks/use-input";
import { CODE_REGEXP } from "@/utils/regexp";
import { encrypt } from "@/utils/functions";
import { CARD_NUMBER_TEST } from "@/constants/common";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { internalSlice } from "@/store/reducers/internalSlice";
import TitlePricing from "@/componets/common/title/TitlePricing";
import CardNumberInput from "@/componets/common/input/cardNumberInput/CardNumberInput";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";
import SecondaryWhiteBtn from "@/componets/common/buttons/SecondaryWhiteBtn";
import { StyledProOfferBlock } from "../../payment/paymentlForm/proOfferBlock/ProOfferBlock.styles";
import {
  PaypalWrapper,
  ProBtnWrapper,
  StyledCardNumberWrapper,
  StyledSubmitBtnWrapper,
  TitleWrapper,
} from "./CardpayBlock.styles";
import ProLabel from "@/componets/common/label/ProLabel";

interface ICardpayBlockProps {
  isNeedSubmitBtn?: boolean;
}

const CardpayBlock: React.FC<ICardpayBlockProps> = ({
  isNeedSubmitBtn = true,
}) => {
  const { setProPlan } = userSlice.actions;
  const { toggleToResult } = internalSlice.actions;
  const dispatch = useAppDispatch();

  const {
    value: cardNumber,
    error: cardNumberIsValid,
    changeHandler: cardNumberChangeHandler,
  } = useInput({
    regexp: CODE_REGEXP,
    allowEmpty: false,
    mask: "1234 1234 1234 1234",
    maskType: "cardnumber",
  });

  const {
    value: monthYear,
    error: monthYearIsValid,
    changeHandler: monthYearChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
    mask: "mm/yy",
    maskType: "mmyy",
  });

  const {
    value: CVV,
    error: CVVIsValid,
    changeHandler: CVVChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
    mask: "123",
    maskType: "cvc",
  });

  const orderProPlanHandler = async () => {
    if (!cardNumberIsValid) {
      alert("Error: card number is not valid!");
    }
    if (!monthYearIsValid) {
      alert("Error: month and year is not valid!");
    }
    if (!CVVIsValid) {
      alert("Error: cvv is not valid!");
    }
    if (cardNumberIsValid && monthYearIsValid && CVVIsValid) {
      const [month, year] = monthYear.split("/");

      const cardObject = {
        card: CARD_NUMBER_TEST,
        exp_year: 20 + year,
        exp_month: month,
        cvc: CVV,
      };
      const encrypted = encrypt(JSON.stringify(cardObject));

      try {
        const response = await userService.setProPlan(encrypted);

        if (response.status === 200) {
          dispatch(setProPlan());
          localStorageHandler.setProPlan();
          dispatch(toggleToResult());
        }
        if (response.status === 406) {
          const date = new Date(localStorageHandler.getNextPayment());
          const dateArr = date.toUTCString().split(" ");
          alert(
            `Error: you already subscribed! Next payment: ${dateArr[3]},  ${dateArr[1]}  ${dateArr[2]}`
          );
        }
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  };

  const blockClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <StyledProOfferBlock onClick={(e) => blockClickHandler(e)}>
      <ProBtnWrapper>
        <ProLabel />
      </ProBtnWrapper>

      <TitleWrapper>
        <TitlePricing paymentMonthly={10} oneRow={true} />
      </TitleWrapper>

      <StyledCardNumberWrapper>
        <CardNumberInput
          isHeigh={false}
          cardNumberValue={cardNumber}
          cardNumberChangeHandler={cardNumberChangeHandler}
          mmyyValue={monthYear}
          mmyyChangeHandler={monthYearChangeHandler}
          cvvValue={CVV}
          cvvChangeHandler={CVVChangeHandler}
          haveFocus={true}
        />
      </StyledCardNumberWrapper>
      <StyledSubmitBtnWrapper isNeedSubmitBtn={isNeedSubmitBtn}>
        {document.documentElement.clientWidth > 870 ? (
          <PrimarySubmitBtn
            label={"submit payment"}
            clickHandler={orderProPlanHandler}
            isHigh={false}
          />
        ) : (
          <PrimarySubmitBtn
            label={"subscribe"}
            clickHandler={orderProPlanHandler}
            isHigh={false}
          />
        )}
      </StyledSubmitBtnWrapper>
      <PaypalWrapper>
        <SecondaryWhiteBtn
          image={{ src: paypalIcon, width: 20, height: 24 }}
          label="pay with paypal"
        />
      </PaypalWrapper>
    </StyledProOfferBlock>
  );
};

export default CardpayBlock;
