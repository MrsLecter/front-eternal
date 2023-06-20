import UpdatePaymentBlock from "@/componets/details/updatePaymentBlock/UpdatePaymentBlock";
import WrapperModal from "@/componets/common/wrappers/wrapperModal/WrapperModal";
import React, { useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import Footer from "@/componets/common/footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { userSlice } from "@/store/reducers/userSlice";
import { internalSlice } from "@/store/reducers/internalSlice";
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
import { liftToTop } from "@/utils/functions";

const Details: React.FC = () => {
  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();
  const sync = useSync();
  const { deleteDialog, deleteFirstMessage, deleteSoulId, allowTyping } =
    internalSlice.actions;
  const { showCommonModal, isSmallHeader, showPaywallModal } = useAppSelector(
    (store) => store.internalReducer
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
          <ModalContainer />
          <BackgroundDetails />
        </WrapperDetailsCentring>
      </>
    );
  }
};

export default Details;
