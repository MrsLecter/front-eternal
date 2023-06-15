import { SOULS_DATA } from "@/constants/greeting";
import Title from "@/componets/common/title/Title";
import { StyledSectionLeft } from "./Souls.styles";
import SoulsContainer from "./soulsContainer/SoulsContainer";
import SoulCard from "./soulCard/soulCard";

const Souls: React.FC = () => {
  return (
    <StyledSectionLeft>
      <Title
        center={false}
        label={"souls"}
        description={
          "Ask a question to your favorite person and get a realistic response"
        }
      />
      <SoulsContainer>
        {SOULS_DATA &&
          SOULS_DATA.map((item, index) => {
            if (
              item.id === 0 ||
              item.id === 2 ||
              item.id === 3 ||
              item.id === 5
            ) {
              return (
                <SoulCard
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
                <SoulCard
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
      </SoulsContainer>
    </StyledSectionLeft>
  );
};

export default Souls;
