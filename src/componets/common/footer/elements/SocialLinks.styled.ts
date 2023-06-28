import styled from "styled-components";

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

  a {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-image: ${({ theme }) => theme.backgroundColorGradient};
  }

  a:hover {
    background-image: ${({ theme }) => theme.backgroundColorGradientHovered};
  }
`;
