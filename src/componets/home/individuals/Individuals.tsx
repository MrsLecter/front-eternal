import { ISoulsResponse } from "@/api/souls-service-types";
import Title from "../../../common/title/Title";
import IndividualsCard from "./individualsCard/IndividualsCard";
import IndividualsContainer from "./individualsContainer/IndividualsContainer";
import styled from "styled-components";

interface IIndividualsProps {
  individualsData: ISoulsResponse;
}

const Individuals: React.FC<IIndividualsProps> = ({ individualsData }) => {
  return (
    <StyledSectionLeft>
      <Title
        center={false}
        label={"individuals"}
        description={
          "Ask a question to your favorite person and get a realistic response"
        }
      />
      <IndividualsContainer>
        {individualsData.souls &&
          individualsData.souls.map((item) => {
            return (
              <IndividualsCard
                key={item.id}
                name={item.name}
                about={item.about}
                photoUrl={item.photo}
              />
            );
          })}
      </IndividualsContainer>
    </StyledSectionLeft>
  );
};

const StyledSectionLeft = styled.div`
  margin-top: 150px;
  width: 100%;
  /* height: 100%; */
  padding: 0px 7.3vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* overflow-y: auto; */

  @media (max-width: 375px) {
    padding: 0px 12px;
  }
`;

export default Individuals;
