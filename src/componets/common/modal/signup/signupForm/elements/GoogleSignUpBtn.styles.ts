import { StyledBorderedBtn, StyledSecondary } from "@/componets/common/buttons/SecondaryBtn";
import styled from "styled-components";

export const StyledGoogleWrapper = styled(StyledSecondary)`
  width: 100%;
  height: 62px;
  padding: 1px;
  background-image: linear-gradient(0deg, white 100%);

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }

  &:focus {
    background: transparent;
    div {
      background-image: ${({ theme }) => theme.backgroundColorGradient};
    }
  }

  @media (max-width: 375px) {
    width: 279px;
    height: 62px;
  }
`;

export const StyledGoogleBtn = styled(StyledBorderedBtn)`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0.3em;
  background-image: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);

  span {
    margin-left: 16.7px;
  }

  @media (max-width: 870px) {
    padding: 24px 14px;

    span {
      margin-left: 10px;
    }
  }
`;
