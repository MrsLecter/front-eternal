import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUserQuestion } from "../../../types/app-common.types";

interface IInternalData {
  dialog: string[];
  firstMessage: string;
  isUserMessageFirst: boolean;
  userQuestionType: TUserQuestion;
  showCommonModal: boolean;
  showMenuModal: boolean;
  showLoginModal: boolean;
  showSignupModal: boolean;
  showAboutModal: boolean;
  showRestorePasswordModal: boolean;
  showPaywallModal: boolean;
  showPaywallCardpayModal: boolean;
  showPaywallPricingModal: boolean;
  showPaywallResultModal: boolean;
  isSmallHeader: boolean;
  isTypingAllowed: boolean;
}

const internalSetting: IInternalData = {
  dialog: [],
  firstMessage: "",
  isUserMessageFirst: false,
  userQuestionType: "intro",
  showCommonModal: false,
  showMenuModal: false,
  showLoginModal: false,
  showSignupModal: false,
  showAboutModal: false,
  showRestorePasswordModal: false,
  showPaywallModal: false,
  showPaywallPricingModal: false,
  showPaywallCardpayModal: false,
  showPaywallResultModal: false,
  isSmallHeader: false,
  isTypingAllowed: false,
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

    setFirstMessage(
      state,
      action: PayloadAction<{ message: string; type: TUserQuestion }>
    ) {
      state.firstMessage = action.payload.message;
      state.userQuestionType = action.payload.type;
    },

    setUserMessageFirst(
      state,
      action: PayloadAction<{ isUserMessageFirst: boolean }>
    ) {
      state.isUserMessageFirst = action.payload.isUserMessageFirst;
    },

    showMenuModal(state) {
      state.showCommonModal = !state.showCommonModal;
      state.showMenuModal = !state.showMenuModal;
    },

    backdropClick(state) {
      state.showCommonModal = false;
      state.showMenuModal = false;
      state.isSmallHeader = false;
      state.showLoginModal = false;
      state.showSignupModal = false;
      state.showAboutModal = false;
      state.showPaywallModal = false;
      state.showPaywallCardpayModal = false;
      state.showPaywallPricingModal = false;
      state.showPaywallResultModal = false;
      state.showRestorePasswordModal = false;
    },

    toggleToLogin(state) {
      state.showCommonModal = true;
      state.showMenuModal = false;
      state.showLoginModal = true;
      state.isSmallHeader = true;
      state.showSignupModal = false;
    },

    toggleToSignup(state) {
      state.showCommonModal = true;
      state.showMenuModal = false;
      state.showLoginModal = false;
      state.isSmallHeader = true;
      state.showSignupModal = true;
    },

    toggleLoginSignup(state) {
      state.showCommonModal = true;
      state.showLoginModal = !state.showLoginModal;
      state.showSignupModal = !state.showSignupModal;
    },

    toggleToAbout(state) {
      state.showCommonModal = true;
      state.showAboutModal = true;
      state.isSmallHeader = true;
      state.showMenuModal = false;
    },

    toggleToPayment(state) {
      state.showPaywallModal = true;
      state.showPaywallPricingModal = true;
    },

    toggleToCardpay(state) {
      state.showPaywallModal = true;
      state.showPaywallPricingModal = false;
      state.showPaywallCardpayModal = true;
    },

    toggleToResult(state) {
      state.showPaywallModal = true;
      state.showPaywallCardpayModal = false;
      state.showPaywallResultModal = true;
    },

    toggleLoginChangePassword(state) {
      state.showLoginModal = !state.showLoginModal;
      state.showRestorePasswordModal = !state.showRestorePasswordModal;
    },

    disallowTyping(state) {
      state.isTypingAllowed = false;
    },

    allowTyping(state) {
      state.isTypingAllowed = true;
    },
  },
});

export default internalSlice.reducer;
