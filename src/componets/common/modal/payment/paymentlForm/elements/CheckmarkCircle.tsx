import Image from "next/image";
import styled from "styled-components";
import checkmarkIcon from "@icons/checkmark.svg";

const CheckmarkCircle: React.FC = () => {
  return (
    <StyledCheckmarkCircle>
      <Image src={checkmarkIcon} alt="checkmark.svg" />
    </StyledCheckmarkCircle>
  );
};

const StyledCheckmarkCircle = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundColorGradient}; img {
    margin-top: 6px;
    width: 35px;
    height: 28.75px;
  }

  @media (max-width: 870px) {
    width: 56px;
    height: 56px;

    img {
      width: 24.35px;
      height: 19.87px;
    }
  }
`;

export default CheckmarkCircle;
