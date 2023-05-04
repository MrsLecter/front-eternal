import { APP_ROUTES } from "@/constants/common";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface IIndividualsCard {
  id: number;
  name: string;
  about: string;
  image: string;
  background: string;
}

const IndividualsCard: React.FC<IIndividualsCard> = ({
  id,
  name,
  about,
  image,
  background,
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
    <Link href={APP_ROUTES.Chat + id}>
      <StyledIndividualsCard>
        <StyledImageWrapper>
          {document.documentElement.clientWidth > 860 ? (
            <>
              <div>
                <Image
                  width={largeWidth}
                  height={smallHeight}
                  src={background}
                  alt={background}
                  // priority={true}
                  style={{
                    zIndex: 4,
                    minHeight: "100%",
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "16px",
                    filter: "blur(50px)",
                  }}
                  quality={100}
                />
              </div>
              <Image
                width={largeWidth}
                height={smallHeight}
                src={image}
                alt={image}
                style={{
                  position: "absolute",
                  top: 0,
                  zIndex: 3,
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  borderRadius: "16px",
                  backgroundColor: "transparent",
                }}
                quality={100}
              />
            </>
          ) : (
            <>
              <div>
                <Image
                  width={smallWidth}
                  height={largeHeight}
                  src={background}
                  alt={background}
                  // priority={true}
                  style={{
                    zIndex: 4,
                    minHeight: "100%",
                    maxHeight: "227.72px",
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "16px",
                    filter: "blur(50px)",
                  }}
                  quality={100}
                />
              </div>
              <Image
                width={smallWidth}
                height={largeHeight}
                src={image}
                alt={image}
                style={{
                  position: "absolute",
                  top: 0,
                  zIndex: 3,
                  width: "100%",
                  height: "100%",
                  maxHeight: "227.72px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  backgroundColor: "transparent",
                }}
                quality={100}
              />
            </>
          )}
        </StyledImageWrapper>

        <StyledIndividualsAbout>
          <div>{name}</div>
          <div>{about}</div>
        </StyledIndividualsAbout>
      </StyledIndividualsCard>
    </Link>
  );
};

const StyledIndividualsCard = styled.div`
  position: relative;
  /* width: 100%; */
  /* min-height: 266.72px; */
  /* height: 300px; */
  /* min-height: 100%; */
  height: 297.72px;
  width: 260px;
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

  /* @media (max-width: 1075px) {
    width: 162px;
  } */

  @media (max-width: 860px) {
    width: 162px;
    height: 281.72px;

    /* height: 100%; */

    div:last-child {
      height: auto;
    }

    img {
      height: 227.72px;
    }

    &:hover {
      div:last-child {
        height: auto;
      }
    }
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 163.5px;
  height: 297.72px;
  min-height: 297.72px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 297.72px;
  }

  & > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 3;
  }

  @media (max-width: 870px) {
    min-width: 163.5px;
    min-height: 227.72px;
    height: 227.72px;
    & > div {
      min-height: 281.72px;
      height: auto;
    }

    img {
      width: 110%;
      min-height: 227.72px;
    }
  }
`;

const StyledIndividualsAbout = styled.div`
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

  div {
    margin-left: 20px;
    margin-right: 20px;
    font-family: "Arquitecta Bold";
    font-weight: 700;
    z-index: 3;
    color: white;
  }

  div:first-child {
    margin-top: 8px;
  }

  div:last-child {
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.2em;
    opacity: 0.7;
  }

  @media (max-width: 860px) {
    position: relative;
    /* top: 227.72px; */
    margin-top: 8px;
    /* height: auto; */
    /* height: 227.72px; */
    font-size: 14px;
    line-height: 110%;
    backdrop-filter: none;
    background-color: transparent;

    div {
      margin-left: 0px;
      margin-right: 0px;
      text-align: left;
    }

    div:first-child {
      margin-top: 0px;
    }

    div:last-child {
      margin-top: 4px;
      opacity: 0.7;
    }
  }
`;

export default IndividualsCard;
