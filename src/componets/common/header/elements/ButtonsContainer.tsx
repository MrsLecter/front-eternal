import ShareBtn from "./ShareBtn";
import { StyledTextWrapper } from "../Header.styles";
import TextBtn from "../../buttons/TextBtn";
import PrimaryBtn from "../../buttons/PrimaryBtn";

interface IButttonsContainerProps {
  isHaveShareBtn: boolean;
  isAuth: boolean;
  shareBtnHandler: () => void;
  signoutHandler: () => void;
  signupClickHandler: () => void;
  loginClickHandler: () => void;
}

const ButtonsContainer: React.FC<IButttonsContainerProps> = ({
  isHaveShareBtn,
  isAuth,
  shareBtnHandler,
  signoutHandler,
  signupClickHandler,
  loginClickHandler,
}) => {
  return (
    <div>
      {isHaveShareBtn && <ShareBtn clickHandler={shareBtnHandler} />}
      {isAuth && !isHaveShareBtn && (
        <>
          <StyledTextWrapper>
            <TextBtn label={"sign out"} clickHandler={signoutHandler} />
          </StyledTextWrapper>
        </>
      )}
      {!isAuth && !isHaveShareBtn && (
        <>
          <StyledTextWrapper>
            <TextBtn label={"login"} clickHandler={loginClickHandler} />
          </StyledTextWrapper>
          <PrimaryBtn label={"get started"} clickHandler={signupClickHandler} />
        </>
      )}
    </div>
  );
};

export default ButtonsContainer;
