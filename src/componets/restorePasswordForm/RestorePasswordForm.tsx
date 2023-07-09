import { FormEvent } from "react";
import { useInput } from "@/hooks/use-input";
import userService from "@/api/user-service";
import { PASSWORD_REGEXP } from "@/utils/regexp";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { StyledFormRow } from "./RestorePassword.styles";
import Input from "@common/input/input/Input";
import PrimarySubmitBtn from "@common/buttons/PrimarySubmitBtn";
import { toggleLoginChangePassword } from "@/store/reducers/modalSlice";

const RestorePasswordForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    value: code,
    error: codeIsValid,
    changeHandler: codeChangeHandler,
  } = useInput({ regexp: "none", allowEmpty: false });

  const {
    value: password,
    error: passwordIsValid,
    changeHandler: passwordChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const formPasswordSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (code.length !== 6) {
      alert("Error: invalid code! Try again");
    }

    if (code.length === 6 && passwordIsValid) {
      try {
        const response = await userService.restoreForgottenPassword({
          code,
          newpassword: password,
        });

        if (response.status === 200) {
          alert("Success: password has been changed! Please, login");
          dispatch(toggleLoginChangePassword());
        }

        if (response.response!.status === 406) {
          alert("Error: invalid confirm code! Try again");
        }
      } catch (err: any) {
        console.error("Error:", err);
      }
    }
  };

  return (
    <form name="signupForm" onSubmit={(event) => formPasswordSubmit(event)}>
      <Input
        type={"number"}
        label={"Code"}
        placeholder={"Enter code from the mail"}
        inputValue={code}
        onChangeHandler={codeChangeHandler}
      />
      <Input
        type={"password"}
        label={"Password"}
        placeholder={"password"}
        inputValue={password}
        onChangeHandler={passwordChangeHandler}
      />
      <StyledFormRow>
        <div>
          <PrimarySubmitBtn label="save" />
        </div>
      </StyledFormRow>
    </form>
  );
};

export default RestorePasswordForm;
