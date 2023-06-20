import { StyledInputRounded, StyledInputWrapper } from "./Input.styles";
import { IInputProps } from "./Input.types";

export const Input: React.FC<IInputProps> = (props) => {
  const {
    label = "",
    type,
    placeholder = "",
    inputValue = "",
    isRequired = true,
    autofocus = false,
    maxLen = 300,
    onChangeHandler,
    ...defaultProps
  } = props;
  return (
    <StyledInputWrapper>
      <label htmlFor={type}>{label}</label>
      <StyledInputRounded
        value={inputValue ? inputValue : ""}
        onChange={(event) => onChangeHandler(event)}
        type={type}
        placeholder={placeholder}
        name={type}
        required={isRequired}
        maxLength={maxLen}
        autoFocus={autofocus}
        {...defaultProps}
      />
    </StyledInputWrapper>
  );
};

export default Input;
