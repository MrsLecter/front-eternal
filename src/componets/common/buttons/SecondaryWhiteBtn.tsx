import styled from "styled-components";
import Image from "next/image";
import { StyledSecondary, StyledBorderedBtn } from "./SecondaryBtn";

interface ISecondaryWhiteBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  image?: { src: any; width: number; height: number };
  clickHandler?: () => void;
  constHeight?: boolean;
}

const SecondaryWhiteBtn: React.FC<ISecondaryWhiteBtnProps> = (props) => {
  const { label, image, clickHandler, constHeight = false, ...defaultProps } = props;
  const secondaryBtnClichHandler = () => {
    if (clickHandler) {
      clickHandler();
    }
  };
  return (
    <StyledSecondaryWhite
      onClick={secondaryBtnClichHandler}
      constHeight={constHeight}
      {...defaultProps}
    >
      <StyledSecondaryBtn>
        {image && image.src && (
          <>
            <Image
              width={image.width}
              height={image.height}
              alt="icon.svg"
              src={image.src}
            />
            &nbsp;
          </>
        )}
        {label}
      </StyledSecondaryBtn>
    </StyledSecondaryWhite>
  );
};

const StyledSecondaryWhite = styled(StyledSecondary)<{ constHeight: boolean }>`
  width: 100%;
  height: 62px;
  padding: 1px;
  background-image: linear-gradient(0deg, white 100%);

  &:hover {
    background-image: ${({ theme }) => theme.backgroundColorGradient};
  }

  &:focus {
    color: ${({ theme }) => theme.color.pink};
    background-image: ${({ theme }) => theme.backgroundColorGradient};
  }

  @media (max-width: 870px) {
    height: ${(props) => (props.constHeight ? "62px" : "46px")};
  }
`;

const StyledSecondaryBtn = styled(StyledBorderedBtn)`
  background-image: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  width: 100%;
  height: 100%;
  font-size: 13px;
  line-height: 14.3px;
`;

export default SecondaryWhiteBtn;
