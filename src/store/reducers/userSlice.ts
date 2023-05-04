import { IUserData } from "@/types/common.types";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const userSetting: IUserData = {
  email: "",
  questionsAmount: 0,
  smsAvailable: false,
  readAbout: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userSetting,
  reducers: {
    setEmail(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
    },

    setReadAbout(state) {
      state.readAbout = true;
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

    changePassword(state, action: PayloadAction<{ password: string }>) {
      return {
        ...state,
        password: action.payload.password,
      };
    },

    setQestion(state, action: PayloadAction<{ questionsAmount: number }>) {
      state.questionsAmount = action.payload.questionsAmount;
    },

    setSms(state, action: PayloadAction<{ smsAvailable: boolean }>) {
      state.smsAvailable = action.payload.smsAvailable;
    },
  },
});

export default userSlice.reducer;
