import styled, { css } from "styled-components";
import MenuBtn from "../buttons/MenuBtn";
import Logo from "../logo/Logo";
import TextBtn from "../buttons/TextBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";
import CloseBtn from "../buttons/CloseBtn";
import {
  APP_ROUTES,
  APP_SETTING,
  SHARE_LINK_MESSAGE,
} from "@/constants/common";
import localStorageHandler from "@/utils/local-storage-hendler";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import { internalSlice } from "@/store/reducers/internalSlice";
import ShareBtn from "./elements/ShareBtn";

interface IHeader {
  isHaveShareBtn?: boolean;
  isHaveClose?: boolean;
  isSmall?: boolean;
  zIndex?: number;
}

const Header: React.FC<IHeader> = ({
  isHaveClose = false,
  isHaveShareBtn = false,
  isSmall = false,
  zIndex = 9,
}) => {
  const isAuth = localStorageHandler.getAccessToken();
  const { signout } = userSlice.actions;
  const { showMenuModal, backdropClick, toggleToLogin, toggleToSignup } =
    internalSlice.actions;

  const { showCommonModal, showPaywallModal } = useAppSelector(
    (store) => store.internalReducer
  );
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

  const menuClickHandler = () => {
    dispatch(showMenuModal());
  };

  const closeClickHandler = () => {
    dispatch(backdropClick());
  };

  const loginClickHandler = () => {
    dispatch(toggleToLogin());
  };

  const signupClickHandler = () => {
    dispatch(toggleToSignup());
  };

  const rolldownAllWindows = () => {
    if (showCommonModal || showPaywallModal) dispatch(backdropClick());
  };

  return (
    <StyledHeader
      isAuth={isAuth}
      id="topHeader"
      isSmall={isSmall}
      onClick={rolldownAllWindows}
      zIndex={zIndex}
    >
      {!isSmall && isHaveClose && (
        <div>
          <CloseBtn clickHandler={closeClickHandler} />
        </div>
      )}
      {!isSmall && !isHaveClose && (
        <>
          <div>
            {document.documentElement.clientWidth < 870 && isHaveShareBtn ? (
              <ShareBtn clickHandler={shareBtnHandler} />
            ) : (
              <></>
            )}
            <MenuBtn clickHandler={menuClickHandler} />
          </div>
        </>
      )}

      <div>
        <Logo />
      </div>
      {isSmall && (
        <div>
          <CloseBtn clickHandler={closeClickHandler} />
        </div>
      )}
      {!isSmall && (
        <div>
          {document.documentElement.clientWidth > APP_SETTING.TabResolution &&
            (isAuth ? (
              isHaveShareBtn ? (
                <ShareBtn clickHandler={shareBtnHandler} />
              ) : (
                <>
                  <StyledTextWrapper>
                    <TextBtn label={"sign out"} clickHandler={signoutHandler} />
                  </StyledTextWrapper>
                  <PrimaryBtn
                    label={"get started"}
                    clickHandler={signupClickHandler}
                  />
                </>
              )
            ) : (
              <>
                {isHaveShareBtn ? (
                  <ShareBtn clickHandler={shareBtnHandler} />
                ) : (
                  <>
                    <StyledTextWrapper>
                      <TextBtn
                        label={"login"}
                        clickHandler={loginClickHandler}
                      />
                    </StyledTextWrapper>
                    <PrimaryBtn
                      label={"get started"}
                      clickHandler={signupClickHandler}
                    />
                  </>
                )}
              </>
            ))}
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{
  isAuth: boolean;
  isSmall: boolean;
  zIndex: number;
}>`
  ${(props) =>
    !props.isSmall &&
    css`
      position: relative;
      padding: 32px 32px 0px 18px;
      width: 100%;
      height: 84px;
      min-height: 84px;
      max-width: 1640px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      /* z-index: 102; */
      z-index: ${props.zIndex};

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
        justify-content: flex-end;
        align-items: center;
      }

      @media (max-width: 870px) {
        padding: 30px 18px 0px 16px;
        justify-content: flex-end;

        & > div:nth-child(1) {
          margin-top: -6px;
          margin-right: -4px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
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
    `}

  ${(props) =>
    props.isSmall &&
    css`
      position: relative;
      top: 0px;
      width: 100%;
      max-width: 1640px;
      height: 84px;
      min-height: 84px;
      padding: 32px 32px 0px 18px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      z-index: 102;

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
    `}
`;

const StyledTextWrapper = styled.div`
  /* margin-top: -8px; */
  width: 53px;
  margin-right: 52px;

  @media (max-width: 870px) {
    display: none;
  }
`;

export default Header;
