"use client";

import styled from "styled-components";
import GoogleSignUp from "./GoogleSignUpBtn";
import AdditionalFormInfo from "../common/additionalFormInfo/AdditionalFormInfo";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import Input from "../common/input/Input";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

import { useAppDispatch } from "@/hooks/reducers.hook";
import { userSlice } from "@/store/reducers/userSlice";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "@/utils/regexp";
import userService from "@/api/user-service";
import axios from "axios";
import { APP_ROUTES } from "@/constants/common";
import localStorageHandler from "@/utils/local-storage-hendler";
import Google from "next-auth/providers/google";
import { Session } from "next-auth";

interface IStartedFormProps {}

const StartedForm: React.FC<IStartedFormProps> = ({}) => {
  const { setEmail } = userSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const session = useSession();
  console.log(">>>", session);

  useEffect(() => {
    console.log("use effect session data", session.data);
    const sendGoogleToken = async (token: string) => {
      try {
        const response = await userService.googleAuth(token);
        console.log("response google write type", response);
        if (response.status === 201) {
          dispatch(setEmail({ email: response.data.message.email }));
          localStorageHandler.signup({
            id: response.data.message.id,
            email: response.data.message.email,
            accessToken: response.data.message.accesstoken,
            refreshToken: response.data.message.refreshtoken,
          });

          router.push(APP_ROUTES.About);
        }
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    if (session.data) {
      console.log("use effect session data", session.data);
      sendGoogleToken(session.data.token_id);
    }
  }, [session.data]);

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
    console.log("click google auth");
    signIn();
    // return router.push(GOOGLE_AUTH_API);
  };

  const formSignupSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log(
      "email",
      email,
      "emailIsValid",
      emailIsValid,
      "password",
      password,
      "passwordIsValid",
      passwordIsValid
    );

    if (!email && !password) {
      alert("Error: the field must not be empty");
    }

    if (!emailIsValid) {
      alert("Error: email not valid!");
    }

    if (!passwordIsValid) {
      console.log(password);
      alert(
        "Error: password not valid! Password must include 1 digit, 1 special character and 1 aplhabetic character. Minimum 8 symbols length"
      );
    }

    if (email && emailIsValid && password && passwordIsValid) {
      console.log("all valid");
    }

    try {
      const response = await userService.signup({
        email,
        password,
      });
      console.log("response1", response, response.status);
      if (response.status === 201) {
        console.log("status 201");
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

        router.push(APP_ROUTES.Signin);
      }
      if (response.response.status === 406) {
        alert("Error: user already exist! Please, login");
        router.push(APP_ROUTES.Signin);
      }
    } catch (err: any) {
      console.log("Error:", err);
      // if (err.response.status === 406) {
      //   alert(
      //     "The user is already registered. You will be redirected to the login page"
      //   );
      //   router.push(APP_ROUTES.Signin);
      // } else {
      // router.reload();
      // }
      // navigate("../" + AppUrlsEnum.INFO + "/Error during request. Try again");
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
      <AdditionalFormInfo
        label="Already have an account?"
        labelLink=" Sign in"
        wayLink={APP_ROUTES.Signin}
      />
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

export default StartedForm;
