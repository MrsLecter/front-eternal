import Image from "next/image";
import {
  ImageGradient,
  ImageWrapper,
  StyledSoul,
  StyledSoulLabel,
} from "./Soul.styles";
import * as Arquitecta from "@typography/Arquitecta";
import React from "react";
import LoaderImage from "@/componets/common/loaderImage/LoaderImage";
import { ISoulsData } from "../../../../types/app-common.types";

interface ISoulProps {
  soulData: ISoulsData | undefined;
}

const Soul: React.FC<ISoulProps> = ({ soulData }) => {
  let largeWidth = 0;
  let largeHeight = 0;
  let smallWidth = 0;
  let smallHeight = 0;

  if (typeof window !== "undefined") {
    largeWidth = (document.documentElement.clientWidth * 57) / 100;
    largeHeight = (document.documentElement.clientHeight * 54) / 100;
    smallWidth = (document.documentElement.clientWidth * 22) / 100;
    smallHeight = 352;
  }

  if (!soulData) {
    return (
      <StyledSoul>
        <Arquitecta.H1>Loading...</Arquitecta.H1>
      </StyledSoul>
    );
  } else {
    return (
      <StyledSoul>
        <div>
          {document.documentElement.clientWidth > 1249 && (
            <ImageWrapper>
              <Image
                width={largeWidth}
                height={largeHeight}
                src={soulData.image}
                alt="soul.png"
                style={{
                  objectFit: "contain",
                  height: "60vh",
                  maxWidth: "940px",
                  maxHeight: "940px",
                }}
                placeholder={"blur"}
                blurDataURL="data:image/svg+xml"
              />
              <ImageGradient />
              <LoaderImage type="background" />
            </ImageWrapper>
          )}

          {document.documentElement.clientWidth < 1250 &&
            document.documentElement.clientWidth > 499 && (
              <ImageWrapper>
                <Image
                  width={smallWidth}
                  height={smallHeight}
                  src={soulData.image}
                  alt="soul.png"
                  style={{
                    objectFit: "contain",
                    height: "360px",
                    minWidth: "331px",
                    minHeight: "360px",
                  }}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml"
                />
                <ImageGradient />
                <LoaderImage type="background" />
              </ImageWrapper>
            )}

          {document.documentElement.clientWidth < 500 && (
            <ImageWrapper>
              <Image
                width={smallWidth}
                height={smallHeight}
                src={soulData.image}
                alt="soulPng"
                style={{
                  objectFit: "contain",
                  height: "360px",
                  minWidth: "360px",
                  minHeight: "360px",
                }}
                placeholder="blur"
                blurDataURL="data:image/svg+xml"
                // priority={true}
              />
              <ImageGradient />
              <LoaderImage type="background" />
            </ImageWrapper>
          )}
        </div>
        <StyledSoulLabel>
          <Arquitecta.H2>{soulData.name}</Arquitecta.H2>
          <Arquitecta.H4>{soulData.about}</Arquitecta.H4>
        </StyledSoulLabel>
      </StyledSoul>
    );
  }
};

export default React.memo(Soul);
