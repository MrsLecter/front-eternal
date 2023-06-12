import styled from "styled-components";

export const StyledMenuWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 870px) {
    margin-top: 95px;
  }
`;

export const StyledMenu = styled.ul`
  width: 279px;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border-bottom: 2px solid #2f2535;
  z-index: 2;

  & > li a,
  & > li button {
    width: 100%;
    text-align: center;
    font-family: "Avenir Medium";
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: white;
    background-color: transparent;
  }

  & > li {
    margin-top: 32px;
  }

  & > li:first-child {
    margin-top: 0px;
  }

  & > li:last-child {
    margin-bottom: 32px;
  }

  & > li a:hover,
  & > li a:focus,
  & > li button:hover,
  & > li button:focus {
    color: ${({ theme }) => theme.color.pink};
  }

  & > li button {
    border: none;
    background-color: transparent;
  }

  @media (max-width: 870px) {
    & > li a,
    & > li button {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export const StyledSocialContainer = styled.div`
  margin-top: 20px;
  width: 279px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;

  & > div {
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 10px;
    }

    svg {
      fill: white;
      stroke: white;
    }

    a:hover,
    a:focus {
      svg {
        cursor: pointer;
        fill: ${({ theme }) => theme.color.pink};
        stroke: ${({ theme }) => theme.color.pink};
      }
    }
  }

  @media (max-width: 870px) {
    width: 129.11px;
    margin-top: 16px;

    & > div {
      a {
        padding: 6px;
      }

      svg {
        transform: scale(0.8);
      }
    }
  }
`;

export const StyledButtonsContainer = styled.div`
  margin-top: 10px;
  width: 343px;
  height: 99px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;

  @media (max-width: 870px) {
    margin-top: 20px;
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 42px;
  min-height: 42px;
  padding: 15px;
  margin-top: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
