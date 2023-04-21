import Image from "next/image";

import parallaxFirstImage from "@images/greeting-parallax-first.webp";
import parallaxSecondLeftImage from "@images/greeting-parallax-second-left.webp";
import parallaxSecondRightImage from "@images/greeting-parallax-second-right.webp";
import parallaxThirdLeftImage from "@images/greeting-parallax-third-left.webp";
import parallaxThirdRightImage from "@images/greeting-parallax-third-right.webp";
import parallaxBorder from "@images/greeting-border.webp";

import { useParallax } from "react-scroll-parallax";
import { useRef } from "react";
import styled from "styled-components";

const Individuals: React.FC = () => {
  const target = useRef(null);

  const thirdL = useParallax({
    opacity: [1, 0.1],
    translateX: [0, 40],
    // speed: 10,
  });
  const secondL = useParallax({
    opacity: [1, 0.3],
    translateX: [0, 20],
    // speed: 10,
  });
  const secondR = useParallax({
    opacity: [1, 0.3],
    translateX: [0, -20],
    // speed: 10,
  });
  const thirdR = useParallax({
    opacity: [1, 0.1],
    translateX: [0, -40],
    // speed: 10,
  });

  return (
    <StyledContainer ref={target}>
      <div ref={thirdL.ref}>
        <Image
          width={396}
          height={407}
          alt="greeting-second-left.webp"
          src={parallaxThirdLeftImage}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div ref={secondL.ref}>
        <Image
          width={431}
          height={444}
          alt="greeting-second-left.webp"
          src={parallaxSecondLeftImage}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <Image
          width={567}
          height={567}
          alt="greeting-first.webp"
          src={parallaxFirstImage}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div ref={secondR.ref}>
        <Image
          width={379}
          height={463}
          alt="greeting-second-left.webp"
          src={parallaxSecondRightImage}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div ref={thirdR.ref}>
        <Image
          width={332}
          height={412}
          alt="greeting-second-left.webp"
          src={parallaxThirdRightImage}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <Image
          alt="greeting-border.webp"
          src={parallaxBorder}
          style={{ objectFit: "contain" }}
        />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  margin-top: 30px;
  position: relative;
  width: 100%;
  height: 567px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;

  div {
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    img {
      height: 100%;
    }
  }

  & > div:nth-child(1) {
    left: 1.7vw;
    bottom: -40px;
    width: 396px;
    height: 407px;
    z-index: 2;
  }

  & > div:nth-child(2) {
    left: 17.2vw;
    bottom: -8px;
    width: 431px;
    height: 444px;
    z-index: 3;
  }

  & > div:nth-child(3) {
    left: calc(50vw - 284px);
    width: 567px;
    height: 567px;
    z-index: 4;
  }

  & > div:nth-child(4) {
    right: 18.8vw;
    bottom: -30px;
    width: 379px;
    height: 463px;
    z-index: 3;
  }

  & > div:nth-child(5) {
    right: 4.7vw;
    bottom: -47px;
    width: 332px;
    height: 412px;
    z-index: 2;
  }
  & > div:nth-child(6) {
    right: 0vw;
    bottom: -47px;
    width: 100vw;
    height: 412px;
    z-index: 5;
  }
`;

export default Individuals;
