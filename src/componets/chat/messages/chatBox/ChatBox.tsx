import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useCallback, useEffect, useRef, useState } from "react";
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
import PageLoader from "next/dist/client/page-loader";

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg, soulId }) => {
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const observer = useRef<any>();

  const {
    addHistory,
    deleteFirstMessage,
    addToDialog,
    disallowTyping,
    allowTyping,
    setTemp,
    deleteTemp,
    deleteLastDialogMessage,
    restoreDialog,
  } = internalSlice.actions;

  const { userQuestionType, firstMessage, dialog, temp } = useAppSelector(
    (store) => store.internalReducer
  );

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

  const lastMessageRef = useCallback((element: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    });
    if (element) observer.current.observe(element);
  }, []);

  useEffect(() => {
    if (dialog.length === 0) {
      const localDialogArr = localStorageHandler.getDialog();
      console.warn("empty dialog", localDialogArr);
      dispatch(restoreDialog({ oldDialog: localDialogArr }));
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
  }, [firstMessage]);

  useEffect(() => {
    if (firstMessage && data && data.souls[0]) {
      dispatch(setTemp({ message: Object.values(data!.souls[0])[1] }));
      dispatch(disallowTyping());

      if (userQuestionType !== "intro" || !isAuth) {
        const userMessageDelay = setTimeout(() => {
          dispatch(
            addToDialog({
              message: getConstructedMessage({
                sender: "soul intro",
                message: "Thinking...",
              }),
            })
          );
          localStorageHandler.updateDialog(dialog);
          dispatch(disallowTyping());
        }, 100);

        const soulMessageDelay = setTimeout(() => {
          dispatch(deleteLastDialogMessage());
          dispatch(
            addToDialog({
              message: getConstructedMessage({
                sender: "soul intro",
                message: Object.values(data!.souls[0])[1],
              }),
            })
          );
          localStorageHandler.updateDialog(dialog);
          dispatch(deleteFirstMessage());
          dispatch(allowTyping());
        }, 1000);
      }
    }
  }, [data]);

  useEffect(() => {
    const getMessagesHistory = async ({
      page,
      soulId,
    }: {
      page: number;
      soulId: string;
    }) => {
      try {
        const response = await soulsService.getHistory({
          page: currentPage,
          soulid: soulId,
        });
        if (response.status === 200) {
          let chathistory = response.message.chathistory;
          if (!!chathistory && chathistory.length > 0) {
            if (firstMessage) {
              dispatch(deleteFirstMessage());
            }
            const message = getMessageArray({
              messages: response.message.chathistory,
            });
            dispatch(addHistory({ message }));
            localStorageHandler.updateDialog(dialog);
            dispatch(allowTyping());
          } else {
            if (temp && userQuestionType === "intro" && dialog.length === 0) {
              dispatch(
                addToDialog({
                  message: getConstructedMessage({
                    sender: "soul intro",
                    message: temp,
                  }),
                })
              );
              localStorageHandler.updateDialog(dialog);
              dispatch(deleteTemp());
            }
          }
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    if (isAuth && currentPage > 0) {
      getMessagesHistory({ page: currentPage, soulId: soulId });
    }
  }, [currentPage]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    localStorageHandler.updateDialog(dialog);
  }, [dialog]);

  return (
    <StyledChatBox>
      <div>
        {dialog &&
          dialog.map((item, index) => {
            if (item[0] === "user") {
              return (
                <UserMessage
                  lastMessageRef={index === 1 ? lastMessageRef : undefined}
                  setVisibleRef={undefined}
                  key={index}
                  text={item[1]}
                />
              );
            } else if (item[0] === "soul" || item[0] === "soul intro") {
              return (
                <IndividualMessage
                  lastMessageRef={index === 1 ? lastMessageRef : undefined}
                  setVisibleRef={
                    index === dialog.length - 1 ? messageRef : undefined
                  }
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
};

export default ChatBox;
