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

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg, soulId }) => {
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLDivElement>(null);
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const observer = useRef<any>();

  const {
    addHistory,
    deleteFirstMessage,
    addToDialog,
    deleteLastDialogMessage,
    disallowTyping,
    allowTyping,
  } = internalSlice.actions;

  const { userQuestionType, firstMessage, dialog } = useAppSelector(
    (store) => store.internalReducer
  );
  const { questionsAmount } = useAppSelector((store) => store.userReducer);

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
  const [isHaveHistory, toggleIsHaveHistory] = useState<string>("unknown");

  const lastMessageRef = useCallback((element: any) => {
    if (loadingMessage) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    });
    if (element) observer.current.observe(element);
  }, []);

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
          if (chathistory.length > 0) {
            toggleIsHaveHistory("yes");
            const message = getMessageArray({
              messages: response.message.chathistory,
            });
            dispatch(addHistory({ message }));
          } else {
            toggleIsHaveHistory("no");
          }
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    };
    if (isAuth) {
      getMessagesHistory({ page: currentPage, soulId });
    }
  }, [currentPage]);

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
      dispatch(disallowTyping());

      if (userQuestionType !== "intro") {
        dispatch(disallowTyping());
      }

      if (userQuestionType === "intro" && dialog.length > 0) {
        const userMessageDelay = setTimeout(() => {
          dispatch(
            addToDialog({
              message: getConstructedMessage({
                sender: "soul intro",
                message: "Thinking...",
              }),
            })
          );
          dispatch(disallowTyping());
        }, 100);
      }

      const soulMessageDelay = setTimeout(() => {
        dispatch(
          addToDialog({
            message: getConstructedMessage({
              sender: "soul intro",
              message: Object.values(data!.souls[0])[1],
            }),
          })
        );

        dispatch(allowTyping());
        dispatch(deleteFirstMessage());
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <StyledChatBox>
      <div>
        {dialog &&
          dialog.map((item, index) => {
            if (item[0] === "user") {
              return (
                <UserMessage
                  lastMessageRef={index === 0 ? lastMessageRef : undefined}
                  key={index}
                  text={item[1]}
                />
              );
            } else if (item[0] === "soul" || item[0] === "soul intro") {
              return (
                <IndividualMessage
                  lastMessageRef={index === 0 ? lastMessageRef : undefined}
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
