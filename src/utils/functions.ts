import { INDIVIDUALS_DATA } from "@/constants/greeting";
import { IIndividualsData } from "../../types/app-common.types";
import crypto from "crypto";
import soulsService from "@/api/souls-service";

export const getSoulsDataForId = (id: string): IIndividualsData | undefined => {
  return INDIVIDUALS_DATA.find((individual) => individual.id === parseInt(id));
};

export const getRandomIndividualId = (): number => {
  const maxId = INDIVIDUALS_DATA.length;
  const minId = INDIVIDUALS_DATA[0].id;

  return Math.floor(Math.random() * (maxId - minId) + minId);
};

export function encrypt(text: string): string {
  const key = Buffer.alloc(32, 0);
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
}

export const setNextPayment = (): Date => {
  const oneMonth = 1;
  const date = new Date();
  return new Date(date.setMonth(date.getMonth() + oneMonth));
};

export const isSubscriptionExpired = (nextPaymentDate: Date): boolean => {
  const currentDate = new Date();
  const nextDate = new Date(nextPaymentDate);
  return currentDate.getTime() > nextDate.getTime();
};

export const getCapitalizeName = (name: string): string => {
  let capitalized: string[] = [];
  for (let word of name.split(" ")) {
    capitalized.push(word[0].toUpperCase() + word.substring(1));
  }
  return capitalized.join(" ");
};

export const getPrettyDate = (date: Date | string): string => {
  if (!date) return "";
  const arrDate = new Date(date).toDateString().split(" ");
  return `${arrDate[1]} ${arrDate[2]}, ${arrDate[3]}`;
};

export const sendMessageToDialog = async ({
  questionText,
  soulId,
}: {
  questionText: string;
  soulId: string;
}): Promise<void> => {
  try {
    const response = await soulsService.sendQuestion({
      question: questionText,
      soulid: soulId,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
