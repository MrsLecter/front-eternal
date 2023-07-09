import { createSlice } from "@reduxjs/toolkit";

interface IModalData {
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
}

const modalSetting: IModalData = {
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
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: modalSetting,
  reducers: {
    showMenuModal(state) {
      state.showCommonModal = !state.showCommonModal;
      state.showMenuModal = !state.showMenuModal;
    },

    showReadAboutModal(state) {
      state.showCommonModal = true;
      state.showAboutModal = true;
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
  },
});

export const {
  showMenuModal,
  showReadAboutModal,
  backdropClick,
  toggleToLogin,
  toggleToSignup,
  toggleLoginSignup,
  toggleToAbout,
  toggleToPayment,
  toggleToCardpay,
  toggleToResult,
  toggleLoginChangePassword,
} = modalSlice.actions;

export default modalSlice.reducer;
