import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInternalData {
  dialog: string[];
  firstMessage: string;
  isUserMessageFirst: boolean;
}

const internalSetting: IInternalData = {
  dialog: [],
  firstMessage: "",
  isUserMessageFirst: false,
};

export const internalSlice = createSlice({
  name: "internal",
  initialState: internalSetting,
  reducers: {
    deleteDialog(state) {
      state.dialog = [];
    },

    addToDialog(state, action: PayloadAction<{ message: string }>) {
      state.dialog.push(action.payload.message);
    },

    deleteLastDialogMessage(state) {
      state.dialog.pop();
    },

    deleteFirstMessage(state) {
      state.firstMessage = "";
    },

    setFirstMessage(state, action: PayloadAction<{ message: string }>) {
      state.firstMessage = action.payload.message;
    },

    setUserMessageFirst(
      state,
      action: PayloadAction<{ isUserMessageFirst: boolean }>
    ) {
      state.isUserMessageFirst = action.payload.isUserMessageFirst;
    },
  },
});

export default internalSlice.reducer;
