import styled from "styled-components";
import * as Avenir from "@typography/Avenir";
import { FC } from "react";

interface IChatFeedbackProps {
  type: "loading" | "error";
}

const ChatFeedback: FC<IChatFeedbackProps> = ({ type }) => {
  return (
    <StyledChatFeedback>
      <Avenir.H5>
        {type === "loading"
          ? "Loading..."
          : "Error! Reload page and try again!"}
      </Avenir.H5>
    </StyledChatFeedback>
  );
};

export const StyledChatFeedback = styled.div`
  width: 100%;
  padding: 32px;
  font-size: 22px;
  text-align: center;
  color: white;

  @media (max-width: 1000px) {
    h5 {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.1em;
    }
  }
`;

export default ChatFeedback;
