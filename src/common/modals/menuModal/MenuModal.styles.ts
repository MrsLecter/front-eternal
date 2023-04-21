import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopupMenu = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(77px);
  }

  &-content {
    position: relative;
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    padding: 0;

    .menu-wrapper {
      width: 100%;
      height: calc(100% - 88px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .menu {
      margin-top: 30px;
      width: 279px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      list-style-type: none;
      border-bottom: 2px solid #2f2535;

      & > a {
        width: 100%;
        margin-bottom: 32px;
        text-align: center;
        font-family: "Avenir Medium";
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: -0.01em;
        color: white;
        background-color: transparent;
      }
    }

    .social {
      margin-top: 32px;
      width: 279px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & > div {
        width: 155.11px;
        height: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
