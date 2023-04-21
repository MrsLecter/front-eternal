import styled from "styled-components";
import Image from "next/image";
import shuffleIcon from "@icons/shuffle-btn.svg";
import {
  StyledSecondary,
  StyledBorderedBtn,
} from "../../../../common/buttons/SecondaryBtn";

const ShuffleBtn: React.FC = () => {
  return (
    <StyledShuffleWrapper type="button">
      <StyledShuffleBtn>
        <Image width={20} height={20} alt="shuffle.svg" src={shuffleIcon} />
        &nbsp;shuffle
      </StyledShuffleBtn>
    </StyledShuffleWrapper>
  );
};

const StyledShuffleWrapper = styled(StyledSecondary)`
  width: 157px;
  height: 78px;
  background-color: white;
  background-image: linear-gradient(0deg, white 100%);
  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }

  @media (max-width: 375px) {
    width: 101px;
    height: 50.2px;
    font-size: 10px;
    line-height: 17.6px;
  }
`;

const StyledShuffleBtn = styled(StyledBorderedBtn)`
  width: 153px;
  height: 74px;
  font-size: 13px;
  line-height: 14.3px;
  background-color: #0a0806;

  @media (max-width: 375px) {
    width: 97px;
    height: 46px;
    font-size: 10px;
    line-height: 17.6px;
  }
`;

export default ShuffleBtn;
