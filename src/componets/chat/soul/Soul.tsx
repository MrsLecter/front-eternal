import Image from "next/image";
import {
  ImageGradient,
  ImageWrapper,
  StyledSoul,
  StyledSoulLabel,
} from "./Soul.styles";
import * as Arquitecta from "@typography/Arquitecta";
import React, { useEffect, useState } from "react";
import LoaderImage from "@/componets/common/loaderImage/LoaderImage";
import { useImageLoadStatus } from "@/hooks/use-image-load-status";
import localStorageHandler from "@/utils/local-storage-hendler";

const Soul: React.FC = () => {
  const soulData = localStorageHandler.getSoulData();

  const [imgSourse, setImageSource] = useState<string>(soulData!.placeholder);
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

  const isLoad = useImageLoadStatus({ image: soulData!.image });
  useEffect(() => {
    if (isLoad) {
      setImageSource(soulData!.image);
    }
  });

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
                src={imgSourse}
                alt="soul.png"
                style={{
                  objectFit: "contain",
                  height: "60vh",
                  maxWidth: "940px",
                  maxHeight: "940px",
                }}
                priority={true}
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
                  src={imgSourse}
                  alt="soul.png"
                  style={{
                    objectFit: "contain",
                    height: "360px",
                    minWidth: "331px",
                    minHeight: "360px",
                  }}
                  priority={true}
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
                src={imgSourse}
                alt="soulPng"
                style={{
                  objectFit: "contain",
                  height: "360px",
                  minWidth: "360px",
                  minHeight: "360px",
                }}
                priority={true}
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
