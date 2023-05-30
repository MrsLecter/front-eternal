import { APP_ROUTES } from "@/constants/common";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

interface IIndividualsCard {
  id: number;
  name: string;
  about: string;
  image: string;
  background: string;
  enlargedImage?: boolean;
  isReflected?: boolean;
}

const IndividualsCard: React.FC<IIndividualsCard> = ({
  id,
  name,
  about,
  image,
  background,
  enlargedImage = false,
  isReflected = false,
}) => {
  const { setFirstMessage, setUserMessageFirst } = internalSlice.actions;
  const { questionsAmount } = useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();

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

  const handleIndividualsClick = () => {
    dispatch(setUserMessageFirst({ isUserMessageFirst: false }));
    dispatch(
      setFirstMessage({ message: "Tell me about yourself", type: "intro" })
    );
  };

  return (
    <Link
      tabIndex={-1}
      href={APP_ROUTES.Chat + id}
      onClick={handleIndividualsClick}
    >
      <StyledIndividualsCard tabIndex={0}>
        <StyledImageWrapper
          enlargedImage={enlargedImage}
          isReflected={isReflected}
        >
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
                    minHeight: "102%",
                    width: "100%",
                    height: "102%",
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
                  marginLeft: enlargedImage ? "-20px" : "0px",
                  zIndex: 3,
                  width: enlargedImage ? "110%" : "100%",
                  height: "102%",
                  minHeight: "102%",
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
                    maxHeight: "228.72px",
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

                  maxHeight: "228.72px",
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
  height: 297.72px;
  width: 260px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  background-color: #101015;
  cursor: pointer;

  &:hover,
  &:focus {
    div:last-child {
      opacity: 1;
    }
  }

  @media (max-width: 870px) {
    width: 162px;
    height: 281.72px;

    img {
      height: 228.72px;
    }

    div:last-child {
      opacity: 1;
    }

    &:hover {
      div:last-child {
        opacity: 1;
      }
    }
  }
`;

const StyledImageWrapper = styled.div<{
  enlargedImage: boolean;
  isReflected: boolean;
}>`
  position: relative;
  width: 100%;
  min-width: 163.5px;
  height: 297.72px;
  min-height: 297.72px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: ${(props) => (props.enlargedImage ? "110%" : "102%")};
    height: 298.72px;
    ${(props) =>
      props.isReflected &&
      css`
        transform: rotateY(180deg);
      `}
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
      min-height: 228.72px;
    }
  }
`;

const StyledIndividualsAbout = styled.div`
  position: absolute;
  height: 0px;
  bottom: -1px;
  padding: 0px;
  user-select: none;
  width: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.15em;
  height: 77px;
  user-select: text;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  background-color: rgba(88, 48, 102, 0.2);
  backdrop-filter: blur(22px);
  border-radius: 16px;
  opacity: 0;
  z-index: 4;
  transition: 0.5s;
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
    margin-top: 20px;
    margin-bottom: 4px;
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
