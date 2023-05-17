import { GREETING_USER_QUESTIONS } from "@/constants/greeting";
import QuestionItem from "../questionItem/QuestionItem";
import styled from "styled-components";

interface IQuestionsProps {
  setQuestionHandler: (id: number) => void;
}

const Questions: React.FC<IQuestionsProps> = ({ setQuestionHandler }) => {
  return (
    <StyledQuestionContainer>
      {GREETING_USER_QUESTIONS.map((item) => {
        return (
          <QuestionItem
            key={item.id}
            label={item.text}
            id={item.id}
            clickHandler={() => setQuestionHandler(item.id)}
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
  z-index: 10;

  @media (max-width: 670px) {
    margin-top: 24px;
  }
`;

export default Questions;
