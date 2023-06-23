
import AdditionalFormInfo from "@/componets/common/additionalFormInfo/AdditionalFormInfo";
import { internalSlice } from "@/store/reducers/internalSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import SignInForm from "./signinForm/SignInForm";
import WrapperModalWindow from "../../wrappers/wrapperModalWindow/WrapperModalWindow";

const Signin: React.FC = () => {
  const { toggleLoginSignup } = internalSlice.actions;
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
