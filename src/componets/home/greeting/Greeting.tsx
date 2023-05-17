import { StyledSection, StyledTitleWrapper } from "./Greeting.styles";
import Questions from "./questions/Questions";
import Title from "@/componets/common/title/Title";
import SoulsIntro from "@/componets/common/soulsIntro/SoulsIntro";

interface IGreetingProps {
  setQuestionHandler: (id: number) => void;
}

const Greeting: React.FC<IGreetingProps> = ({ setQuestionHandler }) => {
  return (
    <StyledSection>
      <StyledTitleWrapper>
        <Title
          center={true}
          label={"ask important people important questions"}
          description={"Choose a question to quickly get a realistic response"}
        />
      </StyledTitleWrapper>
      <Questions setQuestionHandler={setQuestionHandler} />
      <SoulsIntro isBlured={false} />
    </StyledSection>
  );
};

export default Greeting;
