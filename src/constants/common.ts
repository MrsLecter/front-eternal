export const API_URL = "https://eternalai.onrender.com/graphql";
export const SITE_URL = "front-eternal.vercel.app";

export const IMAGE_BASE_URL = "eternalai.s3.us-east-2.amazonaws.com";

export const IMAGE_BASE_PATH = "/pictures_pack/**";

export enum APP_SETTING {
  TabResolution = 870,
  PhoneResolution = 370,
}

export enum APP_ROUTES {
  Home = "/",
  Chat = "/chat/",
  Details = "/auth/details",
}

export enum StorageCellEnum {
  USER = "@eternal-user",
}

const BASE_API_URL = "https://eternalai.onrender.com";
export const GET_API_URL = `${BASE_API_URL}/graphql`;
export const REFRESH_URL = `${BASE_API_URL}/tokens-refresh`;
export const REGISTRATION_URL = `${BASE_API_URL}/us-registration`;
export const LOGIN_URL = `${BASE_API_URL}/us-login`;
export const GOOGLE_AUTH_URL = `${BASE_API_URL}/us-google-auth`;
export const PROFILE_DETAILS_URL = `${BASE_API_URL}/us-change-info`;
export const RESET_PASSWORD_URL = `${BASE_API_URL}/us-forgotpassword`;
export const SET_NEW_PASSWORD = `${BASE_API_URL}/us-changeForgottenPassword`;
export const CHANGE_PASSWORD = `${BASE_API_URL}/us-changepassword`;
export const SET_READABOUT_URL = `${BASE_API_URL}/us-change-readabout`;
export const SET_PRO_SUBSCRIPTION = `${BASE_API_URL}/subscription`;
export const SET_FREE_SUBSCRIPTION = `${BASE_API_URL}/add-free-quest`;
export const ASK_QUESTION = `${BASE_API_URL}/one-question`;
export const UPDATE_SUBSCRIPTION_URL = `${BASE_API_URL}/update-subscription`;
export const CANCEL_SUBSCRIPTION_URL = `${BASE_API_URL}/cancel-subscription`;
export const GET_HISTORY_URL = `${BASE_API_URL}/chat-history`;

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

export const CRYPTO_SECRET = "6qCy6FCyh9T8s794tuifrD0ZHG85sksZ";
export const CARD_NUMBER = "4242424242424242";

export const SHARE_LINK_MESSAGE =
  "Do you have questions but don't know who to ask? What would famous people say? Visit the front-eternal.vercel.app to use EternalAI and find out the answer.";

export enum PUSHER_DATA {
  Secret = "be880910ccf5fa1d98b3",
  ChatId = "eternalai-chat-",
  EventName = "message",
}
