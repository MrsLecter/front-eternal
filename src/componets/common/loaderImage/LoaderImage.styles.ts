import styled, { css, keyframes } from "styled-components";

type EllipseProps = {
  width: number;
  height: number;
  from: number;
  borderWidth: number;
  borderColor: string;
  blur: number;
  animationType: "left" | "right";
};

const rotateLeft = (props: EllipseProps) => keyframes`
  from {
    transform: rotate(${props.from}deg);
  }
  to {
    transform: rotate(${props.from - 360}deg);
  }
`;

const rotateRight = (props: EllipseProps) => keyframes`
  from {
    transform: rotate(${props.from}deg);
  }
  to {
    transform: rotate(${props.from + 360}deg);
  }
`;

export const BagelWrapper = styled.div<{
  width: number;
  height: number;
}>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height + "px"};
  margin: 0 auto;
`;

export const BagelEllipse = styled.div<EllipseProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border-radius: 50%;
  border-width: ${(props) => props.borderWidth + "px"};
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  filter: blur(${(props) => props.blur + "px"});
  transform: rotate(${(props) => props.from + "deg"});
  mix-blend-mode: screen;
  overflow-x: visible;

  ${(props) =>
    props.animationType === "left" &&
    css`
      animation: ${rotateLeft} 20s linear infinite;
      animation-direction: alternate;
    `}

  ${(props) =>
    props.animationType === "right" &&
    css`
      animation: ${rotateRight} 15s linear infinite;
      animation-direction: alternate;
    `}
`;

export const LoaderImageWrapper = styled.div<{ type: string }>`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: ${(props) => (props.type === "background" ? "940px" : "100%")};
  left: 0;
  top: 0;
  background: transparent;
  overflow-x: visible;
  overflow-y: hidden;
  z-index: -1;

  ${(props) =>
    props.type === "loader" &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  @media(max-width: 1200px) {
    overflow-y: visible;
  }

  @media (max-width: 870px) {
    margin-top: 80px;
    max-height: 330px;
  }
`;

export const LoaderImageContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1640px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  z-index: -1;
`;
