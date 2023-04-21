import styled from "styled-components";
import Image from "next/image";
import addIcon from "@icons/add-btn.svg";
import { useEffect, useState } from "react";

interface IAddIndividualBtn {
  clickHandle: (isOpen: boolean) => void;
  isModalOpen: boolean;
}

const AddIndividualBtn: React.FC<IAddIndividualBtn> = ({
  clickHandle,
  isModalOpen,
}) => {
  return (
    <StyledAddIndividualBtn onClick={() => clickHandle(!isModalOpen)}>
      <Image width={18} height={18} alt="add-individual.svg" src={addIcon} />
    </StyledAddIndividualBtn>
  );
};

const StyledAddIndividualBtn = styled.button`
  width: 78px;
  min-width: 78px;
  min-height: 78px;
  height: 78px;
  margin-left: 19px;
  margin-right: 16px;
  border: none;
  border-radius: 50%;
  background-image: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  z-index: 2;

  &:hover {
    background-image: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }

  @media (max-width: 375px) {
    min-width: 50.2px;
    width: 50.2px;
    min-height: 50.2px;
    height: 50.2px;
  }
`;

export default AddIndividualBtn;
