import Input from "@common/input/input/Input";
import PrimarySubmitBtn from "@common/buttons/PrimarySubmitBtn";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { EMAIL_REGEXP, PASSWORD_REGEXP, PHONE_REGEXP } from "@/utils/regexp";
import { useInput } from "@/hooks/use-input";
import { FormEvent } from "react";
import userService from "@/api/user-service";
import { StyledForm } from "./DetailsForm.styles";
import localStorageHandler from "@/utils/local-storage-hendler";

const DetailsForm: React.FC = () => {
  const { setNewUserDetails } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { email, name, phone } = useAppSelector((store) => store.userReducer);

  const {
    value: fullname,
    error: fullnameIsValid,
    changeHandler: fullnameChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: true,
    initialValue: name as string,
  });

  const {
    value: emailInput,
    error: emailInputIsValid,
    changeHandler: emailInputChangeHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
    initialValue: email as string,
  });

  const {
    value: phoneInput,
    error: phoneInputIsValid,
    changeHandler: phoneInputChangeHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: true,
    initialValue: phone as string,
  });

  const {
    value: password,
    error: passwordIsValid,
    changeHandler: passwordChangeHandler,
  } = useInput({ regexp: PASSWORD_REGEXP, allowEmpty: false });

  const detailsSaveHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (emailInput && !emailInputIsValid) {
      alert("Error: Email is not valid!");
    }
    if (phoneInput && !phoneInputIsValid) {
      alert("Error: Phone number is not valid!");
    }
    if (!passwordIsValid) {
      alert("Error: password in not valid!");
    }
    if (
      (emailInput || email) &&
      (emailInputIsValid || email) &&
      passwordIsValid
    ) {
      try {
        const response = await userService.addProfileDetails({
          name: fullname,
          email: emailInput ? emailInput : email,
          phone: phoneInput ? phoneInput : phone!,
        });

        if (response.status === 200) {
          alert("Success: Detailes changes");
          dispatch(
            setNewUserDetails({
              name: fullname,
              email: emailInput ? emailInput : email,
              phone: phoneInput ? phoneInput : phone!,
            })
          );
          localStorageHandler.updateUserDetails({
            name: fullname,
            email: emailInput ? emailInput : email,
            phone: phoneInput ? phoneInput : phone!,
          });
        }
      } catch (err) {
        console.error("Error: ", err);
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
        maxLen={10}
        onChangeHandler={phoneInputChangeHandler}
      />
      <div>
        <PrimarySubmitBtn label="save" />
      </div>
    </StyledForm>
  );
};

export default DetailsForm;
