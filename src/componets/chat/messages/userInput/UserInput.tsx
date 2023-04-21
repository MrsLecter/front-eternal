import styled from "styled-components";

const UserInput: React.FC = () => {
  return (
    <StyledUserInput>
      <form action="/action_page.php">
        <SubmitMessageInput />
      </form>
    </StyledUserInput>
  );
};

const StyledUserInput = styled.div`
  width: 100%;
  min-width: 300px;
  height: 78px;
  z-index: 1;

  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const SubmitMessageInput: React.FC = () => {
  return (
    <StyledMessageInputWrapper>
      <input type="text" placeholder="Enter your message..." name="message" />
      <SubmitMessageBtn />
    </StyledMessageInputWrapper>
  );
};

const StyledMessageInputWrapper = styled.div`
  position: relative;
  width: 100%;

  height: 78px;
  padding: 2px;
  border-radius: 120px;
  background-image: linear-gradient(281deg, #f82d98 0%, #5833ef 90%);
  /* background-image: linear-gradient(90deg, #08081e 100%, #21050c 100%); */

  & > input {
    width: 100%;
    height: 74px;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    color: white;
    line-height: 27px;
    padding: 25.5px 173px 25.5px 48px;
    border: none;
    border-radius: 120px;
    /* background-image: linear-gradient(175deg, #f82d98, 100%, #5833ef, 100%); */
    background-image: linear-gradient(90deg, #08081e 100%, #21050c 100%);

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 375px) {
    button {
      display: none;
    }
  }
`;

const SubmitMessageBtn: React.FC = () => {
  return <StyledSubmitMessageButton>submit</StyledSubmitMessageButton>;
};
const StyledSubmitMessageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 157px;
  height: 62px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border-radius: 120px;
  border: none;
  background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  z-index: 2;

  &:hover {
    background-image: linear-gradient(305deg, #f82d98 -2.34%, #5833ef 90%);
  }
`;

export default UserInput;
