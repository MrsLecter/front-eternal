import Image from "next/image";
import { StyledIndividual, StyledIndividualLabel } from "./Individual.styles";
import mainImage from "../../../../public/images/main.png";
import Choise from "./choise/Choise";

interface IIndividualProps {
  isSoulsModalOpen: boolean;
  toggleSoulsModal: (isOpen: boolean) => void;
}

const Individual: React.FC<IIndividualProps> = ({
  isSoulsModalOpen,
  toggleSoulsModal,
}) => {
  return (
    <StyledIndividual>
      <div>
        <Image
          src={mainImage}
          alt="main"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
      <StyledIndividualLabel>
        <p>Martin Luther King, Jr.</p>
        <p>Political Activist</p>
      </StyledIndividualLabel>
      <Choise
        isSoulsModalOpen={isSoulsModalOpen}
        toggleSoulsModal={toggleSoulsModal}
      />
    </StyledIndividual>
  );
};

export default Individual;
