import styled from "styled-components";
import * as Arquitecta from "@typography/Arquitecta";
import * as Avenir from "@/styles/textStyles/Avenir";

interface ITitleProps {
  label: string;
  description: string;
  center: boolean;
}

const Title: React.FC<ITitleProps> = ({ label, description, center }) => {
  return (
    <StyledTitle center={center}>
      <Arquitecta.H1>{label}</Arquitecta.H1>
      <Avenir.BodyMedium>{description}</Avenir.BodyMedium>
    </StyledTitle>
  );
};

export const StyledTitle = styled.div<{ center: boolean }>`
  width: 100%;
  /* height: 100%; */

  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  text-align: ${(props) => (props.center ? "center" : "left")};
  letter-spacing: 0.4em;
  color: ${({ theme }) => theme.color.white};
  z-index: 10;

  h1 {
    margin-bottom: 8px;
    margin-top: 0px;
    text-transform: uppercase;
  }

  @media (max-width: 860px) {
    width: calc(100% - 30px);
    margin: ${(props) => (props.center ? "0px auto" : "0")};
    height: 71px;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.3em;

    h1 {
      font-size: 16px;
      line-height: 20.8px;
    }
  }
`;

export default Title;
