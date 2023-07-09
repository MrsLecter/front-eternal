import { StyledPrimaryBtn } from "@/componets/common/buttons/PrimaryBtn";
import { FC } from "react";
import styled from "styled-components";

interface IPrimaryMenuBtnProps {
  clickHandler?: () => void;
}

const PrimaryMenuBtn: FC<IPrimaryMenuBtnProps> = ({ clickHandler }) => {
  return (
    <StyledPrimaryMenuBtn
      type="submit"
      onClick={clickHandler}
      aria-label="signup-button"
      aria-labelledby="signup"
    >
      get started
    </StyledPrimaryMenuBtn>
  );
};

const StyledPrimaryMenuBtn = styled(StyledPrimaryBtn)`
  width: 100%;
  height: 48px;
  min-height: 48px;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.2em;
`;

export default PrimaryMenuBtn;
