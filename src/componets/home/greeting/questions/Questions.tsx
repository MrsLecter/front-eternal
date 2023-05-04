import { GREETING_USER_QUESTIONS } from "@/constants/greeting";
import QuestionItem from "../questionItem/QuestionItem";
import styled from "styled-components";

const Questions: React.FC = () => {
  return (
    <StyledQuestionContainer>
      {GREETING_USER_QUESTIONS.map((item, index) => {
        return <QuestionItem key={item} label={item} />;
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
