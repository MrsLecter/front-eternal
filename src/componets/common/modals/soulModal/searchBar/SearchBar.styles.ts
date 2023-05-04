import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    font-family: "Avenir Extra-bold";
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.color.white};
  }

  & > input {
    position: relative;
    padding: 0px 40px 0px 24px;
    width: 345px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: "Arquitecta Bold";
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    background-color: #060608;
    border: 1px solid #2f2535;
    border-radius: 16px;
    color: white;
  }

  & > input:focus {
    color: white;
    text-transform: none;
  }

  & > button {
    position: absolute;
    top: 36px;
    right: 40px;
    width: 25px;
    height: 40px;
    background-color: #060608;
    border: none;
  }
`;
