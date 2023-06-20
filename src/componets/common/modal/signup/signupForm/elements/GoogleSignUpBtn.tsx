"use client";
import googleIcon from "@icons/google-btn.svg";
import Image from "next/image";
import { StyledGoogleBtn, StyledGoogleWrapper } from "./GoogleSignUpBtn.styles";

interface IGoogleSignUpProps {
  clickHandler: () => void;
}

const GoogleSignUp: React.FC<IGoogleSignUpProps> = ({ clickHandler }) => {
  return (
    <StyledGoogleWrapper
      type="button"
      aria-label="google-signup-button"
      aria-labelledby="google-signup"
    >
      <StyledGoogleBtn onClick={() => clickHandler()}>
        <Image width={24} height={24} alt="google-icon.svg" src={googleIcon} />
        <span>sign up with google</span>
      </StyledGoogleBtn>
    </StyledGoogleWrapper>
  );
};

export default GoogleSignUp;
