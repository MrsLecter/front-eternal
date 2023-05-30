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
  max-width: 1400px;
  margin-top: 32px;
  margin-bottom: 0px;
  padding: 2px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  overflow-y: auto;

  /* @media (max-width: 1075px) {
    grid-template-columns: repeat(auto-fit, minmax(162px, 1fr));
  } */

  @media (max-width: 860px) {
    margin-top: 26px;
    margin-bottom: 58px;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(162px, 1fr));
  }
`;

export default IndividualsContainer;
