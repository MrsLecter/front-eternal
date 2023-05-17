// import Image from "next/image";
import { APP_ROUTES } from "@/constants/common";
import Link from "next/link";
import styled from "styled-components";

const MenuBtn: React.FC = () => {
  return (
    <Link href={APP_ROUTES.Menu}>
      <StyledMenuBtn>
        <StyledMenuSign>
          <div />
          <div />
          <div />
        </StyledMenuSign>
      </StyledMenuBtn>
    </Link>
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
      background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%),
        #d9d9d9;
    }
  }
`;

const StyledMenuBtn = styled.button`
  padding: 15px;
  width: 66px;
  height: 48px;
  display: grid;
  place-content: center;
  background-color: transparent;
  border: none;
  z-index: 2;
  cursor: pointer;

  &:hover > div {
    div {
      background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%),
        #d9d9d9;
    }
  }
`;

export default MenuBtn;
