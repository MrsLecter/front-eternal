import { APP_ROUTES } from "@/constants/common";
import { GREETING_USER_QUESTIONS } from "@/constants/greeting";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import { getRandomIndividualId } from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import Link from "next/link";
import { StyledLabelBox, StyledQuestionItem } from "./QuestionItem.styles";
import { IQuestionItemProps } from "./QuestionItem.types";

const QuestionItem: React.FC<IQuestionItemProps> = ({
  id,
  label,
  questionType,
}) => {
  const { setFirstMessage, setUserMessageFirst } = internalSlice.actions;
  const { removeOneQuestion } = userSlice.actions;
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    const currentMessage = GREETING_USER_QUESTIONS.filter(
      (item) => item.id === id
    )[0].text;

    dispatch(setFirstMessage({ message: currentMessage, type: questionType }));
    dispatch(removeOneQuestion());
    localStorageHandler.deleteOneQuestion();
    dispatch(setUserMessageFirst({ isUserMessageFirst: true }));
  };
  return (
    <StyledQuestionItem tabIndex={-1}>
      <Link
        href={APP_ROUTES.Chat + getRandomIndividualId()}
        onClick={clickHandler}
      >
        <StyledLabelBox>{label}</StyledLabelBox>
      </Link>
    </StyledQuestionItem>
  );
};

export default QuestionItem;
