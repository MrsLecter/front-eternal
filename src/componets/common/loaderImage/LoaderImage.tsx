import {
  BagelEllipse,
  BagelWrapper,
  LoaderImageContainer,
  LoaderImageWrapper,
} from "./LoaderImage.styles";

interface ILoaderImageProps {
  type?: "loader" | "background" | "mobile";
}

const LoaderImage: React.FC<ILoaderImageProps> = ({ type = "background" }) => {
  const basis = 1640;
  let aspectRatio: number;
  if (type === "loader") {
    aspectRatio = 0.5;
  } else if (type === "mobile") {
    aspectRatio = 375 / basis;
  } else {
    aspectRatio = document.documentElement.clientWidth / basis;
  }
  return (
    <LoaderImageWrapper type={"loader"}>
      <LoaderImageContainer>
        <BagelWrapper
          width={Math.max(703 * aspectRatio, 300)}
          height={Math.max(696 * aspectRatio, 300)}
        >
          <BagelEllipse
            width={Math.max(388 * aspectRatio, 212)}
            height={Math.max(464 * aspectRatio, 248)}
            from={-90}
            borderWidth={Math.max(60 * aspectRatio, 21)}
            borderColor="#F82D98"
            blur={48 * aspectRatio}
            animationType="left"
          />
          <BagelEllipse
            width={Math.max(388 * aspectRatio, 202)}
            height={Math.max(562 * aspectRatio, 272)}
            from={-90}
            borderWidth={Math.max(103 * aspectRatio, 36)}
            borderColor="#5833EF"
            blur={60 * aspectRatio}
            animationType="left"
          />
          <BagelEllipse
            width={Math.max(388 * aspectRatio, 202)}
            height={Math.max(562 * aspectRatio, 272)}
            from={-90}
            borderWidth={Math.max(103 * aspectRatio, 36)}
            borderColor="#5833EF"
            blur={30 * aspectRatio}
            animationType="left"
          />

          <BagelEllipse
            width={Math.max(390 * aspectRatio, 202)}
            height={Math.max(519 * aspectRatio, 238)}
            from={-57.23}
            borderWidth={Math.max(60 * aspectRatio, 21)}
            borderColor="#FFFEF0"
            blur={28 * aspectRatio}
            animationType="right"
          />
          <BagelEllipse
            width={Math.max(390 * aspectRatio, 202)}
            height={Math.max(519 * aspectRatio, 238)}
            from={-45}
            borderWidth={Math.max(50 * aspectRatio, 11)}
            borderColor="#FFFFFF"
            blur={2 * aspectRatio}
            animationType="right"
          />
          <BagelEllipse
            width={Math.max(390 * aspectRatio, 202)}
            height={Math.max(497 * aspectRatio, 240)}
            from={0}
            borderWidth={Math.max(60 * aspectRatio, 21)}
            borderColor="#F82D98"
            blur={30 * aspectRatio}
            animationType="left"
          />
          <BagelEllipse
            width={Math.max(390 * aspectRatio, 202)}
            height={Math.max(497 * aspectRatio, 240)}
            from={0}
            borderWidth={Math.max(60 * aspectRatio, 21)}
            borderColor="#F82D98"
            blur={2 * aspectRatio}
            animationType="left"
          />
          <BagelEllipse
            width={Math.max(390 * aspectRatio, 212)}
            height={Math.max(498 * aspectRatio, 250)}
            from={45}
            borderWidth={Math.max(60 * aspectRatio, 41)}
            borderColor="#B5E42E"
            blur={30 * aspectRatio}
            animationType="right"
          />
          <BagelEllipse
            width={Math.max(411 * aspectRatio, 220)}
            height={Math.max(491 * aspectRatio, 248)}
            from={45}
            borderWidth={Math.max(60 * aspectRatio, 41)}
            borderColor="#B5E42E;"
            blur={2 * aspectRatio}
            animationType="right"
          />
        </BagelWrapper>
      </LoaderImageContainer>
    </LoaderImageWrapper>
  );
};

export default LoaderImage;
