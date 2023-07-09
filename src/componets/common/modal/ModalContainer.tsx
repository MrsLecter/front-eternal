import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import Menu from "@/componets/common/modal/menu/Menu";
import Signin from "@/componets/common/modal/signin/Signin";
import Signup from "@/componets/common/modal/signup/Signup";
import About from "@/componets/common/modal/about/About";
import Result from "@/componets/common/modal/result/Result";
import Payment from "@/componets/common/modal/payment/Payment";
import PaywallModal from "@/componets/common/modal/PaywallModal";
import TitleMedium from "@/componets/common/title/TitleMedium";
import Cardpay from "@/componets/common/modal/cardpay/Cardpay";
import Modal from "@/componets/common/modal/Modal";
import { PaywallWrapper } from "@/styles/pages/common";
import RestorePassword from "@/componets/common/modal/restorePassword/RestorePassword";
import { FC } from "react";
import { backdropClick } from "@/store/reducers/modalSlice";

const ModalContainer: FC = () => {
  const {
    showCommonModal,
    showMenuModal,
    showLoginModal,
    showSignupModal,
    showAboutModal,
    showPaywallModal,
    showPaywallPricingModal,
    showPaywallResultModal,
    showPaywallCardpayModal,
    showRestorePasswordModal,
  } = useAppSelector((store) => store.modalReducer);
  const dispatch = useAppDispatch();

  return (
    <>
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
              <Payment modalClickHandler={() => dispatch(backdropClick())} />
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
    </>
  );
};

export default ModalContainer;
