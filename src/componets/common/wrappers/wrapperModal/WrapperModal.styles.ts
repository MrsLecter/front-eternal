import styled from "styled-components";

export const StyledWrapperModalContainer = styled.div<{
  width: string;
  noBorder: boolean;
  isPayment: boolean;
  maxHeight: number;
  minHeight: number;
  marginTop: number;
}>`
  position: relative;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "px" : "0px")};
  width: ${(props) => props.width + "px"};
  min-height: ${(props) => (props.minHeight ? props.minHeight + "px" : "auto")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight + "px" : "auto")};
  height: auto;
  padding: 1.2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 32px;
  backdrop-filter: blur(12px);
  background-image: ${(props) =>
    props.noBorder
      ? "linear-gradient(90.83deg, rgba(4, 4, 16, 0.6) 11.84%, rgba(15, 3, 6, 0.6) 111.32%)"
      : "linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%)"};
  z-index: 4;

  @media (max-width: 870px) {
    margin-top: ${(props) =>
      props.marginTop ? props.marginTop + "px" : "0px"};
    width: 500px;
    border: ${(props) =>
      props.noBorder && " 1px solid rgba(255, 255, 255, 0.4)"};
  }

  @media (max-width: 870px) {
    width: 343px;
  }
`;

export const StyledWrapperModal = styled.div<{
  noBorder: boolean;
  paddingSmall?: boolean;
  isPayment: boolean;
}>`
  width: 100%;
  padding: 48px;
  border-radius: 32px;
  background-image: ${(props) =>
    props.noBorder
      ? "linear-gradient(90.83deg, rgba(4, 4, 16, 0.6) 11.84%, rgba(15, 3, 6, 0.6) 111.32%);"
      : "linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%)"};
  color: ${({ theme }) => theme.color.white};
  overflow: hidden;

  & > div:first-child > p:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    letter-spacing: -0.01em;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 4px;
  }

  & > div:first-child > p {
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.01em;
  }

  & > div:first-child > p:nth-child(3) {
    margin-top: 28px;
  }

  & > div:first-child {
    width: 100%;
    height: auto;
    margin-bottom: ${(props) => (props.isPayment ? "0px" : "32px")};
  }

  @media (max-width: 870px) {
    padding: ${(props) => (props.paddingSmall ? "24px" : "32px")};
    
    & > div:first-child {
      margin-bottom: ${(props) => (props.isPayment ? "-2px" : "24px")};
    }

    & > div:first-child > p:first-child {
      font-size: 24px;
      line-height: 36px;
    }

    & > div:first-child > p {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
