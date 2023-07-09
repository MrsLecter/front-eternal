import { APP_ROUTES } from "@/constants/common";
import { GREETING_USER_QUESTIONS } from "@/constants/greeting-user-questions";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { setFirstMessage } from "@/store/reducers/internalSlice";
import { getConstructedMessage, getRandomSoulId } from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import Link from "next/link";
import { StyledLabelBox, StyledQuestionItem } from "./QuestionItem.styles";
import { IQuestionItemProps } from "./QuestionItem.types";
import React, { FC } from "react";
import { removeOneQuestion } from "@/store/reducers/userSlice";

const QuestionItem: FC<IQuestionItemProps> = ({ id, label, questionType }) => {
  const dispatch = useAppDispatch();
  const randomSoulId = getRandomSoulId();

  const clickHandler = async () => {
    const currentMessage = GREETING_USER_QUESTIONS.filter(
      (item) => item.id === id
    )[0].text;

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

