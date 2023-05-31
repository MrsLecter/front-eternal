import BackgroundDetails from "@/componets/details/BackgroundDetails";
import UpdatePaymentBlock from "@/componets/details/updatePaymentBlock/UpdatePaymentBlock";
import WrapperModal from "@/componets/common/wrappers/wrapperModal/WrapperModal";
import React, { useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import Footer from "@/componets/common/footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { userSlice } from "@/store/reducers/userSlice";
import { StorageCellEnum } from "@/constants/common";
import { ILocalStorageData } from "../../../types/app-common.types";
import Cardpay from "@/componets/common/modal/cardpay/Cardpay";
import TitleMedium from "@/componets/common/title/TitleMedium";
import Payment from "@/componets/common/modal/payment/Payment";
import PaywallModal from "@/componets/common/modal/PaywallModal";
import { internalSlice } from "@/store/reducers/internalSlice";
import Modal from "@/componets/common/modal/Modal";
import Menu from "@/componets/common/modal/menu/Menu";
import Signin from "@/componets/common/modal/signin/Signin";
import Signup from "@/componets/common/modal/signup/Signup";
import About from "@/componets/common/modal/about/About";
import RestorePassword from "@/componets/common/modal/restorePassword/RestorePassword";
import Result from "@/componets/common/modal/result/Result";
import {
  StyledModalWrapper,
  WrapperDetailsCentring,
  WrapperDetailsForm,
} from "@/styles/pages/details.styles";
import { PaywallWrapper } from "@/styles/pages/common";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import Loader from "@/componets/common/loader/loader";
import DetailsForm from "@/componets/details/detailsForm/DetailsForm";
import ChangePasswordForm from "@/componets/details/changePasswordForm/ChangePasswordForm";

const Details: React.FC = () => {
  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  const { backdropClick, deleteDialog, deleteFirstMessage } =
    internalSlice.actions;

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
    setInitialRenderComplete(true);
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

  if (!initialRenderComplete) {
    return <Loader />;
  } else {
    return (
      <>
        <HeadCommon />

        <WrapperDetailsCentring
          shouldNotScroll={showPaywallModal || showCommonModal}
        >
          <Header
            isHaveClose={showCommonModal}
            isSmall={isSmallHeader || showPaywallModal}
          />
          <StyledModalWrapper>
            <WrapperModal
              width={"760"}
              isPaddingSmall={true}
              minHeight={480}
              maxHeight={742}
            >
              <WrapperDetailsForm>
                <p>Account Details</p>
                <DetailsForm />
              </WrapperDetailsForm>
            </WrapperModal>

            <WrapperModal
              width={"760"}
              isPaddingSmall={true}
              minHeight={380}
              maxHeight={490}
            >
              <WrapperDetailsForm>
                <p>Change password</p>
                <ChangePasswordForm />
              </WrapperDetailsForm>
            </WrapperModal>

            <WrapperModal width={"760"} isPaddingSmall={true}>
              <UpdatePaymentBlock />
            </WrapperModal>
          </StyledModalWrapper>
          <Footer />
          <BackgroundDetails />
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
        </WrapperDetailsCentring>
      </>
    );
  }
};

export default Details;
