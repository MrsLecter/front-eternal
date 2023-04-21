import Image from "next/image";
import Link from "next/link";
import eternalImage from "@images/eternal-logo.svg";
import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <Image
          src={eternalImage}
          alt="eternal-logo.svg"
          style={{ objectFit: "contain", width: "100%" }}
        />
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  /* width: 211.44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center; */

  @media (max-width: 375px) {
    margin-top: 8px;
    /* width: 144px;
    height: 29.97px; */
  }
`;

export default Logo;
