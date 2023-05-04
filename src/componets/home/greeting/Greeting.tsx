import Image from "next/image";
import {
  StyledBackgroundImageWrapper,
  StyledSection,
  StyledTitleWrapper,
} from "./Greeting.styles";
import Questions from "./questions/Questions";
import lightImage from "@images/all-individuals/light-1.png";
import conversationImage from "@images/all-individuals/conversation-1.png";
import Title from "@/componets/common/title/Title";

import firstImage from "@images/all-individuals/first.png";
import secondLImage from "@images/all-individuals/secondL.png";
import secondRImage from "@images/all-individuals/secondR.png";
import thirdLImage from "@images/all-individuals/thirdL.png";
import thirdRImage from "@images/all-individuals/thirdR.png";
import lineImage from "@images/all-individuals/line.png";

const Greeting: React.FC = () => {
  return (
    <StyledSection>
      <StyledBackgroundImageWrapper>
        {/* <Image
          alt="greeting-background.png"
          src={greetingBackgroundImage}
          fill={true}
          style={{
            objectFit: "contain",
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: "100%",
          }}
          // quality={100}
        /> */}
        <div id="conversation">
          <Image
            alt="conversation.png"
            src={conversationImage}
          />
        </div>
        <div id="light">
          <Image
            alt="light.png"
            src={lightImage}
            priority={true}
          />
        </div>
        <div id="first">
          <Image
            alt="first.png"
            src={firstImage}
            priority={true}
          />
        </div>
        <div id="secondL">
          <Image
            alt="secondL.png"
            src={secondLImage}
          />
        </div>
        <div id="secondR">
          <Image
            alt="secondR.png"
            src={secondRImage}
          />
        </div>
        <div id="thirdL">
          <Image
            alt="thirdL.png"
            src={thirdLImage}
          />
        </div>
        <div id="thirdR">
          <Image
            alt="thirdR.png"
            src={thirdRImage}
          />
        </div>
      </StyledBackgroundImageWrapper>
      <StyledTitleWrapper>
        <Title
          center={true}
          label={"ask important people important questions"}
          description={"Choose a question to quickly get a realistic response"}
        />
      </StyledTitleWrapper>
      <Questions />
    </StyledSection>
  );
};

export default Greeting;
