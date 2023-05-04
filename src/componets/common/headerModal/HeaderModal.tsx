import Link from "next/link";
import Image from "next/image";
import Logo from "../logo/Logo";
import styled from "styled-components";
import CloseBtn from "../buttons/CloseBtn";

const HeaderModal: React.FC = () => {
  return (
    <StyledHeaderModal>
      <div>
        <Logo />
      </div>
      <div>
        <CloseBtn />
      </div>
    </StyledHeaderModal>
  );
};

const StyledHeaderModal = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  max-width: 1640px;
  height: 80px;
  padding: 24px 24px 24px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;

  & > div:first-child {
    position: absolute;
    top: 33px;
    left: calc(50% - 105.72px);
    width: 211.44px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & > div:last-child {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  @media (max-width: 870px) {
    width: 100%;
    justify-content: space-between;
    padding: 16px 33px;

    & > div:first-child {
      top: 33px;
      left: 16px;
      width: 144px;
      height: 30px;
    }

    & > div:last-child {
      top: 24px;
      right: 16px;
    }
  }
`;

export default HeaderModal;
