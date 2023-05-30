import { StyledSection, StyledTitleWrapper } from "./Greeting.styles";
import Questions from "./questions/Questions";
import Title from "@/componets/common/title/Title";
import SoulsIntro from "@/componets/common/soulsIntro/SoulsIntro";

const Greeting: React.FC = () => {
  return (
    <StyledSection>
      <StyledTitleWrapper>
        <Title
          center={true}
          label={"ask important people important questions"}
          description={"Choose a question to quickly get a realistic response"}
        />
      </StyledTitleWrapper>
      <Questions />
      <SoulsIntro isBlured={false} />
    </StyledSection>
  );
};

export default Greeting;
