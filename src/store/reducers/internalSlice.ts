import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUserQuestion } from "../../../types/app-common.types";

interface IInternalData {
  dialog: string[][];
  firstMessage: boolean;
  isHaveNewQuestion: string;
  userQuestionType: TUserQuestion;
  isTypingAllowed: boolean;
  internalSoulid: number;
}

const internalSetting: IInternalData = {
  dialog: [],
  firstMessage: false,
  isHaveNewQuestion: "",
  userQuestionType: "intro",
  isTypingAllowed: false,
  internalSoulid: 0,
};

export const internalSlice = createSlice({
  name: "internal",
  initialState: internalSetting,
  reducers: {
    deleteDialog(state) {
      state.dialog = [];
    },

    restoreDialog(
      state,
      action: PayloadAction<{
        oldDialog: string[][];
      }>
    ) {
      const oldDialogReversed = action.payload.oldDialog;
      state.dialog = [...oldDialogReversed];
    },

    addToDialog(state, action: PayloadAction<{ message: string[] }>) {
      state.dialog = [...state.dialog, action.payload.message];
    },

    addHistory(state, action: PayloadAction<{ message: string[][] }>) {
      state.dialog = state.dialog.filter(
        (item) => item[0] !== "soul intro" && item[0] !== "position"
      );
      const reversedMessages = action.payload.message.reverse();
      state.dialog = [["position", ""], ...state.dialog];
      state.dialog = [...reversedMessages, ...state.dialog];
    },

    deleteLastDialogMessage(state) {
      state.dialog.pop();
    },

    deleteFirstMessage(state) {
      state.firstMessage = false;
    },

    setFirstMessage(
      state,
      action: PayloadAction<{ type: TUserQuestion; message?: string[] }>
    ) {
      state.firstMessage = true;
      state.userQuestionType = action.payload.type;
      if (action.payload.message) state.dialog.push(action.payload.message);
    },

    disallowTyping(state) {
      state.isTypingAllowed = false;
    },

    allowTyping(state) {
      state.isTypingAllowed = true;
    },

    setSoulId(state, action: PayloadAction<{ soulid: number }>) {
      state.internalSoulid = action.payload.soulid;
    },

    deleteSoulId(state) {
      state.internalSoulid = 0;
    },
  },
});

export const {
  deleteDialog,
  restoreDialog,
  addToDialog,
  addHistory,
  deleteLastDialogMessage,
  deleteFirstMessage,
  setFirstMessage,
  disallowTyping,
  allowTyping,
  setSoulId,
  deleteSoulId,
} = internalSlice.actions;

export default internalSlice.reducer;
