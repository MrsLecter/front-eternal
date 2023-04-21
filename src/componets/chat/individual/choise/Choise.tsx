import styled from "styled-components";
import IndividualAvatar from "../elements/IndividualAvatar";
import AddIndividualBtn from "../elements/AddndividualBtn";
import ShuffleBtn from "../elements/ShuffleBtn";

interface IChoiseProps {
  isSoulsModalOpen: boolean;
  toggleSoulsModal: (isOpen: boolean) => void;
}

const Choise: React.FC<IChoiseProps> = ({
  isSoulsModalOpen,
  toggleSoulsModal,
}) => {
  return (
    <StyledChoise>
      <div>
        <IndividualAvatar />
      </div>

      <AddIndividualBtn
        clickHandle={toggleSoulsModal}
        isModalOpen={isSoulsModalOpen}
      />
      <ShuffleBtn />
    </StyledChoise>
  );
};

const StyledChoise = styled.div`
  margin: 9vh 32px 32px 32px;
  width: 100%;
  min-width: 221px;
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div:nth-child(1) {
    max-width: 20vw;
    min-width: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    div {
      margin-right: 16px;
    }
  }

  @media (max-width: 375px) {
    margin: 28px 16px 16px 16px;
  }
`;

export default Choise;
