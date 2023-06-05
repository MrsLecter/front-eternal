import { ChangeEvent } from "react";

export interface ICardNumberInputProps {
  cardNumberValue: string;
  cardNumberChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  mmyyValue: string;
  mmyyChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  cvvValue: string;
  cvvChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  isHeigh: boolean;
  haveFocus: boolean;
}
