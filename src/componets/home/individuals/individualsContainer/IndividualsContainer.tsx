import styled from "styled-components";

interface IIndividualsContainerProps {
  children: React.ReactNode;
}

const IndividualsContainer: React.FC<IIndividualsContainerProps> = ({
  children,
}) => {
  return <StyledIndividualsContainer>{children}</StyledIndividualsContainer>;
};

const StyledIndividualsContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 5.4vh;
  display: grid;
  column-gap: 1.8%;
  row-gap: 24px;
  grid-template-columns: auto auto auto auto auto;
  grid-auto-flow: row;
  overflow-y: auto;

  @media (max-width: 375px) {
    grid-template-columns: auto auto;
    column-gap: 16px;
    row-gap: 3px;
  }
`;

export default IndividualsContainer;
