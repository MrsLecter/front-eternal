import { FC } from "react";
import styled from "styled-components";

interface ISoulsContainerProps {
  children: React.ReactNode;
}

const SoulsContainer: FC<ISoulsContainerProps> = ({ children }) => {
  return <StyledSoulsContainer>{children}</StyledSoulsContainer>;
};

const StyledSoulsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 32px;
  margin-bottom: 0px;
  padding: 2px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(258px, 24px));
  overflow-y: auto;

  div {
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 870px) {
    margin-top: 26px;
    margin-bottom: 44px;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(162px, 1fr));
  }
`;

export default SoulsContainer;
