import styled from "styled-components";
import Image from "next/image";
import { StyledBorderedBtn, StyledSecondary } from "../../buttons/SecondaryBtn";
import shareIcon from "@icons/share-btn.svg";
import { FC } from "react";

interface IShareBtnProps {
  clickHandler?: () => void;
}

const ShareBtn: FC<IShareBtnProps> = (props) => {
  const { clickHandler, ...rest } = props;
  const shareBtnClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (clickHandler) {
      clickHandler();
    }
  };

  return (
    <StyledShareBorderBtn onClick={(e) => shareBtnClickHandler(e)} {...rest}>
      <StyledShareBtn>
        {document.documentElement.clientWidth > 870 && (
          <>
            <Image width={16} height={16} alt="share-btn.svg" src={shareIcon} />
            &nbsp;
          </>
        )}
        share
      </StyledShareBtn>
    </StyledShareBorderBtn>
  );
};

const StyledShareBorderBtn = styled(StyledSecondary)`
  width: 157px;
  height: 48px;
  padding: 1.4px;
  background-image: ${({ theme }) => theme.backgroundColorGradient};

  @media (max-width: 870px) {
    width: 75px;
    height: 32px;
  }
`;

const StyledShareBtn = styled(StyledBorderedBtn)`
  background-color: #0a0806;
  width: 100%;
  height: 100%;
  font-size: 13px;
  line-height: 14.3px;

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }

  @media (max-width: 870px) {
    font-size: 11px;
    line-height: 12.1px;
    letter-spacing: 0.2em;
  }
`;

export default ShareBtn;
