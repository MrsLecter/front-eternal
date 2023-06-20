import styled from "styled-components";

const SubmitMessageBtn: React.FC = () => {
  return (
    <StyledSubmitMessageButton
      aria-label="message-button"
      aria-labelledby="message"
    >
      submit
    </StyledSubmitMessageButton>
  );
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
  background-image: ${({ theme }) => theme.backgroundColorGradient};
  z-index: 2;

  &:hover {
    background-image: linear-gradient(305deg, #f82d98 -2.34%, #5833ef 90%);
  }
`;

export default SubmitMessageBtn;
