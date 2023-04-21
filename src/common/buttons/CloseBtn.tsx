import Image from "next/image";
import styled from "styled-components";
import closeIcon from "@icons/close-btn.svg";

interface ICloseBtnProps {
  clickHandler: (isOpen: boolean) => void;
  isOpen?: boolean;
}

const CloseBtn: React.FC<ICloseBtnProps> = ({ isOpen, clickHandler }) => {
  return (
    <StyledCloseBtn type="button" onClick={() => clickHandler(!isOpen)}>
      <Image src={closeIcon} alt="menu-btn.svg" />
    </StyledCloseBtn>
  );
};

export const StyledCloseBtn = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid #2f2535;
  border-radius: 8px;
  background: #000000;

  & > img {
    width: 23px;
    height: 23px;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 375px) {
    width: 48px;
    height: 48px;
    border-radius: 8px;

    & > img {
      width: 10px;
      height: 10px;
    }
  }
`;

export default CloseBtn;
