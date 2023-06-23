import styled from "styled-components";
import { StyledInput } from "../input/Input.styles";

export const StyledCardInput = styled(StyledInput)`
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 17.5px 0px 17.5px 48px;
  border: none;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  outline: none;

  margin-right: 16px;

  &:hover {
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 870px) {
    padding-left: 44px;
    font-size: 14px;
  }
`;

export const StyledDateInput = styled(StyledInput)`
  margin-right: 16px;
  width: 20%;
  padding: 17.5px 0px 17.5px 0px;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  outline: none;
  border: none;

  &:hover {
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 870px) {
    width: 55px;
    margin-right: 8px;
    font-size: 14px;
  }
`;

export const StyledCodeInput = styled(StyledInput)`
  margin-right: 16px;
  width: 10.2%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 17.5px 0px 17.5px 0px;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  outline: none;
  border: none;

  &:hover {
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 870px) {
    width: 28px;
    margin-right: 12px;
    font-size: 14px;
  }
`;

export const StyledImageWrapper = styled.div`
  position: absolute;
  top: 19.25px;
  left: 16.25px;

  @media (max-width: 870px) {
    top: 20px;
    left: 12px;
  }
`;

export const StyledCardNumberInput = styled.div<{ inputHeight: string }>`
  position: relative;
  width: 100%;
  max-width: 529px;
  height: ${(props) => props.inputHeight};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #060608;
  outline: 1px solid #2e2435;
  border-radius: 16px;

  &:hover {
    outline: 1px solid rgba(255, 255, 255, 0.5);
  }

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.color.pink};
  }

  &:active {
    outline: 1px solid ${({ theme }) => theme.color.pink};
  }

  @media (max-width: 870px) {
    width: 100%;
    height: 56px;
    font-size: 14px;
  }
`;
