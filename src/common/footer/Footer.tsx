import Logo from "../logo/Logo";
import Image from "next/image";
import { StyledFooter, StyledCopyright, StyledSocial } from "./Footer.styles";

import twitterIcon from "@icons/social-twitter.svg";
import youtubeIcon from "@icons/social-youtube.svg";
import facebokIcon from "@icons/social-facebook.svg";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        <Logo />
      </div>
      <div>
        <StyledCopyright>
          &#169;&nbsp;2023 Eternal.&nbsp;All rights reserved.
        </StyledCopyright>
      </div>
      <div>
        <StyledSocial>
          <p>follow us</p>
          <div>
            <a href="https://twitter.com" target="_blank">
              <Image
                src={twitterIcon}
                alt="twitter-icon.svg"
                width={32}
                height={32}
              />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <Image
                src={facebokIcon}
                alt="facebook-icon.svg"
                width={32}
                height={32}
              />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <Image
                src={youtubeIcon}
                alt="youtube-icon.svg"
                width={32}
                height={32}
              />
            </a>
          </div>
        </StyledSocial>
      </div>
    </StyledFooter>
  );
};

export default Footer;
