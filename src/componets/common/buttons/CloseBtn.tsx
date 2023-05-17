import styled from "styled-components";
import Image from "next/image";
import closeIcon from "@icons/close-btn.svg";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/common";

const CloseBtn: React.FC = () => {
  return (
    <Link href={APP_ROUTES.Home}>
      <StyledCloseBtn>
        <Image src={closeIcon} width={10} height={10} alt="close-btn.svg" />
      </StyledCloseBtn>
    </Link>
  );
};

export const StyledCloseBtn = styled.div`
  width: 56px;
  height: 56px;
  margin-left: 14px;
  margin-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2f2535;
  border-radius: 8px;
  background: #000000;
  cursor: pointer;

  & > div:first-child {
    position: absolute;
    left: 70.62%;
    right: 29.38%;
    top: 29.37%;
    bottom: 12.3%;
    border: 1.5px solid #ffffff;
    transform: rotate(45deg);
  }

  & > div:last-child {
    position: absolute;
    left: 29.38%;
    right: 12.29%;
    top: 29.37%;
    bottom: 70.63%;
    border: 1.5px solid #ffffff;
    transform: rotate(45deg);
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 870px) {
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
`;

export default CloseBtn;
