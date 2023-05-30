import Image from "next/image";
import styled from "styled-components";
import ProBtn from "../common/buttons/ProBtn";
import CardNumberInput from "../common/input/CardNumberInput";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import PricingBlock from "../common/pricingBlock/PricingBlock";
import TextBtn from "../common/buttons/TextBtn";
import SecondaryWhiteBtn from "../common/buttons/SecondaryWhiteBtn";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { encrypt, getPrettyDate } from "@/utils/functions";
import { FormEvent, FormEventHandler, useState } from "react";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { userSlice } from "@/store/reducers/userSlice";
import { useInput } from "@/hooks/use-input";
import { CODE_REGEXP } from "@/utils/regexp";
import { CARD_NUMBER } from "@/constants/common";

const UpdatePaymentBlock: React.FC = () => {
  const { setProPlan, cancelSubscription } = userSlice.actions;
  const { nextPayment } = useAppSelector((store) => store.userReducer);
  const [isActiveCardBlock, setCardBlockActive] = useState<boolean>(
    nextPayment ? false : true
  );

  const dispatch = useAppDispatch();
  console.log("nextPayment", nextPayment);

  const changeCardBlock = () => {
    setCardBlockActive(false);
  };

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

  const cancelSubscriptionHandler = async () => {
    console.log("cancel subscription");
    try {
      const response = await userService.cancelSubscription();
      if (response.status === 200) {
        console.log("write type: ", response);
        dispatch(cancelSubscription());
        localStorageHandler.cancelSubscription();
        alert("Success: subscription cancelled successfully!");
      } else {
        alert("Error: subscription not cancelled! Try again");
      }
    } catch (err: any) {
      console.error("Error: ", err);
    }
  };

  const cardpaySubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("submit update cardpay");
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
        const response = await userService.updateSubscription(encrypted);
        console.log("response write type", response);
        if (response.status === 201) {
          dispatch(setProPlan());
          localStorageHandler.setProPlan();
          setCardBlockActive(false);
        }
      } catch (err) {
        //
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
              cardNumberValue={cardNumber}
              cardNumberChangeHandler={cardNumberChangeHandler}
              mmyyValue={monthYear}
              mmyyChangeHandler={monthYearChangeHandler}
              cvvValue={CVV}
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

const StyledCardWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -22px;

  & > div:nth-child(2) {
    margin-left: 16px;
    margin-bottom: -4px;
    width: 119px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(2) {
      width: 100%;
      margin-left: 0px;
      margin-top: 16px;
      margin-bottom: 6px;
    }
  }
`;

const StyledUpadatePaymentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
  width: 100%;
  margin-top: 14px;
  margin-bottom: -50px;
  border-radius: 50%;

  @media (max-width: 870px) {
    margin-bottom: -46px;
    margin-top: 8px;
    button {
      font-size: 12px;
    }
  }
`;

export default UpdatePaymentBlock;
