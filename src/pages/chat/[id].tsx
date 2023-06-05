import { useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import { useRouter } from "next/router";
import Individual from "@/componets/chat/individual/Individual";
import Messages from "@/componets/chat/messages/Messages";
import { getSoulsDataForId } from "@/utils/functions";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { StorageCellEnum } from "@/constants/common";
import { userSlice } from "@/store/reducers/userSlice";
import { ILocalStorageData } from "../../../types/app-common.types";
import Modal from "@/componets/common/modal/Modal";
import PaywallModal from "@/componets/common/modal/PaywallModal";
import Menu from "@/componets/common/modal/menu/Menu";
import Payment from "@/componets/common/modal/payment/Payment";
import Result from "@/componets/common/modal/result/Result";
import TitleMedium from "@/componets/common/title/TitleMedium";
import { internalSlice } from "@/store/reducers/internalSlice";
import Signin from "@/componets/common/modal/signin/Signin";
import Signup from "@/componets/common/modal/signup/Signup";
import About from "@/componets/common/modal/about/About";
import Cardpay from "@/componets/common/modal/cardpay/Cardpay";
import RestorePassword from "@/componets/common/modal/restorePassword/RestorePassword";
import { PaywallWrapper } from "@/styles/pages/common";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";

import WrapperPage from "@/componets/common/wrappers/wrapperPage/WrapperPage";
import Loader from "@/componets/common/loader/Loader";
import styled from "styled-components";

const Chat: React.FC = () => {
  const router = useRouter();
  const soulId = router.query.id as string;
  const currentSoulsData = getSoulsDataForId(soulId);

  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const { backdropClick } = internalSlice.actions;

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
        <WrapperPage color={"#0a0907"}>
          <StyledSectionChatWrapper>
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
          </StyledSectionChatWrapper>
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

const StyledSectionChatWrapper = styled.div`
  height: 100%;
  min-height: 100%;
  @media (max-width: 870px) {
    height: 812px;
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
  overflow-x: hidden;
  overflow-y: hidden;

  & > div {
    width: 50%;
    height: calc(100vh - 84px);
    min-height: calc(100vh - 84px);
  }

  & > div:first-child {
    overflow: visible;
    box-shadow: 0px 24px 34px #0a0907;
    /* background-color: green; */
    z-index: 10;
  }

  & > div:last-child {
    z-index: 3;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    overflow-y: auto;
    & > div {
      width: 100%;
    }
  }

  @media (max-width: 870px) {
    /* min-height: 728px;
    height: calc(100% - 84px);
    max-height: calc(100% - 84px); */
    height: auto;
    min-height: auto;
    max-height: auto;

    & > div {
      height: 100%;
    }

    & > div:first-child {
      height: 360px;
      min-height: 360px;
    }

    & > div:last-child {
      min-height: 368px;
      height: 100%;
    }
    overflow-y: scroll;
  }
`;

export default Chat;
