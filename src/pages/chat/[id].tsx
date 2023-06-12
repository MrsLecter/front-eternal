import { useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import { useRouter } from "next/router";
import Individual from "@/componets/chat/individual/Individual";
import Messages from "@/componets/chat/messages/Messages";
import { getMessageArray, getSoulsDataForId } from "@/utils/functions";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import WrapperPage from "@/componets/common/wrappers/wrapperPage/WrapperPage";
import Loader from "@/componets/common/loader/Loader";
import {
  StyledChatContainer,
  StyledSectionChatWrapper,
} from "@/styles/pages/chat.styled";
import ModalContainer from "@/componets/common/modal/ModalContainer";
import { useSync } from "@/hooks/use-sync";
import { internalSlice } from "@/store/reducers/internalSlice";
import localStorageHandler from "@/utils/local-storage-hendler";
import soulsService from "@/api/souls-service";

const Chat: React.FC = () => {
  const router = useRouter();
  const sync = useSync();
  const dispatch = useAppDispatch();
  const { setSoulId, allowTyping, restoreDialog, addHistory } =
    internalSlice.actions;
  const soulId = router.query.id as string;
  const { showCommonModal, isSmallHeader, showPaywallModal, dialog } =
    useAppSelector((store) => store.internalReducer);

  const currentSoulsData = getSoulsDataForId(soulId);
  const isAuth = localStorageHandler.getAccessToken();
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
    sync();
    dispatch(allowTyping());

    const lastChatMessage = document.getElementById("chatBottom");
    if (lastChatMessage) {
      lastChatMessage.scrollIntoView();
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
            <Header isHaveShareBtn={true} />
            <StyledChatContainer>
              <div>
                <Individual individualData={currentSoulsData} />
              </div>
              <div>
                <Messages soulId={soulId} avatarImg={currentSoulsData?.image} />
              </div>
            </StyledChatContainer>
          </StyledSectionChatWrapper>
          <ModalContainer />
        </WrapperPage>
      </>
    );
  }
};
export default Chat;
