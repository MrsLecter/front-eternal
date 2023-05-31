import { APP_ROUTES } from "@/constants/common";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import Image from "next/image";
import Link from "next/link";
import {
  StyledImageWrapper,
  StyledIndividualsAbout,
  StyledIndividualsCard,
} from "./IndividualsCard.styles";
import { IIndividualsCard } from "./IndividualsCard.types";

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

export default IndividualsCard;