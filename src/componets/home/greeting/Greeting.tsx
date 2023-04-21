import Image from "next/image";
import Title from "../../../common/title/Title";
import {
  StyledBackgroundImageWrapper,
  StyledSection,
  StyledTitleWrapper,
  StyledIndividualsContainer,
  StyledLayer,
} from "./Greeting.styles";
import Questions from "./questions/Questions";
import Header from "../../../common/header/Header";

import greetingBackgroundImage from "@images/greeting-background.webp";
import Individuals from "./individuals/Individuals";

interface IGreetingProps {
  modalHendler: any;
  isMenuOpen: boolean;
}

const Greeting: React.FC<IGreetingProps> = ({ modalHendler, isMenuOpen }) => {
  return (
    <StyledSection>
      <Header showModalMenu={modalHendler} isMenuOpen={isMenuOpen} />
      <StyledTitleWrapper>
        <Title
          center={true}
          label={"ask important people important questions"}
          description={"Choose a question to quickly get a realistic response"}
        />
      </StyledTitleWrapper>
      <Questions />
      <Individuals />
      <StyledBackgroundImageWrapper>
        <Image
          alt="greeting-background.webp"
          src={greetingBackgroundImage}
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </StyledBackgroundImageWrapper>
    </StyledSection>
  );
};

export default Greeting;
