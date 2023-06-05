import { StyledUserMessageContainer } from "./UserMessage.styles";
import * as Avenir from "@typography/Avenir";

interface IUserMessageProps {
  text: string;
  setVisibleRef?: React.RefObject<HTMLDivElement>;
  lastMessageRef?: (element: any) => void;
}

const UserMessage: React.FC<IUserMessageProps> = ({
  text,
  setVisibleRef,
  lastMessageRef,
}) => {
  return (
    <StyledUserMessageContainer ref={setVisibleRef}>
      <div ref={lastMessageRef}>
        <Avenir.H5>{text}</Avenir.H5>
      </div>
    </StyledUserMessageContainer>
  );
};

export default UserMessage;
