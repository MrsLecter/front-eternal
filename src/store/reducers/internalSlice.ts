import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUserQuestion } from "../../../types/app-common.types";

interface IInternalData {
  dialog: string[][];
  firstMessage: boolean;
  isHaveNewQuestion: string;
  userQuestionType: TUserQuestion;
  // showCommonModal: boolean;
  // showMenuModal: boolean;
  // showLoginModal: boolean;
  // showSignupModal: boolean;
  // showAboutModal: boolean;
  // showRestorePasswordModal: boolean;
  // showPaywallModal: boolean;
  // showPaywallCardpayModal: boolean;
  // showPaywallPricingModal: boolean;
  // showPaywallResultModal: boolean;
  // isSmallHeader: boolean;
  isTypingAllowed: boolean;
  // temp: string;
  internalSoulid: number;
}

const internalSetting: IInternalData = {
  dialog: [],
  firstMessage: false,
  isHaveNewQuestion: "",
  userQuestionType: "intro",
  // showCommonModal: false,
  // showMenuModal: false,
  // showLoginModal: false,
  // showSignupModal: false,
  // showAboutModal: false,
  // showRestorePasswordModal: false,
  // showPaywallModal: false,
  // showPaywallPricingModal: false,
  // showPaywallCardpayModal: false,
  // showPaywallResultModal: false,
  // isSmallHeader: false,
  isTypingAllowed: false,
  // temp: "",
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

    // showMenuModal(state) {
    //   state.showCommonModal = !state.showCommonModal;
    //   state.showMenuModal = !state.showMenuModal;
    // },

    // showReadAboutModal(state) {
    //   state.showCommonModal = true;
    //   state.showAboutModal = true;
    // },

    // backdropClick(state) {
    //   state.showCommonModal = false;
    //   state.showMenuModal = false;
    //   state.isSmallHeader = false;
    //   state.showLoginModal = false;
    //   state.showSignupModal = false;
    //   state.showAboutModal = false;
    //   state.showPaywallModal = false;
    //   state.showPaywallCardpayModal = false;
    //   state.showPaywallPricingModal = false;
    //   state.showPaywallResultModal = false;
    //   state.showRestorePasswordModal = false;
    // },

    // toggleToLogin(state) {
    //   state.showCommonModal = true;
    //   state.showMenuModal = false;
    //   state.showLoginModal = true;
    //   state.isSmallHeader = true;
    //   state.showSignupModal = false;
    // },

    // toggleToSignup(state) {
    //   state.showCommonModal = true;
    //   state.showMenuModal = false;
    //   state.showLoginModal = false;
    //   state.isSmallHeader = true;
    //   state.showSignupModal = true;
    // },

    // toggleLoginSignup(state) {
    //   state.showCommonModal = true;
    //   state.showLoginModal = !state.showLoginModal;
    //   state.showSignupModal = !state.showSignupModal;
    // },

    // toggleToAbout(state) {
    //   state.showCommonModal = true;
    //   state.showAboutModal = true;
    //   state.isSmallHeader = true;
    //   state.showMenuModal = false;
    // },

    // toggleToPayment(state) {
    //   state.showPaywallModal = true;
    //   state.showPaywallPricingModal = true;
    // },

    // toggleToCardpay(state) {
    //   state.showPaywallModal = true;
    //   state.showPaywallPricingModal = false;
    //   state.showPaywallCardpayModal = true;
    // },

    // toggleToResult(state) {
    //   state.showPaywallModal = true;
    //   state.showPaywallCardpayModal = false;
    //   state.showPaywallResultModal = true;
    // },

    // toggleLoginChangePassword(state) {
    //   state.showLoginModal = !state.showLoginModal;
    //   state.showRestorePasswordModal = !state.showRestorePasswordModal;
    // },

    disallowTyping(state) {
      state.isTypingAllowed = false;
    },

    allowTyping(state) {
      state.isTypingAllowed = true;
    },

    // setTemp(state, action: PayloadAction<{ message: string }>) {
    //   state.temp = action.payload.message;
    // },

    // deleteTemp(state) {
    //   state.temp = "";
    // },

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
