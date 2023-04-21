import {
  StyledMainAnswer,
  StyledMainAnswerContainer,
} from "./MainAnswer.styles";

interface IMainAnswer {
  text?: string;
}

const MainAnswer: React.FC<IMainAnswer> = ({ text }) => {
  return (
    <StyledMainAnswer>
      <StyledMainAnswerContainer>
        <div />
        <div />
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            eligendi impedit consequatur expedita qui perspiciatis? Error
            repudiandae aut sed soluta minima, consequatur delectus accusantium
            ipsa blanditiis temporibus voluptates perspiciatis eum.
          </div>
        </div>
      </StyledMainAnswerContainer>
    </StyledMainAnswer>
  );
};

export default MainAnswer;
