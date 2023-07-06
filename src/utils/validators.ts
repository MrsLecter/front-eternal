export const isValidInput = (
  value: string,
  type: "phone" | "mmyy" | "cardnumber" | "cvc" | undefined
): boolean => {
  if (type === "phone" && value.length > 14) {
    return true;
  }

  if (type === "mmyy" && value.length > 4) {
    const month = +value.split("/")[0];
    const year = +value.split("/")[1];
    
    if (month > 0 && month <= 12 && year >= 23 && year < 28) {
      return true;
    }
  }

  if (type === "cardnumber" && value.length > 18) {
    return true;
  }

  if (type === "cvc" && value.length > 2) {
    return true;
  }

  return false;
};
