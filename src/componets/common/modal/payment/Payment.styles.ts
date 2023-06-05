import styled from "styled-components";

export const ModalsContainer = styled.div`
  width: 866px;
  height: 100%;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  @media (max-width: 870px) {
    padding-bottom: 51px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 343px;
    height: 100%;
    min-height: 665px;

    & > div:first-child {
      margin-bottom: 16px;
    }
  }
`;
