import styled, { css } from "styled-components";

export const StyledHeader = styled.header<{
  isAuth: boolean;
  isSmall: boolean;
  zIndex: number;
}>`
  ${(props) =>
    !props.isSmall &&
    css`
      position: relative;
      padding: 32px 32px 0px 18px;
      width: 100%;
      height: 84px;
      min-height: 84px;
      max-width: 1640px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      z-index: ${props.zIndex};

      & > div:nth-child(2) {
        position: absolute;
        top: 34px;
        left: calc(50% - 105.72px);
        width: 211.44px;
        height: 44px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      & > div:nth-child(3) {
        min-width: 298px;
        margin-right: -2px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }

      @media (max-width: 870px) {
        padding: 30px 18px 0px 16px;
        justify-content: flex-end;

        & > div:nth-child(1) {
          margin-top: -6px;
          margin-right: -4px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
        }

        & > div:nth-child(3) {
          display: none;
        }

        & > div:nth-child(2) {
          top: 34px;
          left: 14px;
          width: 144px;
          height: 30px;
        }
      }
    `}

  ${(props) =>
    props.isSmall &&
    css`
      position: relative;
      top: 0px;
      width: 100%;
      max-width: 1640px;
      height: 84px;
      min-height: 84px;
      padding: 32px 32px 0px 16px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      z-index: 102;

      & > div:first-child {
        position: absolute;
        top: 33px;
        left: calc(50% - 105.72px);
        width: 211.44px;
        height: 44px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      & > div:last-child {
        position: absolute;
        top: 24px;
        right: 24px;
      }

      @media (max-width: 870px) {
        width: 100%;
        justify-content: space-between;
        padding: 16px 33px;

        & > div:first-child {
          top: 33px;
          left: 16px;
          width: 144px;
          height: 30px;
        }

        & > div:last-child {
          top: 24px;
          right: 16px;
        }
      }
    `}
`;

export const StyledTextWrapper = styled.div`
  width: 53px;
  margin-right: 52px;

  @media (max-width: 870px) {
    display: none;
  }
`;
