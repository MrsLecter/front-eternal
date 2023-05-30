import styled from "styled-components";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import Input from "../common/input/Input";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import { useInput } from "@/hooks/use-input";
import userService from "@/api/user-service";
import { APP_ROUTES } from "@/constants/common";
import { PASSWORD_REGEXP } from "@/utils/regexp";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";

interface IRestorePasswordFormProps {}

const RestorePasswordForm: React.FC<IRestorePasswordFormProps> = ({}) => {
  const router = useRouter();
  const { toggleLoginChangePassword } = internalSlice.actions;
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
    console.log("code:", code, codeIsValid);

    if (code.length !== 6) {
      alert("Error: invalid code! Try again");
    }

    if (code.length === 6 && passwordIsValid) {
      try {
        const response = await userService.restoreForgottenPassword({
          code,
          newpassword: password,
        });
        console.log("response write type", response);
        if (response.status === 200) {
          console.log("status 200");
          alert("Success: password has been changed! Please, login");
          dispatch(toggleLoginChangePassword());
        }

        if (response.response.status === 406) {
          //not
          alert("Error: invalid confirm code! Try again");
        }
      } catch (err: any) {
        console.log("Error:", err);
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

const StyledFormRow = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & > div {
    width: 210px;
    margin-top: 4px;
    /* width: 48.72%; */
  }

  @media (max-width: 545px) {
    width: 279px;
    height: 140px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > div:first-child {
      margin-top: 16px;
      order: 2;
    }

    & > div:last-child {
      margin-top: 0px;
    }

    & > div {
      width: 100%;
    }
  }
`;

export default RestorePasswordForm;
