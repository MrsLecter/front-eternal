import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopupMenu = styled(Popup)`
  &-overlay {
    position: relative;
    background: rgba(0, 0, 0, 0);
  }

  &-content {
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    background: transparent;

    .table-wrapper {
      padding: 32px 32px 12px 32px;
      position: absolute;
      bottom: 126px;
      left: 37px;
      width: 57.71vw;
      height: 52.02vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(25, 26, 31, 0.8);
      backdrop-filter: blur(32px);
      border-radius: 32px;
    }
  }
`;
