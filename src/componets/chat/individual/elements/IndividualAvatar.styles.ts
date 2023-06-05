import styled from "styled-components";

export const StyledIndividualAvatar = styled.div`
  position: relative;
  width: 78px;
  height: 78px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  & > div {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    overflow: hidden;
  }

  & > button {
    display: none;
  }

  &:hover {
    button {
      display: block;
    }
  }

  @media (max-width: 375px) {
    width: 50.2px;
    height: 50.2px;

    & > button {
      display: block;
    }
  }
`;

export const StyledDeleteAvatar = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
  }
`;
