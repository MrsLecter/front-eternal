import styled from "styled-components";
import Image from "next/image";
import bluredImage from "@images/background-blured.png";
import { FC } from "react";

const WrapperBackground: FC = () => {
  return (
    <StyledWrapperBackground>
      <Image
        alt="background.png"
        src={bluredImage}
        fill={true}
        style={{ objectFit: "cover", backdropFilter: "blur(107px)" }}
        quality={100}
      />
    </StyledWrapperBackground>
  );
};

const StyledWrapperBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -10;
`;

export default WrapperBackground;
