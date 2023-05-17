import styled from "styled-components";
import Image from "next/image";
import voiceToolIcon from "@icons/message-tool-voice.svg";
import shareToolIcon from "@icons/message-tool-share.svg";
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
import soulsService from "@/api/souls-service";

import Pusher from "pusher-js";
import { PUSHER_DATA, SITE_URL } from "@/constants/common";

interface IChatBoxProps {
  avatarImg: string | undefined;
  soulId: string;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg, soulId }) => {
  console.log("********refresh CHAT box*************");

  // const [dialog, expandDialog] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLDivElement>(null);

  const {
    deleteFirstMessage,
    addToDialog,
    deleteDialog,
    deleteLastDialogMessage,
  } = internalSlice.actions;
  const { isUserMessageFirst, firstMessage, dialog } = useAppSelector(
    (store) => store.internalReducer
  );

  const currentSoulsData = getSoulsDataForId(soulId);
  const userId = localStorageHandler.getUserId();
  console.log(
    ">>>input data",
    "soul id:",
    soulId,
    "userId: ",
    userId,
    "firstMessage:",
    firstMessage,
    "isUserMessageFirst",
    isUserMessageFirst
  );

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  useEffect(() => {
    if (firstMessage && dialog.length === 0) {
      sendMessageToDialog({ questionText: firstMessage, soulId });
      if (isUserMessageFirst) {
        console.log(
          "****useeffect add first message to dialog where: dialog",
          new Date().getMilliseconds(),
          dialog,
          "first message",
          firstMessage
        );
        // dispatch(deleteFirstMessage());
        dispatch(addToDialog({ message: firstMessage }));
        dispatch(addToDialog({ message: "Thinking..." }));
        if (messageRef.current) {
          messageRef.current.scrollIntoView();
        }

        // expandDialog((currentDialog) => [...currentDialog, firstMessage]);
        dispatch(deleteFirstMessage());
      } else {
        dispatch(addToDialog({ message: "Thinking..." }));
      }
    }
  }, [firstMessage]);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusherClient = new Pusher(PUSHER_DATA.Secret, {
      cluster: "eu",
    });

    const pusherChannel = pusherClient.subscribe(PUSHER_DATA.ChatId + userId);
    pusherChannel.bind(PUSHER_DATA.EventName, (data: any) => {
      console.log(">>>new messages from pusher", data);
      console.log(
        "****expand dialog where: dialog: ",
        new Date().getMilliseconds(),
        dialog,
        "message from pusher: ",
        new Date().getMilliseconds(),
        data.answer
      );
      dispatch(deleteLastDialogMessage());
      dispatch(addToDialog({ message: data.answer }));
      messageRef.current?.scrollIntoView();
      // expandDialog((currentDialog) => [...currentDialog, data.answer]);
    });
    console.log("channel", pusherChannel);

    return () => {
      pusherClient.unsubscribe(PUSHER_DATA.ChatId);
      pusherClient.unbind(PUSHER_DATA.EventName);
      // expandDialog([]);
      dispatch(deleteDialog());
    };
  }, []);

  console.log("isUserFirst:", isUserMessageFirst, "dialog:", dialog);
  return (
    <StyledChatBox>
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
              <UserMessage key={index} setVisibleRef={messageRef} text={item} />
            );
          } else {
            return <UserMessage key={index} text={item} />;
          }
        })}
    </StyledChatBox>
  );
};

export default ChatBox;

const StyledChatBox = styled.div`
  position: absolute;
  top: 0px;
  width: calc(90% - 5.27%);
  margin-top: 54px;
  max-height: calc(100% - 200px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;

  @media (min-width: 1640px) {
    margin-right: 40px;
  }

  @media (max-width: 1640px) {
    margin-right: 40px;
  }

  @media (max-width: 1250px) {
    margin-top: 0px;
    margin-right: 16px;
    max-height: calc(100% - 92px);
    background-color: #0a0907;
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
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;

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
          {/* <button>
            <Image
              width={24}
              height={24}
              alt="message-tools.png"
              src={voiceToolIcon}
            />
          </button> */}
          <button onClick={handleShareMessage}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66675 12V17.3333C6.66675 17.687 6.80722 18.0261 7.05727 18.2761C7.30732 18.5262 7.64646 18.6667 8.00008 18.6667H16.0001C16.3537 18.6667 16.6928 18.5262 16.9429 18.2761C17.1929 18.0261 17.3334 17.687 17.3334 17.3333V12"
                // stroke="#9999A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6666 7.99992L11.9999 5.33325L9.33325 7.99992"
                // stroke="#9999A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.33325V13.9999"
                // stroke="#9999A6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  & > div:first-child {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 16px;
  }
`;

const StyledIndividualMessage = styled.div`
  margin-bottom: 24px;
  /* max-height: 900px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: auto;
  position: relative;
  width: 100%;
  padding: 42px 115px 42px 48px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #e4e4e4;
  background: rgba(255, 255, 255, 0.1);

  & > div:last-child {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      width: 24px;
      height: 24px;
      background: transparent;
      border: none;
      cursor: pointer;
    }

    svg {
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
