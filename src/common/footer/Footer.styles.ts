import styled from "styled-components";

export const StyledFooter = styled.div`
  width: calc(100% - 64px);
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
  background-color: ${({ theme }) => theme.color.blured};

  & > div:first-child {
    width: 211.44px;
  }

  @media (max-width: 375px) {
    width: calc(100% - 32px);
    height: 222px;
    min-height: 222px;
    margin: 14px 16px 16px 16px;
    flex-direction: column;
    justify-content: center;

    & > div:first-child {
      margin-bottom: 4px;
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

export const StyledCopyright = styled.div`
  font-family: "Avenir Regular";
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.white};
`;

export const StyledSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;

  p {
    font-family: "Arquitecta Bold";
    font-weight: 700;
    font-size: 11px;
    line-height: 12.11px;
    letter-spacing: 0.2em;
  }

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
