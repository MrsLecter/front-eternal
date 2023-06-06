import { StyledInputRounded, StyledInputWrapper } from "./Input.styles";
import { IInputProps } from "./Input.types";

export const Input: React.FC<IInputProps> = ({
  label="",
  type,
  placeholder="",
  inputValue="",
  isRequired = true,
  autofocus = false,
  maxLen = 300,
  onChangeHandler,
}) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={type}>{label}</label>
      <StyledInputRounded
        value={inputValue as string}
        onChange={(event) => onChangeHandler(event)}
        type={type}
        placeholder={placeholder}
        name={type}
        required={isRequired}
        maxLength={maxLen}
        autoFocus={autofocus}
      />
    </StyledInputWrapper>
  );
};

export default Input;