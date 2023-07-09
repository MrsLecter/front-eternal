import {
  Background,
  Conversation,
  Intro,
  SoulsWrapper,
  StyledBorder,
} from "./SoulsIntro.styles";
import Image from "next/image";
import backgroundLight from "@images/all-souls/light.png";
import conversation from "@images/all-souls/conversation.png";
import pinkSpot from "@images/all-souls/pink-spot.png";
import first from "@images/souls/2_martin_luther_king.png";
import secondL from "@images/souls/1_steve_jobs.png";
import secondR from "@images/souls/4_albert_einstein.png";
import thirdL from "@images/souls/3_elon_mask.png";
import thirdR from "@images/souls/5_mother_teresa.png";
import { FC } from "react";

interface ISoulsIntroProps {
  isBlured?: boolean;
}

const SoulsIntro: FC<ISoulsIntroProps> = ({ isBlured = true }) => {
  return (
    <>
      <SoulsWrapper isBlured={isBlured}>
        <Intro>
          <div style={{ zIndex: -7 }}>
            <figure>
              <Image
                src={thirdL}
                alt="thirdLeft.png"
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: -7,
                }}
                priority={true}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -6 }}>
            <figure>
              <Image
                src={secondL}
                alt="secondLeft.png"
                style={{ width: "100%", height: "auto", zIndex: -6 }}
                priority={true}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -5 }}>
            <figure>
              <Image
                src={pinkSpot}
                alt="pinkSpot.png"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  bottom: "0px",
                  left: "0",
                  right: "0",
                  zIndex: -5,
                }}
                priority={true}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -4 }}>
            <figure>
              <Image
                src={first}
                alt="firstSoul.png"
                style={{ width: "100%", height: "auto", zIndex: -4 }}
                priority={true}
              />
              <figcaption></figcaption>
            </figure>
          </div>
          <div style={{ zIndex: -6 }}>
            <figure>
              <Image
                src={secondR}
                alt="secondRight.png"
                style={{ width: "100%", height: "auto", zIndex: 6 }}
                priority={true}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -7 }}>
            <figure>
              <Image
                src={thirdR}
                alt="thirdRight.png"
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: -7,
                }}
                priority={true}
              />
              <figcaption></figcaption>
            </figure>
          </div>
        </Intro>

        <Background>
          <figure>
            <Image
              src={backgroundLight}
              alt="backgroundLight.png"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption></figcaption>
          </figure>
        </Background>
        <Conversation>
          <figure>
            <Image
              src={conversation}
              alt="conversation.png"
              style={{ width: "100%", height: "auto" }}
              priority={true}
            />
            <figcaption></figcaption>
          </figure>
        </Conversation>
      </SoulsWrapper>
      <StyledBorder />
    </>
  );
};

export default SoulsIntro;
