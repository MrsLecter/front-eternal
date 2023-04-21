import styled from "styled-components";
import Image from "next/image";
import cardIcon from "@icons/card.svg";
import { StyledInput } from "./Input";

const CardNumberInput: React.FC = () => {
  return (
    <StyledCardNumberInput>
      <StyledCardInput
        type="text"
        placeholder={"Card Number"}
        name={"cardNumber"}
        required
        maxLength={12}
      />
      <StyledImageWrapper>
        <Image width={24} height={16} alt="shuffle.svg" src={cardIcon} />
      </StyledImageWrapper>
      <StyledDateInput
        type="text"
        placeholder={"MM / YY"}
        name={"cardDate"}
        required
        maxLength={5}
      />
      <StyledCodeInput
        type="text"
        placeholder={"CVC"}
        name={"cardCode"}
        required
        maxLength={3}
      />
    </StyledCardNumberInput>
  );
};

const StyledCardInput = styled(StyledInput)`
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 17.5px 0px 17.5px 48px;
  border: none;

  margin-right: 16px;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 375px) {
    padding-left: 44px;
  }
`;

const StyledDateInput = styled(StyledInput)`
  margin-right: 16px;
  width: 70px;
  padding: 17.5px 0px 17.5px 0px;
  border: none;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 375px) {
    width: 55px;
    margin-right: 8px;
  }
`;

const StyledCodeInput = styled(StyledInput)`
  margin-right: 16px;
  width: 36px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 17.5px 0px 17.5px 0px;
  border: none;

  border: none;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 375px) {
    width: 28px;
    margin-right: 12px;
  }
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 23.25px;
  left: 16.25px;

  @media (max-width: 375px) {
    top: 20px;
    left: 12px;
  }
`;

const StyledCardNumberInput = styled.div`
  position: relative;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #060608;
  border: 1px solid #2f2535;
  border-radius: 16px;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.pink};
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 56px;
  }
`;

export default CardNumberInput;
