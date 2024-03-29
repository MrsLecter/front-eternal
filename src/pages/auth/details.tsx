import UpdatePaymentBlock from "@/componets/details/updatePaymentBlock/UpdatePaymentBlock";
import React, { FC, useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import Footer from "@/componets/common/footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import {
  allowTyping,
  deleteDialog,
  deleteFirstMessage,
  deleteSoulId,
} from "@/store/reducers/internalSlice";
import {
  StyledModalWrapper,
  WrapperDetailsCentring,
  WrapperDetailsForm,
} from "@/styles/pages/details.styles";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import DetailsForm from "@/componets/details/detailsForm/DetailsForm";
import ChangePasswordForm from "@/componets/details/changePasswordForm/ChangePasswordForm";
import Loader from "@/componets/common/loader/Loader";
import ModalContainer from "@/componets/common/modal/ModalContainer";
import { useSync } from "@/hooks/use-sync";
import localStorageHandler from "@/utils/local-storage-hendler";
import BackgroundDetails from "@/componets/details/BackgroundDetails";
import WrapperModalWindow from "@/componets/common/wrappers/wrapperModalWindow/WrapperModalWindow";

const Details: FC = () => {
  const dispatch = useAppDispatch();
  const sync = useSync();
  const { showCommonModal, showPaywallModal } = useAppSelector(
    (store) => store.modalReducer
  );
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    dispatch(deleteDialog());
    dispatch(deleteFirstMessage());
    dispatch(deleteSoulId());
    setInitialRenderComplete(true);
    dispatch(allowTyping());
    localStorageHandler.removeDialog();
    sync();
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
          <Header />
          <StyledModalWrapper>
            <WrapperModalWindow
              width={"760"}
              isPaddingSmall={true}
              minHeight={480}
              maxHeight={742}
            >
              <WrapperDetailsForm>
                <p>Account Details</p>
                <DetailsForm />
              </WrapperDetailsForm>
            </WrapperModalWindow>

            <WrapperModalWindow
              width={"760"}
              isPaddingSmall={true}
              minHeight={380}
              maxHeight={490}
            >
              <WrapperDetailsForm>
                <p>Change password</p>
                <ChangePasswordForm />
              </WrapperDetailsForm>
            </WrapperModalWindow>

            <WrapperModalWindow width={"760"} isPaddingSmall={true}>
              <UpdatePaymentBlock />
            </WrapperModalWindow>
          </StyledModalWrapper>
          <Footer />
          <ModalContainer />
          <BackgroundDetails />
        </WrapperDetailsCentring>
      </>
    );
  }
};

export default Details;
