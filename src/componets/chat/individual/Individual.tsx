import Image from "next/image";
import { StyledIndividual, StyledIndividualLabel } from "./Individual.styles";
import { IIndividualsData } from "../../../../types/common.types";
import * as Arquitecta from "@typography/Arquitecta";
import React from "react";
import LoaderImage from "@/componets/common/loader/LoaderImage";

interface IIndividualProps {
  individualData: IIndividualsData | undefined;
}

const Individual: React.FC<IIndividualProps> = ({ individualData }) => {
  let largeWidth = 0;
  let largeHeight = 0;
  let smallWidth = 0;
  let smallHeight = 0;

  console.log("*****refresh individuals********");

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
      <LoaderImage />
      <StyledIndividualLabel>
        <Arquitecta.H2>{individualData.name}</Arquitecta.H2>
        <Arquitecta.H4>{individualData.about}</Arquitecta.H4>
      </StyledIndividualLabel>
    </StyledIndividual>
  );
};

export default React.memo(Individual);
