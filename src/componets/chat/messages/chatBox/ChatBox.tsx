import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import React, {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import SoulMessage from "./elements/soulMessage/SoulMessage";
import InfiniteScroll from "react-infinite-scroller";
import { current } from "@reduxjs/toolkit";

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg, soulId }) => {
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMoreItems, setHasMoreItems] = useState<boolean>(true);
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(true);
  const positionRef = useRef() as RefObject<HTMLDivElement>;
  const currentSoulsData = getSoulsDataForId(soulId);
  const userId = localStorageHandler.getUserId();
  const lastChatMessage = document.getElementById("chatBottom");
  const chatBoxElem = document.getElementById("chatBox");
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
    setTotalHistoryPages,
    changeCurrentHistoryPage,
  } = internalSlice.actions;

  const executeScroll = () => {
    if (positionRef.current) {
      scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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
            currentHistoryPage: localDialogObj.currentHistoryPage,
            totalHistoryPages: localDialogObj.totalHistoryPages,
          })
        );
        setCurrentPage(localDialogObj.currentHistoryPage);
        console.log("page", localDialogObj!.currentHistoryPage);
      }
    }

    if (lastChatMessage && currentHistoryPage === 1) {
      lastChatMessage.scrollIntoView();
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
        totalHistoryPages: totalHistoryPages,
      });
      dispatch(deleteFirstMessage());
      dispatch(allowTyping());
    }
  }, [data]);

  useEffect(() => {
    localStorageHandler.updateDialog({
      dialog,
      totalHistoryPages: totalHistoryPages,
    });
  }, [dialog]);

  useEffect(() => {
    const getMessagesHistory = async ({ soulId }: { soulId: string }) => {
      try {
        const response = await soulsService.getHistory({
          page: currentPage,
          soulid: soulId,
        });
        console.log("***messageReasponse data", data);
        setIsHistoryLoading(false);
        if (response.status === 200) {
          let chathistory = response.message.chathistory;
          let maxHistoryPage = response.message.pageamount;
          dispatch(setTotalHistoryPages({ maxPages: maxHistoryPage }));
          if (chathistory && chathistory.length > 0) {
            const message = getMessageArray({
              messages: chathistory,
            });

            dispatch(
              addHistory({
                message,
                currentHistoryPage: currentHistoryPage,
              })
            );
            localStorageHandler.updateDialog({
              dialog,
              totalHistoryPages: totalHistoryPages,
            });
            // positionRef.current?.scrollIntoView();
            executeScroll();
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
        totalHistoryPages: totalHistoryPages,
      });
    }
  }, [isHistoryLoading]);

  useLayoutEffect(() => {
    positionRef.current?.scrollIntoView();
  }, [currentHistoryPage]);

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

  const scrollHandler = async (e: any) => {
    if (e.currentTarget.scrollTop === 0) {
      setCurrentPage((currentPage) => currentPage + 1);
      dispatch(changeCurrentHistoryPage({ page: currentPage }));
      setIsHistoryLoading(true);
      // chatBoxRef.current!.scrollTo(0, 4500);
    }
    // setCurrentPage((currentPage) => currentPage + 1);
    //   dispatch(changeCurrentHistoryPage({ page: currentPage }));
    // const chatBoxElem = document.getElementById("chatBox");
    // let memorisePosition = document.getElementById("position");

    // if (e.currentTarget.scrollTop === 0) {
    //   console.log("*******run scroll handler");
    //   if (memorisePosition) {
    //     console.log(
    //       "\nmemorisePosition",
    //       memorisePosition.clientTop,
    //       "\nmemorisePosition.offsetHeight",
    //       memorisePosition.offsetHeight,
    //       "\nmemorisePosition.offsetTop",
    //       memorisePosition.offsetTop,
    //       "\nmemorisePosition.scrollTop",
    //       memorisePosition.scrollTop,
    //       "\nmemorisePosition.parentElement?.scrollHeight",
    //       memorisePosition.parentElement?.scrollHeight,
    //       "\nmemorisePosition.parentElement?.scrollTop",
    //       memorisePosition.parentElement?.scrollTop,
    //       "\nmemorisePosition.parentElement?.offsetTop",
    //       memorisePosition.parentElement?.offsetTop,
    //       "\nmemorisePosition.parentElement?.offsetHeight",
    //       memorisePosition.parentElement?.offsetHeight
    //     );
    //   }
    // if (isAuth) {
    //   setIsHistoryLoading(true);
    //   setCurrentPage((currentPage) => currentPage + 1);
    //   dispatch(changeCurrentHistoryPage({ page: currentPage }));
    //   // chatBoxRef.current!.scrollTo(0, 250);
    // }

    // setHasMoreItems(page < totalHistoryPages);
    // const oldHeight = commentsRef.current && commentsRef.current.scrollHeight;
    // console.log("*********scrol*******", currentPage, totalHistoryPages);
    // if (commentsRef.current && commentsRef.current.scrollTop === 0) {
    //   goToPrevScroll(oldHeight ? oldHeight : 0);
    // }
    // if (isAuth) {
    //   setIsHistoryLoading(true);
    //   setCurrentPage((currentPage) => currentPage + 1);
    //   dispatch(changeCurrentHistoryPage({ page: currentPage }));
    // }
  };

  // const goToPrevScroll = (oldHeight = 0) => {
  //   if (commentsRef.current !== null) {
  //     commentsRef.current.scrollTop =
  //       commentsRef.current.scrollHeight -
  //       oldHeight +
  //       commentsRef.current.scrollTop;
  //   }
  // };

  if (!isChatCompleteLoading) {
    return (
      <StyledChatBox>
        <div>Loading...</div>
      </StyledChatBox>
    );
  } else {
    return (
      <StyledChatBox>
        <div id="chatBox" ref={chatBoxRef}>
          {dialog &&
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
                return <div key={index} id="position" ref={positionRef} />;
              }
            })}
          <div id="chatBottom" />
        </div>
        {/* <div id="chatBox" ref={chatBoxRef}>
          <InfiniteScroll
            pageStart={0}
            loadMore={scrollHandler}
            hasMore={currentPage <= totalHistoryPages}
            // loader={<div key={0}>Loading ...</div>}
            isReverse
            useWindow={false}
            threshold={150}
          >
            {dialog &&
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
                }
              })}
            <div id="chatBottom" />
          </InfiniteScroll>
        </div> */}
        {/* <div id="chatBox">
          {dialog &&
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
              }
            })}
          <div id="chatBottom" />
        </div> */}
      </StyledChatBox>
    );
  }
};

export default ChatBox;
