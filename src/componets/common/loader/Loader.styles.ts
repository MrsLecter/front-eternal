import styled from "styled-components";

export const WrapperLoader = styled.div<{ type: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 1;
  overflow-x: visible;

  & > div:first-child {
    padding-right: 300px;
    padding-bottom: 55px;
  }

  & > div:last-child {
    margin-top: ${(props) => (props.type === "mobile" ? "0px" : "400px")};
  }

  @media (max-width: 870px) {
    & > div:first-child {
      padding-right: 0px;
    }

    & > div:last-child {
      margin-top: ${(props) => (props.type === "mobile" ? "200px" : "400px")};
    }
  }
`;
