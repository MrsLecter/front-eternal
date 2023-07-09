import AdditionalFormInfo from "@/componets/common/additionalFormInfo/AdditionalFormInfo";
import { useAppDispatch } from "@/hooks/reducers.hook";
import SignInForm from "./signinForm/SignInForm";
import WrapperModalWindow from "../../wrappers/wrapperModalWindow/WrapperModalWindow";
import { toggleLoginSignup } from "@/store/reducers/modalSlice";
import { FC } from "react";

const Signin: FC = () => {
  const dispatch = useAppDispatch();

  const changeToSignup = () => {
    dispatch(toggleLoginSignup());
  };
  return (
    <WrapperModalWindow
      width={"721"}
      header={"Signin"}
      minHeight={512}
      maxHeight={640}
    >
      <SignInForm />

      <AdditionalFormInfo
        label="Don’t have an account?"
        labelLink="Sign up"
        clickHandler={changeToSignup}
      />
    </WrapperModalWindow>
  );
};

export default Signin;
