import styled from "styled-components";

import CheckmarkCircle from "./elements/CheckmarkCircle";
import PrimarySubmitBtn from "../common/buttons/PrimarySubmitBtn";
import { StyledProOfferBlock } from "./ProOfferBlock";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/constants/common";

const SubscribedBlock: React.FC = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push(APP_ROUTES.Home);
  };
  return (
    <StyledProOfferBlock>
      <CheckmarkCircle />
      <StyledMessage>
        <p>You have successfully subscribed!</p>
        <p>A receipt was sent to your email</p>
      </StyledMessage>

      <PrimarySubmitBtn
        label={"start chatting"}
        isHigh={false}
        clickHandler={goToHomePage}
      />
    </StyledProOfferBlock>
  );
};

const StyledMessage = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  p {
    letter-spacing: -0.01em;
    text-align: center;
    color: white;
  }

  p:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
  }

  p:nth-child(2) {
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    opacity: 0.7;
  }

  @media (max-width: 870px) {
    margin-top: 16px;
    margin-bottom: 16px;

    p:first-child {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 16px;
    }

    p:nth-child(2) {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export default SubscribedBlock;
