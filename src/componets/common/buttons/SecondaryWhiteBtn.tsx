import styled from "styled-components";
import Image from "next/image";
import { StyledSecondary, StyledBorderedBtn } from "./SecondaryBtn";

interface ISecondaryWhiteBtnProps {
  label: string;
  image?: { src: any; width: number; height: number };
  clickHandler?: () => void;
}

const SecondaryWhiteBtn: React.FC<ISecondaryWhiteBtnProps> = ({
  label,
  image,
  clickHandler,
}) => {
  return (
    <StyledSecondaryWhite onClick={() => clickHandler()}>
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

const StyledSecondaryWhite = styled(StyledSecondary)`
  width: 100%;
  height: 62px;
  padding: 1px;
  background-image: linear-gradient(0deg, white 100%);

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      #f82d98 -2.34%,
      #5833ef 114.41%
    );
  }

  @media (max-width: 870px) {
    height: 46px;
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
