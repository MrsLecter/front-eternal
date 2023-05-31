import Input from "../../common/input/Input";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";
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
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const {
    value: passwordNew,
    error: passwordNewIsValid,
    changeHandler: passwordNewChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const detailsSaveHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (passwordOldIsValid && passwordNewIsValid) {
      try {
        const response = await userService.changePassword({
          passwordOld,
          passwordNew,
        });

        if (response.status === 200) {
          alert("Success: password has been changed");
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
