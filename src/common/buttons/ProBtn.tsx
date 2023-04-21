import styled from "styled-components";
import { StyledSecondary, StyledBorderedBtn } from "./SecondaryBtn";

const ProBtn: React.FC = () => {
  return (
    <StyledProWrapper>
      <StyledBtn>pro</StyledBtn>
    </StyledProWrapper>
  );
};

const StyledProWrapper = styled(StyledSecondary)`
  width: 66px;
  height: 42px;
  background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);

  @media (max-width: 375px) {
    width: 58px;
  }
`;

const StyledBtn = styled(StyledBorderedBtn)`
  background-image: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  width: 62px;
  height: 38px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  padding-top: 3px;
  padding-left: 4px;

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }
`;

export default ProBtn;
