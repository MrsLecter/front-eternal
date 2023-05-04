import smsIcon from "@icons/sms-btn.svg";
import Image from "next/image";
import styled from "styled-components";

const SmsBtn: React.FC = () => {
  return (
    <StyledSmsBtn>
      <Image src={smsIcon} width={34} height={34} alt={"smsBtn"} />
    </StyledSmsBtn>
  );
};

const StyledSmsBtn = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.pink};
  }
`;

export default SmsBtn;
