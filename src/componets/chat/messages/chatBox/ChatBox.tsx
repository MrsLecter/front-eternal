import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useEffect, useState } from "react";
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
import UserMessage from "./elements/userMessage/UserMessaege";
import IndividualMessage from "./elements/individualMessage/IndividualMessage";

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
  visibleMessageRef: React.RefObject<HTMLDivElement>;
}

const ChatBox: React.FC<IChatBoxProps> = ({
  avatarImg,
  soulId,
  visibleMessageRef,
}) => {
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(true);

  const {
    userQuestionType,
    firstMessage,
    dialog,
    totalHistoryPages,
    currentHistoryPage,
  } = useAppSelector((store) => store.internalReducer);
  const [isChatCompleteLoading, setisChatCompleteLoading] =
    useState<boolean>(true);

  const {
    deleteFirstMessage,
    addToDialog,
    disallowTyping,
    allowTyping,
    restoreDialog,
    addHistory,
    settotalHistoryPages,
    changeCurrentHistoryPage,
  } = internalSlice.actions;

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
  const currentSoulsData = getSoulsDataForId(soulId);
  const userId = localStorageHandler.getUserId();
  const lastChatMessage = document.getElementById("chatBottom");
  const chatBox = document.getElementById("chatBox");

  useEffect(() => {
    if (dialog.length === 0) {
      const localDialogObj = localStorageHandler.getDialog();
      if (localDialogObj) {
        dispatch(
          restoreDialog({
            oldDialog: localDialogObj.dialog,
            currentHistoryPage: localDialogObj.currentHistoryPage,
            totalHistoryPages: localDialogObj.totalHistoryPages,
          })
        );
        setCurrentPage(localDialogObj.currentHistoryPage);
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
      lastChatMessage.scrollIntoView();
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
        currentHistoryPage: currentHistoryPage,
        totalHistoryPages: totalHistoryPages,
      });
      dispatch(deleteFirstMessage());
      dispatch(allowTyping());
    }
  }, [data]);

  useEffect(() => {
    localStorageHandler.updateDialog({
      dialog,
      currentHistoryPage: currentHistoryPage,
      totalHistoryPages: totalHistoryPages,
    });
    const lastChatMessage = document.getElementById("chatBottom");
    if (currentPage < 2) {
      if (lastChatMessage) {
        lastChatMessage.scrollIntoView();
      }
    }
  }, [dialog]);

  useEffect(() => {
    const getMessagesHistory = async ({ soulId }: { soulId: string }) => {
      try {
        const response = await soulsService.getHistory({
          page: currentPage,
          soulid: soulId,
        });
        setIsHistoryLoading(false);

        if (response.status === 200) {
          let chathistory = response.message.chathistory;
          let maxHistoryPage = response.message.pageamount;
          dispatch(settotalHistoryPages({ maxPages: maxHistoryPage }));
          if (chathistory && chathistory.length > 0) {
            const message = getMessageArray({
              messages: chathistory,
            });
            dispatch(addHistory({ message, currentHistoryPage: currentPage }));
            localStorageHandler.updateDialog({
              dialog,
              currentHistoryPage: currentHistoryPage,
              totalHistoryPages: totalHistoryPages,
            });
            dispatch(allowTyping());
          } else {
            dispatch(allowTyping());
          }
          setIsHistoryLoading(false);
        }
      } catch (e) {
        console.error("Error: ", e);
        setIsHistoryLoading(false);
      }
    };
    if (isAuth && isHistoryLoading && currentPage <= totalHistoryPages) {
      getMessagesHistory({ soulId: soulId });
      localStorageHandler.updateDialog({
        dialog,
        currentHistoryPage: currentHistoryPage,
        totalHistoryPages: totalHistoryPages,
      });
    }
  }, [isHistoryLoading]);

  useEffect(() => {
    if (isAuth) {
      const boxElem = document.getElementById("chatBox");

      if (boxElem) {
        boxElem.addEventListener("scroll", scrollHandler);
      }

      return () => {
        if (boxElem) {
          boxElem.removeEventListener("scroll", scrollHandler);
        }
      };
    }
  }, []);

  const scrollHandler = (e: any) => {
    if (
      isAuth &&
      e.target.scrollHeight - e.target.scrollTop ===
        e.currentTarget.offsetHeight
    ) {
      setIsHistoryLoading(true);
      setCurrentPage((currentPage) => currentPage + 1);
      dispatch(changeCurrentHistoryPage({ page: currentPage }));
    }
  };

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
          <div id="chatBottom" />
          {dialog &&
            dialog.map((item, index) => {
              if (item[0] === "user") {
                return <UserMessage key={index} text={item[1]} />;
              } else if (item[0] === "soul" || item[0] === "soul intro") {
                return (
                  <IndividualMessage
                    soulsName={currentSoulsData?.name}
                    key={index}
                    avatarImg={avatarImg}
                    text={item[1]}
                  />
                );
              }
            })}
        </div>
      </StyledChatBox>
    );
  }
};

export default ChatBox;
