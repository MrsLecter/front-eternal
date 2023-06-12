import React, { useEffect, useRef } from "react";
import { StyledMessages } from "./Messages.styles";
import UserInput from "./userInput/UserInput";
import ChatBox from "./chatBox/ChatBox";
import Pusher from "pusher-js";
import { PUSHER_DATA } from "@/constants/common";
import localStorageHandler from "@/utils/local-storage-hendler";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { getConstructedMessage } from "@/utils/functions";

interface IMessagesProps {
  avatarImg: string | undefined;
  soulId: string;
}

const Messages: React.FC<IMessagesProps> = ({ avatarImg, soulId }) => {
  const userId = localStorageHandler.getUserId();
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLDivElement>(null);
  const { addToDialog, deleteLastDialogMessage, allowTyping, deleteDialog } =
    internalSlice.actions;
  const isAuth = localStorageHandler.getAccessToken();
  const { questionsAmount } = useAppSelector((store) => store.userReducer);
  const { firstMessage, dialog } = useAppSelector(
    (store) => store.internalReducer
  );

  useEffect(() => {
    if (isAuth && questionsAmount !== 0 && !firstMessage) {
      Pusher.logToConsole = true;
      const pusherClient = new Pusher(PUSHER_DATA.Secret, {
        cluster: "eu",
      });
      pusherClient.subscribe(PUSHER_DATA.ChatId + userId);

      pusherClient.bind(PUSHER_DATA.EventName, (data: any) => {
        dispatch(deleteLastDialogMessage());
        dispatch(
          addToDialog({
            message: getConstructedMessage({
              sender: "soul",
              message: data.answer,
            }),
          })
        );

        dispatch(allowTyping());
      });

      return () => {
        pusherClient.unsubscribe(PUSHER_DATA.ChatId);
        pusherClient.unbind(PUSHER_DATA.EventName);
      };
    }
  }, [dialog]);

  return (
    <StyledMessages>
      <ChatBox
        avatarImg={avatarImg}
        soulId={soulId}
        visibleMessageRef={messageRef}
      />
      <UserInput soulId={soulId} />
    </StyledMessages>
  );
};

export default React.memo(Messages);
