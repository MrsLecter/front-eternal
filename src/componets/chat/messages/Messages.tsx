import styled from "styled-components";
import Answers from "./answers/Answers";
import UserInput from "./userInput/UserInput";
import ChatBox from "./chatBox/ChatBox";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import { getSoulsDataForId, isSubscriptionExpired } from "@/utils/functions";
import localStorageHandler from "@/utils/local-storage-hendler";
import soulsService from "@/api/souls-service";
import Pusher from "pusher-js";
import { PUSHER_DATA } from "@/constants/common";

interface IMessagesProps {
  avatarImg: string | undefined;
  soulId: string;
}

const Messages: React.FC<IMessagesProps> = ({ avatarImg, soulId }) => {
  console.log(
    "*********refresh messages*********",
    new Date().getMilliseconds()
  );

  return (
    <StyledMessages>
      <ChatBox avatarImg={avatarImg} soulId={soulId} />
      <UserInput soulId={soulId} />
    </StyledMessages>
  );
};

const StyledMessages = styled.div`
  padding-left: 60px;
  position: relative;
  min-width: calc(100% - 60px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: space-between;
  background-color: transparent;
  z-index: 10;

  @media (max-width: 1600px) {
    min-height: calc(100% - 80px);
    min-width: calc(100% - 32px);
    padding-left: 16px;
  }

  @media (max-width: 1250px) {
    margin-top: 0px;
    min-height: 307px;
    min-width: calc(100% - 32px);
    padding-left: 16px;
  }
`;

export default Messages;
