import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 34px;
  margin-bottom: -34px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  & > div:last-child {
    width: 210px;
  }

  @media (max-width: 870px) {
    margin-top: 24px;
    margin-bottom: -24px;

    & > div:last-child {
      width: 100%;
    }
  }
`;
