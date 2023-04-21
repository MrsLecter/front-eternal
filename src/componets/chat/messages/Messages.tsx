import styled from "styled-components";
import Answers from "./answers/Answers";
import MainAnswer from "./mainAnswer/MainAnswer";
import UserInput from "./userInput/UserInput";
import ChatBox from "./chatBox/ChatBox";

const Messages: React.FC = () => {
  return (
    <StyledMessages>
      <ChatBox />
      <MainAnswer />
      <UserInput />
    </StyledMessages>
  );
};

const StyledMessages = styled.div`
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: space-between;
`;

export default Messages;
