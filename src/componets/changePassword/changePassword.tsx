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

const ChangePassword: React.FC = () => {
  const router = useRouter();

  const {
    value: passwordCurrent,
    error: passwordCurrerntIsValid,
    changeHandler: passwordCurrentChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const {
    value: passwordNew,
    error: passwordNewIsValid,
    changeHandler: passwordNewChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const changePasswordFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!passwordCurrerntIsValid) {
      alert("Error: current password is not valid!");
    }

    if (!passwordNewIsValid) {
      alert("Error: new password is not valid!");
    }

    // if (passwordCurrerntIsValid && passwordNewIsValid) {
    //   console.log("change ok", passwordCurrent, passwordNew);

    //   try {
    //     const response = await userService.signin({
    //       email,
    //       password,
    //     });

    //     console.log("response signin", response);
    //     if (response.status === 201) {
    //       console.log("status 201");
    //       dispatch(setEmail({ email: response.message.email }));
    //       localStorageHandler.signin({
    //         id: response.message.id,
    //         email: response.message.email,
    //         name: response.message.name,
    //         phone: response.message.phone,
    //         accessToken: response.message.accesstoken,
    //         refreshToken: response.message.refreshtoken,
    //       });
    //       //queryAmount =0 - paywall : chat
    //       // router.push(APP_ROUTES.Chat);
    //     }
    //     if (response.status === 404) {
    //       alert(`Error: There is no user with ${email} email!`);
    //     }
    //     if (response.status === 406) {
    //       alert(`Error: invalid password! Try again`);
    //     }
    //   } catch (err) {
    //     console.error("Error: ", err);
    //   }
    // }
  };

  return (
    <form
      name="changePassword"
      onSubmit={(event) => changePasswordFormSubmit(event)}
    >
      <Input
        type={"password"}
        label={"Password"}
        placeholder={"Enter your current password"}
        inputValue={passwordCurrent}
        onChangeHandler={passwordCurrentChangeHandler}
      />
      <Input
        type={"password"}
        label={"New password"}
        placeholder={"Enter your new password"}
        inputValue={passwordNew}
        onChangeHandler={passwordNewChangeHandler}
      />
      <PrimarySubmitBtn label={"save"} />
    </form>
  );
};

const StyledLink = styled.div`
  width: 100%;
  margin: 32px 0px;

  a {
    width: 100%;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.01em;
    text-align: left;
    color: #ffffff;
    opacity: 0.7;
  }

  @media (max-width: 870px) {
    margin-top: 21px;
    margin-bottom: 24px;
    a {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default ChangePassword;
