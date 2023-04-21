import Input from "../../common/input/Input";
import styled from "styled-components";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";
import AdditionalFormInfo from "../../common/additionalFormInfo/AdditionalFormInfo";
import Link from "next/link";

const SiignInForm: React.FC = () => {
  return (
    <form>
      <Input type={"email"} label={"Email"} placeholder={"justin@gmail.com"} />
      <Input type={"password"} label={"Password"} placeholder={"password"} />
      <StyledLink>
        <Link href="/">Forgot password?</Link>
      </StyledLink>
      <PrimarySubmitBtn label={"sign in"} />
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

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export default SiignInForm;
