import { StorageCellEnum } from "@/constants/common";
import {
  ILocalStorageData,
  ISoulsData,
  IUserData,
} from "../../types/app-common.types";
import { getExpiresTokenDate } from "./functions";

class LocalStorageHandler {
  public signin({
    id,
    email,
    name,
    phone,
    nextpayment,
    questionsamount,
    readabout,
    accessToken,
    refreshToken,
    shareLink,
  }: ILocalStorageData) {
    const userDataObject = {
      id,
      email,
      name,
      phone,
      nextpayment,
      questionsamount,
      readabout,
      accessToken,
      expiresIn: getExpiresTokenDate(),
      refreshToken,
      shareLink,
      isGoogleAuth: false,
    };

    localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userDataObject));
  }

  public signout() {
    const userDataObject = {
      id: 0,
      email: "",
      name: "",
      phone: "",
      nextpayment: "",
      questionsamount: 1,
      readabout: false,
      accessToken: "",
      expiresIn: null,
      refreshToken: "",
      shareLink: true,
    };

    localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userDataObject));
  }

  public getTokenExpireDate() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.expiresIn;
    }
  }

  public getReadAbout() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.readabout;
    }
  }

  public setIsReadAbout() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.readabout = true;

      localStorage.setItem(
        StorageCellEnum.USER,
        JSON.stringify(userDataObject)
      );
    }
  }

  public setProPlan() {
    const userData = localStorage.getItem(StorageCellEnum.USER);
    const currDate = new Date();

    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.questionsamount = "Infinity";
      userDataObject.nextpayment = new Date(
        currDate.setMonth(currDate.getMonth() + 1)
      );

      localStorage.setItem(
        StorageCellEnum.USER,
        JSON.stringify(userDataObject)
      );
    }
  }

  public deleteOneQuestion() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);

      if (userDataObject.questionsamount !== "Infinity") {
        userDataObject.questionsamount = userDataObject.questionsamount - 1;
      }

      localStorage.setItem(
        StorageCellEnum.USER,
        JSON.stringify(userDataObject)
      );
    }
  }

  public getNextPayment() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.nextpayment;
    }
  }

  public setFreePaln() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.questionsamount = 5;

      localStorage.setItem(
        StorageCellEnum.USER,
        JSON.stringify(userDataObject)
      );
    }
  }

  public cancelSubscription() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.nextpayment = null;
      userDataObject.questionsamount = 0;

      localStorage.setItem(
        StorageCellEnum.USER,
        JSON.stringify(userDataObject)
      );
    }
  }

  public getAccessToken() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.accessToken;
    }
  }

  public getRefreshToken() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.refreshToken;
    }
  }

  public getUserId() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      return userDataObject.id;
    }
  }

  public updateTokens({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.accessToken = accessToken;
      userDataObject.expiresIn = getExpiresTokenDate();
      userDataObject.refreshToken = refreshToken;
      userDataObject.isGoogleAuth = false;

      localStorage.setItem(
        StorageCellEnum.USER,
        JSON.stringify(userDataObject)
      );
    }
  }

  public deleteUsersData() {
    localStorage.removeItem(StorageCellEnum.USER);
  }

  public setUserEmailPassword({ email }: IUserData) {
    const userDataObject = {
      email,
      questionsamount: 0,
      smsAvailable: false,
    };

    localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userDataObject));
  }

  public updateDialog({ dialog }: { dialog: string[][] }) {
    const dialogObject = {
      dialog,
    };

    localStorage.setItem(StorageCellEnum.DIALOG, JSON.stringify(dialogObject));
  }

  public getDialog():
    | {
        dialog: string[][];
      }
    | undefined {
    const dialogData = localStorage.getItem(StorageCellEnum.DIALOG);

    if (dialogData) {
      const dialogDataObject = JSON.parse(dialogData);
      return dialogDataObject;
    }
  }

  public removeDialog() {
    localStorage.removeItem(StorageCellEnum.DIALOG);
  }

  public setSoulData(data: ISoulsData) {
    localStorage.setItem(StorageCellEnum.SOUL_DATA, JSON.stringify(data));
  }

  public getSoulData(): ISoulsData | undefined {
    const soulData = localStorage.getItem(StorageCellEnum.SOUL_DATA);

    if (soulData) {
      return JSON.parse(soulData);
    }
  }

  public removeSoulData() {
    localStorage.removeItem(StorageCellEnum.SOUL_DATA);
  }

  public updateUserDetails({
    name,
    email,
    phone,
  }: {
    name: string;
    email: string;
    phone: string;
  }) {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userObject = JSON.parse(userData);
      userObject.email = email;
      userObject.name = name;
      userObject.phone = phone;

      localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userObject));
    }
  }

  public setGoogleAuth() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userObject = JSON.parse(userData);
      userObject.isGoogleAuth = true;

      localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userObject));
    }
  }

  public getGoogleAuth() {
    const userData = localStorage.getItem(StorageCellEnum.USER);
    if (userData) {
      const userObject = JSON.parse(userData);
      return userObject.isGoogleAuth;
    }
  }
}

const localStorageHandler = new LocalStorageHandler();

export default localStorageHandler;
