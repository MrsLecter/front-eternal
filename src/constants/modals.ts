import { APP_ROUTES } from "./common";

export const MENU_LINKS = [
  {
    label: "About us",
    link: "/",
  },
  {
    label: "Pricing",
    link: "/",
  },
  {
    label: "How it works",
    link: "/",
  },
  {
    label: "My account",
    link: APP_ROUTES.Details,
  },
];

export const ABOUT_TEXT =
  "All of the characters here are not real. Everything you see and hear is entirely generated by Artificial Intelligence machines. The opinions and beliefs expressed do not represent anyone. They are hallucinations of a bunch of 1s and 0s inside of a magic computer.";
export const ABOUT_TEXT_SECOND =
  "The creators of this platform have the best intentions with this project, and deeply admire each and every character on the site. You might even say they are our Heroes. In fact, you can say that.";

export enum SOCIAL_LINKS {
  Facebook = "https://www.facebook.com",
  Instagram = "https://www.instagram.com",
  Twitter = "https://twitter.com",
  Discord = "https://discord.com",
}
