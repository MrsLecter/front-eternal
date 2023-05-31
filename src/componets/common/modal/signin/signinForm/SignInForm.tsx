import styled from "styled-components";
import { userSlice } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { useRouter } from "next/router";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "@/utils/regexp";
import userService from "@/api/user-service";
import localStorageHandler from "@/utils/local-storage-hendler";
import { internalSlice } from "@/store/reducers/internalSlice";
import { Input } from "@/componets/common/input/Input";
import PrimarySubmitBtn from "@/componets/common/buttons/PrimarySubmitBtn";

interface ISigninFormProps {}

const SignInForm: React.FC<ISigninFormProps> = ({}) => {
  const { signin } = userSlice.actions;
  const {
    showMenuModal,
    backdropClick,
    toggleToLogin,
    toggleToSignup,
    toggleToAbout,
    toggleLoginChangePassword,
  } = internalSlice.actions;
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
    }

    if (!emailIsValid) {
      alert("Error: email is not valid!");
    }

    if (passwordIsValid && emailIsValid) {
      try {
        const response = await userService.signin({
          email,
          password: password.trim(),
        });

        if (response.status === 201) {
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
            dispatch(backdropClick());
            dispatch(toggleToAbout());
          } else {
            dispatch(backdropClick());
          }
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
        <button onClick={handleResetPassword}>Forgot password?</button>
      </StyledLink>
      <PrimarySubmitBtn label={"sign in"} clickHandler={signinHandler} />
    </div>
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
