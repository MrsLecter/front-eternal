import Header from "@/componets/common/header/Header";
import Greeting from "@/componets/home/greeting/Greeting";
import Individuals from "@/componets/home/individuals/Individuals";
import { useRef, useState } from "react";
import styled from "styled-components";
import MenuModal from "@/componets/common/modals/menuModal/MenuModal";
import Footer from "@/componets/common/footer/Footer";
import HeadCommon from "@/componets/head/Head";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { internalSlice } from "@/store/reducers/internalSlice";
import { userSlice } from "@/store/reducers/userSlice";
import { useEffect } from "react";
import Link from "next/link";
import SoulsIntro from "@/componets/common/soulsIntro/SoulsIntro";
import localStorageHandler from "@/utils/local-storage-hendler";
import { StorageCellEnum } from "@/constants/common";
import { ILocalStorageData, IUserData } from "../../types/common.types";

export default function Home() {
  const topRef = useRef<HTMLHeadElement>(null);
  const { deleteFirstMessage } = internalSlice.actions;
  const { signin } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(deleteFirstMessage());
    let localData = localStorage.getItem(StorageCellEnum.USER);
    if (localData) {
      const parsedData: ILocalStorageData = JSON.parse(localData);
      dispatch(
        signin({
          id: parsedData.id,
          email: parsedData.email,
          name: parsedData.name!,
          phone: parsedData.phone!,
          nextPayment: parsedData.nextpayment as string,
          questionsAmount: parsedData.questionsamount,
          readAbout: parsedData.readabout,
          shareLink: !!parsedData.shareLink,
        })
      );
    }
  }, []);

  const liftToTop = () => {
    topRef?.current?.scrollIntoView();
  };

  const setQuestionHandler = (id: number) => {
    console.log("click on ", id);
  };
  return (
    <>
      <StyledBackground>
        {/* <StyledGradient /> */}
        <StyledMainContent>
          <Header topRef={topRef} />
          {/* <StyledLinkWrap></StyledLinkWrap> */}
          <Greeting setQuestionHandler={setQuestionHandler} />
          <Individuals />
          <Footer liftToTopHandler={liftToTop} />
        </StyledMainContent>
        <StyledBackgroundBlack />
      </StyledBackground>
    </>
  );
}

const StyledBackgroundBlack = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #111115;
  z-index: -10;
`;

const StyledLinkWrap = styled.div`
  width: 100%;
  background-color: lightgreen;
`;

const StyledGradient = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 600px;

  z-index: 1;
`;

const StyledBackground = styled.div`
  /* position: fixed; */
  position: relative;
  top: 0;
  width: 100%;
  min-height: 2790px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  /* background-color: #111115; */
  /* z-index: -30; */
  background-image: linear-gradient(
    115deg,
    rgba(88, 51, 239, 0.2) 0.5%,
    rgba(29, 29, 36, 0) 12%
  );
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
  max-width: 1642px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
