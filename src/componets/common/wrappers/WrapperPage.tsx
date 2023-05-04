import styled from "styled-components";

interface IWrapperPageProps {
  children: React.ReactNode;
  color: string;
}

const WrapperPage: React.FC<IWrapperPageProps> = ({ children, color }) => {
  return (
    <StyledBackground background={color}>
      <StyledMainContent>{children}</StyledMainContent>
    </StyledBackground>
  );
};

const StyledBackground = styled.div<{ background: string }>`
  /* position: relative; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props) => props.background};
  z-index: -3;
  /* background-image: linear-gradient(
    115deg,
    rgba(88, 51, 239, 0.2) 0.5%,
    rgba(29, 29, 36, 0) 12%
  ); */
`;

const StyledMainContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1640px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default WrapperPage;
