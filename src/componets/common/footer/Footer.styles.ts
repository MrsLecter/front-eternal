import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: calc(100% - 64px);
  max-width: 1640px;
  height: 140px;
  min-height: 140px;
  margin: 150.84px 32px 32px 32px;
  padding: 0px 48px;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blured};

  & > div:first-child {
    width: 211.44px;
  }

  @media (max-width: 800px) {
    width: calc(100% - 32px);
    height: 222px;
    min-height: 222px;
    margin: 0px 16px 16px 16px;
    padding: 32px;
    flex-direction: column;
    justify-content: flex-start;

    & > div:first-child {
      margin-top: 0px;
      margin-bottom: 0px;
      width: 211.44px;
      height: 44px;
    }

    div:nth-child(2) {
      height: 18px;
      order: 3;
    }

    div:nth-child(3) {
      margin-top: 32px;
      margin-bottom: 32px;
      div {
        height: 32px;
      }
      order: 2;
    }
  }
`;

export const StyledSocial = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;

  div {
    margin-left: 16px;
    width: 112px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
