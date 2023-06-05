import styled from "styled-components";

export const StyledUserMessageContainer = styled.div`
  margin-bottom: 24px;
  margin-left: 20px;
  margin-right: 0px;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  animation: messageAppeating 0.2s ease-in-out;

  @keyframes messageAppeating {
    from {
      transform: translateX(-100px) scale(0.2);
      opacity: 0.6;
    }
    to {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }

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
