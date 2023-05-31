import styled from "styled-components";
import Image from "next/image";
import * as Avenir from "@typography/Avenir";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { RefObject, useEffect, useRef, useState } from "react";
import { internalSlice } from "@/store/reducers/internalSlice";
import {
  getCapitalizeName,
  getSoulsDataForId,
  sendMessageToDialog,
} from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import { useLazyQuery } from "@apollo/client";

import Pusher from "pusher-js";
import { PUSHER_DATA, SITE_URL } from "@/constants/common";
import { getFreeAnswerQueryString } from "@/utils/graphql-query-string";

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg, soulId }) => {
  const { disallowTyping, allowTyping } = internalSlice.actions;
  const isAuth = localStorageHandler.getAccessToken();
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLDivElement>(null);
  const {
    deleteFirstMessage,
    addToDialog,
    deleteDialog,
    deleteLastDialogMessage,
  } = internalSlice.actions;
  const { userQuestionType, isUserMessageFirst, firstMessage, dialog } =
    useAppSelector((store) => store.internalReducer);

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

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  useEffect(() => {
    if (!isAuth && firstMessage) {
      fetchQuery({
        variables: {
          input: parseInt(soulId),
        },
      });
    } else if (isAuth && firstMessage) {
      sendMessageToDialog({ questionText: firstMessage, soulId });
    }
  }, [firstMessage]);

  useEffect(() => {
    if (!isAuth && data && data.souls[0]) {
      dispatch(disallowTyping());

      if (userQuestionType !== "intro") {
        const userMessageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: firstMessage }));
          dispatch(disallowTyping());
        }, 600);
      }
      if (userQuestionType === "intro" && dialog.length > 0) {
        const userMessageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: "Thinking..." }));
          dispatch(disallowTyping());
        }, 600);
      }

      const soulMessageDelay = setTimeout(() => {
        dispatch(addToDialog({ message: Object.values(data!.souls[0])[1] }));
        dispatch(allowTyping());
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    if (isAuth) {
      sendMessageToDialog({ questionText: firstMessage, soulId });
      dispatch(disallowTyping());

      if (userQuestionType !== "intro") {
        const userMessageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: firstMessage }));
          dispatch(deleteFirstMessage());
        }, 600);
        const messageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: "Thinking..." }));
          if (messageRef.current) {
            messageRef.current.scrollIntoView();
          }
        }, 1000);
      }
      if (userQuestionType === "intro") {
        const messageDelay = setTimeout(() => {
          dispatch(addToDialog({ message: "Thinking..." }));
          dispatch(deleteFirstMessage());
        }, 600);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      Pusher.logToConsole = true;
      const pusherClient = new Pusher(PUSHER_DATA.Secret, {
        cluster: "eu",
      });
      const pusherChannel = pusherClient.subscribe(PUSHER_DATA.ChatId + userId);
      pusherChannel.bind(PUSHER_DATA.EventName, (data: any) => {
        dispatch(disallowTyping());
        dispatch(deleteLastDialogMessage());
        dispatch(addToDialog({ message: data.answer }));
        dispatch(allowTyping());
        if (messageRef.current) {
          messageRef.current?.scrollIntoView();
        }
      });

      return () => {
        pusherClient.unsubscribe(PUSHER_DATA.ChatId);
        pusherClient.unbind(PUSHER_DATA.EventName);

        dispatch(deleteDialog());
        dispatch(disallowTyping());
      };
    } else {
      fetchQuery({
        variables: {
          input: parseInt(soulId),
        },
      });
    }
  }, []);

  return (
    <StyledChatBox>
      <div>
        {isUserMessageFirst &&
          dialog &&
          dialog.map((item, index) => {
            if (dialog.length === 1) {
              return <UserMessage key={index} text={item} />;
            } else if (index % 2 === 0) {
              return <UserMessage key={index} text={item} />;
            } else {
              return (
                <IndividualMessage
                  soulsName={currentSoulsData?.name}
                  key={index}
                  avatarImg={avatarImg}
                  text={item}
                />
              );
            }
          })}
        {!isUserMessageFirst &&
          dialog &&
          dialog.map((item, index) => {
            if (dialog.length === 1) {
              return (
                <IndividualMessage
                  soulsName={currentSoulsData?.name}
                  key={index}
                  avatarImg={avatarImg}
                  text={item}
                />
              );
            } else if (index % 2 === 0 && index !== dialog.length - 1) {
              return (
                <IndividualMessage
                  soulsName={currentSoulsData?.name}
                  key={index}
                  avatarImg={avatarImg}
                  text={item}
                />
              );
            } else if (index % 2 === 0 && index === dialog.length - 1) {
              return (
                <IndividualMessage
                  soulsName={currentSoulsData?.name}
                  setVisibleRef={messageRef}
                  key={index}
                  avatarImg={avatarImg}
                  text={item}
                />
              );
            } else if (index === dialog.length - 1) {
              return (
                <UserMessage
                  key={index}
                  setVisibleRef={messageRef}
                  text={item}
                />
              );
            } else {
              return <UserMessage key={index} text={item} />;
            }
          })}
      </div>
    </StyledChatBox>
  );
};

export default ChatBox;

const StyledChatBox = styled.div`
  position: absolute;
  bottom: 130px;
  width: calc(94% - 5.27%);
  min-width: calc(94% - 5.27%);
  margin-top: 54px;
  height: calc(100% - 184px);
  max-height: calc(100% - 184px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: auto;

  & > div {
    position: relative;
    min-width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  @media (min-width: 1640px) {
    margin-right: 40px;
  }

  @media (max-width: 1250px) {
    margin-top: 0px;
    margin-right: 12px;
    max-height: 100%;

    /* background-color: #0a0907; */
    /* background-color: red; */
  }

  @media (max-width: 870px) {
    min-width: 343px;
    height: 100%;
    min-height: 307px;
    max-height: 100%;

    bottom: 90px;
    margin-right: 0px;
    width: 88vw;
  }
`;

interface IUserMessageProps {
  text: string;
  setVisibleRef?: RefObject<HTMLDivElement>;
}

const UserMessage: React.FC<IUserMessageProps> = ({ text, setVisibleRef }) => {
  return (
    <StyledUserMessageContainer ref={setVisibleRef}>
      <div>
        <Avenir.H5>{text}</Avenir.H5>
      </div>
    </StyledUserMessageContainer>
  );
};

const StyledUserMessageContainer = styled.div`
  margin-bottom: 24px;
  margin-left: 20px;
  margin-right: 0px;
  right: 0;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  animation: messageAppeating 0.2s ease-in-out;

  @keyframes messageAppeating {
    from {
      transform: translateX(-100px) scale(0.2);
      opacity: 0.6;
    }
    to {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }

  h5 {
    margin: 0px;
  }

  div {
    max-width: 100%;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.white};
    color: #0a0806;
  }

  @media (max-width: 1000px) {
    h5 {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.1em;
    }
  }
`;

interface IIndividualMessageProps {
  text: string;
  avatarImg: string | undefined;
  setVisibleRef?: RefObject<HTMLDivElement>;
  soulsName?: string;
}

const IndividualMessage: React.FC<IIndividualMessageProps> = ({
  text,
  avatarImg,
  setVisibleRef,
  soulsName,
}) => {
  const handleShareMessage = () => {
    navigator.clipboard.writeText(
      `See what ${getCapitalizeName(
        soulsName || "not defined"
      )} told me: "${text}". See more : ${SITE_URL}`
    );
  };
  return (
    <StyledIndividualMessageBox ref={setVisibleRef}>
      <div>
        <Image
          width={60}
          height={62}
          alt="individual-avatar.png"
          src={avatarImg!}
          quality={100}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <StyledIndividualMessage>
        <div>
          <Avenir.H5>{text}</Avenir.H5>
        </div>
        <div>
          <button onClick={handleShareMessage}>
            <figure>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66675 12V17.3333C6.66675 17.687 6.80722 18.0261 7.05727 18.2761C7.30732 18.5262 7.64646 18.6667 8.00008 18.6667H16.0001C16.3537 18.6667 16.6928 18.5262 16.9429 18.2761C17.1929 18.0261 17.3334 17.687 17.3334 17.3333V12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 7.99992L11.9999 5.33325L9.33325 7.99992"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5.33325V13.9999"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </figure>
          </button>
        </div>
      </StyledIndividualMessage>
    </StyledIndividualMessageBox>
  );
};

const StyledIndividualMessageBox = styled.div`
  position: relative;
  width: calc(100% - 55px);
  min-width: calc(100% - 55px);
  margin-right: 40px;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  & > div:first-child {
    width: 60px;
    height: 60px;
    min-height: 60px;
    border-radius: 50%;
    margin-right: 16px;
  }

  button {
    padding: 15px;
    svg {
      stroke: white;
    }
  }

  button:hover {
    svg {
      stroke: ${({ theme }) => theme.color.pink};
    }
  }
`;

const StyledIndividualMessage = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: auto;
  position: relative;
  width: inherit;
  padding: 42px 115px 42px 48px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #e4e4e4;
  background: rgba(255, 255, 255, 0.1);
  animation: messageAppeating 0.2s ease-in-out;

  @keyframes messageAppeating {
    from {
      transform: translateX(-100px) scale(0.2);
      opacity: 0.6;
    }
    to {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }

  & > div:last-child {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 39px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      width: 39px;
      height: 39px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;

      figure {
        width: 24px;
        height: 24px;
      }
    }

    button:focus {
      svg {
        stroke: ${({ theme }) => theme.color.pink};
      }
    }

    svg {
      width: 24px;
      height: 24px;
      stroke: white;
      cursor: pointer;
    }

    svg:hover {
      stroke: ${({ theme }) => theme.color.pink};
    }
  }

  @media (max-width: 1000px) {
    padding: 24px;
    h5 {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }
`;
