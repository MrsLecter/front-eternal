import Header from "@/componets/common/header/Header";
import Greeting from "@/componets/home/greeting/Greeting";
import Individuals from "@/componets/home/individuals/Individuals";
import { useState } from "react";
import styled from "styled-components";
import MenuModal from "@/componets/common/modals/menuModal/MenuModal";
import Footer from "@/componets/common/footer/Footer";
import HeadCommon from "@/componets/head/Head";

export default function Home() {
  return (
    <>
      <HeadCommon />
      <StyledBackground>
        <StyledMainContent>
          <StyledGradient />
          <Header />
          <Greeting />
          <Individuals />
          <Footer />
        </StyledMainContent>
      </StyledBackground>
    </>
  );
}

const StyledGradient = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 600px;
  background-image: linear-gradient(
    115deg,
    rgba(88, 51, 239, 0.2) 0.5%,
    rgba(29, 29, 36, 0) 12%
  );
  z-index: 1;
`;

const StyledBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: #111115;
  z-index: -3;
`;

export const StyledContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

const StyledMainContent = styled(StyledContent)`
  position: relative;
  width: 100%;
  max-width: 1640px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
