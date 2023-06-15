import { getCapitalizeName } from "@/utils/functions";
import Image from "next/image";
import avatarStub from "@images/backgrounds/1_darkblue.png";
import * as Avenir from "@typography/Avenir";
import { SITE_URL } from "@/constants/common";
import { StyledSoulMessage, StyledSoulMessageBox } from "./SoulMessage.styles";

interface ISoulMessageProps {
  text: string;
  avatarImg: string | undefined;
  soulsName?: string;
}

const SoulMessage: React.FC<ISoulMessageProps> = ({
  text,
  avatarImg,
  soulsName,
}) => {
  const handleShareMessage = () => {
    navigator.clipboard.writeText(
      `See what ${getCapitalizeName(
        soulsName || "not defined"
      )} told me: "${text}". See more : ${SITE_URL}`
    );
  };

  return (
    <StyledSoulMessageBox>
      <div>
        <Image
          width={60}
          height={62}
          alt="Soul-avatar.png"
          src={avatarImg! ? avatarImg : avatarStub}
          quality={100}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <StyledSoulMessage>
        <div>
          <Avenir.H5>{text}</Avenir.H5>
        </div>
        <div>
          <button onClick={handleShareMessage}>
            <figure>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66675 12V17.3333C6.66675 17.687 6.80722 18.0261 7.05727 18.2761C7.30732 18.5262 7.64646 18.6667 8.00008 18.6667H16.0001C16.3537 18.6667 16.6928 18.5262 16.9429 18.2761C17.1929 18.0261 17.3334 17.687 17.3334 17.3333V12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 7.99992L11.9999 5.33325L9.33325 7.99992"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5.33325V13.9999"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </figure>
          </button>
        </div>
      </StyledSoulMessage>
    </StyledSoulMessageBox>
  );
};

export default SoulMessage;
