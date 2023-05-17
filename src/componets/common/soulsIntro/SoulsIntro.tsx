import {
  Background,
  Conversation,
  Intro,
  SoulsWrapper,
  StyledBorder,
} from "./SoulsIntro.styles";
import Image from "next/image";
import backgroundLight from "@images/all-individuals/light-1.png";
import conversation from "@images/all-individuals/conversation-1.png";
import pinkSpot from "@images/all-individuals/pink-spot.png";

import first from "@images/individuals/2_martin_luther_king.png";
import secondL from "@images/individuals/1_steve_jobs.png";
import secondR from "@images/individuals/4_albert_einstein.png";
import thirdL from "@images/individuals/3_elon_mask.png";
import thirdR from "@images/individuals/5_mother_teresa.png";

interface ISoulsIntroProps {
  isBlured?: boolean;
}

const SoulsIntro: React.FC<ISoulsIntroProps> = ({ isBlured = true }) => {
  return (
    <>
      <SoulsWrapper isBlured={isBlured}>
        <Intro>
          <div style={{ zIndex: -7 }}>
            <figure>
              <Image
                src={thirdL}
                alt="zero"
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: -7,
                }}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -6 }}>
            <figure>
              <Image
                src={secondL}
                alt="zero"
                style={{ width: "100%", height: "auto", zIndex: -6 }}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -5 }}>
            <figure>
              <Image
                src={pinkSpot}
                alt="zero"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  bottom: "0px",
                  left: "0",
                  right: "0",
                  zIndex: -5,
                }}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -4 }}>
            <figure>
              <Image
                src={first}
                alt="zero"
                style={{ width: "100%", height: "auto", zIndex: -4 }}
              />
              <figcaption></figcaption>
            </figure>
          </div>
          <div style={{ zIndex: -6 }}>
            <figure>
              <Image
                src={secondR}
                alt="zero"
                style={{ width: "100%", height: "auto", zIndex: 6 }}
              />
              <figcaption></figcaption>
            </figure>
          </div>

          <div style={{ zIndex: -7 }}>
            <figure>
              <Image
                src={thirdR}
                alt="zero"
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: -7,
                }}
              />
              <figcaption></figcaption>
            </figure>
          </div>
        </Intro>

        <Background>
          <figure>
            <Image
              src={backgroundLight}
              alt="zero"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption></figcaption>
          </figure>
        </Background>
        <Conversation>
          <figure>
            <Image
              src={conversation}
              alt="zero"
              style={{ width: "100%", height: "auto" }}
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
