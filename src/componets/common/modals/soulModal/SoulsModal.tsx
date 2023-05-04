import "reactjs-popup/dist/index.css";
import { StyledPopupMenu } from "./SoulsModal.styles";
import SearchBar from "./searchBar/SearchBar";
import SoulsContainer from "./soulsContainer/SoulsContainer";

interface ISoulsModalProps {
  isSoulsModalOpen: boolean;
  toggleSoulsModal: (show: boolean) => void;
}

const SoulsModal: React.FC<ISoulsModalProps> = ({
  isSoulsModalOpen,
  toggleSoulsModal,
}) => {
  return (
    <StyledPopupMenu
      open={isSoulsModalOpen}
      closeOnDocumentClick
      onClose={() => toggleSoulsModal(false)}
    >
      <div className="table-wrapper">
        <SearchBar />
        <SoulsContainer />
      </div>
    </StyledPopupMenu>
  );
};

export default SoulsModal;
