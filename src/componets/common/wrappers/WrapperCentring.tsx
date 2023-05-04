import styled from "styled-components";

const WrapperCentring: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledWrapperCentring>{children}</StyledWrapperCentring>;
};

const StyledWrapperCentring = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow-x: hidden;
`;

export default WrapperCentring;
