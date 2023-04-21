import Input from "../../common/input/Input";
import styled from "styled-components";
import GoogleSignUp from "./GoogleSignUpBtn";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";
import AdditionalFormInfo from "../../common/additionalFormInfo/AdditionalFormInfo";

const StartedForm: React.FC = () => {
  return (
    <form>
      <Input type={"email"} label={"Email"} placeholder={"justin@gmail.com"} />
      <Input type={"password"} label={"Password"} placeholder={"password"} />
      <StyledFormRow>
        <div>
          <GoogleSignUp />
        </div>
        <div>
          <PrimarySubmitBtn label="sign up" />
        </div>
      </StyledFormRow>
      <AdditionalFormInfo
        label="Already have an account?"
        labelLink=" Sign in"
        wayLink="/signin"
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
    width: 48.72%;
  }

  @media (max-width: 375px) {
    height: 140px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > div:first-child {
      margin-bottom: 16px;
    }

    & > div {
      width: 100%;
    }
  }
`;

export default StartedForm;
