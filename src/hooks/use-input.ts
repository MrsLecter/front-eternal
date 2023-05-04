import { useState, ChangeEvent } from "react";
import { useInputProps } from "./use-input.types";

export const useInput = (props: useInputProps) => {
  const { regexp, allowEmpty, mask, maskType, initialValue = "" } = props;

  const [input, setInput] = useState(initialValue);
  const [inputIsValid, setInputIsValid] = useState(true);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value.match(regexp)
      ? setInputIsValid(true)
      : setInputIsValid(false);

    if (allowEmpty && event.target.value.trim().length === 0) {
      setInputIsValid(true);
    }

    if (
      regexp === "none" &&
      !allowEmpty &&
      event.target.value.trim().length !== 0
    ) {
      setInputIsValid(true);
    }
    setInput(event.target.value);
  };

  return {
    value: input,
    error: inputIsValid,
    changeHandler: inputChangeHandler,
  };
};
