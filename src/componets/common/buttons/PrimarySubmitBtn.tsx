import styled from "styled-components";
import { StyledPrimaryBtn } from "./PrimaryBtn";
import { match } from "react-router-dom";

interface IPrimarySubmitBtnProps {
  label: string;
  clickHandler?: () => void;
}

const PrimarySubmitBtn: React.FC<IPrimarySubmitBtnProps> = ({
  label,
  clickHandler,
}) => {
  return (
    <StyledPrimarySubmitBtn type="submit" onClick={clickHandler}>
      {label}
    </StyledPrimarySubmitBtn>
  );
};

const StyledPrimarySubmitBtn = styled(StyledPrimaryBtn)`
  /* margin-bottom: 24px; */
  width: 100%;
  height: 62px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14.3px;
  letter-spacing: 0.3em;
`;

export default PrimarySubmitBtn;
