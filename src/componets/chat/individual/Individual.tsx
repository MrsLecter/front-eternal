import Image from "next/image";
import { StyledIndividual, StyledIndividualLabel } from "./Individual.styles";
import mar from "@images/individuals/2_martin_luther_king.png";
import { IIndividualsData } from "@/types/common.types";
import loaderImg from "@images/loader.png";
import * as Arquitecta from "@typography/Arquitecta";
import { StyledWrapperLoader } from "./Individual.styles";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import SmsBtn from "./elements/SmsBtn";

interface IIndividualProps {
  individualData: IIndividualsData | undefined;
}

const Individual: React.FC<IIndividualProps> = ({ individualData }) => {
  let largeWidth = 0;
  let largeHeight = 0;
  let smallWidth = 0;
  let smallHeight = 0;

  useEffect(() => {}, [document.documentElement.clientWidth]);

  if (typeof window !== "undefined") {
    largeWidth = (document.documentElement.clientWidth * 53) / 100;
    largeHeight = (document.documentElement.clientHeight * 48) / 100;
    smallWidth = (document.documentElement.clientWidth * 88.18) / 100;
    smallHeight = (document.documentElement.clientHeight * 50.64) / 100;
  }
  if (!individualData)
    return (
      <StyledIndividual>
        <Arquitecta.H1>Individuals not found!</Arquitecta.H1>
      </StyledIndividual>
    );
  return (
    <StyledIndividual>
      {document.documentElement.clientWidth > 1250 ? (
        <div>
          <Image
            width={largeWidth}
            height={largeHeight}
            src={individualData.image}
            alt="main"
            style={{
              objectFit: "contain",
              width: "57.31vw",
              height: "66.9vh",
              maxWidth: "940px",
              maxHeight: "940px",
            }}
            placeholder="blur"
            blurDataURL="data:image/svg+xml"
          />
        </div>
      ) : (
        <div>
          <Image
            width={smallWidth}
            height={smallHeight}
            src={individualData.image}
            alt="main"
            style={{
              objectFit: "contain",
              width: "88vw",
              height: "40.64vh",
              minWidth: "331px",
              minHeight: "331px",
            }}
            placeholder="blur"
            blurDataURL="data:image/svg+xml"
          />
        </div>
      )}
      <StyledIndividualLabel>
        <Arquitecta.H2>{individualData.name}</Arquitecta.H2>
        <Arquitecta.H4>{individualData.about}</Arquitecta.H4>
      </StyledIndividualLabel>
      {document.documentElement.clientWidth < 1250 && <SmsBtn />}
      {/* <StyledWrapperLoader>
        <Image
          alt="travel"
          src={loaderImg}
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </StyledWrapperLoader> */}
    </StyledIndividual>
  );
};

export default Individual;
