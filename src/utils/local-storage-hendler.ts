import { StorageCellEnum } from "@/constants/common";
import { IUserData } from "@/types/common.types";

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
  }: {
    id: number;
    email: string;
    name: string | null;
    phone: string | null;
    nextpayment: string | null;
    questionsamount: number;
    readabout: boolean;
    accessToken: string;
    refreshToken: string;
  }) {
    const userDataObject = {
      id,
      email,
      name,
      nextpayment,
      questionsamount,
      readabout,
      accessToken,
      refreshToken,
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
      questionsAmount: 0,
      smsAvailable: false,
    };
    localStorage.setItem(StorageCellEnum.USER, JSON.stringify(userDataObject));
  }
}

const localStorageHandler = new LocalStorageHandler();

export default localStorageHandler;
