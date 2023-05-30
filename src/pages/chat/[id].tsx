import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "@/componets/common/header/Header";
import { useRouter } from "next/router";
import Individual from "@/componets/chat/individual/Individual";
import Messages from "@/componets/chat/messages/Messages";
import { getSoulsDataForId } from "@/utils/functions";
import WrapperPage from "@/componets/common/wrappers/WrapperPage";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { StorageCellEnum } from "@/constants/common";
import { userSlice } from "@/store/reducers/userSlice";
import { ILocalStorageData } from "../../../types/common.types";
import Modal from "@/componets/common/modal/Modal";
import PaywallModal from "@/componets/common/modal/PaywallModal";
import Menu from "@/componets/common/modal/menu/Menu";
import Payment from "@/componets/common/modal/payment/Payment";
import Result from "@/componets/common/modal/result/Result";
import TitleMedium from "@/componets/common/title/TitleMedium";
import Loader from "@/componets/common/loader/loader";
import { internalSlice } from "@/store/reducers/internalSlice";
import Signin from "@/componets/common/modal/signin/Signin";
import Signup from "@/componets/common/modal/signup/Signup";
import About from "@/componets/common/modal/about/About";
import Cardpay from "@/componets/common/modal/cardpay/Cardpay";
import RestorePassword from "@/componets/common/modal/restorePassword/RestorePassword";
import { PaywallWrapper } from "@/styles/pages/common";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";

const Chat: React.FC = () => {
  const router = useRouter();
  const soulId = router.query.id as string;
  const currentSoulsData = getSoulsDataForId(soulId);
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);
  const { questionsAmount, email } = useAppSelector(
    (store) => store.userReducer
  );
  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();
  console.log(">>>questionsAmount", questionsAmount);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const { backdropClick, deleteDialog, deleteFirstMessage } =
    internalSlice.actions;

  const {
    dialog,
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
      console.log(">>>questionsAmount", questionsAmount);
    }
  }, []);
  if (!initialRenderComplete) {
    return <Loader />;
  } else {
    return (
      <>
        <HeadCommon />
        <WrapperPage color={"#0a0907"}>
          <StyledSectionWrapper>
            <Header
              isHaveShareBtn={true}
              isHaveClose={showCommonModal}
              isSmall={isSmallHeader || showPaywallModal}
            />
            <StyledChatContainer>
              <div>
                <Individual individualData={currentSoulsData} />
              </div>
              <div>
                <Messages soulId={soulId} avatarImg={currentSoulsData?.image} />
              </div>
            </StyledChatContainer>
          </StyledSectionWrapper>
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
        </WrapperPage>
      </>
    );
  }
};

const StyledSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height:100%;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: space-between;
  /* min-height: 100%; */
  background-color: #0a0907;
  overflow: hidden;

  /* @media (min-width: 1600px) {
    /* min-height: 1405px; */
  

  @media (max-width: 1600px) {
    min-height: 100%;
  }

  @media (max-width: 1200px) {
    overflow-y: auto;
    min-height: 812px;
  }
`;

const StyledChatContainer = styled.main`
  position: relative;
  height: calc(100% - 96px);
  min-height: calc(100% - 96px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #0a0907;

  & > div {
    width: 50%;
    height: calc(100vh - 84px);
    min-height: calc(100vh - 84px);
    /* min-height: 95vh; */
  }

  & > div:first-child {
    overflow: visible;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    & > div {
      width: 100%;
      height: 421px;
      min-height: 421px;;
    }
  }
`;

export default Chat;
