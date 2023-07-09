import Image from "next/image";
import Link from "next/link";
import eternalImage from "@icons/eternal-logo.svg";
import styled from "styled-components";
import { FC } from "react";

const Logo: FC = () => {
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
`;

export default Logo;
