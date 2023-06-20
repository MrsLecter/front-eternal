import styled, { css } from "styled-components";

export const WrapperPage = styled.div<{ shouldNotScroll: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #111115;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;

  ${(props) =>
    props.shouldNotScroll &&
    css`
      max-height: 100%;
      overflow: hidden;
    `};
`;

export const StyledBackground = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #111115;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    min-width: 100%;
    height: 700px;
    background-image: linear-gradient(
      115deg,
      rgba(88, 51, 239, 0.2) 0.5%,
      rgba(29, 29, 36, 0) 12%
    );
  }
`;

export const StyledMainContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1640px;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
