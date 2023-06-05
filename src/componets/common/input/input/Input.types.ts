import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  inputValue: string | null;
  isRequired?: boolean;
  autofocus?: boolean;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
