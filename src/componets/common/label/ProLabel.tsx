import { FC } from "react";
import styled from "styled-components";

const ProLabel: FC = () => {
  return (
    <StyledProLabel>
      <div>pro</div>
    </StyledProLabel>
  );
};

const StyledProLabel = styled.div`
  width: 66px;
  height: 42px;
  min-height: 42px;
  padding: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 16px;
  background-image: ${({ theme }) => theme.backgroundColorGradient};
  user-select: none;
  cursor: default;

  & > div {
    padding-top: 3px;
    padding-left: 4px;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-family: "Arquitecta Bold";
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.white};
    background-image: linear-gradient(
      90.83deg,
      #040410 11.84%,
      #0f0306 111.32%
    );
  }
`;

export default ProLabel;
