import Image from "next/image";
import styled from "styled-components";
import checkmarkIcon from "@icons/checkmark.svg";

const CheckmarkBtn: React.FC = () => {
  return (
    <StyledCheckmarkBtn>
      <Image src={checkmarkIcon} alt="checkmark.svg" />
    </StyledCheckmarkBtn>
  );
};

const StyledCheckmarkBtn = styled.button`
  width: 78px;
  height: 78px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);

  img {
    width: 20px;
    height: 13.75px;
  }

  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }

    @media (max-width: 375px) {
      width: 56px;
      height: 56px;

      img {
        width: 14.35px;
        height: 9.87px;
      }
    }
  
`;

export default CheckmarkBtn;
