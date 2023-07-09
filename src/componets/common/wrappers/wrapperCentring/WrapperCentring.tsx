import { FC } from "react";
import styled from "styled-components";

interface IWrapperCentringProps {
  minHeight?: number;
  children: React.ReactNode;
}

const WrapperCentring: FC<IWrapperCentringProps> = ({
  children,
  minHeight,
}) => {
  return (
    <StyledWrapperCentring minHeight={minHeight}>
      {children}
    </StyledWrapperCentring>
  );
};

const StyledWrapperCentring = styled.div<{ minHeight?: number }>`
  width: 100%;
  height: 100%;
  min-height: ${(props) => (props.minHeight ? props.minHeight + "px" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow: hidden;
`;

export default WrapperCentring;
