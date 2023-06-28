import { APP_ROUTES } from "@/constants/common";
import TextBtn from "../../buttons/TextBtn";
import {
  LoginWrapper,
  StyledButtonsContainer,
  StyledMenu,
  StyledMenuWrapper,
} from "./Menu.styles";
import { useRouter } from "next/router";
import localStorageHandler from "@/utils/local-storage-hendler";
import Link from "next/link";
import PrimaryMenuBtn from "./elements/PrimaryMenuBtn";
import TextMenuBtn from "./elements/TextMenuBtn";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import SocialLinksContainer from "./elements/SocialLinksContainer/SocialLinksContainer";

const Menu: React.FC = () => {
  const router = useRouter();

  const { backdropClick, toggleToPayment, toggleToLogin, toggleToSignup } =
    internalSlice.actions;
  const isAuth = localStorageHandler.getAccessToken();
  const { signout } = userSlice.actions;
  const dispatch = useAppDispatch();

  const signoutHandler = () => {
    localStorageHandler.signout();
    dispatch(signout());
    router.push(APP_ROUTES.Home);
  };

  const showPaymentModal = () => {
    dispatch(backdropClick());
    dispatch(toggleToPayment());
  };

  const showLoginModal = () => {
    dispatch(toggleToLogin());
  };

  const showSignupModal = () => {
    dispatch(toggleToSignup());
  };

  const goToDetailsPage = () => {
    dispatch(backdropClick());
    router.push(APP_ROUTES.Details);
  };

  return (
    <StyledMenuWrapper>
      <nav>
        <StyledMenu>
          <li>
            <Link href={APP_ROUTES.Home}>{"About us"}</Link>
          </li>
          <li>
            <button
              onClick={showPaymentModal}
              aria-label="pricing-button"
              aria-labelledby="pricing"
            >
              Pricing
            </button>
          </li>
          <li>
            <Link href={APP_ROUTES.Home}>{"How it works"}</Link>
          </li>
          {isAuth && (
            <li>
              <button
                onClick={goToDetailsPage}
                aria-label="account-button"
                aria-labelledby="account"
              >
                {"My account"}
              </button>
            </li>
          )}
        </StyledMenu>
      </nav>
      <SocialLinksContainer />
      {document.documentElement.clientWidth < 871 ? (
        <StyledButtonsContainer>
          {isAuth && (
            <LoginWrapper>
              <TextBtn label={"sign out"} clickHandler={signoutHandler} />
            </LoginWrapper>
          )}
          {!isAuth && (
            <>
              <PrimaryMenuBtn clickHandler={showSignupModal} />
              <LoginWrapper>
                <TextMenuBtn label={"login"} clickHandler={showLoginModal} />
              </LoginWrapper>
            </>
          )}
        </StyledButtonsContainer>
      ) : (
        <></>
      )}
    </StyledMenuWrapper>
  );
};

export default Menu;
