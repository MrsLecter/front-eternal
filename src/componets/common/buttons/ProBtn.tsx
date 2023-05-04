import styled from "styled-components";
import { StyledSecondary, StyledBorderedBtn } from "./SecondaryBtn";

const ProBtn: React.FC = () => {
  return (
    <StyledProWrapper tabIndex={-1}>
      <StyledBtn>pro</StyledBtn>
    </StyledProWrapper>
  );
};

const StyledProWrapper = styled(StyledSecondary)`
  width: 66px;
  height: 42px;
  min-height: 42px;
  padding: 1px;
  border-radius: 16px;
  background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);

  &:focus {
    outline: none;
  }

  @media (max-width: 870px) {
    width: 60px;
    min-width: 60px;
  }
`;

const StyledBtn = styled(StyledBorderedBtn)`
  border-radius: 16px;
  background-image: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  width: 100%;
  height: 100%;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  padding-top: 3px;
  padding-left: 4px;

  &:hover {
    background-image: linear-gradient(
      90.83deg,
      #040410 11.84%,
      #0f0306 111.32%
    );
  }

  &:focus {
    outline: none;
  }
`;

export default ProBtn;
