export const API_URL = "https://eternalai.onrender.com/graphql";

export const IMAGE_BASE_URL = "eternalai.s3.us-east-2.amazonaws.com";

export const IMAGE_BASE_PATH = "/pictures_pack/**";

export enum APP_ROUTES {
  Home = "/",
  Menu = "/menu",
  Chat = "/chat/",
  Signin = "/auth/signin",
  Signup = "/auth/signup",
  About = "/auth/about",
  Details = "/auth/details",
  NewPassword = "/auth/new-password",
  Paywall = "/paywall",
  Cardpay = "/paywall/cardpay",
  Subscribed = "/paywall/subscribed",
}

export enum StorageCellEnum {
  USER = "@eternal-user",
}

const BASE_API_URL = "https://eternalai.onrender.com";
export const GET_API_URL = `${BASE_API_URL}/graphql`;
export const REFRESH_URL = `${BASE_API_URL}/tokens-refresh`;
export const REGISTRATION_URL = `${BASE_API_URL}/us-registration`;
export const LOGIN_URL = `${BASE_API_URL}/us-login`;
export const GOOGLE_AUTH_API = `${BASE_API_URL}/auth/google`;
export const PROFILE_DETAILS_URL = `${BASE_API_URL}/us-change-info`;
export const RESET_PASSWORD_URL = `${BASE_API_URL}/us-forgotpassword`;
export const SET_NEW_PASSWORD = `${BASE_API_URL}/us-changeForgottenPassword`;

export const REQUEST_HEADERS_POST = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Content-Security-Policy": "default-src self",
};

export const REQUEST_HEADERS_GET = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Content-Security-Policy": "default-src self",
};
