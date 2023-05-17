import WrapperBackground from "@/componets/common/wrappers/WrapperBakground";
import WrapperCentring from "@/componets/common/wrappers/WrapperCentring";
import WrapperModal from "@/componets/common/wrappers/WrapperModal";
import Head from "next/head";
import React, { useEffect } from "react";
import HeaderModal from "@/componets/common/headerModal/HeaderModal";
import NewPasswordForm from "@/componets/newPassword/NewPasswordForm";
import { userSlice } from "@/store/reducers/userSlice";
import { StorageCellEnum } from "@/constants/common";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { ILocalStorageData } from "../../../types/common.types";

const NewPassword: React.FC = () => {
  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
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
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WrapperCentring>
        <HeaderModal />
        <WrapperModal width={"721"} header={"Change Password"}>
          <NewPasswordForm />
        </WrapperModal>
        <WrapperBackground />
      </WrapperCentring>
    </>
  );
};

export default NewPassword;
