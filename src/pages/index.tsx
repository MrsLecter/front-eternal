import Header from "@/componets/common/header/Header";
import Greeting from "@/componets/home/greeting/Greeting";
import Souls from "@/componets/home/souls/Souls";
import { useState, useEffect, useMemo } from "react";
import Footer from "@/componets/common/footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import {
  StyledBackground,
  StyledMainContent,
  WrapperPage,
} from "@/styles/pages/index.styles";
import userService from "@/api/user-service";
import { useSession } from "next-auth/react";
import localStorageHandler from "@/utils/local-storage-hendler";
import Loader from "@/componets/common/loader/Loader";
import ModalContainer from "@/componets/common/modal/ModalContainer";
import { useSync } from "@/hooks/use-sync";
import { isTokenExpired, liftToTop } from "@/utils/functions";

export default function Home() {
  const session = useSession();
  const sync = useSync();
  const { signin } = userSlice.actions;
  const { showReadAboutModal } = internalSlice.actions;
  const { showCommonModal, showPaywallModal } = useAppSelector(
    (store) => store.internalReducer
  );
  const { deleteDialog, deleteFirstMessage, deleteSoulId, allowTyping } =
    internalSlice.actions;
  const { signout } = userSlice.actions;
  const dispatch = useAppDispatch();
  const [googleSignup, setGoogleSignup] = useState<boolean>(false);
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
          localStorageHandler.updateTokens({
            accessToken: response.data.message.accesstoken,
            refreshToken: response.data.message.refreshtoken,
          });
        }
      } catch (err) {
        localStorageHandler.deleteUsersData();
        dispatch(signout());
      }
    };
    const isNeedRefreshToken = isTokenExpired();

    if (isNeedRefreshToken && isAuth) {
      refreshToken();
    }
  }, []);

  useEffect(() => {
    const sendGoogleToken = async (token: string) => {
      try {
        const response = await userService.googleAuth(token);

        if (response.status === 201) {
          setGoogleSignup(true);
          dispatch(
            signin({
              id: response.data.message.id,
              email: response.data.message.email,
              name: response.data.message.name,
              phone: response.data.message.phone,
              nextPayment: response.data.message.nextpayment,
              questionsAmount: response.data.message.questionsamount,
              readAbout: !!response.data.message.readabout,
              shareLink: response.data.message.sharelink,
            })
          );
          localStorageHandler.signin({
            id: response.data.message.id,
            email: response.data.message.email,
            name: response.data.message.name,
            phone: response.data.message.phone,
            readabout: !!response.data.message.readabout,
            nextpayment: response.data.message.nextpayment,
            questionsamount: response.data.message.questionsamount,
            accessToken: response.data.message.accesstoken,
            refreshToken: response.data.message.refreshtoken,
            shareLink: response.data.message.sharelink,
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

  useEffect(() => {
    const pageContent = document.getElementById("content");
    if ((pageContent && showCommonModal) || (pageContent && showPaywallModal)) {
      pageContent.blur();
    }
    if (pageContent && !showCommonModal && !showPaywallModal) {
      pageContent.focus();
    }
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
