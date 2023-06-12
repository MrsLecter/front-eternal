import { StyledUserMessageContainer } from "./UserMessage.styles";
import * as Avenir from "@typography/Avenir";

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

export default UserMessage;
