import IndividualsCard from "./individualsCard/IndividualsCard";
import IndividualsContainer from "./individualsContainer/IndividualsContainer";
import styled from "styled-components";
import { INDIVIDUALS_DATA } from "@/constants/greeting";
import Title from "@/componets/common/title/Title";

const Individuals: React.FC = () => {
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
        {INDIVIDUALS_DATA &&
          INDIVIDUALS_DATA.map((item, index) => {
            if (
              item.id === 0 ||
              item.id === 2 ||
              item.id === 3 ||
              item.id === 5
            ) {
              return (
                <IndividualsCard
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  about={item.about}
                  image={item.image}
                  background={item.background}
                  enlargedImage={true}
                  isReflected={item.id === 5}
                />
              );
            } else {
              return (
                <IndividualsCard
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  about={item.about}
                  image={item.image}
                  background={item.background}
                  isReflected={false}
                />
              );
            }
          })}
      </IndividualsContainer>
    </StyledSectionLeft>
  );
};

const StyledSectionLeft = styled.div`
  margin-top: 150px;
  width: 100%;
  max-width: 1640px;
  /* height: 100%; */
  padding: 0px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* z-index: 1; */
  /* overflow-y: auto; */

  @media (max-width: 1075px) {
    padding: 0px 16px;
  }

  @media (max-width: 860px) {
    margin-top: 64px;
  }
`;

export default Individuals;
