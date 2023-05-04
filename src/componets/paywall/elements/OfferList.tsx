import styled from "styled-components";

const OfferList: React.FC = () => {
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
    margin-left: 20px;
    margin-bottom: 16px;
  }

  li:before {
    content: "✓";
    position: absolute;
    top: 0px;
    left: -20px;
    width: 16px;
    height: 11px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 17.5px;

    li {
      margin-bottom: 17.5px;
    }
  }
`;

export default OfferList;
