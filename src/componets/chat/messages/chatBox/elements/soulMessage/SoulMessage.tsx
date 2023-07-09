import { getCapitalizeName } from "@/utils/functions";
import Image from "next/image";
import avatarStub from "@images/backgrounds/1_darkblue.png";
import * as Avenir from "@typography/Avenir";
import { SITE_URL } from "@/constants/common";
import { StyledSoulMessage, StyledSoulMessageBox } from "./SoulMessage.styles";
import React, { FC } from "react";
import ShareMessageBtn from "./elements/ShareMessageBtn";

interface ISoulMessageProps {
  text: string;
  avatarImg: string | undefined;
  soulsName?: string;
}

const SoulMessage: FC<ISoulMessageProps> = ({
  text,
  avatarImg,
  soulsName,
}) => {
  const shareMessageHandler = () => {
    navigator.clipboard.writeText(
      `See what ${getCapitalizeName(
        soulsName || "not defined"
      )} told me: "${text}". See more : ${SITE_URL}`
    );
  };

  return (
    <StyledSoulMessageBox>
      <div>
        <Image
          width={60}
          height={62}
          alt="Soul-avatar.png"
          src={avatarImg! ? avatarImg : avatarStub}
          quality={100}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <StyledSoulMessage>
        <div>
          <Avenir.H5>{text}</Avenir.H5>
        </div>
        <div>
          <ShareMessageBtn clickHandler={shareMessageHandler} />
        </div>
      </StyledSoulMessage>
    </StyledSoulMessageBox>
  );
};

export default SoulMessage;
