import Input from "@common/input/input/Input";
import PrimarySubmitBtn from "@common/buttons/PrimarySubmitBtn";
import { PASSWORD_REGEXP } from "@/utils/regexp";
import { useInput } from "@/hooks/use-input";
import { FormEvent } from "react";
import userService from "@/api/user-service";
import { StyledForm } from "./ChangePasswordBlock.styles";

const ChangePasswordForm: React.FC = () => {
  const {
    value: passwordOld,
    error: passwordOldIsValid,
    changeHandler: passwordOldChangeHandler,
    refresh: resetPasswordOld,
  } = useInput({
    regexp: PASSWORD_REGEXP,
    allowEmpty: false,
    initialValue: "",
  });

  const {
    value: passwordNew,
    error: passwordNewIsValid,
    changeHandler: passwordNewChangeHandler,
    refresh: resetPasswordNew,
  } = useInput({
    regexp: PASSWORD_REGEXP,
    allowEmpty: false,
    initialValue: "",
  });

  const refreshForm = () => {
    resetPasswordNew();
    resetPasswordOld();
  };

  const detailsSaveHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (!passwordOldIsValid) {
      alert("Error: old password in not valid!");
    }

    if (!passwordNewIsValid) {
      alert("Error: new password in not valid!");
    }

    if (passwordOldIsValid && passwordNewIsValid) {
      try {
        const response = await userService.changePassword({
          passwordOld: passwordOld as string,
          passwordNew: passwordNew as string,
        });

        if (response.status === 200) {
          alert("Success: password has been changed");
          refreshForm();
        }
        if (response.status === 406) {
          alert("Error: wrong old password!");
          refreshForm();
        }
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  };

  return (
    <StyledForm onSubmit={detailsSaveHandler}>
      <Input
        type={"password"}
        label={"Password"}
        placeholder={"•••••••••••••••••••"}
        inputValue={passwordOld}
        isRequired={true}
        onChangeHandler={passwordOldChangeHandler}
      />
      <Input
        type={"password"}
        label={"New Password"}
        placeholder={"•••••••••••••••••••"}
        inputValue={passwordNew}
        isRequired={true}
        onChangeHandler={passwordNewChangeHandler}
      />
      <div>
        <PrimarySubmitBtn label="save" />
      </div>
    </StyledForm>
  );
};

export default ChangePasswordForm;
