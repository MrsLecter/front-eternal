import { setNextPayment } from "@/utils/functions";
import { IUserData } from "../../../types/app-common.types";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const userSetting: IUserData = {
  id: 0,
  email: "",
  name: "",
  phone: "",
  nextPayment: "",
  questionsAmount: "Infinity",
  readAbout: false,
  shareLink: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userSetting,
  reducers: {
    setEmail(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
    },

    signin(
      state,
      action: PayloadAction<{
        id: number;
        email: string;
        name: string;
        phone: string;
        nextPayment: string | Date;
        questionsAmount: number | string;
        readAbout: boolean;
        shareLink: boolean;
      }>
    ) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.nextPayment = action.payload.nextPayment as Date;
      state.questionsAmount = action.payload.questionsAmount;
      state.readAbout = action.payload.readAbout;
      state.shareLink = action.payload.shareLink;
    },

    signout(state) {
      (state.id = 0), (state.email = "");
      state.name = "";
      state.phone = "";
      state.nextPayment = "";
      state.questionsAmount = 1;
      state.readAbout = false;
      state.shareLink = true;
    },

    setReadAbout(state) {
      state.readAbout = true;
    },

    setFreePlan(state) {
      if (!state.shareLink) {
        state.questionsAmount = 3;
        state.shareLink = true;
      }
    },

    setProPlan(state) {
      state.questionsAmount = "Infinity";
      state.nextPayment = setNextPayment();
    },

    cancelSubscription(state) {
      state.nextPayment = "";
    },

    setNamePhone(
      state,
      action: PayloadAction<{ name: string; phone: string }>
    ) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },

    changePhone(state, action: PayloadAction<{ phone: string }>) {
      return {
        ...state,
        phone: action.payload.phone,
      };
    },

    setQestion(state, action: PayloadAction<{ questionsAmount: number }>) {
      state.questionsAmount = action.payload.questionsAmount;
    },

    removeOneQuestion(state) {
      if (state.questionsAmount !== "Infinity") {
        state.questionsAmount = +state.questionsAmount - 1;
      }
    },
  },
});

export default userSlice.reducer;
