import styled from "styled-components";

export const StyledQuestionItem = styled.div`
  margin-bottom: 16px;
  width: 534px;
  height: 78px;
  padding: 1px;
  border-radius: 120px;
  cursor: pointer;

  a {
    border-radius: 120px;
  }

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

export const StyledLabelBox = styled.div`
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

  @media (max-width: 670px) {
    padding: 24px;
    width: 341px;
    height: 62px;
    font-size: 14px;
    line-height: 21px;
  }
`;
