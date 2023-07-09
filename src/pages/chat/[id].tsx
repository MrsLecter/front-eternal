import { FC, useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import { useRouter } from "next/router";
import Messages from "@/componets/chat/messages/Messages";
import { getSoulsDataForId } from "@/utils/functions";
import { useAppDispatch } from "@/hooks/reducers.hook";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import WrapperPage from "@/componets/common/wrappers/wrapperPage/WrapperPage";
import Loader from "@/componets/common/loader/Loader";
import {
  StyledChatContainer,
  StyledSectionChatWrapper,
} from "@/styles/pages/chat.styled";
import ModalContainer from "@/componets/common/modal/ModalContainer";
import { useSync } from "@/hooks/use-sync";
import { allowTyping } from "@/store/reducers/internalSlice";
import localStorageHandler from "@/utils/local-storage-hendler";
import Soul from "@/componets/chat/soul/Soul";
import { ISoulsData } from "../../../types/app-common.types";

const Chat: FC = () => {
  const router = useRouter();
  const sync = useSync();
  const dispatch = useAppDispatch();
  const soulId = router.query.id as string;
  const currentSoulsData = getSoulsDataForId(soulId);

  if (currentSoulsData) {
    localStorageHandler.setSoulData(currentSoulsData as ISoulsData);
  }

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
                <Soul />
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
