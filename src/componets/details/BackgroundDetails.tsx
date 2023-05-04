import styled from "styled-components";
import Image from "next/image";
import bluredImage from "@images/background-details-blured.png";

const BackgroundDetails: React.FC = () => {
  return (
    <StyledBackgroundDetails>
      <Image
        alt="travel"
        src={bluredImage}
        fill={true}
        style={{ objectFit: "cover", backdropFilter: "blur(107px)" }}
        quality={100}
      />
    </StyledBackgroundDetails>
  );
};

const StyledBackgroundDetails = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

export default BackgroundDetails;
