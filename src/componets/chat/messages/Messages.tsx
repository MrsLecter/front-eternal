import styled from "styled-components";
import Answers from "./answers/Answers";
import UserInput from "./userInput/UserInput";
import ChatBox from "./chatBox/ChatBox";

interface IMessagesProps {
  avatarImg: string | undefined;
}

const Messages: React.FC<IMessagesProps> = ({ avatarImg }) => {
  return (
    <StyledMessages>
      <ChatBox avatarImg={avatarImg} />
      <UserInput />
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
  z-index: 3;

  @media (min-width: 1600px) {
    /* min-height: calc(1405px - 80px); */
  }

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
