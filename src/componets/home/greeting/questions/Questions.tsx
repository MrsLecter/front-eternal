import { GREETING_USER_QUESTIONS } from "@/constants/greeting";
import QuestionItem from "../questionItem/QuestionItem";
import styled from "styled-components";
import { TUserQuestion } from "../../../../../types/app-common.types";

const Questions: React.FC = () => {
  return (
    <StyledQuestionContainer>
      {GREETING_USER_QUESTIONS.map((item) => {
        return (
          <QuestionItem
            key={item.id}
            label={item.text}
            id={item.id}
            questionType={(item.questionType as TUserQuestion) || "intro"}
          />
        );
      })}
    </StyledQuestionContainer>
  );
};

const StyledQuestionContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 670px) {
    margin-top: 24px;
  }
`;

export default Questions;
