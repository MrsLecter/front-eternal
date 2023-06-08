import { StorageCellEnum } from "@/constants/common";
import { ILocalStorageData } from "../../types/app-common.types";
import { useAppDispatch } from "./reducers.hook";
import { userSlice } from "@/store/reducers/userSlice";

export const useSync = () => {
  const dispatch = useAppDispatch();
  const { signin } = userSlice.actions;
  return () => {
    let localData = localStorage.getItem(StorageCellEnum.USER);
    if (localData) {
      const parsedData: ILocalStorageData = JSON.parse(localData);
      dispatch(
        signin({
          id: parsedData.id,
          email: parsedData.email,
          name: parsedData.name!,
          phone: parsedData.phone!,
          nextPayment: parsedData.nextpayment as string,
          questionsAmount: parsedData.questionsamount,
          readAbout: parsedData.readabout,
          shareLink: !!parsedData.shareLink,
        })
      );
    }
  };
};
