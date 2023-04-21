import Link from "next/link";
import styled from "styled-components";

interface IAddtionalFormInfoProps {
  label: string;
  wayLink: string;
  labelLink: string;
}

const AdditionalFormInfo: React.FC<IAddtionalFormInfoProps> = ({
  label,
  wayLink,
  labelLink,
}) => {
  return (
    <StyledAdditional>
      <p>{label}</p>&nbsp;
      <Link href={wayLink}>{labelLink}</Link>
    </StyledAdditional>
  );
};

const StyledAdditional = styled.div`
  width: 100%;
  border-top: 1px solid #2f2535;
  margin-top: 32px;
  padding-top: 32px;
  font-family: "Avenir Extra-bold";
  font-weight: 800;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -1%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > p {
    color: white;
  }

  & > a {
    color: ${({ theme }) => theme.color.pink};
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export default AdditionalFormInfo;
