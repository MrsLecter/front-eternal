import styled from "styled-components";

export const StyledUserInput = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: calc(100% - 78px);
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

  @media (max-width: 1250px) {
    width: calc(100% - 32px);
    bottom: 0px;
    right: 16px;
  }

  @media (max-width: 870px) {
    bottom: 0px;
  }
`;

export const StyledMessageInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 78px;
  padding: 1px;
  border-radius: 120px;
  background-image: linear-gradient(281deg, #f82d98 0%, #5833ef 90%);

  & > input {
    width: 100%;
    height: 76px;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    color: white;
    line-height: 27px;
    padding: 25.5px 173px 25.5px 48px;
    border: none;
    border-radius: 120px;
    background-image: linear-gradient(90deg, #08081e 100%, #21050c 100%);

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 1280px) {
    height: 56px;
    button {
      display: none;
    }

    & > input {
      height: 54px;
      padding: 17.5px 32px 17.5px 32px;
    }
  }
`;
