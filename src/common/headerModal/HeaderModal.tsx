import Link from "next/link";
import Image from "next/image";
import closeIcon from "@icons/close-btn.svg";
import Logo from "../logo/Logo";
import styled from "styled-components";

const HeaderModal: React.FC = () => {
  return (
    <StyledHeaderModal>
      <div>
        <Logo />
      </div>
      <Link href="/">
        <Image src={closeIcon} alt="menu-btn.svg" />
      </Link>
    </StyledHeaderModal>
  );
};

const StyledHeaderModal = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 80px;
  padding: 24px 24px 24px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;

  & > a:nth-child(2) {
    width: 56px;
    height: 56px;
    margin-left: calc(100vw / 2 - 80px - 105.72px);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #2f2535;
    border-radius: 8px;
    background: #000000;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    & > img {
      width: 10px;
      height: 10px;
    }

    @media (max-width: 375px) {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    justify-content: space-between;
    padding: 16px 33px;
  }
`;

export default HeaderModal;
