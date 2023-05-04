import { INDIVIDUALS_DATA } from "@/constants/greeting";
import { IIndividualsData } from "@/types/common.types";

export const getIndividualDataForId = (
  id: string
): IIndividualsData | undefined => {
  return INDIVIDUALS_DATA.find((individual) => individual.id === parseInt(id));
};

export const getRandomIndividualId = () => {
  const maxId = INDIVIDUALS_DATA.length;
  const minId = INDIVIDUALS_DATA[0].id;

  return Math.floor(Math.random() * (maxId - minId) + minId);
};
