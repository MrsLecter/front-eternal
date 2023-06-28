import Image from "next/image";
import twitterIcon from "@icons/social-twitter.svg";
import youtubeIcon from "@icons/social-youtube.svg";
import facebokIcon from "@icons/social-facebook.svg";
import { H6 } from "@/styles/textStyles/Arquitecta";
import { StyledSocial } from "./SocialLinks.styled";
import { SOCIAL_LINKS } from "@/constants/common";

const SocialLinks: React.FC = () => {
  return (
    <StyledSocial>
      <H6>follow us</H6>
      <div>
        <a href={SOCIAL_LINKS.Twitter} target="_blank">
          <Image
            src={twitterIcon}
            alt="twitter-icon.svg"
            width={13.71}
            height={11.15}
          />
        </a>
        <a href={SOCIAL_LINKS.Facebook} target="_blank">
          <Image
            src={facebokIcon}
            alt="facebook-icon.svg"
            width={6.86}
            height={13.71}
          />
        </a>
        <a href={SOCIAL_LINKS.Yuotube} target="_blank">
          <Image
            src={youtubeIcon}
            alt="youtube-icon.svg"
            width={15.44}
            height={10.86}
          />
        </a>
      </div>
    </StyledSocial>
  );
};

export default SocialLinks;
