import styled from "styled-components";
import Image from "next/image";
import checkmarkIcon from "@icons/checkmark.svg";
import { useState } from "react";

interface ICheckboxProps {
  label: string;
  checked: boolean;
  setChecked: (isChecked: boolean) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, checked, setChecked }) => {
  const setCheckedOnEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setChecked(!checked);
    }
  };    

  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
        onKeyDown={(e) => setCheckedOnEnter(e)}
      />
      <span>
        <Image
          alt="checkmark"
          src={checkmarkIcon}
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </span>
      <p>{label}</p>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  margin-bottom: 38px;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -1%;
  cursor: pointer;
  user-select: none;

  p {
    margin-left: 48px;
  }

  p:hover {
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0.0001;
    cursor: pointer;
    height: 32px;
    width: 32px;
    z-index: 2;
    background-color: transparent;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    z-index: 1;

    img {
      display: none;
    }
  }

  input:hover ~ span {
    border: 1px solid #f82d98;
  }

  input:checked ~ span {
    img {
      display: block;
    }
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    left: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
  }

  input:focus ~ span {
    border: 1px solid #f82d98;
  }

  @media (max-width: 870px) {
    font-size: 14px;
    line-height: 21px;
    margin-top: 4px;
    margin-bottom: 28px;

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 28px;
      width: 28px;
    }

    span:after {
      width: 28px;
      height: 28px;
    }
  }
`;

export default Checkbox;
