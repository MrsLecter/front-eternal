import Image from "next/image";
import Link from "next/link";
import eternalImage from "@icons/eternal-logo.svg";
import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <Image
          src={eternalImage}
          alt="eternal-logo.svg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  width: 100%;
  height: 100%;

  a {
    padding: 0px;
    margin: 0px;
    display: block;
    width: 100%;
    height: 100%;
  }
  /* @media (max-width: 375px) {
   margin-top: 8px; 
    width: 144px;
    height: 29.97px; 
  }*/
`;

export default Logo;
