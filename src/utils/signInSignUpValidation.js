import { PASSWORD_REGEX } from "./constants";
import { PHONE_NUMBER_REGEX } from "./constants";

export const signInsignUpValidation = (PhoneNumber, password) => {
  if (
    !PASSWORD_REGEX.test(password) || !PHONE_NUMBER_REGEX.test(PhoneNumber)
  ) {
    return "Invalid PhoneNumber or Password";
  } else {
    return null;
  }
};
