import styled from "styled-components";
import MenuBtn from "../buttons/MenuBtn";
import Logo from "../logo/Logo";
import TextBtn from "../buttons/TextBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";
import BorderedBtn from "../buttons/SecondaryBtn";
import CloseBtn from "../buttons/CloseBtn";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/common";

interface IHeader {
  isAuth?: boolean;
  haveClose?: boolean;
}

const Header: React.FC<IHeader> = ({ isAuth = false, haveClose = false }) => {
  return (
    <StyledHeader isAuth={isAuth}>
      <div>{haveClose ? <CloseBtn /> : <MenuBtn />}</div>
      <div>
        <Logo />
      </div>
      <div>
        {document.documentElement.clientWidth > 375 &&
          (isAuth ? (
            <BorderedBtn />
          ) : (
            <>
              <StyledTextWrapper>
                <Link href={APP_ROUTES.Signin}>
                  <TextBtn label={"login"} />
                </Link>
              </StyledTextWrapper>

              <Link href={APP_ROUTES.Signup}>
                <PrimaryBtn label={"get started"} />
              </Link>
            </>
          ))}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ isAuth: boolean }>`
  position: relative;
  padding: 32px 32px 0px 32px;
  width: 100%;
  max-width: 1640px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  & > div:nth-child(2) {
    position: absolute;
    top: 34px;
    left: calc(50% - 105.72px);
    width: 211.44px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(3) {
    margin-right: -2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 870px) {
    padding: 33px 16px 0px 16px;
    justify-content: flex-end;

    & > div:nth-child(1) {
      margin-top: -6px;
      margin-right: -4px;
      /* order: 2; */
    }

    & > div:nth-child(3) {
      display: none;
    }

    & > div:nth-child(2) {
      top: 34px;
      left: 14px;
      width: 144px;
      height: 30px;
    }
  }
`;

const StyledTextWrapper = styled.div`
  /* margin-top: -8px; */
  width: 53px;
  margin-right: 32px;

  @media (max-width: 870px) {
    display: none;
  }
`;

export default Header;
