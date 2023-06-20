import { APP_SETTING } from "@/constants/common";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import {
  getConstructedMessage,
  isSubscriptionExpired,
  sendMessageToChannel,
} from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { StyledMessageInputWrapper, StyledUserInput } from "./UserInput.styles";
import SubmitMessageBtn from "./elements/SubmitMessageButton";

interface IUserInputProps {
  soulId: string;
}

const UserInput: React.FC<IUserInputProps> = ({ soulId }) => {
  const { questionsAmount, nextPayment } = useAppSelector(
    (store) => store.userReducer
  );

  const isAuth = localStorageHandler.getAccessToken();
  const { removeOneQuestion } = userSlice.actions;
  const {
    disallowTyping,
    addToDialog,
    toggleToSignup,
    toggleToPayment,
    toggleToCardpay,
  } = internalSlice.actions;

  const { isTypingAllowed } = useAppSelector((store) => store.internalReducer);
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState<string>("");
  const { shareLink } = useAppSelector((store) => store.userReducer);
  const lastChatMessage = document.getElementById("chatBottom");
  
  const submitQuestionHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!isAuth) {
      dispatch(toggleToSignup());
    }
    if (!questionsAmount ) {
      dispatch(toggleToPayment());
    } else if (nextPayment && isSubscriptionExpired(nextPayment as Date)) {
      dispatch(toggleToPayment());
    } else if (
      parseInt(questionsAmount as string) > 0 ||
      (nextPayment && questionsAmount === "Infinity")
    ) {
      if (isTypingAllowed && userInput.trim() && isAuth) {
        dispatch(disallowTyping());
        dispatch(removeOneQuestion());
        localStorageHandler.deleteOneQuestion();
        const userMessageDelay = setTimeout(() => {
          dispatch(
            addToDialog({
              message: getConstructedMessage({
                sender: "user",
                message: userInput,
              }),
            })
          );
          if (lastChatMessage) {
            lastChatMessage.scrollIntoView();
          }
          clearTimeout(userMessageDelay);
        }, 600);

        const soulMessageDelay = setTimeout(() => {
          dispatch(
            addToDialog({
              message: getConstructedMessage({
                sender: "soul",
                message: "Thinking...",
              }),
            })
          );
          setUserInput("");

          clearTimeout(soulMessageDelay);
        }, 1200);

        if (lastChatMessage) {
          lastChatMessage.scrollIntoView();
        }
        const response = sendMessageToChannel({
          questionText: userInput.trim(),
          soulId,
        });
        dispatch(disallowTyping());
      }
    }
  };

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

export default UserInput;
