import styled from "styled-components";

interface IWrapperModal {
  children: React.ReactNode;
  header?: string;
  text?: string;
  width: string;
  noBorder?: boolean;
}

const WrapperModal: React.FC<IWrapperModal> = ({
  children,
  header,
  text,
  width,
  noBorder = false,
}) => {
  return (
    <StyledWrapperModalContainer width={width} noBorder={noBorder}>
      <StyledWrapperModal noBorder={noBorder}>
        {header || text ? (
          <div>
            {header && <p>{header}</p>}
            {text && <p>{text}</p>}
          </div>
        ) : (
          <></>
        )}

        {children}
      </StyledWrapperModal>
    </StyledWrapperModalContainer>
  );
};

const StyledWrapperModalContainer = styled.div<{
  width: string;
  noBorder: boolean;
}>`
  position: relative;
  width: ${(props) => props.width + "px"};
  padding: 2px;
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

  @media (max-width: 530px) {
    width: 343px;
    border: ${(props) =>
      props.noBorder && " 1px solid rgba(255, 255, 255, 0.4)"};
  }
`;

const StyledWrapperModal = styled.div<{ noBorder: boolean }>`
  width: 100%;
  max-height: calc(100vh - 300px);
  padding: 48px;
  border-radius: 32px;
  background-image: ${(props) =>
    props.noBorder
      ? "linear-gradient(90.83deg, rgba(4, 4, 16, 0.6) 11.84%, rgba(15, 3, 6, 0.6) 111.32%);"
      : "linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%)"};
  color: ${({ theme }) => theme.color.white};
  overflow-y: auto;

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

  & > div:first-child {
    width: 100%;
    height: 100%;
    margin-bottom: 32px;
  }

  @media (max-width: 530px) {
    width: 339px;
    & > div:first-child {
      margin-bottom: 0px;
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

export default WrapperModal;
