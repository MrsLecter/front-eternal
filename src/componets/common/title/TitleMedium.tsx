import { FC } from "react";
import styled from "styled-components";

interface ITileMediumProps {
  label: string;
  description: string;
}

const TileMedium: FC<ITileMediumProps> = ({ label, description }) => {
  return (
    <StyledTileMedium>
      <p>{label}</p>
      <p>{description}</p>
    </StyledTileMedium>
  );
};

export const StyledTileMedium = styled.div`
  width: 100%;
  letter-spacing: -1%;
  margin-bottom: 32px;
  color: white;
  text-align: center;
  z-index: 3;

  p:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 4px;
  }

  p:last-child {
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 870px) {
    width: 343px;
    margin-bottom: 16px;
    margin-top: 60px;

    p:first-child {
      font-size: 24px;
      line-height: 36px;
    }

    p:last-child {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default TileMedium;
