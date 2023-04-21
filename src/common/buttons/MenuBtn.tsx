// import Image from "next/image";
import styled from "styled-components";

interface IMenuBtnProps {
  clickHandler: (isOpen: boolean) => void;
  isOpen: boolean;
}

const MenuBtn: React.FC<IMenuBtnProps> = ({ isOpen, clickHandler }) => {
  return (
    <StyledMenuBtn type="button" onClick={() => clickHandler(!isOpen)}>
      {/* <Image src={menuBtnIcon} alt="menu-btn.svg" width={36} height={18} /> */}
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
  overflow: hidden;

  div {
    width: 34px;
    height: 2px;
    background: white;
  }

  div:nth-child(2) {
    margin-right: 4px;
  }

  @media (max-width: 375px) {
    div {
      background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%),
        #d9d9d9;
    }
  }
`;

const StyledMenuBtn = styled.button`
  width: 36px;
  height: 18px;
  background-color: transparent;
  border: none;
  z-index: 2;
  cursor: pointer;
`;

// const StyledMenuSign = styled.div`
//   width: 36px;
//   height: 18px;

//   div {
//     height: 2px;
//     width: 32px;
//     background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%),
//       #d9d9d9;
//   }
// `;

export default MenuBtn;
