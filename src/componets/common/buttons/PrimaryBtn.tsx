import styled from "styled-components";

interface PrimaryBtnProps {
  label: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ label }) => {
  return <StyledPrimaryBtnFixed type="button">{label}</StyledPrimaryBtnFixed>;
};

export const StyledPrimaryBtn = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 120px;
  background: ${({ theme }) => theme.backgroundColorGradient};

  &:hover {
    background: ${({ theme }) => theme.backgroundColorGradientHovered};
  }
`;

const StyledPrimaryBtnFixed = styled(StyledPrimaryBtn)`
  width: 185px;
  height: 48px;
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14.3px;
  letter-spacing: 0.3em;
`;

export default PrimaryBtn;
