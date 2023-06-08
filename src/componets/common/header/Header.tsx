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
import { StyledHeader, StyledTextWrapper } from "./Header.styles";
import { IHeader } from "./Header.types";

const Header: React.FC<IHeader> = ({
  isHaveClose = false,
  isHaveShareBtn = false,
  isSmall = false,
  zIndex = 4,
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

export default Header;
