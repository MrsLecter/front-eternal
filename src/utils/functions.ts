import { SOULS_DATA } from "@/constants/souls-data";
import { ISoulsData } from "../../types/app-common.types";
import crypto from "crypto";
import soulsService from "@/api/souls-service";
import { TOKEN_LIFETIME_MINUTES } from "@/constants/common";
import localStorageHandler from "./local-storage-hendler";

export const getSoulsDataForId = (id: string): ISoulsData | undefined => {
  const soulsData = SOULS_DATA.find((soul) => soul.id === parseInt(id));
  return soulsData;
};

export const getRandomSoulId = (): number => {
  const maxId = SOULS_DATA.length;
  const minId = SOULS_DATA[0].id;
  const randomSoulsIdInRange = Math.floor(
    Math.random() * (maxId - minId) + minId
  );
  return randomSoulsIdInRange;
};

export function encrypt(text: string): string {
  const key = Buffer.alloc(32, 0);
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const encryptedText = encrypted.toString("hex");
  return encryptedText;
}

export const getNextPaymentDate = (): Date => {
  const oneMonth = 1;
  const date = new Date();
  const nextPaymentDate = new Date(date.setMonth(date.getMonth() + oneMonth));
  return nextPaymentDate;
};

export const isSubscriptionExpired = (nextPaymentDate: Date): boolean => {
  const currentDate = new Date();
  const nextDate = new Date(nextPaymentDate);
  const isSubscriptionExpired = currentDate.getTime() > nextDate.getTime();
  return isSubscriptionExpired;
};

export const getCapitalizeName = (name: string): string => {
  let capitalizedChars: string[] = [];

  for (let word of name.split(" ")) {
    capitalizedChars.push(word[0].toUpperCase() + word.substring(1));
  }
  const joinedName = capitalizedChars.join(" ");
  return joinedName;
};

export const getPrettyDate = (date: Date | string): string => {
  if (!date) return "";
  const arrDate = new Date(date).toDateString().split(" ");
  return `${arrDate[1]} ${arrDate[2]}, ${arrDate[3]}`;
};

export const sendMessageToChannel = async ({
  questionText,
  soulId,
}: {
  questionText: string;
  soulId: string;
}): Promise<void> => {
  try {
    await soulsService.sendQuestion({
      question: questionText,
      soulid: soulId,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getMessageArray = ({
  messages,
}: {
  messages: { [key: string]: string }[];
}): string[][] => {
  let arrResult = [];

  if (messages && messages.length > 0) {
    for (let message of messages) {
      arrResult.push(["soul", Object.values(message)[0]]);
      arrResult.push(["user", Object.keys(message)[0]]);
    }
  }

  return arrResult;
};

export const getConstructedMessage = ({
  sender,
  message,
}: {
  sender: "soul" | "user" | "soul intro" | "position";
  message: string;
}): string[] => {
  return [sender, message];
};

export const liftToTop = (): void => {
  const headerElem = document.getElementById("topHeader");
  if (!headerElem) {
    console.error("Error! Element with id 'tohHeader' not found!");
  }

  if (headerElem) {
    //bigfix
    setTimeout(function () {
      headerElem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
};

export const getExpiresTokenDate = (): Date => {
  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + TOKEN_LIFETIME_MINUTES);
  return currentDate;
};

export const isTokenExpired = (): boolean => {
  const currentDate = new Date();
  const tokenExpireDate = localStorageHandler.getTokenExpireDate();
  const isTokenExpired = tokenExpireDate ? tokenExpireDate < currentDate : true;
  return isTokenExpired;
};
