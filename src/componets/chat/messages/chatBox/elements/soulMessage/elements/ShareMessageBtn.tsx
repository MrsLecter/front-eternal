import styled from "styled-components";
import ShareSvg from "./ShareSvg";

interface IShareMessageBtnProps {
  clickHandler: () => void;
}

const ShareMessageBtn: React.FC<IShareMessageBtnProps> = ({ clickHandler }) => {
  return (
    <StyledShareMessageBtn
      onClick={clickHandler}
      aria-label="share-button"
      aria-labelledby="share"
    >
      <figure>
        <ShareSvg />
      </figure>
    </StyledShareMessageBtn>
  );
};

const StyledShareMessageBtn = styled.button`
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;

  figure {
    width: 24px;
    height: 24px;
  }

  &:focus {
    svg {
      stroke: ${({ theme }) => theme.color.pink};
    }
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: white;
    cursor: pointer;
  }

  svg:hover {
    stroke: ${({ theme }) => theme.color.pink};
  }
`;

export default ShareMessageBtn;
