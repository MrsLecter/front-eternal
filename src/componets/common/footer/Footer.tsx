import Logo from "../logo/Logo";
import { StyledFooter } from "./Footer.styles";
import { BodyTiny } from "@/styles/textStyles/Avenir";
import SocialLinks from "./elements/SocialLinks";
import { FC } from "react";

interface IFooterProps {
  logoClickHandler?: () => void;
}

const Footer: FC<IFooterProps> = ({ logoClickHandler }) => {
  return (
    <StyledFooter>
      <div onClick={logoClickHandler}>
        <Logo />
      </div>
      <div>
        <BodyTiny>&#169;&nbsp;2023 Eternal.&nbsp;All rights reserved.</BodyTiny>
      </div>
      <div>
        <SocialLinks />
      </div>
    </StyledFooter>
  );
};

export default Footer;
