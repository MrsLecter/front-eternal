import { SOCIAL_LINKS } from "@/constants/common";
import { StyledSocialContainer } from "./SocialLinksContainer.styles";
import FacebokSvg from "../FacebookSvg";
import InstagramSvg from "../InstagramSvg";
import TwitterSvg from "../TwitterSvg";
import DiscordSvg from "../DiscordSvg";

const SocialLinksContainer: React.FC = () => {
  return (
    <StyledSocialContainer>
      <div>
        <a href={SOCIAL_LINKS.Facebook} target="_blank">
          <FacebokSvg />
        </a>
        <a href={SOCIAL_LINKS.Instagram} target="_blank">
          <InstagramSvg />
        </a>
        <a href={SOCIAL_LINKS.Twitter} target="_blank">
          <TwitterSvg />
        </a>
        <a href={SOCIAL_LINKS.Discord} target="_blank">
          <DiscordSvg />
        </a>
      </div>
    </StyledSocialContainer>
  );
};

export default SocialLinksContainer;
