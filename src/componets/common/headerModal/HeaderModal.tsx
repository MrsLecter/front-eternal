import Logo from "../logo/Logo";
import CloseBtn from "../buttons/CloseBtn";
import { StyledHeaderModal } from "./HeaderModal.styles";

interface IHeaderModalProps {
  closeBtnHandler: () => void;
}

const HeaderModal: React.FC<IHeaderModalProps> = ({ closeBtnHandler }) => {
  return (
    <StyledHeaderModal>
      <div>
        <Logo />
      </div>
      <div>
        <CloseBtn clickHandler={closeBtnHandler} />
      </div>
    </StyledHeaderModal>
  );
};

export default HeaderModal;
