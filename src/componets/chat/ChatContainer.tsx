import styled from "styled-components";
import Individual from "./individual/Individual";
import Messages from "./messages/Messages";

interface IChatContainerProps {
  isSoulsModalOpen: boolean;
  toggleSoulsModal: (isOpen: boolean) => void;
}

const ChatContainer: React.FC<IChatContainerProps> = ({
  isSoulsModalOpen,
  toggleSoulsModal,
}) => {
  return (
    <StyledChatContainer>
      <div>
        <Individual
          isSoulsModalOpen={isSoulsModalOpen}
          toggleSoulsModal={toggleSoulsModal}
        />
      </div>
      <div>
        <Messages />
      </div>
    </StyledChatContainer>
  );
};

const StyledChatContainer = styled.main`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & > div {
    width: 50%;
    height: 85vh;
    /* min-height: 95vh; */
  }

  @media (max-width: 375px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

export default ChatContainer;
