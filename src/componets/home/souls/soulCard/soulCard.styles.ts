import styled, { css } from "styled-components";

export const StyledSoulCard = styled.div`
  position: relative;
  height: 297.72px;
  width: 260px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  background-color: #101015;
  cursor: pointer;

  &:hover,
  &:focus {
    div:last-child {
      opacity: 1;
    }
  }

  @media (max-width: 870px) {
    width: 162px;
    height: 281.72px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    img {
      height: 228.72px;
    }

    div:last-child {
      opacity: 1;
    }

    &:hover {
      div:last-child {
        opacity: 1;
      }
    }
  }
`;

export const StyledImageWrapper = styled.div<{
  enlargedImage: boolean;
  isReflected: boolean;
}>`
  position: relative;
  width: 100%;
  min-width: 163.5px;
  height: 297.72px;
  min-height: 297.72px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: ${(props) => (props.enlargedImage ? "110%" : "102%")};
    height: 298.72px;

    ${(props) =>
      props.isReflected &&
      css`
        transform: rotateY(180deg);
      `}
  }

  & > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 3;
  }

  @media (max-width: 870px) {
    min-width: 163.5px;
    min-height: 227.72px;
    height: 227.72px;

    & > div {
      min-height: 281.72px;
      height: auto;
    }

    img {
      width: 110%;
      min-height: 228.72px;
    }
  }
`;

export const StyledSoulAbout = styled.div`
  position: absolute;
  height: 0px;
  bottom: -1px;
  padding: 0px;
  user-select: none;
  width: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.15em;
  height: 77px;
  user-select: text;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  background-color: rgba(88, 48, 102, 0.2);
  backdrop-filter: blur(22px);
  border-radius: 16px;
  opacity: 0;
  z-index: 4;
  transition: 0.5s;
  cursor: pointer;

  div {
    margin-left: 20px;
    margin-right: 20px;
    font-family: "Arquitecta Bold";
    font-weight: 700;
    z-index: 3;
    color: white;
  }

  div:first-child {
    margin-top: 20px;
    margin-bottom: 4px;
  }

  div:last-child {
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.2em;
    opacity: 0.7;
  }

  @media (max-width: 860px) {
    position: relative;
    margin-top: 8px;
    font-size: 14px;
    line-height: 110%;
    backdrop-filter: none;
    background-color: transparent;
    border-radius: 0px;

    div {
      margin-left: 0px;
      margin-right: 0px;
      text-align: left;
    }

    div:first-child {
      margin-top: 0px;
    }

    div:last-child {
      margin-top: 4px;
      opacity: 0.7;
    }
  }
`;
