import styled from "styled-components";

export const StyledIndividualMessageBox = styled.div`
  position: relative;
  width: calc(100% - 55px);
  min-width: calc(100% - 55px);
  margin-right: 40px;
  margin-top: 24px;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  transform: rotateX(180deg);

  & > div:first-child {
    width: 60px;
    height: 60px;
    min-height: 60px;
    border-radius: 50%;
    margin-right: 16px;
  }

  button {
    padding: 15px;
    svg {
      stroke: white;
    }
  }

  button:hover {
    svg {
      stroke: ${({ theme }) => theme.color.pink};
    }
  }
`;

export const StyledIndividualMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: auto;
  position: relative;
  width: inherit;
  padding: 42px 115px 42px 48px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #e4e4e4;
  background: rgba(255, 255, 255, 0.1);

  & > div:last-child {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 39px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      width: 39px;
      height: 39px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;

      figure {
        width: 24px;
        height: 24px;
      }
    }

    button:focus {
      svg {
        stroke: ${({ theme }) => theme.color.pink};
      }
    }

    svg {
      width: 24px;
      height: 24px;
      stroke: white;
      cursor: pointer;
    }

    svg:hover {
      stroke: ${({ theme }) => theme.color.pink};
    }
  }

  @media (max-width: 1000px) {
    padding: 24px;
    h5 {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }
`;
