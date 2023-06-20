import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { internalSlice } from "@/store/reducers/internalSlice";
import {
  getConstructedMessage,
  getMessageArray,
  getSoulsDataForId,
} from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import { useLazyQuery } from "@apollo/client";
import { getFreeAnswerQueryString } from "@/utils/graphql-query-string";
import soulsService from "@/api/souls-service";
import { StyledChatBox } from "./ChatBox.styles";

import UserMessage from "./elements/userMessage/UserMessage";
import SoulMessage from "./elements/soulMessage/SoulMessage";
import ChatFeedback from "./elements/chatFeedback/ChatFeedback";

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg, soulId }) => {
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();
  const positionRef = useRef() as RefObject<HTMLDivElement>;
  const bottomRef = useRef() as RefObject<HTMLDivElement>;
  const currentSoulsData = getSoulsDataForId(soulId);
  const lastChatMessage = document.getElementById("chatBottom");
  const { userQuestionType, firstMessage, dialog } = useAppSelector(
    (store) => store.internalReducer
  );
  const [isChatCompleteLoading, setisChatCompleteLoading] =
    useState<boolean>(true);

  const {
    deleteFirstMessage,
    addToDialog,
    disallowTyping,
    allowTyping,
    restoreDialog,
    addHistory,
  } = internalSlice.actions;

  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const goToOldPosition = () => {
    if (positionRef.current) {
      setTimeout(function () {
        positionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const [fetchQuery, { loading, data }] = useLazyQuery<{
    souls: [
      {
        qone: string;
        qtwo: string;
        qthree: string;
        intro: string;
      }
    ];
  }>(getFreeAnswerQueryString({ questionType: userQuestionType }));

  useEffect(() => {
    if (dialog.length === 0) {
      const localDialogObj = localStorageHandler.getDialog();
      if (localDialogObj) {
        dispatch(
          restoreDialog({
            oldDialog: localDialogObj.dialog,
          })
        );
      }
    }
  }, []);

  useEffect(() => {
    if (firstMessage) {
      fetchQuery({
        variables: {
          input: parseInt(soulId),
        },
      });
    }
    if (lastChatMessage) {
      setTimeout(function () {
        lastChatMessage.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [firstMessage]);

  useEffect(() => {
    if (firstMessage && data && data.souls[0]) {
      dispatch(disallowTyping());
      if (userQuestionType !== "intro" || !isAuth) {
        const soulMessageDelay = setTimeout(() => {
          dispatch(
            addToDialog({
              message: getConstructedMessage({
                sender: "soul intro",
                message: Object.values(data!.souls[0])[1],
              }),
            })
          );
        }, 1000);
      } else if (dialog.length === 0) {
        dispatch(
          addToDialog({
            message: getConstructedMessage({
              sender: "soul intro",
              message: Object.values(data!.souls[0])[1],
            }),
          })
        );
      }

      setisChatCompleteLoading(true);
      localStorageHandler.updateDialog({
        dialog,
      });
      dispatch(deleteFirstMessage());
      dispatch(allowTyping());
    }
  }, [data]);

  useEffect(() => {
    localStorageHandler.updateDialog({
      dialog,
    });
    bottomRef.current?.scrollIntoView(false);
  }, [dialog]);

  useEffect(() => {
    const getMessagesHistory = async ({ soulId }: { soulId: string }) => {
      try {
        const localSoulObject = localStorageHandler.getSoulData();

        if (!localSoulObject!.id) {
          setIsError(true);
          console.error("Error: local soul data not found!");
        }
        const localSoulId = localSoulObject!.id;
        const response = await soulsService.getHistory({
          soulid: String(localSoulId),
        });

        if (response.status === 200) {
          let chathistory = response.message.chathistory;

          if (chathistory && chathistory.length > 0) {
            const message = getMessageArray({
              messages: chathistory,
            });

            dispatch(
              addHistory({
                message,
              })
            );
            localStorageHandler.updateDialog({
              dialog,
            });
            goToOldPosition();
          }
          dispatch(allowTyping());

          setIsHistoryLoading(false);
        }
      } catch (e) {
        setIsError(true);
        console.error("Error: ", e);
        setIsHistoryLoading(false);
      }
    };
    if (isAuth && isHistoryLoading) {
      getMessagesHistory({ soulId: soulId });
    }
    bottomRef.current?.scrollIntoView(false);
  }, [isHistoryLoading]);

  if (!isChatCompleteLoading) {
    return (
      <StyledChatBox>
        <div>Loading...</div>
      </StyledChatBox>
    );
  } else {
    return (
      <StyledChatBox>
        <div id="chatBox">
          {isHistoryLoading && <ChatFeedback type="loading" />}
          {isError && <ChatFeedback type="error" />}

          {!isHistoryLoading &&
            !isError &&
            dialog &&
            dialog.map((item, index) => {
              if (item[0] === "user") {
                return <UserMessage key={index} text={item[1]} />;
              } else if (item[0] === "soul" || item[0] === "soul intro") {
                return (
                  <SoulMessage
                    soulsName={currentSoulsData?.name}
                    key={index}
                    avatarImg={avatarImg}
                    text={item[1]}
                  />
                );
              } else if (item[0] === "position") {
                return <div key={index} ref={positionRef} />;
              }
            })}

          <div id="chatBottom" ref={bottomRef} />
        </div>
      </StyledChatBox>
    );
  }
};

export default ChatBox;
