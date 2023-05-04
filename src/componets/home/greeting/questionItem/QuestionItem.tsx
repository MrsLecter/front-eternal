import { APP_ROUTES } from "@/constants/common";
import { getRandomIndividualId } from "@/utils/functions";
import Link from "next/link";
import styled from "styled-components";

interface IQuestionItemProps {
  label: string;
}

const QuestionItem: React.FC<IQuestionItemProps> = ({ label }) => {
  return (
    <Link href={APP_ROUTES.Chat + getRandomIndividualId()}>
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
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  border-radius: 120px;
  cursor: pointer;
  /* background-image: ${({ theme }) => theme.backgroundDarkGradient}; */
  background: linear-gradient(
    90deg,
    rgba(88, 51, 239, 0.3) 30%,
    rgb(248, 45, 152, 0.3)
  );

  &:hover {
    background-image: ${({ theme }) => theme.backgroundColorGradientHovered};
    /* background-image: linear-gradient(
      90deg,
      rgba(88, 51, 239, 1) 30%,
      rgba(248, 45, 152, 1)
    ); */
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
