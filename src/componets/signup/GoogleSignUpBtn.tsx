import {
  StyledSecondary,
  StyledBorderedBtn,
} from "../../common/buttons/SecondaryBtn";
import googleIcon from "@icons/google-btn.svg";
import styled from "styled-components";
import Image from "next/image";

const GoogleSignUp: React.FC = () => {
  return (
    <StyledGoogleWrapper type="button">
      <StyledGoogleBtn>
        <Image width={24} height={24} alt="google-icon.svg" src={googleIcon} />
        &nbsp;sign up with google
      </StyledGoogleBtn>
    </StyledGoogleWrapper>
  );
};

const StyledGoogleWrapper = styled(StyledSecondary)`
  width: 100%;
  height: 59px;
  padding: 2px;
  /* background-color: transparent; */
  background-image: linear-gradient(0deg, white 100%);

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }

  @media (max-width: 375px) {
    height: 62px;
  }
`;

const StyledGoogleBtn = styled(StyledBorderedBtn)`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  font-size: 13px;
  line-height: 14.3px;
  background-image: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);

  @media (max-width: 375px) {
    padding: 24px 30px;
  }
`;

export default GoogleSignUp;
