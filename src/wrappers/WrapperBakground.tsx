import styled from "styled-components";
import Image from "next/image";
import bluredImage from "@images/background-blured.webp";

const WrapperBackground: React.FC = () => {
  return (
    <StyledWrapperBackground>
      <Image
        alt="travel"
        src={bluredImage}
        fill={true}
        style={{ objectFit: "cover" }}
        quality={100}
      />
    </StyledWrapperBackground>
  );
};

const StyledWrapperBackground = styled.div`
  position: absolute;
  top: 0px;
  /* height: 100vh; */
  width: 100vw;
  overflow: hidden;
  z-index: -2;
`;

export default WrapperBackground;
