import { StorageCellEnum } from "@/constants/common";
import { ILocalStorageData, IUserData } from "../../types/app-common.types";

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
      refreshToken,
      shareLink,
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
      refreshToken: "",
      shareLink: true,
    };

    localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userDataObject));
  }

  public signup({
    id,
    email,
    accessToken,
    refreshToken,
  }: {
    id: number;
    email: string;
    accessToken: string;
    refreshToken: string;
  }) {
    const userDataObject = {
      id,
      email,
      accessToken,
      refreshToken,
      name: null,
      nextpayment: null,
      questionsamount: 0,
      readabout: false,
      shareLink: false,
    };

    localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userDataObject));
  }

  public setIsReadAbout() {
    const userData = localStorage.getItem(StorageCellEnum.USER);

    if (userData) {
      const userDataObject = JSON.parse(userData);
      userDataObject.readAbout = true;
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
    const currDate = new Date();

    if (userData) {
      const userDataObject = JSON.parse(userData);
      if (userDataObject.questionsamount !== "Infinity") {
        userDataObject.questionsamount = userDataObject.questionsamount--;
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
      userDataObject.questionsamount = 3;
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
      userDataObject.refreshToken = refreshToken;
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
}

const localStorageHandler = new LocalStorageHandler();

export default localStorageHandler;
