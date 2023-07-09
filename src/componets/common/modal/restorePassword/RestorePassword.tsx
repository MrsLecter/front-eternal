import RestorePasswordForm from "@/componets/restorePasswordForm/RestorePasswordForm";
import WrapperModalWindow from "../../wrappers/wrapperModalWindow/WrapperModalWindow";
import { FC } from "react";

const RestorePassword: FC = () => {
  return (
    <WrapperModalWindow width={"721"} header={"Change Password"} marginTop={95}>
      <RestorePasswordForm />
    </WrapperModalWindow>
  );
};

export default RestorePassword;
