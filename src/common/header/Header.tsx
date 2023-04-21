import styled from "styled-components";
import MenuBtn from "../buttons/MenuBtn";
import Logo from "../logo/Logo";
import TextBtn from "../buttons/TextBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";
import BorderedBtn from "../buttons/SecondaryBtn";
import CloseBtn from "../buttons/CloseBtn";

interface IHeader {
  isAuth?: boolean;
  isMenuOpen: boolean;
  showModalMenu: (isMenuOpen: boolean) => void;
}

const Header: React.FC<IHeader> = ({
  isAuth = false,
  isMenuOpen = false,
  showModalMenu,
}) => {
  return (
    <StyledHeader isAuth={isAuth} isOpen={isMenuOpen}>
      <div>
        {isMenuOpen ? (
          <CloseBtn clickHandler={showModalMenu} isOpen={isMenuOpen} />
        ) : (
          <MenuBtn clickHandler={showModalMenu} isOpen={isMenuOpen} />
        )}
      </div>
      <div>
        <Logo />
      </div>
      <div>
        {document.documentElement.clientWidth > 375 &&
          (isAuth ? (
            <BorderedBtn />
          ) : (
            <>
              <StyledTextWrapper>
                <TextBtn label={"login"} />
              </StyledTextWrapper>
              <PrimaryBtn label={"get started"} />
            </>
          ))}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ isAuth: boolean; isOpen: boolean }>`
  padding: ${(props) =>
    props.isOpen ? "32px 32px 0px 32px" : "32px 32px 5.48vh 32px"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  & > div:nth-child(2) {
    width: 211.44px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 32px 16px;

    & > div:nth-child(1) {
      order: 2;
    }

    & > div:nth-child(3) {
      display: none;
    }

    & > div:nth-child(2) {
      width: 144px;
      height: 30px;
    }
  }
`;

const StyledTextWrapper = styled.div`
  width: 53px;
  height: 14px;
  margin-right: 32px;
`;

export default Header;
