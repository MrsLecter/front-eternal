import { ABOUT_TEXT, ABOUT_TEXT_SECOND } from "@/constants/modals";
import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";
import Checkbox from "@/componets/about/Checkbox";
import { useEffect, useState } from "react";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import { APP_ROUTES, StorageCellEnum } from "@/constants/common";
import { ILocalStorageData } from "../../../../../types/app-common.types";
import localStorageHandler from "@/utils/local-storage-hendler";
import userService from "@/api/user-service";
import PrimarySubmitBtn from "../../buttons/PrimarySubmitBtn";
import { internalSlice } from "@/store/reducers/internalSlice";

const About: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const { setReadAbout } = userSlice.actions;
  const { backdropClick } = internalSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { signin } = userSlice.actions;

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

  const continueClickHandler = async () => {
    if (checked) {
      dispatch(setReadAbout());
      localStorageHandler.setIsReadAbout();
      try {
        const response = await userService.about();

        if (response.status === 200) {
          dispatch(backdropClick());
          router.push(APP_ROUTES.Details);
        } else {
          alert("Error: newtwork error! Try again");
        }
      } catch (err) {
        console.error("Error", err);
      }
    }
  };
  return (
    <WrapperModal
      width={"721"}
      header={"About the platform"}
      text={ABOUT_TEXT}
      textSecond={ABOUT_TEXT_SECOND}
      minHeight={519}
      maxHeight={526}
    >
      <Checkbox
        label={"I have read the above statement"}
        checked={checked}
        setChecked={setChecked}
      />
      <PrimarySubmitBtn
        label={"continue"}
        clickHandler={continueClickHandler}
      />
    </WrapperModal>
  );
};

export default About;
