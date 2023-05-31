import Header from "@/componets/common/header/Header";
import Greeting from "@/componets/home/greeting/Greeting";
import Individuals from "@/componets/home/individuals/Individuals";
import { useState, useEffect, useMemo } from "react";
import Loader from "@/componets/common/loader/loader";
import Modal from "@/componets/common/modal/Modal";
import Footer from "@/componets/common/footer/Footer";
import Menu from "@/componets/common/modal/menu/Menu";
import Signin from "@/componets/common/modal/signin/Signin";
import Signup from "@/componets/common/modal/signup/Signup";
import About from "@/componets/common/modal/about/About";
import Result from "@/componets/common/modal/result/Result";
import Payment from "@/componets/common/modal/payment/Payment";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import PaywallModal from "@/componets/common/modal/PaywallModal";
import TitleMedium from "@/componets/common/title/TitleMedium";
import Cardpay from "@/componets/common/modal/cardpay/Cardpay";

import { StorageCellEnum } from "@/constants/common";
import { ILocalStorageData } from "../../types/app-common.types";
import { userSlice } from "@/store/reducers/userSlice";
import RestorePassword from "@/componets/common/modal/restorePassword/RestorePassword";
import { PaywallWrapper } from "@/styles/pages/common";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import {
  StyledBackground,
  StyledMainContent,
  WrapperPage,
} from "@/styles/pages/index.styles";

export default function Home() {
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);
  const { signin } = userSlice.actions;

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const { backdropClick, deleteDialog, deleteFirstMessage } =
    internalSlice.actions;
  const dispatch = useAppDispatch();

  const {
    showCommonModal,
    showMenuModal,
    isSmallHeader,
    showLoginModal,
    showSignupModal,
    showAboutModal,
    showPaywallModal,
    showPaywallPricingModal,
    showPaywallResultModal,
    showPaywallCardpayModal,
    showRestorePasswordModal,
  } = useAppSelector((store) => store.internalReducer);

  useEffect(() => {
    dispatch(deleteDialog());
    dispatch(deleteFirstMessage());
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

  useEffect(() => {
    let localData = localStorage.getItem(StorageCellEnum.USER);
    if (localData) {
      const parsedData: ILocalStorageData = JSON.parse(localData);
      dispatch(
        signin({
          id: parsedData.id,
          email: parsedData.email,
          name: parsedData.name!,
          phone: parsedData.phone!,
          nextPayment: parsedData.nextpayment as string,
          questionsAmount: parsedData.questionsamount,
          readAbout: parsedData.readabout,
          shareLink: !!parsedData.shareLink,
        })
      );
    }
  }, []);

  const liftToTop = () => {
    const headerElem = document.getElementById("topHeader");
    if (headerElem) {
      headerElem.scrollIntoView();
    }
  };

  const MainContent = useMemo(() => {
    return (
      <StyledMainContent>
        <Header
          isHaveClose={showCommonModal}
          isSmall={isSmallHeader || showPaywallModal}
        />
        <Greeting />
        <Individuals />
        <Footer liftToTopHandler={liftToTop} />
      </StyledMainContent>
    );
  }, [showCommonModal, isSmallHeader, showPaywallModal]);

  if (!initialRenderComplete) {
    return <Loader />;
  } else {
    return (
      <>
        <HeadCommon />
        <WrapperPage shouldNotScroll={showPaywallModal || showCommonModal}>
          <StyledBackground>
            {showCommonModal && (
              <Modal backClickHandler={() => dispatch(backdropClick())}>
                {showMenuModal && <Menu />}
                {showLoginModal && <Signin />}
                {showSignupModal && <Signup />}
                {showAboutModal && <About />}
                {showRestorePasswordModal && <RestorePassword />}
              </Modal>
            )}
            {showPaywallModal && (
              <PaywallModal backClickHandler={() => dispatch(backdropClick())}>
                {showPaywallResultModal && <Result />}
                {showPaywallPricingModal && (
                  <PaywallWrapper>
                    <TitleMedium
                      label={"Unlock full features"}
                      description={
                        "Share or subscribe to continue asking unlimited questions"
                      }
                    />
                    <Payment
                      modalClickHandler={() => dispatch(backdropClick())}
                    />
                  </PaywallWrapper>
                )}
                {showPaywallCardpayModal && (
                  <PaywallWrapper>
                    <TitleMedium
                      label={"Unlock full features"}
                      description={
                        "Share or subscribe to continue asking unlimited questions"
                      }
                    />
                    <Cardpay />
                  </PaywallWrapper>
                )}
              </PaywallModal>
            )}
            {MainContent}
          </StyledBackground>
        </WrapperPage>
      </>
    );
  }
}
