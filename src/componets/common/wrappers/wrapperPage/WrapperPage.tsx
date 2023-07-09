import { FC } from "react";
import { StyledBackground, StyledMainContent } from "./WrapperPage.styles";
import { IWrapperPageProps } from "./WrapperPage.types";

const WrapperPage: FC<IWrapperPageProps> = ({ children, color }) => {
  return (
    <StyledBackground background={color}>
      <StyledMainContent>{children}</StyledMainContent>
    </StyledBackground>
  );
};

export default WrapperPage;
