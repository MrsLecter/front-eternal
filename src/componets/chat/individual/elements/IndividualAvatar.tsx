import avatarIcon from "@images/avatar.png";
import minusIcon from "@icons/minus-btn.svg";
import Image from "next/image";
import styled from "styled-components";

//img
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

const StyledIndividualAvatar = styled.div`
  position: relative;
  width: 78px;
  height: 78px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  & > div {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    overflow: hidden;
  }

  & > button {
    display: none;
  }

  &:hover {
    button {
      display: block;
    }
  }

  @media (max-width: 375px) {
    width: 50.2px;
    height: 50.2px;
    & > button {
      display: block;
    }
  }
`;

const StyledDeleteAvatar = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
  }
`;

export default IndividualAvatar;
