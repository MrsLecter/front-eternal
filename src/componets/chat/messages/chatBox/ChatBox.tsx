import styled from "styled-components";
import Image from "next/image";
import voiceToolIcon from "@icons/message-tool-voice.svg";
import shareToolIcon from "@icons/message-tool-share.svg";
import * as Avenir from "@typography/Avenir";

//deelete
// import avatar from "@images/delete-avatar-individual.png";

const userMessage = "Lorem ipsum dolor sit ";
const userMessage2 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro cupiditate aliquid tenetur magni, harum iusto ipsa rerum voluptatem quae autem ducimus fugiat repudiandae dolores hic molestiae asperiores atque quam. Autem!";
const userMessage3 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam unde neque, totam, id labore natus dolores eius maxime harum ipsam aliquid eveniet voluptates aspernatur placeat tenetur culpa dicta? A! Architecto, odio esse eligendi nesciunt illum atque. Distinctio aliquam magnam fugit, iste nihil cupiditate, aspernatur esse ex maiores eius porro doloribus doloremque ipsa quod temporibus nisi quae laudantium rem earum.";

interface IChatBoxProps {
  avatarImg: string | undefined;
}

const ChatBox: React.FC<IChatBoxProps> = ({ avatarImg }) => {
  return (
    <StyledChatBox>
      <UserMessage text={userMessage} />
      <IndividualMessage avatarImg={avatarImg} text={userMessage} />
      <UserMessage text={userMessage2} />
      <IndividualMessage avatarImg={avatarImg} text={userMessage3} />
      <UserMessage text={userMessage} />
      <IndividualMessage avatarImg={avatarImg} text={userMessage2} />
      <UserMessage text={userMessage3} />
      <IndividualMessage avatarImg={avatarImg} text={userMessage3} />
      <UserMessage text={userMessage2} />
      <IndividualMessage avatarImg={avatarImg} text={userMessage3} />
      <UserMessage text={userMessage} />
      <IndividualMessage avatarImg={avatarImg} text={userMessage2} />
    </StyledChatBox>
  );
};

export default ChatBox;

const StyledChatBox = styled.div`
  position: absolute;
  top: 0px;
  /* width: calc(90% - 5.27%); */
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
}

const UserMessage: React.FC<IUserMessageProps> = ({ text }) => {
  return (
    <StyledUserMessageContainer>
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
}

const IndividualMessage: React.FC<IIndividualMessageProps> = ({
  text,
  avatarImg,
}) => {
  return (
    <StyledIndividualMessageBox>
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
  width: calc(100% - 55px);
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
