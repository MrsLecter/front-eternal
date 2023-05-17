import shareIcon from "@icons/share-btn.svg";
import Image from "next/image";
import styled from "styled-components";

interface IBorderedBtnProps {
  clickHandler?: () => void;
}

const BorderedBtn: React.FC<IBorderedBtnProps> = ({ clickHandler }) => {
  return (
    <StyledShareBorderBtn onClick={clickHandler}>
      <StyledShareBtn>
        <Image width={16} height={16} alt="share-btn.svg" src={shareIcon} />
        &nbsp;share
      </StyledShareBtn>
    </StyledShareBorderBtn>
  );
};

export const StyledSecondary = styled.button`
  border-radius: 66px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyledBorderedBtn = styled.div`
  border: none;
  border-radius: 66px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
`;

const StyledShareBorderBtn = styled(StyledSecondary)`
  width: 157px;
  height: 48px;
  background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
`;

const StyledShareBtn = styled(StyledBorderedBtn)`
  background-color: #0a0806;
  width: 153px;
  height: 44px;
  font-size: 13px;
  line-height: 14.3px;

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }
`;

export default BorderedBtn;
