export const PHONE_REGEXP = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
export const CODE_REGEXP = /[0-9]{6}/g;
export const EMAIL_REGEXP =
  /([a-z0-9._%+-]{3,200})+(@[a-z0-9.-]{4,20})+(.[a-z]{2,20})$/;
export const PASSWORD_REGEXP =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
