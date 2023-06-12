import styled from "styled-components";

export const StyledSectionLeft = styled.div`
  margin-top: 150px;
  width: 100%;
  max-width: 1640px;
  padding: 0px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1075px) {
    padding: 0px 16px;
  }

  @media (max-width: 860px) {
    margin-top: 54px;
    padding: 0px 12px;
  }
`;
