import IndividualsCard from "./individualsCard/IndividualsCard";
import IndividualsContainer from "./individualsContainer/IndividualsContainer";
import { INDIVIDUALS_DATA } from "@/constants/greeting";
import Title from "@/componets/common/title/Title";
import { StyledSectionLeft } from "./Individuals.styles";

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

export default Individuals;
