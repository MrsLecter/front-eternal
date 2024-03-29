import { FC } from "react";
import styled from "styled-components";

interface ICloseBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler?: () => void;
}

const CloseBtn: FC<ICloseBtnProps> = (props) => {
  const { clickHandler, ...defaultProps } = props;

  return (
    <StyledCloseBtn
      onClick={clickHandler}
      aria-label="close-button"
      aria-labelledby="close"
      {...defaultProps}
    >
      <div>&times;</div>
    </StyledCloseBtn>
  );
};

export const StyledCloseBtn = styled.button`
  width: 56px;
  height: 56px;
  margin-left: 14px;
  margin-right: 0px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2f2535;
  border-radius: 8px;
  background: #000000;
  cursor: pointer;
  animation: appearing 0.5s ease-in-out;

  & > div:first-child {
    margin-top: -15px;
    width: 14px;
    height: 14px;
    color: white;
    font-size: 28px;
  }

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 870px) {
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
`;

export default CloseBtn;
