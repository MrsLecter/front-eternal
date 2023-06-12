import {
  StyledWrapperModal,
  StyledWrapperModalContainer,
} from "./WrapperModal.styles";
import { IWrapperModal } from "./WrapperModal.types";

const WrapperModal: React.FC<IWrapperModal> = ({
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
    <StyledWrapperModalContainer
      width={width}
      noBorder={noBorder}
      isPayment={isPayment}
      maxHeight={maxHeight}
      minHeight={minHeight}
      marginTop={marginTop}
     
    >
      <StyledWrapperModal
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
      </StyledWrapperModal>
    </StyledWrapperModalContainer>
  );
};

export default WrapperModal;
