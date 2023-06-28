import styled from "styled-components";

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
