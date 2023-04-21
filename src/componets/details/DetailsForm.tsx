import Input from "../../common/input/Input";
import styled from "styled-components";
import PrimarySubmitBtn from "../../common/buttons/PrimarySubmitBtn";
import AdditionalFormInfo from "../../common/additionalFormInfo/AdditionalFormInfo";

const DetailsForm: React.FC = () => {
  return (
    <form>
      <Input type={"text"} label={"Name"} placeholder={"Justin Mac"} />
      <Input type={"email"} label={"Email"} placeholder={"justin@gmail.com"} />
      <Input type={"tel"} label={"Phone number"} placeholder={"8329822222"} />
      <Input type={"password"} label={"Password"} placeholder={"password"} />
      <PrimarySubmitBtn label="save" />
    </form>
  );
};

const StyledFormRow = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 48.72%;
  }

  @media (max-width: 375px) {
    height: 140px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > div:first-child {
      margin-bottom: 16px;
    }

    & > div {
      width: 100%;
    }
  }
`;

export default DetailsForm;
