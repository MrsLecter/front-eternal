import styled from "styled-components";

interface IAddtionalFormInfoProps {
  label: string;
  labelLink: string;
  clickHandler?: () => void;
}

const AdditionalFormInfo: React.FC<IAddtionalFormInfoProps> = ({
  label,
  labelLink,
  clickHandler,
}) => {
  const infoClickHandler = () => {
    if (clickHandler) {
      clickHandler();
    }
  };

  return (
    <StyledAdditional>
      <p>{label}</p>&nbsp;
      <button
        onClick={infoClickHandler}
        aria-label="info-button"
        aria-labelledby="info"
      >
        {labelLink}
      </button>
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

  & > button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.pink};
  }

  & > button:hover {
    text-decoration: underline;
  }

  & > p {
    color: white;
  }

  @media (max-width: 870px) {
    font-size: 14px;
    line-height: 21px;
    padding-top: 12px;
    margin-top: 24px;
    padding-top: 24px;
  }
`;

export default AdditionalFormInfo;
