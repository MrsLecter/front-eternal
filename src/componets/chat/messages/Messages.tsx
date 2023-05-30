import styled from "styled-components";
import UserInput from "./userInput/UserInput";
import ChatBox from "./chatBox/ChatBox";

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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  background-color: transparent;
  z-index: 10;

  @media (max-width: 1600px) {
    min-height: calc(100% - 80px);
    min-width: calc(100% - 32px);
    padding-left: 16px;
  }

  @media (max-width: 1250px) {
    justify-content: flex-end;
    align-items: start;
    padding-bottom: 0px;
    min-width: calc(100% - 505px);
    padding-left: 16px;
  }

  @media (max-width: 870px) {
    margin-top: 0px;
    padding-top:0px;
    height:100%;
    min-height: 500px;
  }
`;

export default Messages;
