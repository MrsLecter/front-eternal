import { useAppDispatch } from "@/hooks/reducers.hook";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "@/utils/regexp";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { Input } from "@/componets/common/input/input/Input";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";
import { StyledLink } from "./SignInForm.styles";
import {
  backdropClick,
  toggleLoginChangePassword,
  toggleToAbout,
} from "@/store/reducers/modalSlice";
import { FC } from "react";
import { signin } from "@/store/reducers/userSlice";

const SignInForm: FC = () => {
  const dispatch = useAppDispatch();

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
    refresh: resetEmail,
  } = useInput({ regexp: EMAIL_REGEXP, allowEmpty: false });

  const {
    value: password,
    error: passwordIsValid,
    changeHandler: passwordChangeHandler,
    refresh: resetPassword,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const handleResetPassword = async () => {
    if (!email || !emailIsValid) {
      alert("Error: enter the email first");
    }

    if (emailIsValid) {
      try {
        const response = await userService.resetPassword({ email });

        if (response.status === 404) {
          alert(
            `Error: user with email ${email} isn't registered! Change email`
          );
          resetEmail();
        }

        if (response.status === 200) {
          alert(
            "Success: a password reset code was sent to your email. Enter your code to the form"
          );
          dispatch(toggleLoginChangePassword());
        }
      } catch (err) {
        console.error("error", err);
      }
    }
  };

  const signinHandler = async () => {
    if (!passwordIsValid) {
      alert("Error: password is not valid!");
      resetPassword();
    }

    if (!emailIsValid) {
      alert("Error: email is not valid!");
      resetEmail();
    }

    if (passwordIsValid && emailIsValid) {
      try {
        const response = await userService.signin({
          email,
          password: password.trim(),
        });

        if (response.status === 201) {
          const {
            id,
            email,
            name,
            phone,
            readabout,
            nextpayment,
            questionsamount,
            sharelink,
            accesstoken,
            refreshtoken,
          } = response.data.message;
          dispatch(
            signin({
              id,
              email,
              name,
              phone,
              readAbout: readabout,
              nextPayment: nextpayment,
              questionsAmount: questionsamount,
              shareLink: sharelink,
            })
          );
          localStorageHandler.signin({
            id,
            email,
            name,
            phone,
            readabout,
            nextpayment,
            questionsamount,
            accessToken: accesstoken,
            refreshToken: refreshtoken,
            shareLink: !!sharelink,
            isGoogleAuth: false,
          });
          if (!response.data.message.readabout) {
            dispatch(backdropClick());
            dispatch(toggleToAbout());
          } else {
            dispatch(backdropClick());
          }
        }
        if (response.response && response.response!.status === 404) {
          alert(`Error: There is no user with ${email} email!`);
          resetEmail();
          resetPassword();
        }
        if (response.response && response.response!.status === 406) {
          alert(`Error: invalid password! Try again`);
          resetPassword();
        }
        if (response.response && response.response!.status === 422) {
          alert(
            "Error: Password isn't assigned! Please, click on forgot password button or set password in account details after repeat registration throught google "
          );
          resetEmail();
          resetPassword();
        }
      } catch (err) {}
    }
  };

  return (
    <div>
      <Input
        type={"email"}
        label={"Email"}
        placeholder={"justin@gmail.com"}
        inputValue={email}
        onChangeHandler={emailChangeHandler}
        autofocus={true}
      />
      <Input
        type={"password"}
        label={"Password"}
        placeholder={"•••••••••••••••••••"}
        inputValue={password}
        isRequired={false}
        onChangeHandler={passwordChangeHandler}
      />
      <StyledLink>
        <button
          onClick={handleResetPassword}
          aria-label="forgot-password"
          aria-labelledby="forget-password"
        >
          Forgot password?
        </button>
      </StyledLink>
      <PrimarySubmitBtn label={"sign in"} clickHandler={signinHandler} />
    </div>
  );
};

export default SignInForm;
