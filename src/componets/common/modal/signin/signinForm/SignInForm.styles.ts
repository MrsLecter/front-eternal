import styled from "styled-components";

export const StyledLink = styled.div`
  width: 100%;
  margin: 32px 0px;

  button {
    width: 100%;
    font-family: "Avenir Regular";
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.01em;
    text-align: left;
    background-color: transparent;
    border: none;
    color: #ffffff;
    opacity: 0.7;
  }

  button:hover {
    opacity: 1;
  }

  @media (max-width: 870px) {
    margin-top: 21px;
    margin-bottom: 24px;

    button {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
