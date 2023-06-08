import { useEffect, useState } from "react";
import Header from "@/componets/common/header/Header";
import { useRouter } from "next/router";
import Individual from "@/componets/chat/individual/Individual";
import Messages from "@/componets/chat/messages/Messages";
import { getSoulsDataForId } from "@/utils/functions";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import HeadCommon from "@/componets/common/headCommon/HeadCommon";
import WrapperPage from "@/componets/common/wrappers/wrapperPage/WrapperPage";
import Loader from "@/componets/common/loader/Loader";
import {
  StyledChatContainer,
  StyledSectionChatWrapper,
} from "@/styles/pages/chat.styled";
import ModalContainer from "@/componets/common/modal/ModalConteiner";
import { useSync } from "@/hooks/use-sync";
import { internalSlice } from "@/store/reducers/internalSlice";

const Chat: React.FC = () => {
  const router = useRouter();
  const sync = useSync();
  const dispatch = useAppDispatch();
  const { setSoulId, allowTyping } = internalSlice.actions;
  const soulId = router.query.id as string;
  dispatch(setSoulId({ soulid: +soulId }));
  const { showCommonModal, isSmallHeader, showPaywallModal, internalSoulid } =
    useAppSelector((store) => store.internalReducer);

  const currentSoulsData = getSoulsDataForId(String(internalSoulid));

  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
    sync();
    dispatch(allowTyping());
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
                <Messages
                  soulId={String(internalSoulid)}
                  avatarImg={currentSoulsData?.image}
                />
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
