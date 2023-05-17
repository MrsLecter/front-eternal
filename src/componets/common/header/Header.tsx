import styled from "styled-components";
import MenuBtn from "../buttons/MenuBtn";
import Logo from "../logo/Logo";
import TextBtn from "../buttons/TextBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";
import BorderedBtn from "../buttons/SecondaryBtn";
import CloseBtn from "../buttons/CloseBtn";
import Link from "next/link";
import {
  APP_ROUTES,
  APP_SETTING,
  SHARE_LINK_MESSAGE,
} from "@/constants/common";
import { RefObject } from "react";
import localStorageHandler from "@/utils/local-storage-hendler";
import userService from "@/api/user-service";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";

interface IHeader {
  isHaveShareBtn?: boolean;
  haveClose?: boolean;
  topRef?: RefObject<HTMLHeadElement>;
}

const Header: React.FC<IHeader> = ({
  haveClose = false,
  topRef,
  isHaveShareBtn = false,
}) => {
  const isAuth = localStorageHandler.getAccessToken();
  const { signout } = userSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const shareBtnHandler = () => {
    navigator.clipboard.writeText(SHARE_LINK_MESSAGE);
    alert("Success: link copied!");
    navigator.clipboard.writeText(SHARE_LINK_MESSAGE);
  };

  const signoutHandler = () => {
    localStorageHandler.signout();
    dispatch(signout());
    router.push(APP_ROUTES.Home);
  };

  return (
    <StyledHeader isAuth={isAuth} id="topHeader" ref={topRef}>
      <div>{haveClose ? <CloseBtn /> : <MenuBtn />}</div>
      <div>
        <Logo />
      </div>
      <div>
        {document.documentElement.clientWidth > APP_SETTING.TabResolution &&
          (isAuth ? (
            isHaveShareBtn ? (
              <BorderedBtn clickHandler={shareBtnHandler} />
            ) : (
              <>
                <StyledTextWrapper>
                  <Link href={APP_ROUTES.Signin}>
                    <TextBtn label={"sign out"} clickHandler={signoutHandler} />
                  </Link>
                </StyledTextWrapper>

                <Link href={APP_ROUTES.Signup}>
                  <PrimaryBtn label={"get started"} />
                </Link>
              </>
            )
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
  padding: 32px 32px 0px 18px;
  width: 100%;
  max-width: 1642px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

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
    min-width: 298px;
    margin-right: -2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 870px) {
    padding: 30px 5px 0px 16px;
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
