import { APP_ROUTES } from "@/constants/common";
import { GREETING_USER_QUESTIONS } from "@/constants/greeting";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import {
  getConstructedMessage,
  getMessageArray,
  getRandomIndividualId,
} from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import Link from "next/link";
import { StyledLabelBox, StyledQuestionItem } from "./QuestionItem.styles";
import { IQuestionItemProps } from "./QuestionItem.types";
import soulsService from "@/api/souls-service";
import React from "react";

const QuestionItem: React.FC<IQuestionItemProps> = ({
  id,
  label,
  questionType,
}) => {
  const { setFirstMessage, setSoulId, addHistory } = internalSlice.actions;
  const { removeOneQuestion } = userSlice.actions;
  const dispatch = useAppDispatch();
  const randomSoulId = getRandomIndividualId();
  const { dialog } = useAppSelector((store) => store.internalReducer);
  const clickHandler = async () => {
    const currentMessage = GREETING_USER_QUESTIONS.filter(
      (item) => item.id === id
    )[0].text;
    const isAuth = localStorageHandler.getAccessToken();

    dispatch(
      setFirstMessage({
        message: getConstructedMessage({
          sender: "user",
          message: currentMessage,
        }),
        type: questionType,
      })
    );

    dispatch(removeOneQuestion());
    localStorageHandler.deleteOneQuestion();
    const getMessagesHistory = async ({ soulId }: { soulId: string }) => {
      try {
        const response = await soulsService.getHistory({
          page: 1,
          soulid: soulId,
        });
        if (response.status === 200) {
          const chathistory = response.message.chathistory;
          const message = getMessageArray({
            messages: response.message.chathistory,
          });
          dispatch(addHistory({ message, currentHistoryPage: 1 }));
          localStorageHandler.updateDialog({
            dialog,
            currentHistoryPage: 1,
            totalHistoryPages: 2,
          });
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    if (isAuth) {
      getMessagesHistory({ soulId: String(id) });
    }
  };
  return (
    <StyledQuestionItem tabIndex={-1}>
      <Link href={APP_ROUTES.Chat + randomSoulId} onClick={clickHandler}>
        <StyledLabelBox>{label}</StyledLabelBox>
      </Link>
    </StyledQuestionItem>
  );
};

export default QuestionItem;
