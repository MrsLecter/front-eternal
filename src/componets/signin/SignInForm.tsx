import styled from "styled-components";

import Link from "next/link";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import Input from "../common/input/Input";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "@/utils/regexp";
import { FormEvent } from "react";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { APP_ROUTES } from "@/constants/common";

const SignInForm: React.FC = () => {
  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
  } = useInput({ regexp: EMAIL_REGEXP, allowEmpty: false });

  const {
    value: password,
    error: passwordIsValid,
    changeHandler: passwordChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const handleResetPassword = async () => {
    console.log("handler reset");
    try {
      const response = await userService.resetPassword({ email });

      console.log("write type: reset password", response);
      if (response.status === 404) {
        alert(`Error: user with email ${email} isn't registered! Change email`);
      }

      if (response.status === 200) {
        alert(
          "Success: a password reset code was sent to your email. Enter your code to the form"
        );
        router.push(APP_ROUTES.NewPassword);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const formSigninSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!passwordIsValid) {
      alert("Error: password is not valid!");
    }

    if (!emailIsValid) {
      alert("Error: email is not valid!");
    }

    if (passwordIsValid && emailIsValid) {
      console.log("signin ok", password, email);

      try {
        const response = await userService.signin({
          email,
          password,
        });

        console.log("response write type! signin", response, response.status);
        if (response.status === 201) {
          console.log("status 201", response.data.message.email);
          dispatch(
            signin({
              id: response.data.message.id,
              email: response.data.message.email,
              name: response.data.message.name,
              phone: response.data.message.phone,
              readAbout: response.data.message.readabout,
              nextPayment: response.data.message.nextpayment,
              questionsAmount: response.data.message.questionsamount,
              shareLink: response.data.message.sharelink,
            })
          );
          localStorageHandler.signin({
            id: response.data.message.id,
            email: response.data.message.email,
            name: response.data.message.name,
            phone: response.data.message.phone,
            readabout: response.data.message.readabout,
            nextpayment: response.data.message.nextpayment,
            questionsamount: response.data.message.questionsamount,
            accessToken: response.data.message.accesstoken,
            refreshToken: response.data.message.refreshtoken,
            shareLink: response.data.message.sharelink,
          });
          if (!response.data.message.readabout) {
            router.push(APP_ROUTES.About);
          } else if (response.data.message.questionsamount === 0) {
            router.push(APP_ROUTES.Paywall);
          } else {
            router.push(APP_ROUTES.Home);
          }
          //
        }
        if (response.status === 404) {
          alert(`Error: There is no user with ${email} email!`);
        }
        if (response.status === 406) {
          alert(`Error: invalid password! Try again`);
        }
      } catch (err) {
        console.error("Error", err);
      }
    }
  };

  return (
    <form name="signinForm" onSubmit={(event) => formSigninSubmit(event)}>
      <Input
        type={"email"}
        label={"Email"}
        placeholder={"justin@gmail.com"}
        inputValue={email}
        onChangeHandler={emailChangeHandler}
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
        <button onClick={handleResetPassword}>Forgot password?</button>
      </StyledLink>
      <PrimarySubmitBtn label={"sign in"} />
    </form>
  );
};

const StyledLink = styled.div`
  width: 100%;
  margin: 32px 0px;

  button {
    width: 100%;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.01em;
    text-align: left;
    background-color: transparent;
    border: none;
    color: #ffffff;
    opacity: 0.7;
  }

  button:hover {
    opacity: 1;
  }

  @media (max-width: 870px) {
    margin-top: 21px;
    margin-bottom: 24px;
    button {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default SignInForm;
