import Image from "next/image";
import cardIcon from "@icons/card.svg";
import { ICardNumberInputProps } from "./CardNumberInput.types";
import {
  StyledCardInput,
  StyledCardNumberInput,
  StyledCodeInput,
  StyledDateInput,
  StyledImageWrapper,
} from "./CardNumberInput.styles";

const CardNumberInput: React.FC<ICardNumberInputProps> = (props) => {
  const inputHeight = props.isHeigh ? "62px" : "56px";
  return (
    <StyledCardNumberInput inputHeight={inputHeight}>
      <StyledCardInput
        type="text"
        placeholder={"Card Number"}
        name={"cardNumber"}
        required
        maxLength={19}
        value={props.cardNumberValue}
        onChange={(event) => props.cardNumberChangeHandler(event)}
        autoFocus={props.haveFocus}
      />
      <StyledImageWrapper>
        <Image width={24} height={16} alt="cardIcon.svg" src={cardIcon} />
      </StyledImageWrapper>
      <StyledDateInput
        type="text"
        placeholder={"MM / YY"}
        name={"cardDate"}
        required
        maxLength={5}
        value={props.mmyyValue}
        onChange={(event) => props.mmyyChangeHandler(event)}
      />
      <StyledCodeInput
        type="text"
        placeholder={"CVC"}
        name={"cardCode"}
        required
        maxLength={3}
        value={props.cvvValue}
        onChange={(event) => props.cvvChangeHandler(event)}
      />
    </StyledCardNumberInput>
  );
};

export default CardNumberInput;
