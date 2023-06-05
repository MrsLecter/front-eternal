import RestorePasswordForm from "@/componets/restorePasswordForm/RestorePasswordForm";
import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";

const RestorePassword: React.FC = () => {
  return (
    <WrapperModal width={"721"} header={"Change Password"} marginTop={95}>
      <RestorePasswordForm />
    </WrapperModal>
  );
};

export default RestorePassword;
