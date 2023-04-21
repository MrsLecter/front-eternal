import styled from "styled-components";

interface ITitleProps {
  label: string;
  description: string;
  center: boolean;
}

const Title: React.FC<ITitleProps> = ({ label, description, center }) => {
  return (
    <StyledTitle center={center}>
      {label}
      <p>{description}</p>
    </StyledTitle>
  );
};

export const StyledTitle = styled.div<{ center: boolean }>`
  width: 100%;
  /* height: 100%; */
  text-transform: uppercase;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  text-align: ${(props) => (props.center ? "center" : "left")};
  letter-spacing: 0.4em;
  color: ${({ theme }) => theme.color.white};
  z-index: 2;

  p {
    margin-top: 8px;
    text-transform: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.01em;
    opacity: 0.7;
  }

  @media (max-width: 375px) {
    width: calc(100% - 32px);
    margin: ${(props) => (props.center ? "0px auto" : "0")};
    height: 71px;
    font-size: 16px;
    line-height: 20.8px;

    p {
      height: 21px;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default Title;
