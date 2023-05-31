"use client";

import styled from "styled-components";
import GoogleSignUp from "./GoogleSignUpBtn";
import PrimarySubmitBtn from "../../../buttons/PrimarySubmitBtn";
import Input from "../../../input/Input";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { userSlice } from "@/store/reducers/userSlice";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "@/utils/regexp";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { internalSlice } from "@/store/reducers/internalSlice";

const SignupForm: React.FC = () => {
  const { setEmail } = userSlice.actions;
  const { toggleLoginSignup } = internalSlice.actions;
  const dispatch = useAppDispatch();

  const changeToSignin = () => {
    dispatch(toggleLoginSignup());
  };

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

  const googleAuthHandler = () => {
    signIn();
  };

  const formSignupSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email && !password) {
      alert("Error: the field must not be empty");
    }

    if (!emailIsValid) {
      alert("Error: email not valid!");
    }

    if (!passwordIsValid) {
      alert(
        "Error: password not valid! Password must include 1 digit, 1 special character and 1 aplhabetic character. Minimum 8 symbols length"
      );
    }

    if (emailIsValid && passwordIsValid) {
      try {
        const response = await userService.signup({
          email,
          password: password.trim(),
        });

        if (response.status === 201) {
          alert(
            "Success: user is successfully registered. Signin to use service"
          );
          dispatch(setEmail({ email: response.data.message.email }));
          localStorageHandler.signup({
            id: response.data.message.id,
            email: response.data.message.email,
            accessToken: response.data.message.accesstoken,
            refreshToken: response.data.message.refreshtoken,
          });
          changeToSignin();
        }
        if (response.response.status === 406) {
          alert("Error: user already exist! Please, login");
          changeToSignin();
        }
      } catch (err: any) {
        console.error("Error:", err);
      }
    }
  };

  return (
    <form name="signupForm" onSubmit={(event) => formSignupSubmit(event)}>
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
        onChangeHandler={passwordChangeHandler}
      />
      <StyledFormRow>
        <div>
          <GoogleSignUp clickHandler={googleAuthHandler} />
        </div>
        <div>
          <PrimarySubmitBtn label="sign up" />
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
  justify-content: space-between;
  align-items: center;

  & > div {
    margin-top: 0px;
    width: 48.72%;
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

export default SignupForm;
