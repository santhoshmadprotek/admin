export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
export const PHONE_NUMBER_REGEX = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
export const USERNAME_REGEX = /^[a-z](?:[a-z]+\d*|\d{2,})$/i;
export const CATEGORIES = ["Living Room","Bed Room", "Kitchen", "others"];
export const loginApiUrl = "http://apmapi.activepackersmovers.in/api/admin/admin_login/";