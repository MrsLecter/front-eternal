import { SOULS_DATA } from "@/constants/souls-data";
import Title from "@/componets/common/title/Title";
import { StyledSectionLeft } from "./Souls.styles";
import SoulsContainer from "./soulsContainer/SoulsContainer";
import SoulCard from "./soulCard/soulCard";
import { FC } from "react";

const Souls: FC = () => {
  return (
    <StyledSectionLeft>
      <Title
        center={false}
        label={"individuals"}
        description={
          "Ask a question to your favorite person and get a realistic response"
        }
      />
      <SoulsContainer>
        {SOULS_DATA &&
          SOULS_DATA.map((item) => {
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
