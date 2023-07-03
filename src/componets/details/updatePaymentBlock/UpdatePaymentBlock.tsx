import CardNumberInput from "../../common/input/cardNumberInput/CardNumberInput";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";
import PricingBlock from "../../common/pricingBlock/PricingBlock";
import TextBtn from "../../common/buttons/TextBtn";
import SecondaryWhiteBtn from "../../common/buttons/SecondaryWhiteBtn";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { encrypt, getPrettyDate } from "@/utils/functions";
import { FormEvent, useState } from "react";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { userSlice } from "@/store/reducers/userSlice";
import { useInput } from "@/hooks/use-input";
import { CODE_REGEXP } from "@/utils/regexp";
import { CARD_NUMBER_TEST } from "@/constants/common";
import {
  StyledCardWrapper,
  StyledTextWrapper,
  StyledUpadatePaymentBlock,
} from "./UpdatePaymentBlock.styles";
import { internalSlice } from "@/store/reducers/internalSlice";

const UpdatePaymentBlock: React.FC = () => {
  const { setProPlan, cancelSubscription } = userSlice.actions;
  const { toggleToPayment } = internalSlice.actions;
  const { nextPayment } = useAppSelector((store) => store.userReducer);
  const [isActiveCardBlock, setCardBlockActive] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const changeCardBlock = () => {
    setCardBlockActive(false);
  };

  const {
    value: cardNumber,
    error: cardNumberIsValid,
    changeHandler: cardNumberChangeHandler,
    refresh: resetCardNumber,
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
    refresh: resetMonthYear,
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
    refresh: resetCVV,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
    mask: "123",
    maskType: "cvc",
  });

  const refreshForm = () => {
    resetCardNumber();
    resetMonthYear();
    resetCVV();
  };

  const cancelSubscriptionHandler = async () => {
    try {
      const response = await userService.cancelSubscription();
      if (response.status === 200) {
        dispatch(cancelSubscription());
        refreshForm();
        localStorageHandler.cancelSubscription();
        setCardBlockActive(false);
        alert("Success: subscription cancelled successfully!");
      }
    } catch (err: any) {
      console.error("Error: ", err);
    }
  };

  const cardpaySubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!cardNumberIsValid) {
      alert("Error: card number is not valid!");
    }

    if (!monthYearIsValid) {
      alert("Error: month and year not valid!");
    }

    if (!CVVIsValid) {
      alert("Error: cvv is not valid!");
    }
    if (cardNumberIsValid && monthYearIsValid && CVVIsValid) {
      const [month, year] = (monthYear as string).split("/");
      const cardObject = {
        card: CARD_NUMBER_TEST,
        exp_year: 20 + year,
        exp_month: month,
        cvc: CVV,
      };

      const encryptedCardData = encrypt(JSON.stringify(cardObject));

      try {
        const response = await userService.updateSubscription(
          encryptedCardData
        );

        if (response.status === 201) {
          dispatch(setProPlan());
          localStorageHandler.setProPlan();
          setCardBlockActive(true);
          refreshForm();
          alert("Success: successfully subscribed!");
        }
        if (response.status === 406) {
          alert("Error: purchase a subscription before upgrade!");
          dispatch(toggleToPayment());
        }
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  };

  return (
    <StyledUpadatePaymentBlock>
      <PricingBlock
        paymentMonthly={10}
        nextPayment={getPrettyDate(nextPayment!)}
      />
      {isActiveCardBlock ? (
        <>
          <SecondaryWhiteBtn
            constHeight={true}
            label={"update payment"}
            clickHandler={changeCardBlock}
          />
          <StyledTextWrapper>
            <TextBtn
              label={"cancel subscription"}
              clickHandler={cancelSubscriptionHandler}
            />
          </StyledTextWrapper>
        </>
      ) : (
        <>
          <StyledCardWrapper onSubmit={cardpaySubmit}>
            <CardNumberInput
              isHeigh={false}
              cardNumberValue={cardNumber as string}
              cardNumberChangeHandler={cardNumberChangeHandler}
              mmyyValue={monthYear as string}
              mmyyChangeHandler={monthYearChangeHandler}
              cvvValue={CVV as string}
              cvvChangeHandler={CVVChangeHandler}
              haveFocus={false}
            />
            <div>
              <PrimarySubmitBtn label={"save"} />
            </div>
          </StyledCardWrapper>
        </>
      )}
    </StyledUpadatePaymentBlock>
  );
};

export default UpdatePaymentBlock;
