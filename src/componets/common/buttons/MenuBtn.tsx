// import Image from "next/image";
import styled from "styled-components";

interface IMenuProps {
  clickHandler?: () => void;
}

const MenuBtn: React.FC<IMenuProps> = ({ clickHandler }) => {
  const menuBtnClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (clickHandler) {
      clickHandler();
    }
  };
  return (
    <StyledMenuBtn onClick={(e) => menuBtnClickHandler(e)}>
      <StyledMenuSign>
        <div />
        <div />
        <div />
      </StyledMenuSign>
    </StyledMenuBtn>
  );
};

const StyledMenuSign = styled.div`
  position: relative;
  width: 36px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: transparent;

  div {
    width: 30px;
    height: 2px;
    background: white;
  }

  div:nth-child(2) {
    margin-right: 6px;
  }

  @media (max-width: 870px) {
    div {
      background: ${({ theme }) => theme.backgroundColorGradient};
    }
  }
`;

const StyledMenuBtn = styled.button`
  padding: 19px 15px;
  width: 66px;
  height: 56px;
  display: grid;
  place-content: center;
  background-color: transparent;
  border: none;
  z-index: 2;
  cursor: pointer;

  &:hover > div,
  &:focus > div {
    div {
      background: ${({ theme }) => theme.backgroundColorGradient};
    }
  }
`;

export default MenuBtn;
