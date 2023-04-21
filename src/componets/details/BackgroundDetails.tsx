import styled from "styled-components";
import Image from "next/image";
import bluredImage from "@images/background-details-blured.webp";

const BackgroundDetails: React.FC = () => {
  return (
    <StyledBackgroundDetails>
      <Image
        alt="travel"
        src={bluredImage}
        fill={true}
        style={{ objectFit: "cover" }}
        quality={100}
      />
    </StyledBackgroundDetails>
  );
};

const StyledBackgroundDetails = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

export default BackgroundDetails;
