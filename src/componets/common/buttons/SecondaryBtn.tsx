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
        {document.documentElement.clientWidth > 870 && (
          <>
            <Image
              width={16}
              height={16}
              alt="bordered-btn.svg"
              src={shareIcon}
            />
            &nbsp;
          </>
        )}
        share
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

  &:focus {
    color: ${({ theme }) => theme.color.pink};
  }
`;

export const StyledBorderedBtn = styled.div`
  border: none;
  border-radius: 66px;
  padding: 1.4px;
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
  padding: 1.4px;
  background-image: ${({ theme }) => theme.backgroundColorGradient};
`;

const StyledShareBtn = styled(StyledBorderedBtn)`
  background-color: #0a0806;
  width: 100%;
  height: 100%;
  font-size: 13px;
  line-height: 14.3px;

  &:hover,
  &:focus {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }
`;

export default BorderedBtn;
