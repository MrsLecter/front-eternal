import WrapperModal from "../../wrappers/WrapperModal";
import AdditionalFormInfo from "@/componets/common/additionalFormInfo/AdditionalFormInfo";
import { APP_ROUTES } from "@/constants/common";
import { internalSlice } from "@/store/reducers/internalSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import SignInForm from "./signinForm/SignInForm";

interface ISigninProps {}

const Signin: React.FC<ISigninProps> = ({}) => {
  const { toggleLoginSignup } = internalSlice.actions;
  const dispatch = useAppDispatch();

  const changeToSignup = () => {
    dispatch(toggleLoginSignup());
  };
  return (
    <WrapperModal
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
    </WrapperModal>
  );
};

export default Signin;
