import styled from "styled-components";
import Image from "next/image";
import voiceToolIcon from "@icons/message-tool-voice.svg";
import shareToolIcon from "@icons/message-tool-share.svg";

//deelete
import avatar from "@images/delete-avatar-individual.png";

const userMessage = "Lorem ipsum dolor sit ";

interface IChatBoxProps {
  children: React.ReactNode;
}

const ChatBox: React.FC = () => {
  return (
    <StyledChatBox>
      <UserMessage text={userMessage} />
      <IndividualMessage text={"text1"} src={""} />
      <IndividualMessage text={"text1"} src={""} />
    </StyledChatBox>
  );
};

export default ChatBox;

const StyledChatBox = styled.div`
  position: relative;
  width: 100%;
  max-height: 64vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

interface IUserMessageProps {
  text: string;
}

const UserMessage: React.FC<IUserMessageProps> = ({ text }) => {
  return (
    <StyledUserMessageContainer>
      <div>{text}</div>
    </StyledUserMessageContainer>
  );
};

const StyledUserMessageContainer = styled.div`
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;

  div {
    max-width: 100%;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.white};
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #0a0806;
  }
`;

interface IIndividualMessageProps {
  text: string;
  src: string;
}

const IndividualMessage: React.FC<IIndividualMessageProps> = ({
  text,
  src,
}) => {
  return (
    <StyledIndividualMessageBox>
      <div>
        <Image
          width={60}
          height={60}
          alt="individual-avatar.png"
          src={avatar}
          quality={100}
        />
      </div>
      <StyledIndividualMessage>
        <div>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta rerum vel dolorem earum corrupti ducimus, quam pariatur temporibus animi sequi ut eum. Atque, reiciendis. Laboriosam, repudiandae. Error, rerum accusantium."
          }
        </div>
        <div>
          <button>
            <Image
              width={24}
              height={24}
              alt="message-tools.png"
              src={voiceToolIcon}
            />
          </button>
          <button>
            <Image
              width={24}
              height={24}
              alt="message-tools.png"
              src={shareToolIcon}
            />
          </button>
        </div>
      </StyledIndividualMessage>
    </StyledIndividualMessageBox>
  );
};

const StyledIndividualMessageBox = styled.div`
  position: relative;
  width: 100%;
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
  max-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: auto;
  position: relative;
  width: 643px;
  padding: 42px 115px 42px 48px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #e4e4e4;
  background: rgba(255, 255, 255, 0.1);

  & > div:first-child {
    /* margin-right: 72px; */
  }

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
  }
`;
