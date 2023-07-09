import Header from "@/componets/common/header/Header";
import Greeting from "@/componets/home/greeting/Greeting";
import Souls from "@/componets/home/souls/Souls";
import Footer from "@/componets/common/footer/Footer";
import ModalContainer from "@/componets/common/modal/ModalContainer";
import {
  StyledBackground,
  StyledMainContent,
  WrapperPage,
} from "@/styles/pages/index.styles";
import { useState, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import userService from "@/api/user-service";
import { useSession } from "next-auth/react";
import localStorageHandler from "@/utils/local-storage-hendler";
import Loader from "@/componets/common/loader/Loader";
import { useSync } from "@/hooks/use-sync";
import { isTokenExpired, liftToTop } from "@/utils/functions";
import { showReadAboutModal } from "@/store/reducers/modalSlice";

export default function Home() {
  const session = useSession();
  const sync = useSync();
  const { signin } = userSlice.actions;
  const { deleteDialog, deleteFirstMessage, deleteSoulId, allowTyping } =
    internalSlice.actions;
  const { signout } = userSlice.actions;
  const { showCommonModal, showPaywallModal } = useAppSelector(
    (store) => store.modalReducer
  );
  const dispatch = useAppDispatch();

  const [_, setGoogleSignup] = useState<boolean>(false);
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    const isAuth = localStorageHandler.getAccessToken();
    const isReadAbout = localStorageHandler.getReadAbout();
    setInitialRenderComplete(true);
    sync();

    if (isAuth && !isReadAbout) {
      dispatch(showReadAboutModal());
    }
    const refreshToken = async () => {
      try {
        const response = await userService.makeRefreshRequest();

        if (response.status === 201) {
          const { accesstoken: accessToken, refreshtoken: refreshToken } =
            response.data.message;
          localStorageHandler.updateTokens({
            accessToken,
            refreshToken,
          });
        }
      } catch (err) {
        localStorageHandler.deleteUsersData();
        dispatch(signout());
      }
    };

    if (isTokenExpired() && isAuth) {
      refreshToken();
    }
  }, []);

  useEffect(() => {
    const sendGoogleToken = async (token: string) => {
      try {
        const response = await userService.googleAuth(token);

        if (response.status === 201) {
          const {
            id,
            email,
            name,
            phone,
            nextpayment,
            questionsamount,
            readabout,
            sharelink,
            accesstoken,
            refreshtoken,
          } = response.data.message;
          setGoogleSignup(true);
          dispatch(
            signin({
              id,
              email,
              name,
              phone,
              nextPayment: nextpayment,
              questionsAmount: questionsamount,
              readAbout: !!readabout,
              shareLink: sharelink,
            })
          );
          localStorageHandler.signin({
            id,
            email,
            name,
            phone,
            readabout: !!readabout,
            nextpayment: nextpayment,
            questionsamount: questionsamount,
            accessToken: accesstoken,
            refreshToken: refreshtoken,
            shareLink: sharelink,
            isGoogleAuth: true,
          });
        }
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    const isGoogleAuth = localStorageHandler.getGoogleAuth();

    if (session.data && isGoogleAuth) {
      sendGoogleToken(session.data.token_id);
    }
  }, [session.data]);

  useEffect(() => {
    dispatch(deleteDialog());
    dispatch(deleteFirstMessage());
    dispatch(deleteSoulId());
    dispatch(allowTyping());
    localStorageHandler.removeDialog();
    localStorageHandler.removeSoulData();
  }, []);

  const MainContent = useMemo(() => {
    return (
      <>
        <Greeting />
        <Souls />
        <Footer logoClickHandler={liftToTop} />
      </>
    );
  }, []);

  if (!initialRenderComplete) {
    return <Loader />;
  } else {
    return (
      <>
        <HeadCommon />
        <WrapperPage shouldNotScroll={showPaywallModal || showCommonModal}>
          <StyledBackground>
            <ModalContainer />
            <StyledMainContent>
              <Header />
              {MainContent}
            </StyledMainContent>
          </StyledBackground>
        </WrapperPage>
      </>
    );
  }
}
