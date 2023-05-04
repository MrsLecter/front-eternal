
import { StyledPrimaryBtn } from "@/componets/common/buttons/PrimaryBtn";
import styled from "styled-components";

const PrimaryMenuBtn: React.FC = () => {
  return <StyledPrimaryMenuBtn type="submit">get started</StyledPrimaryMenuBtn>;
};

const StyledPrimaryMenuBtn = styled(StyledPrimaryBtn)`
  width: 100%;
  height: 48px;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.2em;
`;

export default PrimaryMenuBtn;
