import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

interface IInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const Input: React.FC<IInputProps> = ({ label, type, placeholder }) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={type}>{label}</label>
      <StyledInputRounded
        type={type}
        placeholder={placeholder}
        name={type}
        required
        maxLength={300}
      />
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  margin-bottom: 32px;
  width: 100%;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > label {
    width: 100%;
    font-family: "Avenir Extra-bold";
    font-weight: 800;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-family: "Avenir Regular";
  font-weight: 400;
  border: 1px solid #2f2535;
  background-color: #060608;
  color: white;
`;

const StyledInputRounded = styled(StyledInput)`
  margin-top: 8px;
  padding: 16px;
  border-radius: 16px;
`;

export default Input;
