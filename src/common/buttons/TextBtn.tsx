import styled from "styled-components";

interface ITextBtnProps {
  label: string;
}

const TextBtn: React.FC<ITextBtnProps> = ({ label }) => {
  return <StyledTextBtn type="button">{label}</StyledTextBtn>;
};

const StyledTextBtn = styled.button`
  width: 100%;
  height: 14px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14.3px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    color: ${({ theme }) => theme.color.pink};
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export default TextBtn;
