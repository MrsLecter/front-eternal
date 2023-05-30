import styled from "styled-components";
import Input from "../common/input/Input";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import { PASSWORD_REGEXP } from "@/utils/regexp";
import { useInput } from "@/hooks/use-input";
import { FormEvent } from "react";
import userService from "@/api/user-service";

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
    console.log("old passw", passwordOld, "newPassw", passwordNew);
    if (passwordOldIsValid && passwordNewIsValid) {
      try {
        const response = await userService.changePassword({
          passwordOld,
          passwordNew,
        });
        console.log("response write type", response);
        if (response.status === 200) {
          alert("Success: password has been changed");
        }
      } catch (err) {
        console.log("Error: ", err);
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

export default ChangePasswordForm;
