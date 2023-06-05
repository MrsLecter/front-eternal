import avatarIcon from "@images/avatar.png";
import minusIcon from "@icons/minus-btn.svg";
import Image from "next/image";
import {
  StyledDeleteAvatar,
  StyledIndividualAvatar,
} from "./IndividualAvatar.styles";

const IndividualAvatar: React.FC = () => {
  return (
    <StyledIndividualAvatar>
      <div>
        <Image
          width={78}
          height={78}
          alt="individual-avatar.svg"
          src={avatarIcon}
        />
      </div>
      <StyledDeleteAvatar>
        <Image
          width={6}
          height={3}
          alt="minus.svg"
          src={minusIcon}
          style={{ marginBottom: "4px" }}
        />
      </StyledDeleteAvatar>
    </StyledIndividualAvatar>
  );
};

export default IndividualAvatar;
