import Logo from "../logo/Logo";
import CloseBtn from "../buttons/CloseBtn";
import { StyledHeaderModal } from "./HeaderModal.styles";
import { FC } from "react";

interface IHeaderModalProps {
  closeBtnHandler: () => void;
}

const HeaderModal: FC<IHeaderModalProps> = ({ closeBtnHandler }) => {
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
