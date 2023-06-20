import { APP_ROUTES } from "@/constants/common";
import { SOCIAL_LINKS } from "@/constants/modals";
import TextBtn from "../../buttons/TextBtn";
import {
  LoginWrapper,
  StyledButtonsContainer,
  StyledMenu,
  StyledMenuWrapper,
  StyledSocialContainer,
} from "./Menu.styles";
import { useRouter } from "next/router";
import localStorageHandler from "@/utils/local-storage-hendler";
import Link from "next/link";
import PrimaryMenuBtn from "./components/PrimaryMenuBtn";
import TextMenuBtn from "./components/TextMenuBtn";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { useEffect, useRef } from "react";

interface IMenuProps {
  signupHandler?: () => void;
  signinHandler?: () => void;
}

const Menu: React.FC<IMenuProps> = ({ signupHandler, signinHandler }) => {
  const router = useRouter();

  const {
    backdropClick,
    toggleToPayment,
    toggleToAbout,
    toggleToLogin,
    toggleToSignup,
  } = internalSlice.actions;
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
      <StyledSocialContainer>
        <div>
          <a href={SOCIAL_LINKS.Facebook} target="_blank">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.0647 5.32H17.9447V2.14C17.0344 2.04535 16.1198 1.99862 15.2047 2C12.4847 2 10.6247 3.66 10.6247 6.7V9.32H7.55469V12.88H10.6247V22H14.3047V12.88H17.3647L17.8247 9.32H14.3047V7.05C14.3047 6 14.5847 5.32 16.0647 5.32Z" />
            </svg>
          </a>
          <a href={SOCIAL_LINKS.Instagram} target="_blank">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9448 2H7.94482C5.1834 2 2.94482 4.23858 2.94482 7V17C2.94482 19.7614 5.1834 22 7.94482 22H17.9448C20.7062 22 22.9448 19.7614 22.9448 17V7C22.9448 4.23858 20.7062 2 17.9448 2Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M16.945 11.37C17.0684 12.2022 16.9263 13.0522 16.5388 13.799C16.1513 14.5458 15.5382 15.1514 14.7866 15.5297C14.0351 15.9079 13.1835 16.0396 12.3528 15.9059C11.5221 15.7723 10.7548 15.3801 10.1599 14.7852C9.56494 14.1902 9.17275 13.4229 9.03909 12.5922C8.90542 11.7615 9.03708 10.9099 9.41535 10.1584C9.79361 9.40685 10.3992 8.79374 11.146 8.40624C11.8928 8.01874 12.7428 7.87658 13.575 8C14.4239 8.12588 15.2099 8.52146 15.8167 9.1283C16.4236 9.73515 16.8191 10.5211 16.945 11.37Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M18.4448 6.5H18.4548"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href={SOCIAL_LINKS.Twitter} target="_blank">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.9448 5.8C22.1932 6.12609 21.3983 6.34166 20.5848 6.44C21.443 5.92732 22.0861 5.12078 22.3948 4.17C21.5884 4.65006 20.7056 4.98829 19.7848 5.17C19.1694 4.50257 18.3498 4.05829 17.4546 3.90685C16.5595 3.7554 15.6394 3.90535 14.8386 4.33319C14.0379 4.76102 13.4018 5.44253 13.0301 6.27083C12.6584 7.09914 12.5721 8.02739 12.7848 8.91C11.1543 8.82752 9.55927 8.40295 8.10348 7.66386C6.64769 6.92477 5.36367 5.88769 4.33482 4.62C3.97396 5.25016 3.78434 5.96382 3.78482 6.69C3.78354 7.36438 3.94904 8.02861 4.26658 8.62356C4.58412 9.21851 5.04384 9.72571 5.60482 10.1C4.9528 10.0823 4.31471 9.90729 3.74482 9.59V9.64C3.74971 10.5849 4.08082 11.4991 4.68214 12.228C5.28346 12.9568 6.11808 13.4556 7.04482 13.64C6.68808 13.7486 6.3177 13.8058 5.94482 13.81C5.68671 13.807 5.42925 13.7836 5.17482 13.74C5.43873 14.5528 5.94945 15.2631 6.6359 15.7722C7.32235 16.2812 8.1504 16.5635 9.00482 16.58C7.56203 17.7153 5.78071 18.3349 3.94482 18.34C3.61056 18.3411 3.27656 18.3211 2.94482 18.28C4.81925 19.4903 7.00364 20.1327 9.23482 20.13C10.7745 20.146 12.302 19.855 13.7279 19.2741C15.1539 18.6931 16.4498 17.8339 17.54 16.7465C18.6302 15.6591 19.4928 14.3654 20.0774 12.9409C20.662 11.5164 20.9569 9.98972 20.9448 8.45C20.9448 8.28 20.9448 8.1 20.9448 7.92C21.7295 7.33481 22.4063 6.61742 22.9448 5.8Z" />
            </svg>
          </a>
          <a href={SOCIAL_LINKS.Discord} target="_blank">
            <svg
              width="25"
              height="18"
              viewBox="0 0 25 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2064)">
                <path d="M20.5212 1.70927C19.0029 1.01413 17.4 0.520975 15.7535 0.242401C15.5281 0.645178 15.3243 1.05958 15.1427 1.48388C13.3889 1.21959 11.6053 1.21959 9.85145 1.48388C9.66978 1.05962 9.46592 0.645227 9.2407 0.242401C7.59313 0.523327 5.98917 1.01765 4.46929 1.71291C1.45194 6.17713 0.633983 10.5305 1.04296 14.822C2.81 16.1276 4.78782 17.1205 6.89044 17.7576C7.36389 17.1208 7.78283 16.4453 8.14282 15.7381C7.45907 15.4828 6.79913 15.1677 6.17064 14.7966C6.33605 14.6766 6.49782 14.553 6.65414 14.433C8.48291 15.2931 10.4789 15.739 12.4998 15.739C14.5207 15.739 16.5167 15.2931 18.3455 14.433C18.5036 14.5621 18.6654 14.6857 18.829 14.7966C18.1993 15.1683 17.5381 15.484 16.8532 15.74C17.2127 16.4468 17.6317 17.1217 18.1055 17.7576C20.21 17.123 22.1893 16.1306 23.9566 14.8238C24.4365 9.84703 23.1369 5.53367 20.5212 1.70927ZM8.66086 12.1827C7.52118 12.1827 6.57962 11.1485 6.57962 9.87611C6.57962 8.60373 7.48846 7.56039 8.65723 7.56039C9.826 7.56039 10.7603 8.60373 10.7403 9.87611C10.7203 11.1485 9.82236 12.1827 8.66086 12.1827ZM16.3387 12.1827C15.1972 12.1827 14.2593 11.1485 14.2593 9.87611C14.2593 8.60373 15.1682 7.56039 16.3387 7.56039C17.5093 7.56039 18.4364 8.60373 18.4164 9.87611C18.3964 11.1485 17.5002 12.1827 16.3387 12.1827Z" />
              </g>
              <defs>
                <clipPath id="clip0_1_2064">
                  <rect
                    width="23.11"
                    height="17.5152"
                    fill="white"
                    transform="translate(0.944824 0.242401)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </StyledSocialContainer>
      {document.documentElement.clientWidth < 871 ? (
        <StyledButtonsContainer>
          {isAuth ? (
            <LoginWrapper>
              <TextBtn label={"sign out"} clickHandler={signoutHandler} />
            </LoginWrapper>
          ) : (
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
