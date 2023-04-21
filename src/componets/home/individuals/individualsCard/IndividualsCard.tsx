import { cloudImageLoader } from "@/utils/functions";
import Image from "next/image";
import styled from "styled-components";

interface IIndividualsCard {
  photoUrl: string;
  name: string;
  about: string;
}

const IndividualsCard: React.FC<IIndividualsCard> = ({
  photoUrl,
  name,
  about,
}) => {
  let largeWidth = 0;
  let largeHeight = 0;
  let smallWidth = 0;
  let smallHeight = 0;
  if (typeof window !== "undefined") {
    largeWidth = (document.documentElement.clientWidth * 15.85) / 100;
    largeHeight = (document.documentElement.clientHeight * 21.19) / 100;
    smallWidth = (document.documentElement.clientWidth * 31.07) / 100;
    smallHeight = (document.documentElement.clientHeight * 2.71) / 100;
  }
  return (
    <StyledIndividualsCard>
      <StyledImageWrapper>
        {document.documentElement.clientWidth > 375 ? (
          <Image
            width={largeWidth}
            height={largeHeight}
            src={cloudImageLoader({
              src: photoUrl,
              width: String(largeWidth),
              height: String(largeHeight),
            })}
            alt={photoUrl.split("/")[4]}
            style={{
              zIndex: 3,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            quality={100}
          />
        ) : (
          <Image
            width={largeWidth}
            height={largeHeight}
            src={cloudImageLoader({
              src: photoUrl,
              width: String(largeWidth),
              height: String(largeHeight),
            })}
            alt={photoUrl.split("/")[4]}
            style={{
              zIndex: 3,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            quality={100}
          />
        )}
      </StyledImageWrapper>

      <StyledIndividualsabout>
        <p>{name.length > 21 ? name.substring(0, 20) + "..." : name}</p>
        <p>{about}</p>
      </StyledIndividualsabout>
    </StyledIndividualsCard>
  );
};

const StyledIndividualsCard = styled.div`
  position: relative;
  width: 100%;
  height: 297.72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    div:last-child {
      height: 77px;
      user-select: text;
      color: ${({ theme }) => theme.color.white};
    }
  }

  @media (max-width: 375px) {
    height: 278.72px;

    div:last-child {
      height: 43px;
    }

    &:hover {
      div:last-child {
        height: 43px;
      }
    }
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 297.72px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 375px) {
    height: 227.72px;
  }
`;

const StyledIndividualsabout = styled.div`
  position: absolute;
  height: 0px;
  bottom: 0px;
  padding: 0px;
  user-select: none;
  width: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: transparent;
  background-color: rgba(88, 48, 102, 0.2);
  backdrop-filter: blur(22px);
  border-radius: 16px;
  z-index: 4;
  transition: 1s;
  cursor: pointer;

  p {
    margin-left: 20px;
    margin-right: 20px;
    font-family: "Arquitecta Bold";
    font-weight: 700;
    z-index: 3;
    color: white;
  }

  p:first-child {
    margin-top: 20px;
  }

  p:last-child {
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.2em;
    opacity: 0.7;
  }

  @media (max-width: 375px) {
    height: 43px;
    font-size: 14px;
    line-height: 110%;
    backdrop-filter: none;
    background-color: transparent;

    p {
      margin-left: 0px;
      margin-right: 0px;
      text-align: left;
    }
    p:first-child {
      margin-top: 0px;
    }

    p:last-child {
      margin-top: 4px;
      opacity: 0.7;
    }
  }
`;

export default IndividualsCard;
