import styled from "styled-components";
import { StyledPrimaryBtn } from "./PrimaryBtn";

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
  const submitClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (clickHandler) {
      clickHandler();
    }
  };

  return (
    <StyledPrimarySubmitBtn
      type="submit"
      onClick={(e) => submitClickHandler(e)}
      isHigh={isHigh}
    >
      {label}
    </StyledPrimarySubmitBtn>
  );
};

const StyledPrimarySubmitBtn = styled(StyledPrimaryBtn)<{ isHigh: boolean }>`
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
