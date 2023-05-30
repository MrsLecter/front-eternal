import styled from "styled-components";

interface ITextBtnProps {
  label: string;
  clickHandler?: () => void;
}

const TextBtn: React.FC<ITextBtnProps> = ({ label, clickHandler }) => {
  const textBtnClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (clickHandler) {
      clickHandler();
    }
  };
  return (
    <StyledTextBtn onClick={(e) => textBtnClickHandler(e)} type="button">
      {label}
    </StyledTextBtn>
  );
};

const StyledTextBtn = styled.button`
  width: 100%;
  min-width: 103px;
  height: 48px;
  display: grid;
  place-content: center;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14.3px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.pink};
  }
`;

export default TextBtn;
