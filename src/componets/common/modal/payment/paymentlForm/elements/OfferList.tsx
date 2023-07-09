import { FC } from "react";
import styled from "styled-components";

const OfferList: FC = () => {
  return (
    <StyledOfferList>
      <li>Unlimited questions</li>
      <li>SMS texting</li>
      <li>Access to all characters</li>
    </StyledOfferList>
  );
};

const StyledOfferList = styled.ul`
  position: relative;
  margin-bottom: 8px;
  width: 100%;
  list-style-type: none;
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: white;

  li {
    position: relative;
    margin-left: 40px;
    margin-bottom: 16px;
  }

  li:before {
    content: "";
    position: absolute;
    display: block;
    left: -35px;
    top: 0px;
    width: 8px;
    height: 16px;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: rotate(45deg);
  }

  @media (max-width: 870px) {
    width: 184px;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;

    li {
      margin-bottom: 16px;
    }
  }
`;

export default OfferList;
