import styled from "styled-components";

interface IQuestionItemProps {
  label: string;
}

const QuestionItem: React.FC<IQuestionItemProps> = ({ label }) => {
  return (
    <StyledQuestionItem>
      <StyledLabelBox>{label}</StyledLabelBox>
    </StyledQuestionItem>
  );
};

const StyledQuestionItem = styled.div`
  margin-bottom: 16px;
  width: 534px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 120px;
  cursor: pointer;
  /* background: linear-gradient(to right, red, purple); */
  background-image: linear-gradient(
    90deg,
    rgba(88, 51, 239, 0.3) 30%,
    rgb(248, 45, 152, 0.3)
  );
  /* background-color: linear-gradient(175deg, #f82d98, 30%, #5833ef, 30%); */

  &:hover {
    background-image: linear-gradient(
      90deg,
      rgba(88, 51, 239, 1) 30%,
      rgba(248, 45, 152, 1)
    );
  }

  @media (max-width: 375px) {
    width: 343px;
    height: 64px;
    margin-bottom: 12px;
  }
`;

const StyledLabelBox = styled.div`
  width: 528px;
  height: 72px;
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
  background: linear-gradient(90.83deg, #08081e 11.84%, #21050c 111.32%);

  @media (max-width: 375px) {
    padding: 21.5px 24px;
    width: 339px;
    height: 60px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export default QuestionItem;
