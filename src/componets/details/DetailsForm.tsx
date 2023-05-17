import styled from "styled-components";
import Input from "../common/input/Input";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import {
  EMAIL_REGEXP,
  FULLNAME_REGEXP,
  PASSWORD_REGEXP,
  PHONE_REGEXP,
} from "@/utils/regexp";
import { useInput } from "@/hooks/use-input";
import { FormEvent } from "react";
import userService from "@/api/user-service";
import { APP_ROUTES } from "@/constants/common";

const DetailsForm: React.FC = () => {
  const { setEmail } = userSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { email, name, phone } = useAppSelector((store) => store.userReducer);

  //test
  // dispatch(setEmail({ email: "someemail@gmail.com" }));

  const {
    value: fullname,
    error: fullnameIsValid,
    changeHandler: fullnameChangeHandler,
  } = useInput({
    regexp: FULLNAME_REGEXP,
    allowEmpty: true,
    initialValue: name,
  });

  const {
    value: emailInput,
    error: emailInputIsValid,
    changeHandler: emailInputChangeHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
    initialValue: email,
  });

  const {
    value: phoneInput,
    error: phoneInputIsValid,
    changeHandler: phoneInputChangeHandler,
  } = useInput({ regexp: PHONE_REGEXP, allowEmpty: true, initialValue: phone });

  const {
    value: password,
    error: passwordIsValid,
    changeHandler: passwordChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const detailsSaveHandler = async (event: FormEvent) => {
    event.preventDefault();
    console.log("storage: ", email, name, phone);
    console.log("input values: ", fullname, emailInput, phoneInput, password);
    if (fullname && !fullnameIsValid) {
      alert("Error: name is not valid!");
    }
    if (emailInput && !emailInputIsValid) {
      alert("Error: Email is not valid!");
    }
    if (phoneInput && !phoneInputIsValid) {
      alert("Error: Phone number is not valid!");
    }
    if (!passwordIsValid) {
      alert("Error: password in not valid!");
    }
    if (emailInput && emailInputIsValid && passwordIsValid) {
      console.log("everything is ok");
      try {
        const response = await userService.addProfileDetails({
          name: fullname,
          email: emailInput,
          phone: phoneInput,
        });
        console.log("response write type", response);
        if (response.status === 200) {
          console.log("details changed ok");
          router.push(APP_ROUTES.Paywall);
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  return (
    <StyledForm onSubmit={detailsSaveHandler}>
      <Input
        type={"text"}
        label={"Name"}
        placeholder={name ? name : "Justin Mac"}
        inputValue={fullname}
        isRequired={false}
        onChangeHandler={fullnameChangeHandler}
      />
      <Input
        type={"email"}
        label={"Email"}
        placeholder={email ? email : "justin@gmail.com"}
        inputValue={emailInput}
        onChangeHandler={emailInputChangeHandler}
      />
      <Input
        type={"tel"}
        label={"Phone number"}
        placeholder={phone ? phone : "8329822222"}
        inputValue={phoneInput}
        isRequired={false}
        onChangeHandler={phoneInputChangeHandler}
      />
      <Input
        type={"password"}
        label={"Password"}
        placeholder={"password"}
        inputValue={password}
        onChangeHandler={passwordChangeHandler}
      />
      <div>
        <PrimarySubmitBtn label="save" />
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-top: 34px;
  margin-bottom: -34px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  & > div:last-child {
    width: 210px;
  }

  @media (max-width: 870px) {
    margin-top: 24px;
    margin-bottom: -24px;
    & > div:last-child {
      width: 100%;
    }
  }
`;

export default DetailsForm;
