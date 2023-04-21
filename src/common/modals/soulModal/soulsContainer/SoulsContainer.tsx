import IndividualsCard from "../../../individualsCard/IndividualsCard";
import styled from "styled-components";

const SoulsContainer: React.FC = () => {
  return (
    <StyledSoulsContainer>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
      <div>
        <IndividualsCard />
      </div>
    </StyledSoulsContainer>
  );
};

const StyledSoulsContainer = styled.div`
  position: relative;
  margin-top: 12px;
  margin-bottom: 32px;
  width: 100%;
  display: grid;
  column-gap: 12px;
  row-gap: 12px;
  grid-template-columns: auto auto auto;
  background-color: red;
  overflow-y: auto;

  & > div {
    width: 100%;
    height: 298px;
  }

  @media (max-width: 375px) {
    margin: 32px 0px 32px 12px;
    column-gap: 16px;
    grid-template-columns: auto auto;
  }
`;

export default SoulsContainer;
