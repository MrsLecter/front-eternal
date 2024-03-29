import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    expires: string;
    token_id: string;
    user: {
      email: string;
      image: string;
      name: string;
    };
  }
}
