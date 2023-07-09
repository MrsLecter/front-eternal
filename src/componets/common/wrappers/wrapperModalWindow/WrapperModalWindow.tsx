import { FC } from "react";
import {
  StyledWrapperModalWindow,
  StyledWrapperModalWindowContainer,
} from "./WrapperModalWindow.styles";
import { IWrapperModalWindow } from "./WrapperModalWindow.types";

const WrapperModalWindow: FC<IWrapperModalWindow> = ({
  children,
  header,
  text,
  textSecond,
  width,
  noBorder = false,
  isPaddingSmall = false,
  isPayment = false,
  maxHeight = 0,
  minHeight = 0,
  marginTop = 0,
}) => {
  return (
    <StyledWrapperModalWindowContainer
      width={width}
      noBorder={noBorder}
      isPayment={isPayment}
      maxHeight={maxHeight}
      minHeight={minHeight}
      marginTop={marginTop}
    >
      <StyledWrapperModalWindow
        noBorder={noBorder}
        paddingSmall={isPaddingSmall}
        isPayment={isPayment}
        id="modalActive"
      >
        {header || text ? (
          <div>
            {header ? <p>{header}</p> : <></>}
            {text ? <p>{text}</p> : <></>}
            {textSecond ? <p>{textSecond}</p> : <></>}
          </div>
        ) : (
          <></>
        )}

        {children}
      </StyledWrapperModalWindow>
    </StyledWrapperModalWindowContainer>
  );
};

export default WrapperModalWindow;
