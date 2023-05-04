export type useInputProps = {
  initialValue?: string;
  regexp: RegExp | "none";
  allowEmpty: boolean;
  mask?: string;
  maskType?: "phone" | "mmyy" | "cardnumber" | "cvc";
};
