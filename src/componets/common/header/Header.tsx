import MenuBtn from "../buttons/MenuBtn";
import ShareBtn from "./elements/ShareBtn";
import CloseBtn from "../buttons/CloseBtn";
import ButtonsContainer from "./elements/ButtonsContainer";
import Logo from "../logo/Logo";
import { StyledHeader } from "./Header.styles";
import { APP_ROUTES, APP_SETTING } from "@/constants/common";
import localStorageHandler from "@/utils/local-storage-hendler";
import { signout } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import { IHeader } from "./Header.types";
import { SHARE_LINK_MESSAGE } from "@/constants/text-messages";
import { FC } from "react";
import {
  backdropClick,
  showMenuModal,
  toggleToLogin,
  toggleToSignup,
} from "@/store/reducers/modalSlice";

const Header: FC<IHeader> = ({
  isHaveClose = false,
  isHaveShareBtn = false,
  isSmall = false,
  zIndex = 4,
  ref,
}) => {
  const isAuth = localStorageHandler.getAccessToken();
  const { showCommonModal, showPaywallModal } = useAppSelector(
    (store) => store.modalReducer
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const shareBtnHandler = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_LINK_MESSAGE);
      alert("Success: link copied!");
      await navigator.clipboard.writeText(SHARE_LINK_MESSAGE);
    } catch (err: any) {
      console.error("Error: error occured while user copied link! Try again");
    }
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
      ref={ref}
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
      {!isSmall &&
        document.documentElement.clientWidth > APP_SETTING.TabResolution && (
          <ButtonsContainer
            isHaveShareBtn={isHaveShareBtn}
            isAuth={isAuth}
            shareBtnHandler={shareBtnHandler}
            signoutHandler={signoutHandler}
            signupClickHandler={signupClickHandler}
            loginClickHandler={loginClickHandler}
          />
        )}
    </StyledHeader>
  );
};

export default Header;
