import "reactjs-popup/dist/index.css";
import Link from "next/link";
import Image from "next/image";
import { MENU_LINKS } from "@/constants/modals";
import facebookIcon from "@icons/modal-social-facebook.svg";
import instagramIcon from "@icons/modal-social-instagram.svg";
import twitterIcon from "@icons/modal-social-twitter.svg";
import discordIcon from "@icons/modal-social-discord.svg";
import { StyledPopupMenu } from "./MenuModal.styles";
import Header from "../../header/Header";

interface IMenuModalProps {
  isModalMenuOpen: boolean;
  toggleModalMenu: (show: boolean) => void;
}

const MenuModal: React.FC<IMenuModalProps> = ({
  isModalMenuOpen,
  toggleModalMenu,
}) => {
  return (
    <StyledPopupMenu
      open={isModalMenuOpen}
      closeOnDocumentClick
      onClose={() => toggleModalMenu(false)}
    >
      <Header isMenuOpen={true} showModalMenu={toggleModalMenu} />
      <div className="menu-wrapper">
        <div className="menu">
          {MENU_LINKS.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="social">
          <div>
            <Image
              src={facebookIcon}
              alt="modal-social-facebook.svg"
              width={24}
              height={24}
            />
            <Image
              src={instagramIcon}
              alt="modal-social-instagram.svg"
              width={24}
              height={24}
            />
            <Image
              src={twitterIcon}
              alt="modal-social-twitter.svg"
              width={24}
              height={24}
            />
            <Image
              src={discordIcon}
              alt="modal-social-discroed.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </StyledPopupMenu>
  );
};

export default MenuModal;
