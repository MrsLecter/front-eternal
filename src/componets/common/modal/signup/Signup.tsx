import WrapperModal from "../../wrappers/WrapperModal";
import AdditionalFormInfo from "../../additionalFormInfo/AdditionalFormInfo";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import SignupForm from "@/componets/common/modal/signup/signupForm/SignupForm";

interface ISignupProps {}

const Signup: React.FC<ISignupProps> = () => {
  const { toggleLoginSignup } = internalSlice.actions;
  const dispatch = useAppDispatch();

  const changeToSignin = () => {
    dispatch(toggleLoginSignup());
  };

  return (
    <WrapperModal
      width={"721"}
      header={"Get started"}
      text={"To continue please create an account"}
      minHeight={570}
      maxHeight={612}
    >
      <SignupForm />
      <AdditionalFormInfo
        label="Already have an account?"
        labelLink=" Sign in"
        clickHandler={changeToSignin}
      />
    </WrapperModal>
  );
};

export default Signup;
