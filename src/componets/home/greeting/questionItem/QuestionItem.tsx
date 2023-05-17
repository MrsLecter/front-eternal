import { APP_ROUTES } from "@/constants/common";
import { GREETING_USER_QUESTIONS } from "@/constants/greeting";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import { getRandomIndividualId } from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import Link from "next/link";
import styled from "styled-components";

interface IQuestionItemProps {
  id: number;
  label: string;
  clickHandler: () => void;
}

const QuestionItem: React.FC<IQuestionItemProps> = ({ id, label }) => {
  const { setFirstMessage, setUserMessageFirst } = internalSlice.actions;
  const { removeOneQuestion } = userSlice.actions;
  const { questionsAmount } = useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    const currentMessage = GREETING_USER_QUESTIONS.filter(
      (item) => item.id === id
    )[0].text;
    console.log("****set first message to redux in question item");
    dispatch(setFirstMessage({ message: currentMessage }));
    dispatch(removeOneQuestion());
    localStorageHandler.deleteOneQuestion();
    dispatch(setUserMessageFirst({ isUserMessageFirst: true }));
  };
  return (
    <Link
      href={
        questionsAmount === "Infinity" || +questionsAmount > 0
          ? APP_ROUTES.Chat + getRandomIndividualId()
          : APP_ROUTES.Paywall
      }
      onClick={clickHandler}
    >
      <StyledQuestionItem>
        <StyledLabelBox>{label}</StyledLabelBox>
      </StyledQuestionItem>
    </Link>
  );
};

const StyledQuestionItem = styled.div`
  margin-bottom: 16px;
  width: 534px;
  height: 78px;
  padding: 1px;
  border-radius: 120px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(88, 51, 239, 0.3) 30%,
    rgb(248, 45, 152, 0.3)
  );

  &:hover {
    background-image: ${({ theme }) => theme.backgroundColorGradientHovered};
  }

  @media (max-width: 670px) {
    width: 343px;
    height: 64px;
    margin-bottom: 12px;
  }
`;

const StyledLabelBox = styled.div`
  width: 532px;
  height: 76px;
  padding: 25.5px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -1%;
  color: ${({ theme }) => theme.color.white};
  border-radius: 120px;
  background: ${({ theme }) => theme.backgroundDarkGradient};
  /* background: linear-gradient(90.83deg, #08081e 11.84%, #21050c 111.32%); */

  @media (max-width: 670px) {
    padding: 21.5px 24px;
    width: 341px;
    height: 62px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export default QuestionItem;
