import styled from "styled-components";

interface PrimaryBtnProps {
  label: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ label }) => {
  return <StyledPrimaryBtnFixed type="button">{label}</StyledPrimaryBtnFixed>;
};

export const StyledPrimaryBtn = styled.button`
  font-family: "Arquitecta Bold";
  font-weight: 700;
  font-size: 13px;
  line-height: 14.3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 120px;
  background: linear-gradient(
    281.4deg,
    ${({ theme }) => theme.color.pink} -2.34%,
    ${({ theme }) => theme.color.purple} 114.41%
  );

  &:hover {
    background-image: linear-gradient(305deg, #f82d98 -2.34%, #5833ef 90%);
  }
`;

const StyledPrimaryBtnFixed = styled(StyledPrimaryBtn)`
  width: 185px;
  height: 48px;
`;

export default PrimaryBtn;
