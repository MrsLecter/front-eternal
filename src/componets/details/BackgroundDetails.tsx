import styled from "styled-components";

const BackgroundDetails: React.FC = () => {
  return (
    <StyledBackgroundDetails>
      <StyledTopGradient />
      <StyledBottomGradient />
    </StyledBackgroundDetails>
  );
};

const StyledTopGradient = styled.div`
  position: absolute;
  width: 1624px;
  height: 510px;
  top: -38px;
  right: -326px;
  background: linear-gradient(89.43deg, #f82d98 26.75%, #5833ef 77.55%);
  opacity: 0.3;
  mix-blend-mode: normal;
  filter: blur(168px);
  border: 1px solid red;
`;

const StyledBottomGradient = styled.div`
  position: absolute;
  width: 1624px;
  height: 510px;
  left: -301px;
  top: 711px;
  background: linear-gradient(89.43deg, #f82d98 26.75%, #5833ef 77.55%);
  mix-blend-mode: normal;
  opacity: 0.1;
  filter: blur(168px);
  border: 1px solid red;
`;

const StyledBackgroundDetails = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  background: #1e1e1e;
`;

export default BackgroundDetails;
