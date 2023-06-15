import styled from "styled-components";

export const StyledUserMessageContainer = styled.div`
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 0px;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;

  h5 {
    margin: 0px;
  }

  div {
    max-width: 100%;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.white};
    color: #0a0806;
  }

  @media (max-width: 1000px) {
    h5 {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.1em;
    }
  }
`;
