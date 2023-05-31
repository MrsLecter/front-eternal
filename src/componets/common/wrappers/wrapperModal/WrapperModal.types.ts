export interface IWrapperModal {
  children: React.ReactNode;
  header?: string;
  text?: string;
  textSecond?: string;
  width: string;
  noBorder?: boolean;
  isPaddingSmall?: boolean;
  isPayment?: boolean;
  minHeight?: number;
  maxHeight?: number;
  marginTop?: number;
}
