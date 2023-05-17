import styled from "styled-components";
import { StyledPrimaryBtn } from "./PrimaryBtn";
import { match } from "react-router-dom";

interface IPrimarySubmitBtnProps {
  label: string;
  clickHandler?: () => void;
  isHigh?: boolean;
}

const PrimarySubmitBtn: React.FC<IPrimarySubmitBtnProps> = ({
  label,
  clickHandler,
  isHigh = true,
}) => {
  return (
    <StyledPrimarySubmitBtn
      type="submit"
      onClick={clickHandler}
      isHigh={isHigh}
    >
      {label}
    </StyledPrimarySubmitBtn>
  );
};

const StyledPrimarySubmitBtn = styled(StyledPrimaryBtn)<{ isHigh: boolean }>`
  /* margin-bottom: 24px; */
  width: 100%;
  min-width: 100%;
  height: 62px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14.3px;
  letter-spacing: 0.3em;

  @media (max-width: 870px) {
    width: 100%;
    height: ${(props) => (props.isHigh ? "62px" : "46px")};
  }
`;

export default PrimarySubmitBtn;
