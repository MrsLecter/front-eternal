import Image from "next/image";
import { StyledIndividual, StyledIndividualLabel } from "./Individual.styles";
import { IIndividualsData } from "../../../../types/common.types";
import * as Arquitecta from "@typography/Arquitecta";
import React from "react";
import LoaderImage from "@/componets/common/loaderImage/LoaderImage";

interface IIndividualProps {
  individualData: IIndividualsData | undefined;
}

const Individual: React.FC<IIndividualProps> = ({ individualData }) => {
  let largeWidth = 0;
  let largeHeight = 0;
  let smallWidth = 0;
  let smallHeight = 0;

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
      <div>
        {document.documentElement.clientWidth > 1249 && (
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
                priority={true}
              />
            </div>
          )}

        {document.documentElement.clientWidth < 1250 &&
          document.documentElement.clientWidth > 499 && (
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

        {document.documentElement.clientWidth <500 && (
          <div>
            <Image
              width={smallWidth}
              height={smallHeight}
              src={individualData.image}
              alt="main"
              style={{
                objectFit: "contain",
                width: "90vw",
                height: "70vh",
                minWidth: "331px",
                minHeight: "331px",
              }}
              placeholder="blur"
              blurDataURL="data:image/svg+xml"
              priority={true}
            />
          </div>
        )}

        {/* : (
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
              priority={true}
            />
          </div>
        )} */}

        <StyledIndividualLabel>
          <Arquitecta.H2>{individualData.name}</Arquitecta.H2>
          <Arquitecta.H4>{individualData.about}</Arquitecta.H4>
        </StyledIndividualLabel>
        <LoaderImage />
      </div>
    </StyledIndividual>
  );
};

export default React.memo(Individual);
