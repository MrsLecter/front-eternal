import styled from "styled-components";
import paypalIcon from "@icons/paypal.svg";
import { useInput } from "@/hooks/use-input";
import { CODE_REGEXP } from "@/utils/regexp";
import { encrypt } from "@/utils/functions";
import { APP_ROUTES, CARD_NUMBER } from "@/constants/common";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import userService from "@/api/user-service";
import { useRef } from "react";
import localStorageHandler from "@/utils/local-storage-hendler";
import { StyledProOfferBlock } from "../../payment/paymentlForm/ProOfferBlock";
import { internalSlice } from "@/store/reducers/internalSlice";
import ProBtn from "@/componets/common/buttons/ProBtn";
import TitlePricing from "@/componets/common/title/TitlePricing";
import CardNumberInput from "@/componets/common/input/CardNumberInput";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";
import SecondaryWhiteBtn from "@/componets/common/buttons/SecondaryWhiteBtn";

interface ICardpayBlockProps {
  isNeedSubmitBtn?: boolean;
}

const CardpayBlock: React.FC<ICardpayBlockProps> = ({
  isNeedSubmitBtn = true,
}) => {
  const { setProPlan } = userSlice.actions;
  const { toggleToResult } = internalSlice.actions;
  const { nextPayment } = useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

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
    console.log(
      "variables",
      cardNumber,
      cardNumberIsValid,
      monthYear,
      monthYearIsValid,
      CVV,
      CVVIsValid
    );

    if (cardNumberIsValid && monthYearIsValid && CVVIsValid) {
      const [month, year] = monthYear.split("/");
      const cardObject = {
        card: CARD_NUMBER,
        exp_year: 20 + year,
        exp_month: month,
        cvc: CVV,
      };
      const encrypted = encrypt(JSON.stringify(cardObject));
      console.log(encrypted);
      try {
        const response = await userService.setProPlan(encrypted);
        console.log("response write type", response);
        if (response.status === 201) {
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
        <ProBtn />
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

const ProBtnWrapper = styled.div`
  @media (max-width: 870px) {
    margin-bottom: 10px;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 12px;

  @media (max-width: 870px) {
    margin-top: 0px;
  }
`;

const PaypalWrapper = styled.div`
  display: none;

  @media (max-width: 870px) {
    display: block;
    width: 100%;
    margin-bottom: -26px;
  }
`;

const StyledCardNumberWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 22px;

  @media (max-width: 375px) {
    margin-top: 12px;
    margin-bottom: 16px;
  }
`;

const StyledSubmitBtnWrapper = styled.div<{ isNeedSubmitBtn: boolean }>`
  width: 100%;
  margin-bottom: -30px;

  button:nth-child(1) {
    display: block;
  }

  button:nth-child(2) {
    display: none;
  }

  @media (max-width: 870px) {
    margin-top: -2px;
    margin-bottom: 24px;
  }

  @media (max-width: 375px) {
    margin-bottom: 16px;

    button:nth-child(1) {
      display: ${(props) => (props.isNeedSubmitBtn ? "block" : "none")};
    }

    button:nth-child(2) {
      display: block;
    }
  }
`;

export default CardpayBlock;
