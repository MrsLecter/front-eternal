import { APP_SETTING } from "@/constants/common";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import { isSubscriptionExpired, sendMessageToDialog } from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

interface IUserInputProps {
  soulId: string;
}

const UserInput: React.FC<IUserInputProps> = ({ soulId }) => {
  console.log("*********refresh user INPUT ***********");
  const { questionsAmount, nextPayment } = useAppSelector(
    (store) => store.userReducer
  );
  const isAuth = localStorageHandler.getAccessToken();
  const { removeOneQuestion } = userSlice.actions;
  const {
    disallowTyping,
    allowTyping,
    addToDialog,
    toggleToSignup,
    toggleToPayment,
    toggleToCardpay,
  } = internalSlice.actions;
  const { isTypingAllowed } = useAppSelector((store) => store.internalReducer);
  const dispatch = useAppDispatch();

  const [userInput, setUserInput] = useState<string>("");

  const { shareLink } = useAppSelector((store) => store.userReducer);

  const submitQuestionHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log("submit question. questions amount:", questionsAmount);
    if (!isAuth) {
      dispatch(toggleToSignup());
    }
    if (!questionsAmount && !shareLink) {
      alert(
        "Error: the limit of questions is exhausted! Go to the payment page "
      );
      dispatch(toggleToPayment());
    }
    if (!questionsAmount && shareLink) {
      alert(
        "Error: the limit of questions is exhausted! Go to the payment page "
      );
      dispatch(toggleToCardpay());
    }

    if (!!!questionsAmount) {
      alert(
        "Error: the limit of questions is exhausted! Go to the payment page "
      );
    } else if (nextPayment && isSubscriptionExpired(nextPayment as Date)) {
      alert("Error: Your subscription is expirerd! Go to the payment page ");
    } else if (
      nextPayment &&
      (parseInt(questionsAmount as string) > 0 ||
        questionsAmount === "Infinity")
    ) {
      if (isTypingAllowed && userInput.trim()) {
        dispatch(disallowTyping());
        dispatch(removeOneQuestion());
        localStorageHandler.deleteOneQuestion();
        console.log("submit question");
        sendMessageToDialog({ questionText: userInput, soulId: soulId });
        const userMessageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: userInput }));
          clearTimeout(userMessageDelay);
        }, 600);
        const soulMessageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: "Thinking..." }));
          setUserInput("");
          clearTimeout(soulMessageDelay);
        }, 1200);
      }
    }
  };

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(">>user input:", e.target.value);
    setUserInput(e.target.value);
  };
  return (
    <StyledUserInput>
      <form action="/action_page.php" onSubmit={submitQuestionHandler}>
        <StyledMessageInputWrapper>
          <input
            type="text"
            value={userInput}
            onChange={(e) => changeInputHandler(e)}
            placeholder="Enter your message..."
            name="message"
            autoFocus={true}
          />
          {document.documentElement.clientWidth > APP_SETTING.TabResolution && (
            <SubmitMessageBtn />
          )}
        </StyledMessageInputWrapper>
      </form>
    </StyledUserInput>
  );
};

const StyledUserInput = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: calc(100% - 78px);
  min-width: 300px;
  height: 78px;
  z-index: 1;

  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: 1250px) {
    width: calc(100% - 32px);
    bottom: 0px;
    right: 16px;
  }

  @media (max-width: 870px) {
    bottom: 0px;
  }
`;

const StyledMessageInputWrapper = styled.div`
  position: relative;
  width: 100%;

  height: 78px;
  padding: 1px;
  border-radius: 120px;
  background-image: linear-gradient(281deg, #f82d98 0%, #5833ef 90%);
  /* background-image: linear-gradient(90deg, #08081e 100%, #21050c 100%); */

  & > input {
    width: 100%;
    height: 76px;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    color: white;
    line-height: 27px;
    padding: 25.5px 173px 25.5px 48px;
    border: none;
    border-radius: 120px;
    /* background-image: linear-gradient(175deg, #f82d98, 100%, #5833ef, 100%); */
    background-image: linear-gradient(90deg, #08081e 100%, #21050c 100%);

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 870px) {
    height: 56px;
    button {
      display: none;
    }

    & > input {
      height: 54px;
      padding: 17.5px 32px 17.5px 32px;
    }
  }
`;

const SubmitMessageBtn: React.FC = () => {
  return <StyledSubmitMessageButton>submit</StyledSubmitMessageButton>;
};
const StyledSubmitMessageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 157px;
  height: 62px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border-radius: 120px;
  border: none;
  background-image: ${({ theme }) => theme.backgroundColorGradient};
  z-index: 2;

  &:hover {
    background-image: linear-gradient(305deg, #f82d98 -2.34%, #5833ef 90%);
  }
`;

export default UserInput;
