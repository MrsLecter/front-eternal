import Logo from "../logo/Logo";
import Image from "next/image";
import { StyledFooter, StyledSocial } from "./Footer.styles";
import { BodyTiny } from "@/styles/textStyles/Avenir";
import twitterIcon from "@icons/social-twitter.svg";
import youtubeIcon from "@icons/social-youtube.svg";
import facebokIcon from "@icons/social-facebook.svg";
import { H6 } from "@/styles/textStyles/Arquitecta";

interface IFooterProps {
  liftToTopHandler?: () => void;
}

const Footer: React.FC<IFooterProps> = ({ liftToTopHandler }) => {
  return (
    <StyledFooter>
      <div onClick={liftToTopHandler}>
        <Logo />
      </div>
      <div>
        <BodyTiny>&#169;&nbsp;2023 Eternal.&nbsp;All rights reserved.</BodyTiny>
      </div>
      <div>
        <StyledSocial>
          <H6>follow us</H6>
          <div>
            <a href="https://twitter.com" target="_blank">
              <Image
                src={twitterIcon}
                alt="twitter-icon.svg"
                width={13.71}
                height={11.15}
              />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <Image
                src={facebokIcon}
                alt="facebook-icon.svg"
                width={6.86}
                height={13.71}
              />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <Image
                src={youtubeIcon}
                alt="youtube-icon.svg"
                width={15.44}
                height={10.86}
              />
            </a>
          </div>
        </StyledSocial>
      </div>
    </StyledFooter>
  );
};

export default Footer;
