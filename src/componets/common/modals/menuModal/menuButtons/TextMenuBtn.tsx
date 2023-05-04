import styled from "styled-components";

interface ITextBtnProps {
  label: string;
}

const TextMenuBtn: React.FC<ITextBtnProps> = ({ label }) => {
  return <StyledTextMenuBtn type="button">{label}</StyledTextMenuBtn>;
};

const StyledTextMenuBtn = styled.button`
  width: 100%;
  height:12px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    color: ${({ theme }) => theme.color.pink};
  }
`;

export default TextMenuBtn;
