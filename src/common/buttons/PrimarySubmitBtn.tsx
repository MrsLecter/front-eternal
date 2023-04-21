import styled from "styled-components";
import { StyledPrimaryBtn } from "./PrimaryBtn";

interface IPrimarySubmitBtnProps {
  label: string;
}

const PrimarySubmitBtn: React.FC<IPrimarySubmitBtnProps> = ({ label }) => {
  return <StyledPrimarySubmitBtn type="submit">{label}</StyledPrimarySubmitBtn>;
};

const StyledPrimarySubmitBtn = styled(StyledPrimaryBtn)`
  width: 100%;
  height: 62px;
`;

export default PrimarySubmitBtn;
